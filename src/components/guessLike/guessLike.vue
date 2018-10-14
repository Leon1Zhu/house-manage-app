 <!--
  @author zhuliang
  @date 2018/10/8 下午11:58
-->
<template>
  <div class="guess-like">
    <h1>猜你喜欢</h1>
      <ul class="content">
        <li class="like-content" v-for="item in data">
          <img :src="item.img"/>
          <div class="text-content">
            <div class="name-price">
              <span class="name"> {{item.name}}</span>
              <span class="temp-span"></span>
              <span class="price">{{item.price}}</span>
            </div>
            <span class="region">{{item.regin}}</span>
            <span class="house-type">{{item.houseType}}</span>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
import './guessLike.scss';
import scroll  from '../scroll/scroll';

export default {
  name: 'guess-like',
  data() {
    return {
      data: [
        {
          img: require('../../assets/guessLike.png'),
          name: '金地格林line',
          price: '12000元/m²',
          regin: '南京周边-句容',
          houseType: '热门户型 3房2厅1卫;4房2厅2卫',
        },
        {
          img: require('../../assets/guessLike.png'),
          name: '金地格林line',
          price: '12000元/m²',
          regin: '南京周边-句容',
          houseType: '热门户型 3房2厅1卫;4房2厅2卫',
        },{
          img: require('../../assets/guessLike.png'),
          name: '金地格林line',
          price: '12000元/m²',
          regin: '南京周边-句容',
          houseType: '热门户型 3房2厅1卫;4房2厅2卫',
        },
        {
          img: require('../../assets/guessLike.png'),
          name: '金地格林line',
          price: '12000元/m²',
          regin: '南京周边-句容',
          houseType: '热门户型 3房2厅1卫;4房2厅2卫',
        },
        {
          img: require('../../assets/guessLike.png'),
          name: '金地格林line',
          price: '12000元/m²',
          regin: '南京周边-句容',
          houseType: '热门户型 3房2厅1卫;4房2厅2卫',
        },

      ],
      pulldown: true,
    };
  },
  components: {
    'scroll': scroll,
  },
  created() {},
  mounted() {
  },
  methods: {
  },
};
</script>
