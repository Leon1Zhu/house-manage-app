 <!--
  @author zhuliang
  @date 2018/10/8 下午11:55
-->
<template>
  <section id="index-content">
    <house-header></house-header>
    <div class="introduce-content">
      <swiper-content></swiper-content>
      <nav-content></nav-content>
    </div>
  </section>
</template>

<script>
import './index.scss';
import header from './header/header';
import swiper from './swiperContent/swiperContent';
import nav from './nav/nav';

export default {
  name: 'index',
  data() {
    return {};
  },
  components: {
    'house-header': header,
    'swiper-content': swiper,
    'nav-content': nav,
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
