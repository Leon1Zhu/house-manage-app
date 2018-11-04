 <!--
  @author guochen
  @date 2018/10/16 上午10.40
  @desc 住宅小区房型，行情介绍（第三张图）
-->
<template>
  <section id="index-content">
    <div class="house-content">
      <scroll class="wrapper"
              :pulldown="false"
              :pullUpLoad="false">
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
            <housing-estate-more @child-event="parentEvent"></housing-estate-more>
          </div>
          <!-- 免费专业接送看房 -->
          <div class="default-margin free-view-house">
            <car-appointment></car-appointment>
          </div>
          <!-- 户型介绍 -->
          <div class="default-margin house-type">
            <house-type></house-type>
          </div>
          <!-- 楼盘优势 -->
          <div class="default-margin">
            <housing-estate-advantage></housing-estate-advantage>
          </div>
          <!-- 楼盘动态 -->
          <div class="default-margin">
            <housing-estate-dynamic></housing-estate-dynamic>
          </div>
          <!-- 楼盘详情 -->
          <div class="default-margin">
            <housing-estate-detail></housing-estate-detail>
          </div>
          <!--周边配套-->
          <div class="default-margin">
            <housing-esate-map></housing-esate-map>
          </div>
          <!--猜你喜欢-->
          <div class="default-margin">
            <guess-like></guess-like>
          </div>
        </div>
      </scroll>
    </div>
    <div class="house-footer">
      <housing-estate-footer></housing-estate-footer>
    </div>
    <div>
    <!-- 弹出框 -->
    <call-modal v-if="showModal" @close="showModal = false">
    </call-modal>
    </div>
  </section>
</template>

<script>
import "./index.scss";
import scroll from "../../components/scroll/scroll";
import CallModal from "../../components/callModal/callModal";
import HousingEstateNnav from "./nav/nav";
import HousingEstateSwiper from "./housingEstateSwiper/housingEstateSwiper";
import HousingEstateName from "./housingEstateName/housingEstateName";
import HousingEstateMore from "./housingEstateMore/housingEstateMore";
import CarAppointment from "./carAppointment/carAppointment";
import HouseType from "./houseType/houseType";
import HousingEstateDynamic from "./housingEstateDynamic/housingEstateDynamic";
import HousingEstateAdvantage from "./housingEstateAdvantage/housingEstateAdvantage";
import HousingEstateDetail from "./housingEstateDetail/housingEstateDetail";
import housingEsateMap from "./housingEsateMap/housingEsateMap";
import guessLike from "../../components/guessLike/guessLike";
import indexApi from "../../api/indexPage";
import Footer from "./footer/footer";

export default {
  name: "HousingEstate",
  data() {
    return {
      index: 1,
      pagesize: 5,
      showModal: false
    };
  },
  components: {
    scroll: scroll,
    "housing-estate-nav": HousingEstateNnav,
    "housing-estate-swiper": HousingEstateSwiper,
    "housing-estate-name": HousingEstateName,
    "housing-estate-more": HousingEstateMore,
    "car-appointment": CarAppointment,
    "house-type": HouseType,
    "housing-estate-dynamic": HousingEstateDynamic,
    "housing-estate-advantage": HousingEstateAdvantage,
    "housing-estate-detail": HousingEstateDetail,
    "housing-estate-footer": Footer,
    "call-modal": CallModal,
    housingEsateMap,
    guessLike
  },
  created() {
    this.initGuessLikeData();
  },
  mounted() {},
  methods: {
    initGuessLikeData() {
      indexApi
        .getLikeHouse(this.index, this.pagesize)
        .then(response => {})
        .catch(() => {});
    },
    parentEvent: function(data) {
      console.log('333333333333333333333333333', data);
      this.showModal = data;
    }
  }
};
</script>
