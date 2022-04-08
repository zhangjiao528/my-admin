<template>
  <div class="content">
    <h3>select绑定的值为对象</h3>
    <el-select v-model="value" placeholder="请选择" @change="optionChange">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value-key="item.id"
        :value="item">
      </el-option>
    </el-select>
    <div class="el-upload">
      <input type="file" name="file" @change='selectFile' multiple="multiple"/>上传图片/文件
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      options: [{
          id: 1,
          name: '黄金糕',
          value: '选项1',
          label: '黄金糕'
        }, {
          id: 2,
          name: '双皮奶',
          value: '选项2',
          label: '双皮奶'
        }, {
          id: 3,
          name: '蚵仔煎',
          value: '选项3',
          label: '蚵仔煎'
        }, {
          id: 4,
          name: '龙须面',
          value: '选项4',
          label: '龙须面'
        }, {
          id: 5,
          name: '北京烤鸭',
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
    }
  },
  methods: {
    optionChange(data) {
      console.log('绑定的值为对象',data)
    },
    selectFile(e) {
      // 选择文件
      for (let i = 0; i < e.target.files.length; i++) {
        this.pushFile(e.target.files[i])
      }
    },
    
    pushFile(file) {
      console.log('文件', file)
      axios.put("/api/public/temp/md5/0", file, {
        headers: {
          'Content-Type': 'application/octet-stream'
        }
      }).then(res => {

      })
    }
  }

}
</script>
