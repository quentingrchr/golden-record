<template>
  <section class="thejourney">
    <Header class="thejourney_title" text="The origin" />
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
            It is carried by a phonograph record, a gold-plated copper disk
            called “The Golden Record“ containing what’s supposed to be the
            portray of the diversity of life and culture on Earth.
          </p>
          <p>
            How intelligent life would be able to use this disk ? Press the
            right arrow → to discover how scientists tried to answer this
            question
          </p>
        </div>
        <Time-elapsed class="time" />
      </div>
    </div>
  </section>
</template>

<script>
import Header from '../../components/Header';
import TimeElapsed from '../../components/TimeElapsed.vue';

export default {
  name: 'TheJourney',
  components: { Header, TimeElapsed },
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
  margin-left: $nav-width;
  height: 80vh;
  display: flex;
  justify-content: space-around;
  position: relative;
  z-index: 10;
  margin: 0 2%;
  h4 {
    color: white;
    margin-top: 18px;
    text-align: left;
    font-size: 20px;
  }
  &_image {
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8vh;
    position: relative;
    .probe {
      width: 300px;
      margin-top: 1vh;
    }
    .golden-record {
      position: absolute;
      top: 5%;
      left: 21%;
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
    margin-bottom: 10vh;
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
