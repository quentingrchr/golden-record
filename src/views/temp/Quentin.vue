<template>
  <section>
    <div class="polaroids" :class="[isClicked ? 'is-clicked' : '']">
      <Polaroid caption="Ann druyan" :src="img2" />
      <Polaroid caption="Eward C Stone" :src="img3" />
      <Polaroid caption="Carl Sagan" :src="img1" />
      <Polaroid caption="Jon Lomberg" :src="img4" />
      <Polaroid caption="Frank Drake" :src="img5" />
    </div>
  </section>
</template>

<script>
// Polaroids images (to fetch from API)
import img1 from "../../assets/img/carl_sagan.jpg";
import img2 from "../../assets/img/ann_druyan.jpg";
import img3 from "../../assets/img/eward_c_stone.jpg";
import img4 from "../../assets/img/jon_lomberg.jpg";
import img5 from "../../assets/img/frank_drake.jpg";

import Polaroid from "../../components/Polaroid.vue";
export default {
  name: "Quentin",
  components: { Polaroid },
  props: {},
  data: () => {
    return {
      img1,
      img2,
      img3,
      img4,
      img5,
    };
  },
  methods: {
    handleClick: function() {},
  },
};
</script>

<style lang="scss" scoped>
section {
  height: 100vh;
  background-color: $color-body;
}

.polaroids {
  margin: auto;
  margin-top: 25vh;
  display: flex;
  background-color: red;
  flex-wrap: nowrap;
  position: relative;
}

figure {
  .hovered {
    z-index: 6;
  }
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.5);
  &:nth-child(1) {
    z-index: 2;

    transform: scale(0.6) rotate(-21.93deg) translateX(50%) translateY(15%);
  }
  &:nth-child(2) {
    z-index: 3;
    transform: scale(0.6) rotate(7.36deg) translateY(30%) translateX(150%);
  }
  &:nth-child(3) {
    z-index: 4;
    transform: scale(0.9) translateX(170%) translateY(-10%);
  }
  &:nth-child(4) {
    z-index: 5;
    transform: scale(0.8) rotate(-12.6deg) translateY(100%) translateX(250%);
  }
  &:nth-child(5) {
    z-index: 1;
    transform: scale(0.6) rotate(4deg) translateY(-30%) translateX(450%);
  }
}
</style>
