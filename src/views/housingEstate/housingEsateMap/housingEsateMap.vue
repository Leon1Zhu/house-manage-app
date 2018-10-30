 <!--
  @author zhuliang
  @date 2018/10/30 10:17 AM
-->
<template>
<div class="housing-map-content">
  <h1>周边配套</h1>
  <ul class="pt-content">
    <li class="pt-li">交通</li>
    <li class="pt-li">商超</li>
    <li class="pt-li">教育</li>
    <li class="pt-li">餐饮</li>
    <li class="pt-li">医疗</li>
  </ul>
  <baidu-map class="bm-view" ak="46yjCCVOEDlQuhme32vkfT2ttMy83pTk">
  </baidu-map>
</div>
</template>

<script>
import './housingEsateMap.scss';
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'

export default {
  name: 'housing-esate-map',
  data() {
    return {};
  },
  components: {
    BaiduMap,
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
