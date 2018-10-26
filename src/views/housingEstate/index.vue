 <!--
  @author guochen
  @date 2018/10/16 上午10.40
  @desc 住宅小区房型，行情介绍（第三张图）
-->
<template>
  <section id="index-content">
    <div>
      <scroll class="wrapper"
              :pulldown="true"
              :pullUpLoad="true">
        <div class="housing-estate-page">
          <!-- 住宅图片展示 -->
          <div>
            <housing-estate-swiper></housing-estate-swiper>
          </div>
          <!-- 选择按钮 -->
          <div class="default-margin button-nav">
            <housing-estate-nav></housing-estate-nav>
          </div>
          <!-- 楼盘信息 -->
          <div class="default-margin housing-estate-info">
            <housing-estate-name></housing-estate-name>
          </div>
          <!-- 更多楼盘 -->
          <div class="default-margin housing-estate-mores">
            <housing-estate-more></housing-estate-more>
          </div>
          <!-- 免费专业接送看房 -->
          <div class="default-margin free-view-house">
            <car-appointment></car-appointment>
          </div>
          <!-- 户型介绍 -->
          <div class="default-margin house-type">
            <house-type></house-type>
          </div>
          <div class="default-margin">
            <housing-estate-dynamic></housing-estate-dynamic>
          </div>
        </div>
      </scroll>
    </div>
  </section>
</template>

<script>
import "./index.scss";
import scroll from "../../components/scroll/scroll";
import HousingEstateNnav from "./nav/nav";
import HousingEstateSwiper from "./housingEstateSwiper/housingEstateSwiper";
import HousingEstateName from "./housingEstateName/housingEstateName";
import HousingEstateMore from "./housingEstateMore/housingEstateMore";
import CarAppointment from "./carAppointment/carAppointment";
import HouseType from "./houseType/houseType.vue";
import HousingEstateDynamic from "./housingEstateDynamic/housingEstateDynamic.vue"

export default {
  name: "HousingEstate",
  data() {
    return {};
  },
  components: {
    scroll: scroll,
    "housing-estate-nav": HousingEstateNnav,
    "housing-estate-swiper": HousingEstateSwiper,
    "housing-estate-name": HousingEstateName,
    "housing-estate-more": HousingEstateMore,
    "car-appointment": CarAppointment,
    "house-type": HouseType,
    "housing-estate-dynamic": HousingEstateDynamic
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>