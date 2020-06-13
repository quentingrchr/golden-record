<template>
  <section class="thejourney">
    <Header class="thejourney_title" text="The journey" />
    <div class="stars"></div>
    <div class="twinkling"></div>

    <div class="voyager">
      <div class="voyager_image">
        <h4>Voyager probe and the Golden Record</h4>
        <img
          class="probe"
          src="@/assets/img/voyager_journey.png"
          alt="voyager prob"
        />
        <img
          class="golden-record zoom-in-record"
          src="@/assets/img/golden-record.png"
          alt="voyager prob"
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
