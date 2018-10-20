 <!--
  @author zhuliang
  @date 2018/10/14 下午10:42
-->
<template>
  <div ref="wrapper">
    <p class="drop-down" v-if="dropDown">松手刷新数据...</p>
    <slot></slot>
    <p class="drop-up" v-if="dropup">加载更多...</p>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    props: {
      /**
       * 1 滚动的时候会派发scroll事件，会截流。
       * 2 滚动的时候实时派发scroll事件，不会截流。
       * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
       */
      probeType: {
        type: Number,
        default: 1
      },
      /**
       * 点击列表是否派发click事件
       */
      click: {
        type: Boolean,
        default: true
      },
      /**
       * 是否开启横向滚动
       */
      scrollX: {
        type: Boolean,
        default: false
      },
      /**
       * 是否派发滚动事件
       */
      listenScroll: {
        type: Boolean,
        default: false
      },
      /**
       * 列表的数据
       */
      data: {
        type: Array,
        default: null
      },
      /**
       * 是否派发滚动到底部的事件，用于上拉加载
       */
      pullup: {
        type: Boolean,
        default: false
      },
      /**
       * 是否派发顶部下拉的事件，用于下拉刷新
       */
      pulldown: {
        type: Boolean,
        default: false
      },
      /**
       * 是否派发列表滚动开始的事件
       */
      beforeScroll: {
        type: Boolean,
        default: false
      },
      /**
       * 当数据更新后，刷新scroll的延时。
       */
      refreshDelay: {
        type: Number,
        default: 20
      }
    },
    data(){
      return {
        dropDown: false,
        dropup: false,
      }
    },
    mounted() {
      // 保证在DOM渲染完毕后初始化better-scroll
      setTimeout(() => {
        this._initScroll()
      }, 20)
    },
    methods: {
      _initScroll() {
        if (!this.$refs.wrapper) {
          return
        }
        // better-scroll的初始化
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click: this.click,
          scrollX: this.scrollX,
          stopPropagation: true,
          pullUpLoad: true,
          useTransition: false,  // 防止iphone微信滑动卡顿
        })

        // 是否派发滚动事件
          this.scroll.on('scroll', (pos) => {
            this.$emit('scroll', pos)
            //如果下拉超过50px 就显示下拉刷新的文字
            if(pos.y> 40){
              this.dropDown = true
            }else{
              this.dropDown = false
            }

            if(this.scroll.maxScrollY > pos.y + 40){
              this.dropup = true;
            }else{
              this.dropup = false
            }

          })

        // 是否派发滚动到底部事件，用于上拉加载
        if (this.pullup) {
          this.scroll.on('scrollEnd', (pos) => {
            // 下拉动作
            if(pos.y > 40){
              this.dropDown = false
            }
            // 滚动到底部
            if (this.scroll.y <= (this.scroll.maxScrollY + 40)) {
              this.$emit('scrollToEnd')
            }
          })
        }
        // 是否派发顶部下拉事件，用于下拉刷新
        if (this.pulldown) {
          this.scroll.on('touchend', (pos) => {
            // 下拉动作
            if (pos.y > 40) {
              this.$emit('pulldown')
            }

            if(this.scroll.maxScrollY > pos.y + 40){
              this.$emit('pullup');
            }
          })
        }

        // 是否派发列表滚动开始的事件
        if (this.beforeScroll) {
          this.scroll.on('beforeScrollStart', () => {
            this.$emit('beforeScroll')
          })
        }
      },
      disable() {
        // 代理better-scroll的disable方法
        this.scroll && this.scroll.disable()
      },
      enable() {
        // 代理better-scroll的enable方法
        this.scroll && this.scroll.enable()
      },
      refresh() {
        // 代理better-scroll的refresh方法
        this.scroll && this.scroll.refresh()
      },
      scrollTo() {
        // 代理better-scroll的scrollTo方法
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
      },
      scrollToElement() {
        // 代理better-scroll的scrollToElement方法
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
      }
    },
    watch: {
      // 监听数据的变化，延时refreshDelay时间后调用refresh方法重新计算，保证滚动效果正常
      data() {
        setTimeout(() => {
          this.refresh()
        }, this.refreshDelay)
      }
    }
  }
</script>


 <style scoped>
   .drop-down, .drop-up{
     position: absolute;
     left:0px;
     width: 100%;
     height: 50px;
     line-height:50px;
     text-align: center;
     font-size:14px;
     color:#CCC;
   }
   .drop-down {
     top: 0;
   }

   .drop-up {
     bottom: 3px;
   }
 </style>
