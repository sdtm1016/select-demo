<!--
 * @Author: liuyi liuyi
 * @Date: 2023-07-28 21:26:34
 * @LastEditors: liuyi liuyi
 * @LastEditTime: 2023-07-28 21:44:01
 * @FilePath: \select-demo\src\components\SelectDemo.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-select v-model="value" placeholder="请选择" filterable>
    <el-option
      v-for="item in cities"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
      <span style="float: left">{{ item.label }}</span>
      <span style="float: right; color: #8492a6; font-size: 13px">{{
        item.value
      }}</span>
    </el-option>
  </el-select>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      cities: [
        {
          value: "Beijing",
          label: "北京",
        },
        {
          value: "Shanghai",
          label: "上海",
        },
        {
          value: "Nanjing",
          label: "南京",
        },
        {
          value: "Chengdu",
          label: "成都",
        },
        {
          value: "Shenzhen",
          label: "深圳",
        },
        {
          value: "Guangzhou",
          label: "广州",
        },
      ],
      value: "",
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang="scss">
.el-select-dropdown {
  min-width: 400px!important;
}
</style>