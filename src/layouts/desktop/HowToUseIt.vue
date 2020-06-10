<template>
  <div class="Use">
    <header class="Use__mainTitle">
      <Title text="How To Use It"/>
    </header>
    <div class="Use__container">
      <div class="Use__content">
        <Sign nameIcon="#record">
          <template v-slot:right>
              <ContentSign :contentRight="false" title="Radial circle"/>
          </template>
        </Sign>
        <Sign nameIcon="#elevation">
          <template v-slot:right>
              <ContentSign :contentRight="false" title="Side view of disc"/>
          </template>
        </Sign>
        <Sign nameIcon="#pulsar">
          <template v-slot:right>
              <ContentSign :contentRight="false" title="Pulsar"/>
          </template>
        </Sign>
      </div>
      <div class="Use__ellipse">
        <BaseIcon class="Use__pulsar" href="#pulsar" />
        <BaseIcon class="Use__waveForm" href="#waveForm" />
        <BaseIcon class="Use__hydrogen" href="#hydrogen" />
        <BaseIcon class="Use__frames" href="#frames" />
        <BaseIcon class="Use__elevation" href="#elevation" />
        <BaseIcon class="Use__record" href="#record" />
      </div>
      <div class="Use__content">
        <Sign nameIcon="#waveForm">
          <template v-slot:left>
              <ContentSign :contentRight="true" title="The waves"/>
          </template>
        </Sign>
        <Sign nameIcon="#frames">
          <template v-slot:left>
              <ContentSign :contentRight="true" title="Show the image"/>
          </template>
        </Sign>
        <Sign nameIcon="#hydrogen">
          <template v-slot:left>
              <ContentSign :contentRight="true" title="Hydrogen atoms"/>
          </template>
        </Sign>
      </div>
    </div>
  </div>
</template>

<script>

import BaseIcon from '@/components/BaseIcon.vue';
import Sign from '@/components/Sign.vue';
import ContentSign from '@/components/ContentSign.vue';
import Title from '@/components/Title.vue';

export default {
  name: 'UseIt',
  components: {
    BaseIcon,
    Title,
    Sign,
    ContentSign
  },
};
</script>

<style lang="scss">
.Use {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: $primary-darkblue;
  // border: 1px solid red;

  &__mainTitle{
    display: flex;
    align-items: flex-start;
    // border: 1px solid blue;
    margin-left: 10%;
    padding-top: 20px;
    width: 85%;
    height: 20%;
  }

  &__container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 85%;
    height: 100%;
  }

  &__content {
    display: flex;
    height: 90%;
    width: 25%;
    flex-direction: column;
    // border: 1px solid blue;
  }

  &__ellipse {
    position: relative;
    height: 350px;
    width: 350px;
    border-radius: 50%;
    background: linear-gradient(#d7c37f, #a67a3b);
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
