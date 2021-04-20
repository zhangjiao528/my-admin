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
  </div>
</template>

<script>
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
    }
  }

}
</script>
