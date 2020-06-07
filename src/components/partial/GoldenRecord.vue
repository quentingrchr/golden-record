<template>
  <div :class="currentStep"></div>
</template>

<script>
export default {
  props: {
    step: {
      type: Number,
    },
  },
  computed: {
    currentStep: function() {
      return `step${this.step.toString()}`;
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  width: 100px;
  height: 100px;
  background-image: url('./../../assets/pictures/disk.png');
  background-size: 100%;
  background-position-y: top;
  position: absolute;
  top: 50%;
  left: -10px;
  transition: all 1s;

  &.step2 {
    transform: scale(6);
    left: 100%;
  }
  &.step3 {
    transform: scale(0.5);
    left: 0;
    top: 5%;
  }
  &.step4 {
    transform: scale(1.4);
    top: -5%;
    left: 80%;
  }
  &.step5 {
    transform: scale(1) translateY(-50%) translateX(-50%);
    top: 50%;
    left: 50%;
  }
}
</style>
