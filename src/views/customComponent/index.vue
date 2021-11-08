<template>
  <div class="custom-component">
    <h3>自定义组件使用v-model</h3>
    <test-model v-model="testValue"></test-model>
    <p>绑定值：{{ testValue }}</p>
  </div>
</template>

<script>
import TestModel from '@/components/common/testModel'
export default {
  name: 'CustomComponent',
  components: { TestModel },
  data() {
    return {
      testValue: ''
    }
  },
  created() {
    
  }
}
</script>