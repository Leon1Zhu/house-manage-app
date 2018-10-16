 <!--
  @author zhuliang
  @date 2018/10/8 下午11:57
-->
<template>
  <header class="house-header">
    <div class="house-location">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-dingwei"></use>
      </svg>
      <span>南京</span>
    </div>

    <h1>华云庭</h1>
    <svg class="icon" aria-hidden="true" @click="push('/search')">
      <use xlink:href="#icon-chaxun"></use>
    </svg>

  </header>
</template>

<script>
import './header.scss';

export default {
  name: 'house-header',
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    push(route) {
      this.$router.push({ path: route });
    }
  },
};
</script>
