<template>
  <div class="house-type-info">
    <div class="house-type-title">
        <span class="name">楼盘动态</span>
        <span class="temp-span"></span>
        <span class="view-all">全部动态</span>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
import "./housingEstateDynamic.scss";
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
