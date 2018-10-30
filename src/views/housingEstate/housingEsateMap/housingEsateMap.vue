 <!--
  @author zhuliang
  @date 2018/10/30 10:17 AM
-->
<template>
<div class="housing-map-content">
  <h1>周边配套</h1>
  <ul class="pt-content">
    <li class="pt-li" :class="{'active' : item.active}" v-for="item in mapSearchList" @click="selectMapItem(item)">
      <span>{{item.name}}</span>
    </li>
  </ul>
  <baidu-map class="bm-view" ak="46yjCCVOEDlQuhme32vkfT2ttMy83pTk" :center="center" :zoom="zoom" :scroll-wheel-zoom="true" @ready="handler">
    <bm-view style="width: 100%; height:180px;"></bm-view>
    <bm-local-search :keyword="keyword" :nearby="nearby" :auto-viewport="true" ></bm-local-search>
    <bm-circle :center="nearby.center" :radius="nearby.radius"></bm-circle>
  </baidu-map>
</div>
</template>

<script>
import './housingEsateMap.scss';
import {BaiduMap, BmView, BmLocalSearch, BmCircle} from 'vue-baidu-map'
export default {
  name: 'housing-esate-map',
  data() {
    return {
      map: null,
      center: {lng: 0, lat: 0},
      zoom: 12,
      keyword: '地铁站',
      nearby: {
        center: {
          lng: 0,
          lat: 0
        },
        radius: 1000
      },
      mapSearchList: [
        {
          name: '交通',
          active: true,
        },
        {
          name: '商超',
          active: false,
        },
        {
          name: '教育',
          active: false,
        },
        {
          name: '餐饮',
          active: false,
        },
        {
          name: '医疗',
          active: false,
        },
      ]
    };
  },
  components: {
    BaiduMap,
    BmLocalSearch,
    BmView,
    BmCircle
  },
  created() {},
  mounted() {},
  methods: {
    handler ({BMap, map}) {
      var myGeo = new BMap.Geocoder();
      // 将地址解析结果显示在地图上，并调整地图视野
      myGeo.getPoint('南京市雨花台区软件大道180号', (point) => {
        console.log(point)
        if (point) {
          this.center.lng =  point.lng;
          this.nearby.center.lng = point.lng;
          this.center.lat = point.lat;
          this.nearby.center.lat = point.lat;
        }
      }, '南京');
      this.map = BMap;

    },
    selectMapItem(item) {
      this.mapSearchList.forEach((item) => {
        item.active = false;
      })
      item.active = true;
      this.keyword = item.name;
    }
  },
};
</script>
