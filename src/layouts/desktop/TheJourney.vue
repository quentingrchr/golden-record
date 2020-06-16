<template>
  <section class="thejourney">
    <Header class="thejourney_title" text="The origin" />
    <div class="stars"></div>
    <div class="twinkling"></div>
    <div class="voyager">
      <div class="voyager_image">
        <h4>Voyager probe and the Golden Record</h4>
        <h4 class="model-explaination">↓ Click on the probe image to see the 3d model ↓</h4>
        <div :class="probeModelOnScreen ? '' : 'probenotonscreen' ">
          <iframe
            title="A 3D model"
            width="640"
            height="480"
            src="https://sketchfab.com/models/f39f4ad0bfb94cb89ced40b70c35a412/embed?autostart=1&amp;preload=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1"
            frameborder="0"
            allow="autoplay; fullscreen; vr"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            class="probe-model"
          ></iframe>
        </div>
        <div
          class="close"
          @click="toggle3d"
          :style="{display: probeModelOnScreen ? 'flex' : 'none'}"
        >
          <h5 class="close__text">Close 3D</h5>
          <svg
            viewBox="0 0 496 496"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="close_probemodel"
          >
            <circle cx="248" cy="248" r="229.5" stroke="#14131C" stroke-width="37" />
            <mask id="path-2-inside-1" fill="white">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M155.703 320.782C150.173 326.312 150.173 335.278 155.703 340.808C161.234 346.338 170.199 346.338 175.729 340.808L248.256 268.282L320.782 340.808C326.312 346.338 335.278 346.338 340.808 340.808C346.338 335.278 346.338 326.312 340.808 320.782L268.282 248.256L340.808 175.729C346.338 170.199 346.338 161.233 340.808 155.703C335.278 150.173 326.312 150.173 320.782 155.703L248.256 228.23L175.729 155.703C170.199 150.173 161.233 150.173 155.703 155.703C150.173 161.233 150.173 170.199 155.703 175.729L228.23 248.256L155.703 320.782Z"
              />
            </mask>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M155.703 320.782C150.173 326.312 150.173 335.278 155.703 340.808C161.234 346.338 170.199 346.338 175.729 340.808L248.256 268.282L320.782 340.808C326.312 346.338 335.278 346.338 340.808 340.808C346.338 335.278 346.338 326.312 340.808 320.782L268.282 248.256L340.808 175.729C346.338 170.199 346.338 161.233 340.808 155.703C335.278 150.173 326.312 150.173 320.782 155.703L248.256 228.23L175.729 155.703C170.199 150.173 161.233 150.173 155.703 155.703C150.173 161.233 150.173 170.199 155.703 175.729L228.23 248.256L155.703 320.782Z"
              fill="#14131C"
            />
            <path
              d="M155.703 340.808L154.996 341.515L154.996 341.515L155.703 340.808ZM155.703 320.782L156.411 321.489L156.411 321.489L155.703 320.782ZM175.729 340.808L176.437 341.515L176.437 341.515L175.729 340.808ZM248.256 268.282L248.963 267.575L248.256 266.868L247.549 267.575L248.256 268.282ZM340.808 320.782L341.515 320.075L341.515 320.075L340.808 320.782ZM268.282 248.256L267.575 247.549L266.867 248.256L267.575 248.963L268.282 248.256ZM340.808 175.729L341.515 176.436L341.515 176.436L340.808 175.729ZM340.808 155.703L341.515 154.996L341.515 154.996L340.808 155.703ZM320.782 155.703L321.489 156.41L321.489 156.41L320.782 155.703ZM248.256 228.23L247.549 228.937L248.256 229.644L248.963 228.937L248.256 228.23ZM175.729 155.703L175.022 156.41L175.022 156.41L175.729 155.703ZM155.703 155.703L154.996 154.996L154.996 154.996L155.703 155.703ZM155.703 175.729L156.41 175.022L156.41 175.022L155.703 175.729ZM228.23 248.256L228.937 248.963L229.644 248.256L228.937 247.549L228.23 248.256ZM156.411 340.101C151.271 334.961 151.271 326.629 156.411 321.489L154.996 320.075C149.076 325.995 149.076 335.595 154.996 341.515L156.411 340.101ZM175.022 340.101C169.883 345.24 161.55 345.24 156.411 340.101L154.996 341.515C160.917 347.436 170.516 347.436 176.437 341.515L175.022 340.101ZM247.549 267.575L175.022 340.101L176.437 341.515L248.963 268.989L247.549 267.575ZM321.489 340.101L248.963 267.575L247.549 268.989L320.075 341.515L321.489 340.101ZM340.101 340.101C334.961 345.24 326.629 345.24 321.489 340.101L320.075 341.515C325.995 347.436 335.595 347.436 341.515 341.515L340.101 340.101ZM340.101 321.489C345.24 326.629 345.24 334.962 340.101 340.101L341.515 341.515C347.436 335.595 347.436 325.996 341.515 320.075L340.101 321.489ZM267.575 248.963L340.101 321.489L341.515 320.075L268.989 247.549L267.575 248.963ZM340.101 175.022L267.575 247.549L268.989 248.963L341.515 176.436L340.101 175.022ZM340.101 156.41C345.241 161.55 345.241 169.883 340.101 175.022L341.515 176.436C347.436 170.516 347.436 160.917 341.515 154.996L340.101 156.41ZM321.489 156.41C326.629 151.271 334.962 151.271 340.101 156.41L341.515 154.996C335.595 149.076 325.996 149.076 320.075 154.996L321.489 156.41ZM248.963 228.937L321.489 156.41L320.075 154.996L247.549 227.523L248.963 228.937ZM175.022 156.41L247.549 228.937L248.963 227.523L176.436 154.996L175.022 156.41ZM156.41 156.41C161.55 151.271 169.883 151.271 175.022 156.41L176.436 154.996C170.516 149.076 160.917 149.076 154.996 154.996L156.41 156.41ZM156.41 175.022C151.271 169.883 151.271 161.55 156.41 156.41L154.996 154.996C149.076 160.917 149.076 170.516 154.996 176.436L156.41 175.022ZM228.937 247.549L156.41 175.022L154.996 176.436L227.523 248.963L228.937 247.549ZM156.411 321.489L228.937 248.963L227.523 247.549L154.996 320.075L156.411 321.489Z"
              fill="#14131C"
              mask="url(#path-2-inside-1)"
            />
          </svg>
        </div>

        <img
          class="probe"
          src="@/assets/img/voyager_journey.png"
          alt="voyager prob"
          @click="toggle3d"
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
import Header from "../../components/Header";
import TimeElapsed from "../../components/TimeElapsed.vue";

export default {
  name: "TheJourney",
  data() {
    return {
      probeModelOnScreen: false
    };
  },
  methods: {
    toggle3d() {
      this.probeModelOnScreen = !this.probeModelOnScreen;
    }
  },
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
  margin-left: $nav-width;
  height: 80vh;
  display: flex;
  justify-content: space-around;
  position: relative;
  z-index: 10;
  h4:nth-of-type(1) {
    color: white;
    text-align: left;
    font-size: 24px;
    margin-bottom: 20px;
  }
  &_image {
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4vh;
    .probe {
      width: 300px;
      margin-top: 1vh;
    }
    .golden-record {
      position: absolute;
      top: 11vh;
      left: 14vw;
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
    transform: scale(1) rotateZ(0deg) translateY(28vh) translateX(1vw);
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

.probe {
  cursor: pointer;
  transform: scale(1);
  &:hover {
    transform: scale(1.1);
  }
}

.probe-model {
  position: absolute;
  width: 88%;
  left: 6%;
  top: 1vh;
  z-index: 60;
  height: 500px;
}

.probenotonscreen {
  display: none;
}

.close {
  display: flex;
  align-items: center;
  position: absolute;
  top: 5vh;
  left: 80vw;
  z-index: 61;
  cursor: pointer;
  color: black;
  opacity: 0.5;
  @media (max-width: 1200px) {
    left: 77vw;
  }
  @media (max-width: 1100px) {
    left: 75vw;
  }
  @media (max-width: 900px) {
    left: 72vw;
  }
  & .close_probemodel {
    width: 30px;
  }
  & .close__text {
    color: black;
    margin-right: 15px;
    font-weight: bold;
  }
  &:hover {
    opacity: 1;
    transform-origin: center;
    transform: scale(1.1);
  }
}

.model-explaination {
  font-weight: bold;
  font-size: 14px;
}
</style>
