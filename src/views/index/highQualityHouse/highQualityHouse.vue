 <!--
  @author zhuliang
  @date 2018/10/8 下午11:57
-->
<template>
  <div class="high-quality-house">
    <h1>好房推荐</h1>
    <swiper :options="swiperOptionValue" ref="qualitySwiper" >
      <!-- slides -->
      <swiper-slide>
        <img src="../../../assets/highQuality.png"/>
        <span class="quality-name">
          栖霞-南卧-近地铁
        </span>
        <span class="quality-info">
          栖霞|4室一厅|107m2|南
        </span>
        <span class="quality-price">
          120万
        </span>
      </swiper-slide>

      <swiper-slide>
        <img src="../../../assets/highQuality.png"/>
        <span class="quality-name">
          栖霞-南卧-近地铁
        </span>
        <span class="quality-info">
          栖霞|4室一厅|107m2|南
        </span>
        <span class="quality-price">
          1205万
        </span>
      </swiper-slide>

      <swiper-slide>
        <img src="../../../assets/highQuality.png"/>
        <span class="quality-name">
          栖霞-南卧-近地铁
        </span>
        <span class="quality-info">
          栖霞|4室一厅|107m2|南
        </span>
        <span class="quality-price">
          1204万
        </span>
      </swiper-slide>
      <swiper-slide>
        <img src="../../../assets/highQuality.png"/>
        <span class="quality-name">
          栖霞-南卧-近地铁
        </span>
        <span class="quality-info">
          栖霞|4室一厅|107m2|南
        </span>
        <span class="quality-price">
          1203万
        </span>
      </swiper-slide>

      <swiper-slide>
        <img src="../../../assets/highQuality.png"/>
        <span class="quality-name">
          栖霞-南卧-近地铁
        </span>
        <span class="quality-info">
          栖霞|4室一厅|107m2|南
        </span>
        <span class="quality-price">
          1202万
        </span>
      </swiper-slide>

      <swiper-slide>
        <img src="../../../assets/highQuality.png"/>
        <span class="quality-name">
          栖霞-南卧-近地铁
        </span>
        <span class="quality-info">
          栖霞|4室一厅|107m2|南
        </span>
        <span class="quality-price">
          1201万
        </span>
      </swiper-slide>


    </swiper>
  </div>
</template>

<script>
import './highQualityHouse.scss';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  name: 'high-quality-house',
  data() {
    return {
      swiperOptionValue: {
        slidesPerView: 3,
        spaceBetween: 15,
      }
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
  methods: {},
};
</script>
