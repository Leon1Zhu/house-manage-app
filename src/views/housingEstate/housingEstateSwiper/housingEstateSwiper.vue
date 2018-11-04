 <!--
  @author guochen
  @date 2018/10/17 上午11.30
  @desc 小区图片展示swiper
-->

<template>
  <div class="swiper-option">
    <!--<div class="back_button">-->
      <!--<svg class="icon" aria-hidden="true" @click="push('/index')">-->
        <!--<use xlink:href="#icon-fanhui"></use>-->
      <!--</svg>-->
    <!--</div>-->
    <swiper class="swiper-slides" :options="swiperOptionValue" ref="mySwiper" >
        <!-- slides -->
        <swiper-slide class="housingImg" v-for="item in weiperSildeList" :key="item.id">
          <img src="@/assets/guessLike.png">
          </swiper-slide>
    </swiper>
    <div class="total-pages">
      <div>
        <span>共{{sildeCount}}张</span>
      </div>
    </div>
  </div>
</template>

<script>
import "./housingEstateSwiper.scss";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "housing-estate-swiper",
  data() {
    return {
      swiperOptionValue: {
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets"
          //type: 'fraction',
          //type : 'progressbar',
          //type : 'custom',
        },
        loop: true
      },
      weiperSildeList: [
        {
          id: 1,
          imgUrl: '@/assets/guessLike.png'
        }
      ],
      sildeCount: 0
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  created() {
    this.sildeCount = this.weiperSildeList.length;
  },
  mounted() {},
  methods: {
    push(route) {
      this.$router.push({ path: route });
    }
  }
};
</script>
