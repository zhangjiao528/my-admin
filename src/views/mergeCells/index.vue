<template>
  <div class="merge-cells">
    <vxe-table
      border
      resizable
      :scroll-y="{enabled: false}"
      :span-method="mergeRowMethod"
      :data="tableData">
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="unit" title="作业单元"></vxe-column>
      <vxe-column field="source" title="危险源">
        <template #default="{ row }">
          <span v-if="!row.addFlag">{{ row.source }}</span>
          <vxe-button v-else status="primary" type="text">请选择</vxe-button>
        </template>
      </vxe-column>
      <vxe-column field="asset" title="评估方法">
        <template #default="{ row, rowIndex }">
          <span v-if="!row.addFlag">{{ row.asset }}</span>
          <vxe-input v-else v-model="row.asset" @blur="assetChange(row, rowIndex, row.asset)" size="mini"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="phone" title="联系方式"></vxe-column>
      <vxe-column field="desc" title="风险描述">
        <template #default="{ row }">
          <vxe-input v-model="row.desc" @change="descChange(row, row.desc)" size="mini"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column title="操作">
        <template #default="{ row, rowIndex }">
          <vxe-button status="primary" type="text" @click="addRow(row, rowIndex)">新增行</vxe-button>
          <vxe-button status="primary" type="text">删除</vxe-button>
        </template>
      </vxe-column>
    </vxe-table>
    <vxe-button status="primary" @click="submit">提交</vxe-button>
  </div>
</template>

<script>
export default {
  name: 'MergeCells',
  data() {
    return {
      tableData: [
        { id: 10001, unit: '001', source: '00101', asset: 'LEC',phone:'13129854526',desc: '风险情况描述1'},
        { id: 10002, unit: '001', source: '00102', asset: 'LS',phone:'13989754125',desc: '风险情况描述1'},
        { id: 10003, unit: '002', source: '00201', asset: '专家判断法',phone:'13009155695',desc: '风险情况描述2'},
        { id: 10004, unit: '002', source: '00201', asset: 'LEC',phone:'18760924563',desc: '风险情况描述2'},
        { id: 10005, unit: '002', source: '00201', asset: 'LS',phone:'15289234560',desc: '风险情况描述2'},
      ]
    }
  },
  methods: {
    // 新增行
    addRow(_row, _rowIndex) {
      this.tableData.splice(_rowIndex + 1, 0, {
        addFlag: true,
        unit: _row.unit,
        source: '',
        asset: '',
        desc: this.tableData[_rowIndex].desc
      })
    },
    assetChange(_row, _rowIndex, asset) {
      this.$set(this.tableData[_rowIndex], 'asset', asset)
    },
    descChange(rowData, desc) {
      this.tableData.forEach(item => {
        if(rowData.unit == item.unit) {
          this.$set(item, 'desc', desc)
        }
      })
    },
    // 通用行合并函数（将相同多列数据合并为一行）
    mergeRowMethod ({ row, _rowIndex, column, visibleData }) {
      const fields = ['unit', 'desc']
      const cellValue = row[column.property]
      if (cellValue && fields.includes(column.property)) {
        const prevRow = visibleData[_rowIndex - 1]
        let nextRow = visibleData[_rowIndex + 1]
        if (prevRow && prevRow[column.property] === cellValue) {
          return { rowspan: 0, colspan: 0 }
        } else {
          let countRowspan = 1
          while (nextRow && nextRow[column.property] === cellValue) {
            nextRow = visibleData[++countRowspan + _rowIndex]
          }
          if (countRowspan > 1) {
            return { rowspan: countRowspan, colspan: 1 }
          }
        }
      }
    },
    submit() {
      console.log(this.tableData)
    }
  }
}
</script>