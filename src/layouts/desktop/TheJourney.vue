<template>
  <section class="thejourney">
    <Header class="thejourney_title" text="The journey" />
    <div class="stars"></div>
    <div class="twinkling"></div>
    <div class="voyager">
      <div class="voyager_image">
        <h4>Voyager probe</h4>
        <img class="probe" src="@/assets/img/voyager_journey.png" alt="voyager prob" />
        <img
          class="golden-record"
          :class="zoomedIn ? 'zoom-in-record' : ''"
          src="@/assets/img/golden-record.png"
          alt="voyager prob"
          @click="zoomIn"
        />
      </div>
      <div class="voyager_description">
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
          How inteligent life would be able to use this disk ? Scroll down to
          discover how scientifcs tried to answer that question
        </p>
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
  components: { Header, TimeElapsed }
  data() {
    return {
      zoomedIn: false
    };
  },
  methods: {
    zoomIn() {
      this.zoomedIn = !this.zoomedIn;
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
      left: 5px;
      transform: scale(0.06);
      transition: transform 2s;

      &:hover {
        cursor: pointer;
      }
    }
    .zoom-in-record {
      transform: scale(1);
      transform: translateY(200px) translateX(20px);
    }
  }
  &_description {
    display: flex;
    flex-direction: column;
  }
  p {
    width: 500px;
    margin-top: 28px;
    font-family: Product Sans;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 150%;
    color: #f8f8f8;
    text-align: left;
  }
  .time {
    margin-top: 24px;
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
</style>
