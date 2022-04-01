<template>
  <div class="file-upload">
    <div class="main">
      <h2><a href="http://www.helloweba.net/javascript/637.html">文件上传之暂停和断点续传和跨浏览器续传</a></h2>
      <uploader 
        ref="uploader"
        :options="options" 
        :file-status-text="fileStatusText"
        :autoStart="false"
        @file-added="onFileAdded"
        @file-progress="onFileProgress"
        @file-success="onFileSuccess"
        @file-error="onFileError"
        class="uploader">
        <uploader-unsupport></uploader-unsupport>
        <uploader-drop>
          <uploader-btn class="upfile"><i class="iconfont icon-upload"></i> 上传文件</uploader-btn>
          <uploader-btn class="updir" :directory="true"><i class="iconfont icon-dir"></i> 上传文件夹</uploader-btn>
        </uploader-drop>
        <uploader-list></uploader-list>
      </uploader>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import SparkMD5 from 'spark-md5';
export default {
  name: 'FileUpload',
  data() {
    return {
      options: {
        target: (file, chunk, isTest) => {
          console.log('target', file, chunk, isTest)
          if(isTest) {
             return "http://test.imydao.cn:13001/sso/fileserver/MinIOFile/uploadChecking"
          }else{
            return ""
            // return "http://test.imydao.cn:13001/sso/fileserver/MinIOFile/uploadChunk"
          }
        },
        testMethod: 'POST', // 设置校验文件是否上传过的请求方法
        uploadMethod: 'PUT', // 设置分片上传文件的请求方法
        // 上传需要的其他额外参数
        query: (file) => {
          console.log('query', file)
          return {
            "keys": file.uniqueIdentifier,
            "partNumber": file.chunkNumber

          }
        },
        // 修改或者自定义参数
        processParams(params) {
          console.log('params', params)
          return {
            "keys": params.keys,
            "partNumber": params.chunkNumber
          }
        },
        chunkSize: 1024 * 1024 * 5,  // 分片大小：2MB
        simultaneousUploads: 2, //并发上传数
        headers: (file, chunk, isTest) => {
          if(isTest) {
            return {
              'X-token': 'abcd123',
            }
          }else{
            return {
              'X-token': 'abcd123',
              'Content-Type': 'application/octet-stream'
            }
          }
        },
        maxChunkRetries: 2, //最大自动失败重试上传次数
        parseTimeRemaining: function (timeRemaining, parsedTimeRemaining) { //格式化时间
          return parsedTimeRemaining
              .replace(/\syears?/, '年')
              .replace(/\days?/, '天')
              .replace(/\shours?/, '小时')
              .replace(/\sminutes?/, '分钟')
              .replace(/\sseconds?/, '秒')
        },
        testChunks: true,   //开启服务端分片校验
        // 服务器分片校验函数
        checkChunkUploadedByResponse: (chunk, message) => {
          let obj = JSON.parse(message);
          // 格式化数据为: [0,1,3,4,5,6]
          let uploaded = obj.data.uploadNum.map(item => +item.substr(item.lastIndexOf("/") + 1))
          if (obj.data.type == 1) {
            this.statusTextMap.success = '秒传文件';
            return true;
          }
          return (uploaded || []).indexOf(chunk.offset + 1) >= 0
        },
      },
      statusTextMap: {
        success: '上传成功',
        error: '上传出错了',
        uploading: '上传中...',
        paused: '暂停',
        waiting: '等待中...',
        cmd5: '计算md5...'
      },
      fileStatusText: (status, response) => {
        console.log('上传状态', status, response)
        return this.statusTextMap[status];
      },
    }
  },
  created() {

  },
  methods: {
    // 文件上传之前进行校验
    onFileAdded(file) {
      console.log('上传文件前', file)
      // 计算MD5，下文会提到
      this.computeMD5(file);
    },
    /**
    * 计算md5，实现断点续传及秒传
    * @param file
    */
    computeMD5(file) {
      let blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice,
        chunkSize = 1024 * 1024 * 5,
        chunks = Math.ceil(file.size / chunkSize),
        currentChunk = 0,
        spark = new SparkMD5.ArrayBuffer(),
        fileReader = new FileReader();
      let time = new Date().getTime();
      file.cmd5 = true;
      let that = this
      fileReader.onload = (e) => {
          spark.append(e.target.result);  // Append array buffer
          file.partNumber = currentChunk
          currentChunk++;

          if (currentChunk < chunks) {
              //console.log(`第${currentChunk}分片解析完成, 开始第${currentChunk +1} / ${chunks}分片解析`);
              let percent = Math.floor(currentChunk / chunks * 100);
              file.cmd5progress = percent;
              loadNext();
          } else {
              console.log('finished loading');
              let md5 = spark.end();
              console.log(`MD5计算完成：${file.name} \nMD5：${md5} \n分片：${chunks} 大小:${file.size} 用时：${new Date().getTime() - time} ms`);
              spark.destroy(); //释放缓存
              file.uniqueIdentifier = md5; //将文件md5赋值给文件唯一标识
              file.cmd5 = false; //取消计算md5状态

          }
          that.uploadFile(file, currentChunk, fileReader)

      };
      fileReader.onerror = () => {
          console.warn('oops, something went wrong.');
          file.cancel();
      };
    
      let loadNext = () =>　{
          let start = currentChunk * chunkSize,
              end = ((start + chunkSize) >= file.size) ? file.size : start + chunkSize;
    
          fileReader.readAsArrayBuffer(blobSlice.call(file.file, start, end));
      };

      loadNext();
    },
    // 切片上传方法
    uploadFile(file, currentChunk, fileReader) {
      console.log('切片上传', file, currentChunk, fileReader)
      axios.put(`/api/public/temp/${file.uniqueIdentifier}/${currentChunk - 1}`, fileReader.result, {
        headers: {
          'Content-Type': 'application/octet-stream'
        }
      }).then(res => {
        if(res.status == 200) {
          file.resume(); //开始上传

        }
      })
    },
    // 文件上传进度的回调
    onFileProgress(rootFile, file, chunk) {
      console.log(rootFile)
      console.log(`上传中 ${file.name}，chunk：${chunk.startByte / 1024 / 1024} ~ ${chunk.endByte / 1024 / 1024}`)
    },
    // 文件上传成功的回调
    onFileSuccess(rootFile, file, response, chunk) {
      console.log(rootFile, file, response, chunk)
    },
    // 文件上上传失败的回调
    onFileError(rootFile, file, response, chunk) {
      console.log(rootFile, file, response, chunk)
      console.log('Error:', response)
    },
  }
}
</script>

<style scoped lang="less">
.main{
    max-width: 1000px;
    margin: 10px auto;
    
    background: #fff;
    padding: 10px;
    h2{
        padding: 30px 0;
        text-align: center;
        font-size: 20px;
    }
}
.uploader {
    width: 880px;
    padding: 15px;
    margin: 20px auto 0;
    font-size: 14px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .4);
    .uploader-btn {
        margin-right: 4px;
        color: #fff;
        padding: 6px 16px;
    }
    .upfile{
        border: 1px solid #409eff;
        background: #409eff;
    }
    .updir{
        border: 1px solid #67c23a;
        background: #67c23a;
    }
    .uploader-list {
        max-height: 440px;
        overflow: auto;
        overflow-x: hidden;
        overflow-y: auto;
        
        height: 356px;
        /deep/.iconfont {
            font-size: 18px;
            color: #409eff;
        }
    }
    
}
//手机等小屏幕手持设备。当设备宽度  在  320px和768px之间时,执行当前的css
@media only screen and (min-width: 320px) and (max-width: 768px) {
    .uploader {
        width: 98%;
        padding: 0;
        box-shadow: none;
    }
}
</style>