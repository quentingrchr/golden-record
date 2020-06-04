<template>
  <div class="progress">
    <div @click="jumpToPart(25)" :class="page >= 1 ? 'colored' : null"></div>
    <div @click="jumpToPart(75)" :class="page >= 2 ? 'colored' : null"></div>
    <div @click="jumpToPart(125)" :class="page >= 3 ? 'colored' : null"></div>
    <div @click="jumpToPart(175)" :class="page >= 4 ? 'colored' : null"></div>
    <div @click="jumpToPart(225)" :class="page >= 5 ? 'colored' : null"></div>
  </div>
</template>
<script>
export default {
  props: {
    page: {
      type: Number,
      required: true,
    },
  },
  methods: {
    jumpToPart(value) {
      this.$emit('jumpToPart', value);
    },
  },
};
</script>

<style lang="scss" scoped>
.progress {
  position: fixed;
  bottom: 10px;
  left: 0;
  height: 20px;
  width: 100%;
  background-color: white;
  display: flex;
  cursor: pointer;

  & div {
    border-right: 0.1px solid black;
    flex-grow: 1;

    &.colored {
      background-color: black;
    }
  }
}
</style>
