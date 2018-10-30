 <!--
  @author zhuliang
  @date 2018/10/30 10:17 AM
-->
<template>
<div class="housing-map-content">
  <h1>周边配套</h1>
  <ul class="pt-content">
    <li class="pt-li" @click="change">交通</li>
    <li class="pt-li">商超</li>
    <li class="pt-li">教育</li>
    <li class="pt-li">餐饮</li>
    <li class="pt-li">医疗</li>
  </ul>
  <baidu-map class="bm-view" ak="46yjCCVOEDlQuhme32vkfT2ttMy83pTk" :center="center" :zoom="zoom" @ready="handler">
  </baidu-map>
</div>
</template>

<script>
import './housingEsateMap.scss';
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'

export default {
  name: 'housing-esate-map',
  data() {
    return {
      center: {lng: 0, lat: 0},
      zoom: 3
    };
  },
  components: {
    BaiduMap,
  },
  created() {},
  mounted() {},
  methods: {
    handler ({BMap, map}) {
      console.log(BMap, map)
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 15
    }
  },
};
</script>
