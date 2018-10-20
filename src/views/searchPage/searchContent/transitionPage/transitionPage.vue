 <!--
  @author zhuliang
  @date 2018/10/16 下午2:48
-->
<template>
  <div class="search-transition-page">
    <mu-expand-transition>
      <div v-show="show">
        <div class="mu-tsransition-box mu-primary-color mu-inverse" >
          <ul class="search-left" v-if="searchItem !== 'price'">
            <li v-for="(item,index) in searchObj" >
              <span :class="{'active' : index === parIndex}" @click="changeSearchInfo(index)">{{item.name}}</span>
            </li>
          </ul>
          <ul class="search-right" :class="{'priceBG' : searchItem === 'price'}">
            <li v-for="(item, index) in rightContent" >
              <span :class="{'active' : index === childIndex}" @click="searchData(index, item)">{{item}}</span>
            </li>

            <li v-if="searchItem === 'price'" class="price-selected-content">
              <span class="selected-price">10000-20000</span>
              <div class="price-silder">
                <mu-slider class="demo-slider" v-model="value1" :max="50000"></mu-slider>
                <mu-slider class="demo-slider" v-model="value2" :min="50001" :max="100000"></mu-slider>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </mu-expand-transition>
  </div>
</template>

<script>
import './transitionPage.scss';

export default {
  props: ['show', 'searchItem', 'searchSelectObj'],
  name: 'transition-page',
  data() {
    return {
      value1:0,
      value2:100000,
      parIndex: 0,
      childIndex: null,
      searchInfo: {
        price: [
          {
            content: [
              "不限",
              "10000-20000",
              "20000-40000",
              "40000-80000",
              ],
          },
        ],
        regin: [
          {
            name: '区域',
            content: [ "玄武区",
              "白下区",
              "秦淮区",
              "建邺区",
              "鼓楼区",
              "下关区",
              "栖霞区",
              "雨花台区",
              "浦口区",
              "江宁区",
              "六合区",
              "溧水县",
              "高淳县",
              "其他"],
          },
          {
            name: '区域',
            content: [ "玄武区",
              "白下区",
              "秦淮区",
              "建邺区",
              "鼓楼区",
              "下关区",
              "栖霞区",
              "雨花台区",
              "浦口区",
              "江宁区"],
          },
        ],
        building_type: [
          {
            name: '基础类型',
            content: [
              '住宅',
              '洋房',
              '别墅',
              '叠墅',
              '商铺',
              '写字楼',
              '公寓',
              '综合体',
            ],
          }
        ],
        house_type: [
          {
            name: '基础户型',
            content: [
              '一室一厅一卫',
              '二室一厅一卫',
              '三房一厅一卫',
              '三房两厅两卫',
              '四房两厅两卫',
            ],
          },
        ],
      },
    };
  },
  watch: {
    show(curV, oldV) {
      if (!curV) {
        this.parIndex = 0;
      }
    }
  },
  computed: {
    searchObj(){
        return this.searchInfo[this.searchItem];
    },
    rightContent() {
      this.childIndex = null;
      const searchItem = this.searchSelectObj[this.searchItem];
      if (searchItem) {
        this.parIndex = searchItem.index;
        this.childIndex = searchItem.childIndex;
      }
      return this.searchInfo[this.searchItem][this.parIndex].content;
    },
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    changeSearchInfo(index) {
      this.parIndex = index;
    },
    searchData(index, item){
      this.childIndex = index;
      this.$emit('searchData', this.parIndex, index, item)
    },
  },
};
</script>
