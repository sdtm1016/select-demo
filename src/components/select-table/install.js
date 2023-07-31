// 组件全局注册
import Vue from 'vue'

import TQueryCondition from '../query-condition/src/index.vue'
import TSelectTable from '../select-table/src/index.vue'

// 组件库
const Components = [
  TSelectTable,
  TQueryCondition
]

// 注册全局组件
Components.map((com) => {
  Vue.component(com.name, com)
})

export default Vue
