<template>
  <div class="left-tree workPoint">
    <Tree v-if="treeData.length>0" ref="tree" :data="treeData" :render="renderContent" :load-data="loadData" class="demo-tree-render" />
    <div v-else class="noData">
      <Button type="primary">
        <!-- 创建目录 -->
        创建工区
      </Button>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'MLeftTree',
  props: {
    treeData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      title: '创建工区',
      isClass: false,
      buttonProps: {
        type: 'text',
        size: 'small',
      },
    }
  },
  methods: {
    // 异步加载
    async loadData(item, callback) {
      
    },
    renderContent (h, { root, node, data }) {
      return h('span', {
        props: {
          title: data.title
        }
      }, [
          h('span',[
            h('p', {
              class: 'nameClass',
              attrs:{
                title: data.title,
              },
            }, data.title)
          ]),
          h('Dropdown', {
              props: {
                  trigger: 'hover',
                  placement: 'bottom-start',
                  transfer: true
              },
              style: {
                  float: 'right',
                  marginRight: '20px',
              },
              on: {
                  'on-click': (a) => {
                    this.$emit('dropdownItemClick', {a, data, node, root})
                  }
              }
          },[
              h('a', {}, [
                  h('Icon', {
                      props: {
                          type: 'ios-more',
                          size: 20,
                      },
                      style: {
                          color: '#999'
                      }
                  })
              ]),
              h('DropdownMenu', {
                slot: 'list',
              }, [
                  h('DropdownItem', {
                    props: {
                      name: 'addChild',
                    },
                  }, "添加子级"),
                  h('DropdownItem', {
                    props: {
                      name: 'edit',
                    },
                  }, "编辑"),
                  h('DropdownItem', {
                    props: {
                      name: 'remove',
                    },
                  }, "删除"),
              ])
          ]),
      ]);
    },
  }
}
</script>

<style lang="less" scoped>
.left-tree{
  width: 100%;
  height: calc(~'100% - 37px');
  display: flex;
  flex-direction: column;
}
.tree-title{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #dedede;
}
.tree-search{
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  span{
    color: #216bc4;
    font-size: 14px;
    cursor: pointer;
    margin-left: 11px;
  }
}
.tree-box{
  width: 100%;
  height: calc(~'100% - 53px');
  white-space: nowrap;
  padding-right: 12px;
  overflow-y: auto;
}
.noData{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
}
.open-fold-title{
  margin: 12px 0 6px;
  color: #216bc4;
  cursor: pointer;
}
</style>
<style lang="less">
.workPoint .ivu-tree{
  margin-right: 12px;
}
.workPoint .ivu-tree-title{
  width: 100%;
  >span{
    display: flex !important;
    align-items: center !important;
    width: 100%;
    >span{
      display: flex;
      align-items: center;
      width: calc(~"100% - 40px");
      .nameClass{
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>