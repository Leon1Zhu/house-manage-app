 <!--
  @author guochen
  @date 2018/10/18 上午12:00
  @desc 更多楼盘信息
-->
<template>
  <div class="housing-estate-more">
    <div class="housing-estate-activity">
        <div class="activity_left">
          <div class="semi-circle"></div>
        </div>
        <div class="activity_center">
          <div class="youhui">优惠</div>
          <div class="activity_desc">
            <span>一键咨询更多打折优惠</span>
          </div>
          <div class="lijlingqu">立即领取</div>
        </div>
        <div class="activity_right">
          <div class="semi-circle"></div>
        </div>
    </div>
    <div class="more-housing-estate">
      <span>更多楼盘信息</span>
    </div>
    <div class="remind">
      <div class="price_change" @click="emitToParent">
        <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-bianjia"></use>
            </svg>
        <span>变价提醒我</span>
      </div>
      <div class="open_change" @click="emitToParent">
        <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-kaipan"></use>
            </svg>
        <span>开盘提醒我</span>
      </div>
    </div>
    <call-modal v-if="showModal" @close="showModal = false">
    </call-modal>
  </div>
  
</template>

<script>
import "./housingEstateMore.scss";
import CallModal from "../../../components/callModal/callModal";

export default {
  name: "housing-estate-more",
  data() {
    return {
      showModal: false
    };
  },
  computed: {
  },
  components: {
    "call-modal": CallModal,
  },
  created() {},
  mounted() {},
  methods: {
    emitToParent() {
      this.$emit('child-event', true);
    }
  }
};
</script>
