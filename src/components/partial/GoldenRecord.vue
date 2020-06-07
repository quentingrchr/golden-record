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
  border-radius: 50%;
  background-color: gold;
  position: absolute;
  top: 50%;
  left: -10px;
  transition: transform 1s;

  &.step2 {
    transform: translateX(800%) scale(6);
  }
  &.step3 {
    transform: translateX(100%) translateY(-200%) scale(0.5);
  }
  &.step4 {
    transform: translateX(600%) translateY(-200%) scale(1.4);
  }
}
</style>
