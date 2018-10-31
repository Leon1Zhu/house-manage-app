 <!--
  @author guochen
  @date 2018/10/18 上午11:20
  @desc 小区名称及基本信息
-->
<template>
  <div class="housing-estate-name">
    <span>{{housingEstateName.name}}</span>
    <h4 class="house-price">
      <span>住宅：</span>
      <strong>{{housingEstateName.price}}</strong> 
      <span class="price-date">&nbsp;&nbsp;{{housingEstateName.priceDate}}</span> 
    </h4>
    <h4 class="house-open-sale">
      <span>开盘：</span>
      <span class="sale-time">{{housingEstateName.saleDate}}</span>
    </h4>
    <h4 class="house-address">
      <span>地址：</span>
      <span class="address-detail">{{housingEstateName.address}}</span>
      <span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-arrow-right-copy-copy-copy"></use>
        </svg>
      </span>
    </h4>
  </div>
</template>
<script>
import "./housingEstateName.scss";

export default {
  name: "housing-estate-name",
  data() {
    return {
      housingEstateName: {
        name: '金地格林line',
        price: '1200元/平',
        priceDate: '5天前更新',
        saleDate: '2018年09月20日',
        address: 'xxxxxxxxxxxxxxxxxxxxx',
      }
    };
  },
  computed: {
  },
  components: {

  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
