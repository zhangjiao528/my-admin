<template>
  <div class="map-container">
    <div id="rootPc" class="map-box"></div>
  </div>
</template>

<script>
import { MapInit } from "@/lib/bimmap";
import map7 from '@/assets/images/map_7.png'
export default {
  data() {
    return{
      bimMap: null,
    }
  },
  
  computed: {
    
  },
  mounted() {
    this.initMap()
  },
  methods:{
    initMap() {
      const bimMap = new MapInit({
        target: "rootPc",
        useControl: false
      },"ol",{
        baseUrl: null /** 加载库JS前缀url，可不传，默认"为内置CDN" */,
        plugin: [
          "gif" /** gif动画(ol/cesium/supermap) */,
          "diffuse" /** 扩散动画(cesium/supermap) */,
          "plotting" /** 动态标绘(supermap) */,
        ]
      })
      this.bimMap = bimMap
      let that = this
      bimMap.ready(function (Tmap) {
        // Tmap 为地图实例
        // 1、 地图视图初始化并设置视角（中心点坐标、投影系、最大最小层级等等）
        Tmap.addView({
          center: [108.962400, 34.252680],
          zoom: 8,
          minZoom: 5,
          maxZoom: 16,
          proj: "EPSG:4326",
        });
        // 2、底图添加，其它查看第四项（不添加底图将展示空白）
        Tmap.useTianDiTu({
          type: ["img","cia"],
          proj: "EPSG:4326",
          // key: "9984a09d91076858a766875acc7c9cd1",
          // url: "http://t{0-7}.tianditu.gov.cn/",
        });
        const iconText = Tmap.IconMarker({
          name: "marker1",
          iconUrl: map7,
          scale: [2, 1], // 设置图片宽高的缩放比例
          // 下面三个分别设置的 文本颜色、字体字号、文本的偏移量（默认是[0,0]）
          // fontColor: "#fff",
          fontStyle: "12px Microsoft YaHei",
          offset: [0, -5],
          padding: [5, 5, 5, 5],
          fontColor: "#ffffff",
          // background: { fill: "#ffffff", strokeColor: "#2e2eff", strokeWidth: 1 },
          _clickStyle: {
            iconUrl: map7,
          },
        });

        iconText.create({
          point: [104.46738317508961, 31.11864617640464],
          label: "自定义文本 1",
        });
      });
    },
  },
}
</script>
<style lang="less">
.map-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.map-box {
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
