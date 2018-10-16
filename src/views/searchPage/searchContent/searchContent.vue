 <!--
  @author zhuliang
  @date 2018/10/16 上午10:41
-->
<template>
  <div id="search-content" :class="{'border-class' : Object.keys(searchSelectObj).length > 0}">
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
        <li v-for="item in searchConfig" @click="showSelect(item.field)">
          <span class="search-info-name">{{item.name}}</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-arrowdown-copy"></use>
          </svg>
        </li>
      </ul>
    </div>
    <transition-page :show="show" :searchItem="searchItem" :searchSelectObj="searchSelectObj" @searchData="searchData"></transition-page>
    <ul class="seach-isselect-condition" >
      <li v-for="(item, index) in searchSelectObj">
        <mu-chip class="demo-chip" @delete="deleteSearchCondition(index)" delete>
          {{item.data}}
        </mu-chip>
      </li>
    </ul>
  </div>
</template>

<script>
import './searchContent.scss';
import transtion from './transitionPage/transitionPage';

export default {
  name: 'search-content',
  data() {
    return {
      area: '南京',
      show: false,
      searchItem: 'regin',
      searchSelectObj: {},
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
          name: '类型',
          field: 'building_type',
        },
        {
          name: '户型',
          field: 'house_type',
        },

        {
          name: '特色',
          field: 'characteristic',
        },
      ],
    };
  },
  components: {
    'transition-page': transtion,
  },
  created() {},
  mounted() {
  },
  methods: {
    showSelect(field) {
      if (this.searchItem === field ) {
        if (field === 'price') {

        }else {
          this.show = !this.show;
          this.searchItem = field;
        }
      } else {
        if (field === 'price') {

        } else {
          this.show = true;
          this.searchItem = field;
        }
      }
    },
    searchData(parindex, childIndex, data) {
      this.show = false;
      this.searchSelectObj[this.searchItem] = {
        index: parindex,
        childIndex: childIndex,
        data: data,
      }
      // TODO 刷新数据
      this.refreshData();
    },
    deleteSearchCondition(item) {
      let tempValue = JSON.parse(JSON.stringify(this.searchSelectObj));
      delete tempValue[item];
      this.searchSelectObj = tempValue;
      // TODO 刷新数据
      this.refreshData();
    },
    refreshData() {

    },
  },
};
</script>
