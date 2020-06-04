<template>
  <div class="progress">
    <div
      @click="jumpToPart(scroll * 5)"
      :class="page >= 1 ? 'colored' : null"
    ></div>
    <div
      @click="jumpToPart(scroll * 15)"
      :class="page >= 2 ? 'colored' : null"
    ></div>
    <div
      @click="jumpToPart(scroll * 25)"
      :class="page >= 3 ? 'colored' : null"
    ></div>
    <div
      @click="jumpToPart(scroll * 35)"
      :class="page >= 4 ? 'colored' : null"
    ></div>
    <div
      @click="jumpToPart(scroll * 45)"
      :class="page >= 5 ? 'colored' : null"
    ></div>
  </div>
</template>
<script>
export default {
  props: {
    page: {
      type: Number,
      required: true,
    },
    scroll: {
      type: Number,
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
  height: 5px;
  width: 95%;
  margin-left: 2.5%;
  display: flex;
  transition: height 0.2s;
  cursor: pointer;

  &:hover {
    height: 20px;
  }

  & div {
    background-color: white;
    border-right: 0.1px solid black;
    flex-grow: 1;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }

    &.colored {
      background-color: rgba(0, 0, 0, 0.8);
      border-right: 0.1px solid white;
      &:hover {
        background-color: black;
      }
    }
  }
}
</style>
