<!--
  @author guochen
  @date 2018/10/21 上午15:00
  @desc 免费专业接送看房
-->
<template>
  <div class="house-type-info">
    <div class="house-type-title">
        <span class="name">户型介绍</span>
        <span class="temp-span"></span>
        <span class="view-all">全部户型</span>
    </div>
    <div>
      
      <swiper :options="swiperOptionValue" ref="qualitySwiper" >
      <!-- slides -->
      <swiper-slide>
        <div class="house-type-content">
        <div class="content-top"></div>
        <div class="content-bottom">
          <div class="room-type">
            <span>2室2厅2卫</span>
          </div>
          <div class="room-area">
            <span>建面103m2  朝向东西</span>
          </div>
          <div class="room-price">
            <span>约154万/套</span>
          </div>
          <div class="room-style">
            <button>全明格局</button>
          </div>
        </div>
      </div>
      </swiper-slide>
      <swiper-slide>
        <div class="house-type-content">
        <div class="content-top"></div>
        <div class="content-bottom">
          <div class="room-type">
            <span>2室2厅2卫</span>
          </div>
          <div class="room-area">
            <span>建面103m2  朝向东西</span>
          </div>
          <div class="room-price">
            <span>约154万/套</span>
          </div>
          <div class="room-style">
            <button>全明格局</button>
          </div>
        </div>
      </div>
      </swiper-slide>
      <swiper-slide>
        <div class="house-type-content">
        <div class="content-top"></div>
        <div class="content-bottom">
          <div class="room-type">
            <span>2室2厅2卫</span>
          </div>
          <div class="room-area">
            <span>建面103m2  朝向东西</span>
          </div>
          <div class="room-price">
            <span>约154万/套</span>
          </div>
          <div class="room-style">
            <button>全明格局</button>
          </div>
        </div>
      </div>
      </swiper-slide>




    </swiper>
    </div>
  </div>
</template>

<script>
import "./houseType.scss";
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  name: "house-type",
  data() {
    return {
      swiperOptionValue: {
        spaceBetween: 15,
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.qualitySwiper.swiper
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
