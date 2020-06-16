<template>
  <div class="Use">
    <div class="stars"></div>
    <div class="twinkling"></div>
    <Header class="Use__mainTitle" text="How To Use It" />
    <div class="Use__container">
      <div
        @click="appear"
        :class="{ none: disappear }"
        class="Use__instruction"
      >
        <div class="Use__intruction">
          <h3 class="Use__intructionText">
            On the disc are arranged six symbols allowing the individuals who
            will receive the disc to decipher it
          </h3>
          <p style="fontWeight : bold">
            Click anywhere to close this window
          </p>
        </div>
      </div>
      <div class="Use__content">
        <Sign
          :index="0"
          :class="{ color: hovering === 1 }"
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
          :index="1"
          @mouseover="hovering = 2"
          @mouseleave="hovering = 0"
          :class="{ color: hovering === 2 }"
          nameIcon="#elevation"
        >
          <template v-slot:right>
            <ContentSign :contentRight="false" title="Side view of disc" />
          </template>
        </Sign>
        <Sign
          :index="2"
          @mouseover="hovering = 3"
          @mouseleave="hovering = 0"
          :class="{ color: hovering === 3 }"
          nameIcon="#pulsar"
        >
          <template v-slot:right>
            <ContentSign :contentRight="false" title="Pulsar" />
          </template>
        </Sign>
      </div>
      <div class="Use__ellipse">
        <BaseIcon
          :i="2"
          :class="{ hovering: hovering === 3 }"
          @mouseover="hovering = 3"
          @mouseleave="hovering = 0"
          class="Use__pulsar Use__color"
          href="#pulsar"
        />
        <BaseIcon
          :i="4"
          :class="{ hovering: hovering === 4 }"
          @mouseover="hovering = 4"
          @mouseleave="hovering = 0"
          class="Use__waveForm Use__color"
          href="#waves"
        />
        <BaseIcon
          :i="5"
          :class="{ hovering: hovering === 6 }"
          @mouseover="hovering = 6"
          @mouseleave="hovering = 0"
          class="Use__hydrogen Use__color"
          href="#hydrogen"
        />
        <BaseIcon
          :i="3"
          :class="{ hovering: hovering === 5 }"
          @mouseover="hovering = 5"
          @mouseleave="hovering = 0"
          class="Use__frames Use__color"
          href="#frames"
        />
        <BaseIcon
          :i="1"
          :class="{ hovering: hovering === 2 }"
          @mouseover="hovering = 2"
          @mouseleave="hovering = 0"
          class="Use__elevation Use__color"
          href="#elevation"
        />
        <BaseIcon
          :i="0"
          :class="{ hovering: hovering === 1 }"
          @mouseover="hovering = 1"
          @mouseleave="hovering = 0"
          class="Use__record Use__color"
          href="#record"
        />
      </div>
      <div class="Use__content">
        <Sign
          :index="4"
          @mouseover="hovering = 4"
          @mouseleave="hovering = 0"
          :class="{ color: hovering === 4 }"
          nameIcon="#waves"
        >
          <template v-slot:left>
            <ContentSign :contentRight="true" title="The waves" />
          </template>
        </Sign>
        <Sign
          :index="3"
          @mouseover="hovering = 5"
          @mouseleave="hovering = 0"
          :class="{ color: hovering === 5 }"
          nameIcon="#frames"
        >
          <template v-slot:left>
            <ContentSign :contentRight="true" title="Show the image" />
          </template>
        </Sign>
        <Sign
          :index="5"
          @mouseover="hovering = 6"
          @mouseleave="hovering = 0"
          :class="{ color: hovering === 6 }"
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
import Header from "@/components/Header.vue";

export default {
  name: "UseIt",
  data: () => ({
    hovering: 0,
    isClosed: false,
    disappear: false,
  }),
  components: {
    BaseIcon,
    Sign,
    ContentSign,
    Header,
  },
  methods: {
    appear() {
      this.disappear = true;
    },
  },
  // created(){
  //   // setTimeout(() => {
  //   //   this.disappear = true
  //   // },2000);
  // },
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
  position: relative;

  &__instruction {
    position: fixed;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.75);
    top: 0;
    left: 0;
    padding: 10vw;
    width: 100vw;
    height: 100vh;
  }

  &__intructionText {
    margin-bottom: 10vh;
  }

  &__mainTitle {
    display: flex;
    align-items: flex-start;
    margin-left: 10%;
    padding-top: 20px;
    width: 80%;
    height: 20%;
  }

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    height: 100%;
    padding-bottom: 5vh;
    transition: opacity 0.3s ease;
  }

  &__content {
    display: flex;
    height: 90%;
    width: 25%;
    flex-direction: column;
  }

  &__ellipse {
    position: relative;
    height: 350px;
    width: 350px;
    border-radius: 50%;
    background: linear-gradient(#d7c37f, #a67a3b);

    @include media_tablet {
      width: 32%;
      height: 40%;
    }
  }

  &__color {
    &:hover {
      stroke: white;
      filter: drop-shadow(0px 6px 2px rgba($primary-darkblue, 0.7));
    }
  }

  &__pulsar {
    position: absolute;
    top: 50%;
    left: 15%;
    width: 150px;
    height: 150px;
    stroke: $primary-darkblue;
    fill: none;

    @include media_tablet {
      width: 120px;
      height: 120px;
    }
  }

  &__waveForm {
    position: absolute;
    top: 15%;
    right: 20%;
    width: 120px;
    height: 80px;
    stroke: $primary-darkblue;
    fill: none;

    @include media_tablet {
      width: 80px;
      height: 70px;
    }
  }

  &__hydrogen {
    position: absolute;
    top: 70%;
    right: 20%;
    width: 80px;
    height: 80px;
    stroke: $primary-darkblue;
    fill: none;

    @include media_tablet {
      width: 50px;
      height: 50px;
    }
  }

  &__frames {
    position: absolute;
    top: 40%;
    right: 20%;
    width: 80px;
    height: 80px;
    stroke: $primary-darkblue;
    fill: none;

    @include media_tablet {
      width: 60px;
      height: 60px;
    }
  }

  &__elevation {
    position: absolute;
    top: 35%;
    left: 15%;
    width: 80px;
    height: 80px;
    stroke: $primary-darkblue;
    fill: none;

    @include media_tablet {
      width: 60px;
      height: 60px;
    }
  }

  &__record {
    position: absolute;
    top: 15%;
    left: 15%;
    width: 80px;
    height: 80px;
    stroke: $primary-darkblue;
    fill: none;

    @include media_tablet {
      width: 60px;
      height: 60px;
    }

    &--hovering {
      stroke: $primary-white;
      filter: drop-shadow(12px 12px 6px rgba(0, 0, 0, 1));
    }
  }

  .hovering {
    stroke: white;
    filter: drop-shadow(0px 6px 2px rgba($primary-darkblue, 0.7));
    cursor: pointer;
  }

  .color {
    opacity: 1;
  }

  .none {
    display: none;
  }
}
</style>
