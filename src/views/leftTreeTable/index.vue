<template>
  <div class="left-tree-table">
    <Split v-model="split1">
      <div slot="left" class="split-pane">
        <m-left-tree :treeData="treeData" @dropdownItemClick="dropdownItemClick"></m-left-tree>
      </div>
      <div slot="right" class="split-pane">
        Right Pane
      </div>
    </Split>
    <!-- 创建工区弹框 -->
    <Modal v-model="showModal" :mask-closable="false" :title="title" width="700" class-name="vertical-center-modal">
      <Form ref="formData" :model="formData" :rules="ruleValidate" :label-width="80" style="padding-right:35px">
        <FormItem :label="'工区名称'" prop="name"> <!-- 上级目录 -->
          <Input v-model="formData.name" :placeholder="'请输入工区名称'"/>
        </FormItem>
      </Form>
      <div slot="footer">
        <Button type="primary" @click="createSubmit()">确定</Button>
        <Button @click="showModal=false">取消</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import mLeftTree from './components/mLeftTree.vue';
export default {
  name: 'LeftTreeTable',
  components: {
    mLeftTree
  },
  data() {
    return {
      split1: 0.2,
      title: '创建工区',
      showModal: false,
      formData: {
        name: ''
      },
      ruleValidate: {
        name: [
          { type: 'string', max: 100, message: '工区名称不能超过100字符', trigger: 'change' }
        ],
      },
      treeData: [
        {
          id: '01',
          title: '工区1',
          expand: true
        },
        {
          id: '02',
          title: '工区2',
          expand: true,
          children: [
            {
              id: '02-1',
              title: '工区2-1',
              expand: true
            },
            {
              id: '02-2',
              title: '工区2-2',
              expand: true
            },
          ]
        },
      ]
    }
  },
  methods: {
    dropdownItemClick({a, data, node, root}) {
      debugger
    },
    createSubmit() {
      this.treeData.push({
        title: this.formData.name
      })
      this.showModal = false
    }
  }
}
</script>

<style lang="less" scoped>
.left-tree-table{
  width: 100%;
  height: 800px;
}
.split-pane{
  padding: 14px;
}
</style>