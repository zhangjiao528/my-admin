<template>
<div class="formManage">
  <div class="main">
    <div class="form-left">
      <p>基础控件</p>
      <ul>
        <li v-for="item in controllerList" :key="item.id" @click="addFormItem(item)">{{ item.label }}</li>
      </ul>
    </div>
    <div class="form-middle">
      <el-form ref="form" label-position="top" :model="form" label-width="100px">
        <el-form-item :label="domain.label" v-for="(domain, index) in form.domains" :key="index" @click.native="formItemClick(domain, index)">
          <el-input v-model="domain.value" placeholder="请输入" v-if="domain.type == 1"></el-input>
          <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="domain.value" v-if="domain.type == 2">
          </el-input>
          <el-select v-model="domain.value" placeholder="请选择" style="width:100%;" v-if="domain.type == 3"></el-select>
          <el-date-picker v-model="domain.value" type="date" placeholder="选择日期" style="width:100%;" v-if="domain.type == 4">
          </el-date-picker>
          <el-date-picker v-model="domain.value" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" style="width:100%;" v-if="domain.type == 5">
          </el-date-picker>
          <i class="el-icon-circle-close" @click="removeItem(index)"></i>
        </el-form-item>
      </el-form>
    </div>
    <div class="form-right">
      <p>{{ formTitle }}</p>
      <el-form ref="form" label-position="top" :model="formData" label-width="100px">
        <el-form-item label="标题">
          <el-input v-model="formData.title" placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item label="提示文字">
          <el-input v-model="formData.placeholder" placeholder="提示文字"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
  <div class="footer">
    <el-button type="primary" @click="onSubmit">保存</el-button>
    <el-button>取消</el-button>
  </div>
</div>
</template>

<script>
export default {
  name: 'FormManage',
  data() {
    return {
      controllerList: [{
          id: 1,
          label: '单行输入框',
          type: 1
        },
        {
          id: 2,
          label: '多行输入框',
          type: 2
        },
        {
          id: 3,
          label: '单选框',
          type: 3
        },
        {
          id: 4,
          label: '日期',
          type: 4
        },
        {
          id: 5,
          label: '日期区间',
          type: 5
        }
      ],
      form: {
        domains: [{
          value: '',
          label: '单行输入框',
          type: 1,
          formData: {}
        }],
      },
      formTitle: '',
      curIndex: 0
    }
  },
  computed: {
    formData() {
      return this.form.domains[this.curIndex] ? this.form.domains[this.curIndex].formData : {}
    }
  },
  methods: {
    addFormItem(data) {
      this.form.domains.push({
        value: '',
        label: data.label,
        type: data.type,
        formData: {}
      })
    },
    removeItem(index) {
      this.form.domains.splice(index, 1);
    },
    formItemClick(data, index) {
      this.formTitle = data.label;
      this.curIndex = index;
    },
    onSubmit() {
      console.log(111111, this.form.domains)
    }
  }
}
</script>

<style lang="less" scoped>
.formManage {
  display: flex;
  flex-direction: column;
  .main {
    display: flex;
    flex: 1;
    justify-content: space-between;
    overflow: auto;
    .form-left {
      width: 30%;

      ul {
        display: flex;
        flex-wrap: wrap;

        li {
          width: 150px;
          height: 40px;
          line-height: 40px;
          background-color: #23AAF2;
          color: #fff;
          margin: 10px;
          text-align: center;
          border-radius: 10px;
          cursor: pointer;
          display: inline-block;
        }
      }
    }

    .form-middle {
      width: 30%;

      .el-form-item {
        position: relative;

        i {
          position: absolute;
          top: -35px;
          right: 0;
          font-size: 16px;
        }
      }
    }

    .form-right {
      width: 30%;
    }
  }
  .footer{
    height: 80px;
    text-align: center;
    margin-top: 100px;
  }
}
</style>
