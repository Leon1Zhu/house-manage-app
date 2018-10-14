 <!--
  @author zhuliang
  @date 2018/10/8 下午11:58
-->
<template>
  <div class="house-nav">
    <ul class="firse-nav">
      <li class="nav-li" v-for="item in firstNav">
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="'#'+item.icon"></use>
        </svg>
        <span class="nav-name">{{item.name}}</span>
      </li>
    </ul>
    <ul class="second-nav">
      <li class="nav-li" v-for="item in sedondNav">
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="'#'+item.icon"></use>
        </svg>
        <span class="nav-name">{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import './nav.scss';

export default {
  name: 'nav-content',
  data() {
    return {
      firstNav: [
        {
          name: '住宅',
          icon: 'icon-zhuzhai',
          link: '',
        },
        {
          name: '商铺',
          icon: 'icon-shangpu',
          link: '',
        },
        {
          name: '公寓',
          icon: 'icon-gongyu',
          link: '',
        },
      ],
      sedondNav: [
        {
          name: '写字楼',
          icon: 'icon-xiezilou',
          link: '',
        },
        {
          name: '优质房源',
          icon: 'icon-youzhifangyuan',
          link: '',
        },
      ],
    };
  },
  components: {},
  created() {


  },
  mounted() {},
  methods: {},
};
</script>
