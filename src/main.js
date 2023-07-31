
import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
//下拉表格搜索控件
import '@/components/select-table/install';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
