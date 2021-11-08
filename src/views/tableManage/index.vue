<template>
  <div class="table-manage">
    <h3>表格管理</h3>
    <el-table
      ref="multipleTable"
      stripe
      border
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="日期"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      show-overflow-tooltip>
    </el-table-column>
    
  </el-table>
  <el-button type="text" @click="openSelected">已选({{ multipleSelection.length }})</el-button>
  <p style="margin-top:10px;">
    <el-button type="primary" @click="sumbitData">提交数据</el-button>
  </p>
  <el-divider></el-divider>
  <el-table
    :data="tableData1"
    border
    style="width: 100%">
    <el-table-column
      type="index"
      label="序号"
      width="50">
    </el-table-column>
    <el-table-column
      label="姓名"
      width="180">
      <template slot-scope="scope">
        <el-button type="text" v-if="scope.row.id == '999'" @click="addTable">添加</el-button>
        <p v-else>{{ scope.row.name }}</p>
      </template>
    </el-table-column>
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
  <!-- 已选数据 -->
  <el-dialog title="已选数据" :visible.sync="dialogTableVisible">
    <el-table :data="selectedData">
      <el-table-column property="date" label="日期" width="150"></el-table-column>
      <el-table-column property="name" label="姓名" width="200"></el-table-column>
      <el-table-column property="address" label="地址"></el-table-column>
      <el-table-column
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleRemove(scope.row)" type="text" size="small">移除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogTableVisible = false">取 消</el-button>
      <el-button type="primary" @click="selectedConfirm">确 定</el-button>
    </div>
  </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'TableManage',
  data() {
    return {
      tableData: [{
          id: '001',
          date: '2016-05-03',
          name: '张梅',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: '002',
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: '003',
          date: '2016-05-04',
          name: '李青',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: '004',
          date: '2016-05-01',
          name: '牛小丽',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: '005',
          date: '2016-05-08',
          name: '张兰芳',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: '006',
          date: '2016-05-06',
          name: '石红杏',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: '007',
          date: '2016-05-07',
          name: '吴平安',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: [],
        selectedData: [],
        dialogTableVisible: false,
        tableData1: [
          {
            id: '999'
          }
        ]
    }
  },
  created() {
    
  },
  methods: {
    handleSelectionChange(val) {
      // 外头列表数据每重新渲染一次，走一次这个方法，所以multipleSelection的数据就是当前表格选中数据
      this.multipleSelection = val;
    },
    openSelected() {
      this.dialogTableVisible = true
      // 深拷贝数据渲染弹框中选中的数据，防止弹框点击取消的时候数据会跟着变
      this.selectedData = JSON.parse(JSON.stringify(this.multipleSelection));
    },
    handleRemove(data) {
      let _index = this.selectedData.findIndex(item => item.id == data.id)
      this.selectedData.splice(_index, 1)
    },
    // 已选弹框数据确认
    selectedConfirm() {
      if(this.selectedData.length) {
        this.selectedData.forEach(m => {
          this.$refs.multipleTable.clearSelection();
          this.tableData.forEach(item => {
            if(m.id == item.id) {
              this.toggleSelect([item])
            }
          })
        })
      }else{
        this.$refs.multipleTable.clearSelection();
      }
      this.dialogTableVisible = false
    },
    toggleSelect(rows){
      this.$nextTick(()=>{
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row, true);
        })
      })
    },
    // 数据提交
    sumbitData() {
      console.log('提交的数据', this.multipleSelection)
    },
    addTable() {
      this.tableData1.unshift({
        id: '001',
        date: '2016-05-08',
        name: '张兰芳',
        address: '上海市普陀区金沙江路 1518 弄'
      })
    },
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
</style>