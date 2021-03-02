<template>
  <div class="location">
    <my-map></my-map>
  </div>
</template>

<script>
import MyMap from '@/components/common/map'
export default {
  name: 'Location',
  components: {
    MyMap
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="less" scoped>

</style>