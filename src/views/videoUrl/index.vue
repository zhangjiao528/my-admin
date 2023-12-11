<template>
  <div class="video-url">
    <h2>获取视频第一帧截图</h2>
    <div  style="height: 1px; overflow:hidden; opacity: 0">
      <div id="videoArea"></div>
      <img :src="imgSrc" />
      <div>
        <div @click="cutPicture">截图 {{ videoW }}</div>
      </div>
      <canvas
        id="myCanvas"
        :width="videoW + 'px'"
        :height="videoH + 'px'"
      ></canvas>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoUrl',
  data() {
    return {
      videoW: '195px',
      videoH: '117px'
    }
  },
  methods: {
    
  }
}
</script>

<style lang="less" scoped>
#fileBtn{
  display: block;
}
</style>