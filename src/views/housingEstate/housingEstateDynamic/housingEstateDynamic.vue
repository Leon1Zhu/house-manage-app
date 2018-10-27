<template>
  <div class="house-dynamic">
    <div class="house-dynamic-title">
        <span class="name">楼盘动态(12)</span>
        <span class="temp-span"></span>
        <span class="view-all">全部动态</span>
    </div>
    <div class="house-dynamic-content">
      <div class="dynamic-title">
        <div class="title">
          <span>我是楼盘动态</span>
        </div>
        <div class="new">
          最新
        </div>
      </div>
      <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
      <p>2018年10月7日</p>
    </div>
    <div class="house-dynamic-content" >
      <div class="dynamic-title">
        <div class="title">
          <span>我是楼盘动态</span>
        </div>
        <div class="new" v-if="false">
          最新
        </div>
      </div>
      <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
      <p>2018年10月7日</p>
    </div>
  </div>
</template>

<script>
import "./housingEstateDynamic.scss";

export default {
  name: "house-dynamic",
  data() {
    return {
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
