<template>
  <div class="custom-component">
    <h3>自定义组件使用v-model</h3>
    <test-model v-model="testValue"></test-model>
    <p>绑定值：{{ testValue }}</p>

    <h3>防抖节流实现</h3>
    <el-input type="text" v-model="value"></el-input>
    <p>{{ value }}</p>
  </div>
</template>

<script>
import TestModel from '@/components/common/testModel'
import debounce from 'lodash.debounce'
export default {
  name: 'CustomComponent',
  components: { TestModel },
  data() {
    return {
      testValue: '',
      value: ''
    }
  },
  watch: {
    value(...args) {
      this.debouncedWatch(...args);
    },
  },
  created() {
    this.debouncedWatch = debounce((newValue) => {
      console.log('New value:', newValue);
    }, 500);
  },
  beforeUnmount() {
    this.debouncedWatch.cancel();
  },
}
</script>