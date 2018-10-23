 <!--
  @author zhuliang
  @date 2018/10/8 下午11:55
-->
<template>
  <section id="index-content">
    <house-header></house-header>
    <div class="introduce-content">
      <scroll class="wrapper"
              :pulldown="true"
              :pullUpLoad="true"
              @pulldown="refreshData()"
              @pullup="loadData()">
        <ul class="content">
          <li class="like-content" >
            <swiper-content></swiper-content>
          </li>
          <li class="like-content" >
            <nav-content></nav-content>
          </li>
          <li class="like-content" >
            <highQualityHouse></highQualityHouse>
          </li>
          <li class="like-content" >
            <guess-like></guess-like>
          </li>
        </ul>
      </scroll>
    </div>
  </section>
</template>

<script>
import './index.scss';
import scroll  from '../../components/scroll/scroll';
import header from './header/header';
import swiper from './swiperContent/swiperContent';
import nav from './nav/nav';
import highQualityHouse from './highQualityHouse/highQualityHouse';
import guessLike from '../../components/guessLike/guessLike';
import indexApi from '../../api/indexPage';


export default {
  name: 'index',
  data() {
    return {
      index: 0,
      pagesize: 10,
    };
  },
  components: {
    'scroll': scroll,
    'house-header': header,
    'swiper-content': swiper,
    'nav-content': nav,
    highQualityHouse,
    'guess-like': guessLike,
  },
  created() {
    this.initGuessLikeData();
  },
  mounted() {
  },
  methods: {
    initGuessLikeData() {
      indexApi.getLikeHouse(this.index, this.pagesize).then((response) => {

      }).catch(() => {});
    },
    loadData() {
      alert(1111);
    },
    refreshData() {
    }
  },
};
</script>
