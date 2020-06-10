<template>
  <div class="Use">
    <div class="Use__content1">
      <div class="Use__symbol">
        <BaseIcon
          class="Use__iconrecord"
          href="#record"
          @mouseover="hovering = true"
          @mouseleave="hovering = false"
        />
        <div class="Use__text Use__text--left">
          <span class="Use__title">Radial circle</span>
          <BaseIcon class="Use__plus Use__plus--left" href="#plus" />
        </div>
      </div>
      <div class="Use__symbol">
        <BaseIcon class="Use__iconelevation" href="#elevation" />
        <div class="Use__text Use__text--left">
          <span class="Use__title">Side view of disc</span>
          <BaseIcon class="Use__plus Use__plus--left" href="#plus" />
        </div>
      </div>
      <div class="Use__symbol">
        <BaseIcon class="Use__iconpulsar" href="#pulsar" />
        <div class="Use__text Use__text--left">
          <span class="Use__title">Pulsar</span>
          <BaseIcon class="Use__plus Use__plus--left" href="#plus" />
        </div>
      </div>
    </div>
    <div class="Use__ellipse">
      <BaseIcon class="Use__pulsar" href="#pulsar" />
      <BaseIcon class="Use__waveForm" href="#waveForm" />
      <BaseIcon class="Use__hydrogen" href="#hydrogen" />
      <BaseIcon class="Use__frames" href="#frames" />
      <BaseIcon class="Use__elevation" href="#elevation" />
      <BaseIcon
        class="Use__record"
        href="#record"
        :class="{ 'Use__record--hovering': hovering }"
      />
    </div>
    <div class="Use__content1">
      <div class="Use__symbol">
        <div class="Use__text Use__text--right">
          <BaseIcon class="Use__plus Use__plus--right" href="#plus" />
          <span class="Use__title">The waves</span>
        </div>
        <BaseIcon class="Use__iconwaveForm" href="#waveForm" />
      </div>
      <div class="Use__symbol">
        <BaseIcon class="Use__iconframes" href="#frames" />
        <div class="Use__text Use__text--right">
          <BaseIcon class="Use__plus Use__plus--right" href="#plus" />
          <span class="Use__title">Show the image</span>
        </div>
      </div>
      <div class="Use__symbol">
        <BaseIcon class="Use__iconhydrogen" href="#hydrogen" />
        <div class="Use__text Use__text--right">
          <BaseIcon class="Use__plus Use__plus--right" href="#plus" />
          <span class="Use__title">Hydrogen atoms</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import BaseIcon from '@/components/BaseIcon.vue';

export default {
  name: 'UseIt',
  props: {
    symbol: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    hovering: false,
  }),
  components: {
    BaseIcon,
  },
};
</script>

<style lang="scss">
.Use {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  height: 100vh;
  background-color: $primary-darkblue;

  &__content1 {
    display: flex;
    // border: 1px solid blue;
    height: 75%;
    width: 25%;
    flex-direction: column;
    justify-content: space-between;
  }

  &__symbol {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    // border: 1px solid red;
    height: 40%;
    opacity: 0.3;

    &:nth-child(n) {
      &:hover {
        opacity: 1;
      }
    }
  }

  &__plus {
    width: 20px;
    height: 20px;

    &--left {
      margin-left: 10px;
    }

    &--right {
      margin-right: 10px;
    }
  }

  &__text {
    height: 50%;
    width: 45%;
    display: flex;
    align-items: center;
    position: absolute;
    filter: drop-shadow(-8px 9px 11px rgba(0, 0, 0, 0.8));
    // border: 1px solid yellow;

    &--left {
      top: 55%;
      left: 50%;
    }

    &--right {
      top: 40%;
      right: 64%;
    }
  }

  &__title {
    font-family: 'Product Sans Regular';
    font-size: 20px;
    color: $primary-white;
  }

  &__iconpulsar {
    width: 290px;
    height: 190px;
    stroke: $primary-white;
  }
  &__iconwaveForm {
    width: 215px;
    height: 130px;
    stroke: $primary-white;
    fill: none;
  }
  &__iconhydrogen {
    width: 120px;
    height: 50px;
    stroke: $primary-white;
    fill: none;
  }
  &__iconframes {
    width: 100px;
    height: 175px;
    stroke: $primary-white;
    fill: none;
  }
  &__iconelevation {
    width: 120px;
    height: 46.37px;
    stroke: $primary-white;
    fill: none;
  }
  &__iconrecord {
    width: 120px;
    height: 120px;
    stroke: $primary-white;
    fill: none;
    transition: all 0.3s ease;

    &:hover {
      transform: rotate(50deg);
    }
  }

  &__ellipse {
    position: relative;
    height: 350px;
    width: 350px;
    border-radius: 50%;
    background: linear-gradient(#d7c37f, #a67a3b);
    margin-right: 50px;
  }

  &__pulsar {
    position: absolute;
    top: 50%;
    left: 15%;
    width: 150px;
    height: 150px;
    stroke: $primary-darkblue;
    fill: none;
  }

  &__waveForm {
    position: absolute;
    top: 15%;
    right: 20%;
    width: 120px;
    height: 80px;
    stroke: $primary-darkblue;
    fill: none;
  }

  &__hydrogen {
    position: absolute;
    top: 70%;
    right: 20%;
    width: 80px;
    height: 80px;
    stroke: $primary-darkblue;
    fill: none;
  }

  &__frames {
    position: absolute;
    top: 40%;
    right: 20%;
    width: 80px;
    height: 80px;
    stroke: $primary-darkblue;
    fill: none;
  }

  &__elevation {
    position: absolute;
    top: 35%;
    left: 15%;
    width: 80px;
    height: 80px;
    stroke: $primary-darkblue;
    fill: none;
  }

  &__record {
    position: absolute;
    top: 15%;
    left: 15%;
    width: 80px;
    height: 80px;
    stroke: $primary-darkblue;
    fill: none;
    transition: transform 0.5s ease;

    &--hovering {
      stroke: $primary-white;
      transform: rotate(90deg);
      filter: drop-shadow(12px 12px 6px rgba(0, 0, 0, 1));
    }
  }
}
</style>
