 <!--
  @author zhuliang
  @date 2018/10/16 上午11:05
-->
<template>
  <div id="search-list-index">
    <search-content></search-content>
    <search-list></search-list>
  </div>
</template>

<script>
import './index';
import searchContent from '../searchContent/searchContent';
import searchList from '../searchList/searchList';

export default {
  name: 'index',
  data() {
    return {};
  },
  components: {
    searchContent,
    searchList,
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
