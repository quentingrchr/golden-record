<template>
  <div class="Use">
    <div class="stars"></div>
    <div class="twinkling"></div>
    <Header class="Use__mainTitle" text="Decrypt It" />
    <div class="Use__container">
      <div @click="appear" :class="{ none: disappear }" class="Use__instruction">
        <div class="Use__intruction">
          <img class="allsigns" src="@/assets/img/allsigns.png" />
          <h3 class="Use__intructionText">
            This is an entire message saying where we are, and how to use this disc 📀.
            <br />Click on one item to discover his signification !
          </h3>
          <p class="pass-instructions">Click anywhere to close this window</p>
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
            <ContentSign class="Use__text" :contentRight="false" title="Radial circle" />
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
      <CircleIcon :hoveringItem="hovering" @hover="createHover" />
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
import Sign from "@/components/Sign.vue";
import ContentSign from "@/components/ContentSign.vue";
import Header from "@/components/Header.vue";
import CircleIcon from "@/components/CircleIcon.vue";

export default {
  name: "UseIt",
  data: () => ({
    hovering: 0,
    isClosed: false,
    disappear: false
  }),
  components: {
    Sign,
    CircleIcon,
    ContentSign,
    Header
  },
  methods: {
    appear() {
      this.disappear = true;
    },
    createHover(e) {
      this.hovering = e;
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
  position: relative;

  &__instruction {
    position: fixed;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.9);
    top: 0;
    left: 0;
    padding: 10vw;
    width: 100vw;
    height: 100vh;
    & .allsigns {
      width: 60vw;
      margin-bottom: 10vh;
    }
  }

  &__intruction {
    width: 70vw;
    & .pass-instructions {
      font-size: 20px;
      font-weight: bold;
    }
  }

  &__intructionText {
    font-size: 25px;
    font-weight: 400;
    line-height: 250%;
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
