 <!--
  @author zhuliang
  @date 2018/10/16 上午10:41
-->
<template>
  <div id="search-content">
    <div class="search-top-img-content">
      <div class="search-input-content">
        <div class="area">
            南京
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-arrowdown-copy"></use>
          </svg>
        </div>
        <div class="search-input">
          <div class="mu-input ">
            <div class="mu-text-field mu-input-content">
            <input tabindex="0" class="mu-text-field-input">
            </div>
          </div>
        </div>
        <div class="search-icon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-chaxun"></use>
          </svg>
        </div>
      </div>
    </div>

    <div class="search-info-content">
      <ul class="search-info-list">
        <li v-for="item in searchConfig" @click="show = !show">
          <span class="search-info-name">{{item.name}}</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-arrowdown-copy"></use>
          </svg>
        </li>
      </ul>
    </div>
    <mu-expand-transition>
      <div v-show="show">
        <div class="mu-tsransition-box mu-primary-color mu-inverse" >mu-expand-transition</div>
      </div>
    </mu-expand-transition>
  </div>
</template>

<script>
import './searchContent.scss';

export default {
  name: 'search-content',
  data() {
    return {
      area: '南京',
      show: false,
      searchConfig: [
        {
          name: '区域',
          field: 'regin',
        },
        {
          name: '价格',
          field: 'price',
        },
        {
          name: '户型',
          field: 'house_type',
        },
        {
          name: '面积',
          field: 'area',
        },
        {
          name: '特色',
          field: 'characteristic',
        },
      ],
    };
  },
  components: {},
  created() {},
  mounted() {
  },
  methods: {},
};
</script>
