<template>
  <div style="margin:20px 20px;">
    <t-select-table
      :table="table"
      :columns="table.columns"
      :max-height="400"
      :keywords="{label:'name',value:'id'}"
      @radioChange="radioChange"
      :filterMethod= "customFilterMethod"
    ></t-select-table>
  </div>
</template>

<script>
import PinyinMatch from 'pinyin-match'
export default {
  name:"TselectRadio",
  desc:"必填校验不确定如何处理，编辑赋值不确定如何处理",
  data() {
    return {
      originTableData:[
          { id: 1, code: 1, name: '物料名称1', spec: '物料规格1', unitName: '吨' },
          { id: 2, code: 2, name: '物料名称2', spec: '物料规格2', unitName: '吨' },
          { id: 3, code: 3, name: '物料名称3', spec: '物料规格3', unitName: '吨' },
          { id: 4, code: 4, name: '物料名称4', spec: '物料规格4', unitName: '吨' },
          { id: 5, code: 5, name: '物料名称5', spec: '物料规格5', unitName: '吨' },
          { id: 6, code: 6, name: '物料名称6', spec: '物料规格6', unitName: '吨' },
          { id: 7, code: 7, name: '物料名称7', spec: '物料规格7', unitName: '吨' },
          { id: 8, code: 8, name: '物料名称8', spec: '物料规格8', unitName: '吨' },
          { id: 9, code: 9, name: '物料名称9', spec: '物料规格9', unitName: '吨' },
          { id: 10, code: 10, name: '物料名称10', spec: '物料规格10', unitName: '吨' },
          { id: 11, code: 11, name: '物料名称11', spec: '物料规格11', unitName: '吨' },
          { id: 12, code: 12, name: '物料名称12', spec: '物料规格12', unitName: '吨' },
          { id: 13, code: 13, name: '物料名称13', spec: '物料规格13', unitName: '吨' }
        ],
      table: {
        data: [
        ],
        columns: [
          { label: '物料编号', width: '100px', prop: 'code' },
          { label: '物料名称', width: '149px', prop: 'name' },
          { label: '规格', width: '149px', prop: 'spec' },
          { label: '单位', width: '110px', prop: 'unitName' },
        ]
      }
    }
  },
  created() {
    this.table.data = JSON.parse(JSON.stringify(this.originTableData));
  },
  methods: {
    // 单选
    radioChange(row) {
      console.log('传给后台的值', row)
    },
    
    /**
     * 点击无法输入
     * 
     * @param {*} val 
     */
    customFilterMethod(val){
      console.log("customFilterMethod,val:",val)
      const tableData = JSON.parse(JSON.stringify(this.originTableData))
      if (tableData && tableData.length > 0) {
        this.table.data = tableData.filter((item) => {
          if (item['name'].includes(val)) {
            return item

          }else if(PinyinMatch.match(item['name'], val)) {
            return item

          }
        })
        console.log('this.table.data',this.table.data)
      }
    },
  }
}
</script>

<style>
</style>
