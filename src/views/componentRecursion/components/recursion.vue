<template>
  <div>
    <div class="list" v-for="(item, index) in list" :key="index">
      <p>{{ item.name }}</p>
      <recursion :list="item.children"></recursion>
    </div>
  </div>
</template>
<script>
export default {
  name: "recursion",
  props: {
    list: Array,
  },
};
</script>

<style scoped>
.list{
  text-align: center;
}
</style>