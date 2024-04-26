<template>
  <div class="table-tree">
    <h3>iview下拉树带搜索</h3>
    <div class="input-tree">
      <selectTree v-model="treeValue" :treeData="treeData"></selectTree>
    </div>
  </div>
</template>

<script>
import selectTree from 'iview-select-tree'
export default {
  name: 'TableTree',
  components: {
    selectTree
  },
  data() {
    return {
      treeValue: '',
      treeData: [
        {
          title: '中国',
          expand: true,
          disabled: true,
          value: '1',
          children: [
            {
              title: '福建',
              expand: true,
              disabled: true,
              value: '11',
              children: [
                  {
                      value: '111',
                      title: '宁德',
                      expand: true,
                      children: [
                          {
                              value: '111111',
                              title: '福安'
                          },
                          {
                              value: '2222222',
                              title: '寿宁'
                          },
                          {
                              value: '3333333',
                              title: '周宁'
                          }
                      ]
                  },
                  {
                      value: '112',
                      title: '厦门'
                  },
                  {
                      value: '1123',
                      title: '福建'
                  },
                  {
                      value: '1124',
                      title: '泉州'
                  },
                  {
                      value: '1125',
                      title: '莆田'
                  },
                  {
                      value: '1126',
                      title: '三明'
                  },
                  {
                      value: '1127',
                      title: '龙岩'
                  }
              ]
            },
            {
              title: '广东',
              value: '12',
              expand: true,
              disabled: true,
              children: [
                  {
                      value: '121',
                      title: '广州'
                  },
                  {
                      value: '122',
                      title: '深圳'
                  }
              ]
            }
          ]
        }
      ]
    }
  },
  created() {
    
  },
  methods: {
    
  }
}
</script>

<style lang="less" scoped>
.table-manage{
  padding: 20px;
  h3{
    margin-bottom: 20px;
  }
}
.input-tree{
  width: 300px;
  margin: 20px 0;
}
</style>