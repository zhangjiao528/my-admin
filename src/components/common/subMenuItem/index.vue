<template>
  <div class="item">
    <ul>
      <li v-for="item in list" :key="item.id">
        <p>{{ item.name }}</p>
        <div class="sub-menu-item" v-if="item.children && item.children.length">
          <sub-menu-item :list="item.children"></sub-menu-item>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'subMenuItem',
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {

    }
  },
  watch: {
    list(val) {
      debugger;
    }
  }
}
</script>

<style lang="less" scoped>

</style>