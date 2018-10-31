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
  <!--<baidu-map class="bm-view" ak="46yjCCVOEDlQuhme32vkfT2ttMy83pTk" :center="center" :zoom="zoom" :scroll-wheel-zoom="true" @ready="handler">-->
    <!--<bm-view style="width: 100%; height:180px;"></bm-view>-->
    <!--<bm-local-search :keyword="keyword" :nearby="nearby" :auto-viewport="true" ></bm-local-search>-->
    <!--<bm-circle :center="nearby.center" :radius="nearby.radius"></bm-circle>-->
  <!--</baidu-map>-->
  <div id="allmap"></div>
  <ul id="r-result">
    <div>
      <li class="result-li" v-for="(item, index) in searchResult" v-if="index <= 2">
        {{item.title}}
        <span class="result-ditance">距离{{Math.floor(map.getDistance(mapPoint, item.point))}}米</span>
      </li>
    </div>
    <div>
      <div class="showMore"  @click="showMore = true" v-if="!showMore">
        展开更多
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jiantouxia"></use>
        </svg>
      </div>
      <li class="result-li" v-for="(item, index) in searchResult" v-if="index > 2 && showMore">
        {{item.title}}
        <span class="result-ditance">距离{{Math.floor(map.getDistance(mapPoint, item.point))}}米</span>
      </li>
      <div class="showLess" @click="showMore = false" v-if="showMore">
        收起更多
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jiantoushang"></use>
        </svg>
      </div>
    </div>
  </ul>
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
      mapPoint: null,
      showMore: false,
      searchResult: [],
      mapSearchList: [
        {
          name: '交通',
          searchInfo: ['公交车站', '地铁站'],
          active: true,
        },
        {
          name: '商超',
          searchInfo: ['商店','超市'],
          active: false,
        },
        {
          name: '教育',
          searchInfo: ['学校','幼儿园', '小学', '高中', '大学'],
          active: false,
        },
        {
          name: '餐饮',
          searchInfo: '餐饮',
          active: false,
        },
        {
          name: '医疗',
          searchInfo: '医疗',
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
  mounted() {
    this.initMap();
  },
  methods: {
    initMap () {
      var myGeo = new BMap.Geocoder();
      // 将地址解析结果显示在地图上，并调整地图视野
      myGeo.getPoint('南京市雨花台区软件大道180号', (point) => {
        if (point) {
          this.map = new BMap.Map("allmap");
          this.mapPoint = new BMap.Point(point.lng, point.lat);
          this.map.enableScrollWheelZoom();
          this. map.centerAndZoom(this.mapPoint,11);
          this.searchInfoInMap(this.mapSearchList[0].searchInfo);
        }
      }, '南京');
   },
    searchInfoInMap(item) {
      this.map.clearOverlays();
      const circle = new BMap.Circle(this.mapPoint,1000,{fillColor:"blue", strokeWeight: 1 ,fillOpacity: 0.3, strokeOpacity: 0.3});
      this.map.addOverlay(circle);
      const local =  new BMap.LocalSearch(this.map, {renderOptions: {map: this.map, selectFirstResult: false,},pageCapacity: 100 ,onSearchComplete: (result) => {
        this.paintSearchResult(result, item);
      }});
      local.searchNearby(item, this.mapPoint, 1000);

    },
    paintSearchResult (result, searchName) {
      this.searchResult = [];
      console.log(result)
      if (result.length) {
        result.forEach((item) => {
          if (searchName.join(',').indexOf('公交车站') > -1) {
            item.Ar.forEach((arItem) => {
              arItem.title = `${arItem.title}-${item.keyword}`;
            })
          }
          this.searchResult = this.searchResult.concat(item.Ar)
        })
      } else {
        this.searchResult = result.Ar;
      }
      console.log(this.searchResult)
    },
    selectMapItem(item) {
      this.mapSearchList.forEach((item) => {
        item.active = false;
      })
      item.active = true;
      this.searchInfoInMap(item.searchInfo);
    }
  },
};
</script>
