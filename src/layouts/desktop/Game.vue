<template>
  <div>
    <div class="stars"></div>
    <div class="twinkling"></div>
    <img src="./../../assets/img/voyager_journey.png" ref="voyager" />
  </div>
</template>

<script>
export default {
  methods: {
    test(e) {
      let voyagerPosition = this.$refs.voyager.offsetLeft;
      if (e.key === 'ArrowLeft') {
        let move = voyagerPosition - 10;
        this.$refs.voyager.style.left = move.toString() + 'px';
      } else if (e.key === 'ArrowRight') {
        let move = voyagerPosition + 10;
        this.$refs.voyager.style.left = move.toString() + 'px';
      }
    },
  },
  created() {
    window.addEventListener('keydown', this.test);
  },
  destroyed() {
    window.removeEventListener('keydown', this.test);
  },
};
</script>

<style lang="scss" scoped>
div {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: white;
}

img {
  position: absolute;
  left: 50%;
  bottom: 10vh;
  width: 100px;
}
</style>
