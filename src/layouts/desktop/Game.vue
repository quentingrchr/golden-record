<template>
  <div>
    <div class="stars"></div>
    <div class="twinkling"></div>
    <img src="./../../assets/img/voyager_journey.png" ref="voyager" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      rightLimit: window.innerWidth - 100,
      leftLimit: 65,
      moveSpeed: 10,
    };
  },
  methods: {
    moveVoyager(e) {
      let voyagerPosition = this.$refs.voyager.offsetLeft;
      if (e.key === 'q') {
        let nextPosition = voyagerPosition - this.moveSpeed;
        if (nextPosition > this.leftLimit) {
          this.$refs.voyager.style.left = nextPosition.toString() + 'px';
        } else {
          this.$refs.voyager.style.left = this.leftLimit + 'px';
        }
      } else if (e.key === 'd') {
        let nextPosition = voyagerPosition + this.moveSpeed;
        if (nextPosition < this.rightLimit) {
          this.$refs.voyager.style.left = nextPosition.toString() + 'px';
        } else {
          this.$refs.voyager.style.left = this.rightLimit + "'px";
        }
      }
    },
  },
  created() {
    window.addEventListener('keydown', this.moveVoyager);
  },
  destroyed() {
    window.removeEventListener('keydown', this.moveVoyager);
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
