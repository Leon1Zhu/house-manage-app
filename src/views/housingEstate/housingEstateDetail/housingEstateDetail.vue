<!--
  @desc 楼盘详情
-->
<template>
<div class="house-detail">
    <div class="house-detail-title">
        <span class="name">楼盘详情</span>
        <span class="temp-span"></span>
        <span class="view-all"></span>
    </div>
    <div class="house-detail-content">
        <ul>
            <li>物业类型：<strong>别墅</strong></li>
            <li>装修情况：<strong>毛坯</strong></li>
            <li>开盘时间：<strong>07-1</strong></li>
            <li>入住时间：<strong>07-1</strong></li>
        </ul>
    </div>
    <div class="house-deatail-more">
        <span>展开更多</span>
    </div>
</div>
</template>

<script>
import "./housingEstateDetail.scss";

export default {
  name: "house-detail",
  data() {
    return {}
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
