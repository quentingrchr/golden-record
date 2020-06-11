<template>
  <div class="Use">
    <div class="stars"></div>
    <div class="twinkling"></div>
    <header class="Use__mainTitle">
      <Title text="How To Use It" />
    </header>
    <div class="Use__container">
    <PopUp v-show="here"/>
      <div class="Use__content">
        <Sign
        @click="appear"
        @mouseover="hovering = 1"
        @mouseleave="hovering = 0"
        nameIcon="#record"
        >
          <template v-slot:right>
              <ContentSign
              class="Use__text"
                :contentRight="false" 
                title="Radial circle"
              />
          </template>
        </Sign>
        <Sign
          @mouseover="hovering = 2"
          @mouseleave="hovering = 0" 
          nameIcon="#elevation"
        >
          <template v-slot:right>
              <ContentSign 
                :contentRight="false" 
                title="Side view of disc"
              />
          </template>
        </Sign>
        <Sign 
          @mouseover="hovering = 3"
          @mouseleave="hovering = 0" 
          nameIcon="#pulsar" 
        >
          <template v-slot:right>
            <ContentSign :contentRight="false" title="Pulsar" />
          </template>
        </Sign>
      </div>
      <div class="Use__ellipse">
        <BaseIcon :class="{'hovering': hovering === 3}" class="Use__pulsar" href="#pulsar" />
        <BaseIcon :class="{'hovering': hovering === 4}" class="Use__waveForm" href="#waveForm" />
        <BaseIcon :class="{'hovering': hovering === 6}" class="Use__hydrogen" href="#hydrogen" />
        <BaseIcon :class="{'hovering': hovering === 5}" class="Use__frames" href="#frames" />
        <BaseIcon :class="{'hovering': hovering === 2}" class="Use__elevation" href="#elevation" />
        <BaseIcon :class="{'hovering': hovering === 1}" class="Use__record" href="#record" />
      </div>
      <div class="Use__content">
        <Sign
          @mouseover="hovering = 4"
          @mouseleave="hovering = 0" 
          nameIcon="#waveForm"
        >
          <template v-slot:left>
            <ContentSign :contentRight="true" title="The waves" />
          </template>
        </Sign>
        <Sign 
          @mouseover="hovering = 5"
          @mouseleave="hovering = 0" 
          nameIcon="#frames"
        >
          <template v-slot:left>
            <ContentSign :contentRight="true" title="Show the image" />
          </template>
        </Sign>
        <Sign
          @mouseover="hovering = 6"
          @mouseleave="hovering = 0" 
          nameIcon="#hydrogen"
        >
          <template v-slot:left>
            <ContentSign :contentRight="true" title="Hydrogen atoms" />
          </template>
        </Sign>
      </div>
    </div>
  </div>
</template>

<script>
import BaseIcon from "@/components/BaseIcon.vue";
import Sign from "@/components/Sign.vue";
import ContentSign from "@/components/ContentSign.vue";
import Title from "@/components/Title.vue";
import PopUp from "@/components/HowToUse__PopUp.vue"

export default {
  name: 'UseIt',
  data:() => ({
    hovering: 0,
    here: false,
  }),
  components: {
    BaseIcon,
    Title,
    Sign,
    ContentSign,
    PopUp
  },
  methods:{
    appear(){
      this.here = true
    }
  }
};
</script>

<style lang="scss">
.stars {
  z-index: 0;
}
.twinkling {
  z-index: 0;
}
.Use {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: $primary-darkblue;
  // border: 1px solid red;

  &__mainTitle {
    display: flex;
    align-items: flex-start;
    // border: 1px solid blue;
    margin-left: 10%;
    padding-top: 20px;
    width: 85%;
    height: 20%;
  }


  &__text{
    &:hover{
    filter: drop-shadow(0px 0px 2px rgba(255, 255, 255, 0.8));
    }
  }
  &__container {
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

  .hovering{
    stroke: white;
    filter: drop-shadow(0px 6px 2px rgba($primary-darkblue, 0.7));
  }

}
</style>
