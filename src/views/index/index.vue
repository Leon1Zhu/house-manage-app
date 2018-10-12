 <!--
  @author zhuliang
  @date 2018/10/8 下午11:55
-->
<template>
  <section id="index-content">
    <house-header></house-header>
    <div class="introduce-content">
      <swiper-content></swiper-content>
    </div>
  </section>
</template>

<script>
import './index.scss';
import header from './header/header';
import swiper from './swiperContent/swiperContent';

export default {
  name: 'index',
  data() {
    return {};
  },
  components: {
    'house-header': header,
    'swiper-content': swiper,
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
