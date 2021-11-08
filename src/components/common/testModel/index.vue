<template>
  <div class="test-model">
    <el-input v-model="textValue" placeholder="请输入" style="width: 200px" @change="inputChange"></el-input>
  </div>
</template>

<script>
export default {
  name: 'TestModel',
  model: {
    prop: 'textValue',
    event: 'input'
  },
  props: {
    textValue: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      value: ''
    }
  },
  methods: {
    inputChange(data) {
      this.$emit('input', data)
    },
  }
}
</script>

<style lang="less" scoped>
.test-model{
  margin: 20px;
}
</style>

