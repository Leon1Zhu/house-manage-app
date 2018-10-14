 <!--
  @author zhuliang
  @date 2018/10/8 下午11:58
-->
<template>
  <div class="guess-like">
    <h1>猜你喜欢</h1>
    <scroll class="wrapper"
            :pulldown="pulldown"
            @pulldown="loadData">
      <ul class="content">
        <li class="like-content">
          <img src="../../assets/guessLike.png"/>
          <div class="text-content">
            <div class="name-price">
              <span class="name"> 金地格林line</span>
              <span class="temp-span"></span>
              <span class="price">12000元/m²</span>
            </div>
            <span class="region">南京周边-句容</span>
            <span class="house-type">热门户型 3房2厅1卫;4房2厅2卫</span>
          </div>
        </li>
      </ul>
      <div class="loading-wrapper"></div>
    </scroll>
  </div>
</template>

<script>
import './guessLike.scss';
import scroll  from '../scroll/scroll';

export default {
  name: 'guess-like',
  data() {
    return {
      pulldown: true,
    };
  },
  components: {
    'scroll': scroll,
  },
  created() {},
  mounted() {
  },
  methods: {
    loadData() {
      console.log(1111)
    },
  },
};
</script>
