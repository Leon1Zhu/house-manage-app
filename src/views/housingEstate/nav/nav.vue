 <!--
  @author guochen
  @date 2018/10/16 上午10.40
  @desc 住宅小区房型，行情介绍（第三张图）
-->

<template>
  <div class="housing-estate-nav">
    <ul class="nav-ul">
      <li class="nav-li">

      </li>
      <li class="nav-li">

      </li>
    </ul>
  </div>
</template>

<script>
import './nav.scss';

export default {
  name: 'housing-estate-nav',
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
