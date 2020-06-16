<template>
  <section class="thejourney">
    <div class="explaination" @click="closeInstruction()" :class="overlayIsOpen ? '' : 'none'">
      <h2 class="explaination__title">Hi Stranger ! 👋🏼👽</h2>
      <p class="explaination__text">
        To navigate between the different pages :
        <em>scroll</em>
        <span>
          <img class="icon-scroll-down" src="@/assets/img/icon-scroll-down.png" />
        </span>
        or
        <em>use keyboard arrows</em>
        <span>
          <img class="key-arrows" src="@/assets/img/key-arrows.png" />
        </span>
        or
        <em>click on the parts in the navbar</em> on the left
      </p>
      <p class="explaination__pass">Click anywhere to pass the instructions</p>
      <div class="disclaimer">
        <p class="disclaimer__title">Disclaimer</p>
        <p class="disclaimer__text">
          This site has been created for educational purposes as part of the
          Bachelor's curriculum of the HETIC school. The contents presented have
          not been the subject of a request for right of use. This site will in
          no case be used for commercial purposes and will not be published.
        </p>
      </div>
    </div>
    <Header class="thejourney_title" text="The journey" />
    <div class="stars"></div>
    <div class="twinkling"></div>
    <div class="voyager">
      <div class="voyager_image">
        <h4>Voyager probe and the Golden Record</h4>
        <img class="probe" src="@/assets/img/voyager_journey.png" alt="voyager prob" />
        <img
          class="golden-record"
          :class="overlayIsOpen ? '' : 'zoom-in-record'"
          src="@/assets/img/golden-record.png"
          alt="voyager prob"
        />
      </div>
      <div class="voyager_description">
        <div>
          <p>
            NASA placed an amibitous message aboard Voyager 1 and 2, a kind of
            time capsule, intended to communicate a story of our world to
            extraterrestrials.
          </p>
          <p>
            It is carried by a phonograph record, a gold-plated copper disk called
            “The Golden Record“ containing what’s supposed to be the portray of
            the diversity of life and culture on Earth.
          </p>
          <p>
            How inteligent life would be able to use this disk ? Press the right
            arrow → to discover how scientifics tried to answer that question
          </p>
        </div>
        <Time-elapsed class="time" />
      </div>
    </div>
  </section>
</template>

<script>
import Header from "../../components/Header";
import TimeElapsed from "../../components/TimeElapsed.vue";

export default {
  name: "TheJourney",
  components: { Header, TimeElapsed },
  data() {
    return {
      overlayIsOpen: true
    };
  },
  methods: {
    closeInstruction() {
      this.overlayIsOpen = false;
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.thejourney {
  height: 100vh;
  width: 100vw;
}

.explaination {
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background: rgba($color: #000000, $alpha: 0.95);
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0px 10vw;
  & h2 {
    margin-bottom: 100px;
    font-weight: bold;
  }
  &__text {
    margin-bottom: 100px;
    & em {
      font-weight: bold;
    }
    & span {
      margin: 0px 10px;
    }
  }
  & .key-arrows {
    width: 50px;
    height: auto;
  }
  &__pass {
    font-weight: bold;
  }
}

.disclaimer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  width: 98vw;
  top: 90vh;
  left: 1%;
  opacity: 0.5;
  &__title {
    font-size: 12px;
    margin-bottom: 0px;
    text-transform: uppercase;
  }
  &__text {
    font-size: 12px;
    text-align: left;
    margin: auto;
  }
}

.none {
  display: none;
}

.voyager {
  width: 80vw;
  height: 80vh;
  margin: auto;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 10;
  h4 {
    color: white;
    margin-top: 18px;
    text-align: left;
    font-size: 20px;
  }
  &_image {
    display: flex;
    flex-direction: column;
    align-items: center;
    .probe {
      width: 300px;
      margin-top: 16px;
    }
    .golden-record {
      position: absolute;
      top: 38px;
      left: 20px;
      transform: scale(0.06);
      transition: all 2s;
    }
    .zoom-in-record {
      animation: zooming 1.5s 1.5s ease-in-out forwards;
    }
  }
  &_description {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-bottom: 100px;
  }
  p {
    width: 500px;
    margin-top: 28px;
    text-align: left;
  }
  .time {
    margin-top: 50px;
  }
}
@keyframes zooming {
  from {
    transform: scale(0.06);
  }
  to {
    transform: scale(1) rotateZ(0deg) translateY(200px) translateX(20px);
  }
}

@keyframes scaling {
  from {
    transform: scale(0.06);
  }
  to {
    transform: scale(0.1);
  }
}

.voyager3d {
  position: absolute;
  top: 240px;
  left: 0px;
  z-index: 100;
  border-radius: 12px;
  width: 500px;
  transform-origin: left;
  height: 400px;
  transform: scale(0.1);
  transition: transform 2s ease-in;
}
</style>
