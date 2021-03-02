<template>
  <div class="map-containere">
    <baidu-map
        :style="{width:map.width,height:map.height}"
        class="map"
        ak="HbjsavoF9jSHxsGb7X0VYy9sVwZinrCB"
        :zoom="map.zoom"
        :center="{lng: map.center.lng, lat: map.center.lat}"
        :mapStyle="map.mapStyle"
        :scroll-wheel-zoom="true"></baidu-map>
  </div>
</template>

<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
export default {
  name: 'Map',
  components: {
    BaiduMap
  },
  data() {
    return {
      map: {
        width: '100%',
        height: '800px',
        zoom: 6,
        center: {
          lng: '116.404',
          lat: '39.928'
        },
        mapStyle: {
          styleJson: [
            {
              "featureType": "all",
              "elementType": "labels.text.stroke",
              "stylers": {
                "color": "#000",
              }
            },
            {
              "featureType": "all",
              "elementType": "labels.text.fill",
              "stylers": {
                "color": "#7D7878",
              }
            },
            {
              "featureType": "land",
              "elementType": "geometry",
              "stylers": {
                "color": "#08304A"
              }
            },
            {
              "featureType": "building",
              "elementType": "geometry",
              "stylers": {
                "color": "#000"
              }
            },
            {
              "featureType": "scenicspots",
              "elementType": "geometry",
              "stylers": {
                "color": "#000"
              }
            },
            {
              "featureType": "shopping",
              "elementType": "geometry",
              "stylers": {
                "color": "#000"
              }
            },
            {
              "featureType": "highway",
              "elementType": "geometry",
              "stylers": {
                "color": "#000"
              }
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": {
                "color": "#000"
              }
            },
            {
              "featureType": "water",
              "elementType": "all",
              "stylers": {
                "color": "#000"
              }
            },
            {
              "featureType": "water",
              "elementType": "labels.text.stroke",
              "stylers": {
                "color": "#000000ff",
              }
            },
          ]
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>

