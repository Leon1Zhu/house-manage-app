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
            <li v-for="item in detailList" v-bind:key="item.id">{{item.type}}：<strong>{{item.typeValue}}</strong></li>
        </ul>
    </div>
    <div class="house-deatail-more" v-on:click="viewMoreFun">
        <span>
            {{detailMoreBut.butTitle}} 
        </span>
    </div>   
</div>
</template>

<script>
import "./housingEstateDetail.scss";

export default {
  name: "house-detail",
  data() {
    return {
        detailMoreBut: {
            butTitle: '展开更多',
            icon: '',
            status: 1
        },
        detailList: [
            {
                id: 1,
                type: '物业类型',
                typeValue: '别墅'
            }, {
                id: 2,
                type: '装修情况',
                typeValue: '毛坯'
            }, {
                id: 3,
                type: '开盘时间',
                typeValue: '07-1'
            }, {
                id: 4,
                type: '入住时间',
                typeValue: '07-1'
            }
        ]
    }
  },
  computed: {
  },
  components: {
  },
  created() {},
  mounted() {},
  methods: {
      viewMoreFun () {
          if (this.detailMoreBut.status === 1) {
              this.detailMoreBut.butTitle = '收起';
              this.detailMoreBut.status = 0;
              const demoList = [
                {
                    id: 5,
                    type: 'xxxx',
                    typeValue: 'xxx'
                }, {
                    id: 6,
                    type: 'xxxx',
                    typeValue: 'xxx'
                }, {
                    id: 7,
                    type: 'xxxx',
                    typeValue: 'xxx'
                }
              ];
              console.log('楼盘详情', demoList);
              this.detailList = this.detailList.concat(demoList);
              console.log('楼盘详情', this.detailList);
            
          } else {
              this.detailMoreBut.butTitle = '展开更多';
              this.detailMoreBut.status = 1;
              this.detailList.splice(4, 6);
          }
          
      }
  }
};
</script>
