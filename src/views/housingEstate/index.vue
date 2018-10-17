 <!--
  @author guochen
  @date 2018/10/16 上午10.40
  @desc 住宅小区房型，行情介绍（第三张图）
-->
<template>
    <div>
      <!-- 住宅图片展示 -->
      <div>
        <img src="../../assets/guessLike.png" class="housingImg"/>
      </div>
      <!-- 住宅图片展示 -->
      <div class="housingType">
        <div class="buttonType">在售</div>
        <button>住宅</button>
      </div>
      <div>
        <housing-estate-nav></housing-estate-nav>
      </div>
    </div>
    
</template>

<script>
import './index.scss';
import HousingEstateNnav from './nav/nav';

export default {
  name: 'housingEstate',
  data() {
    return {
    };
  },
  components: {
    'housing-estate-nav': HousingEstateNnav
  },
  created() {},
  mounted() {},
  methods: {
  },
};

</script>