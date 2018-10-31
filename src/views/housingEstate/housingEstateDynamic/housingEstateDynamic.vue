<template>
  <div class="house-dynamic">
    <div class="house-dynamic-title">
        <span class="name">楼盘动态({{dynamicCount}})</span>
        <span class="temp-span"></span>
        <span class="view-all">
          全部动态
          <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-arrow-right-copy-copy-copy"></use>
          </svg>
        </span>
    </div>
    <div class="house-dynamic-content" v-for="item in dynamicList" v-bind:key="item.id">
      <div class="dynamic-title">
        <div class="title">
          <span>{{item.title}}</span>
        </div>
        <div class="new" v-if="item.isNew">
          最新
        </div>
      </div>
      <p>{{item.content}}</p>
      <p>{{item.date}}</p>
    </div>
  </div>
</template>

<script>
import "./housingEstateDynamic.scss";


export default {
  name: "house-dynamic",
  data() {
    return {
      dynamicCount: 0,
      dynamicList: [
        {
          id: 1,
          title: '我是楼盘动态',
          isNew: true,
          content: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          date: '2018年10月7日'
        }, {
          id: 2,
          title: '我是楼盘动态',
          isNew: false,
          content: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          date: '2018年10月7日'
        }, {
          id: 3,
          title: '我是楼盘动态',
          isNew: false,
          content: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          date: '2018年10月7日'
        }
      ]
    };
  },
  computed: {
  },
  components: {
  },
  created() {
    this.dynamicCount = this.dynamicList.length;
  },
  mounted() {},
  methods: {}
};
</script>
