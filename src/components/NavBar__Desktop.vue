<template>
  <div
    class="navBar"
    @click="closeOverlay"
    @mouseenter="handleEnterNav"
    @mouseleave="handleLeaveNav"
  >
    <div class="navBar__timeLineContainer">
      <div>
        <router-link to="/">
          <img src="../assets/logo/earth-logo.png" alt="earth-logo" class="navBar__earthLogo" />
        </router-link>
      </div>
      <div
        class="navBar__containerVolumeLogo"
        @click="toggleMute"
        :class="isMute ? 'isMute' : null"
        v-show="page !== 4"
      >
        <img src="../assets/logo/volume-logo.png" alt="volume-logo" class="navBar__volumeLogo" />
      </div>
      <div class="navBar__containerFullscreen" @click="toggleScreen" ref="fullscreen">
        <img
          src="../assets/logo/notfullscreen.svg"
          v-if="isFullScreen"
          alt="fullscreen-logo"
          class="navBar__Fullscreen"
        />
        <img
          src="../assets/logo/fullscreen.svg"
          v-else
          alt="fullscreen-logo"
          class="navBar__Fullscreen"
        />
      </div>
      <nav class="navBar__timeLine">
        <div @click="jumpToOtherChapter(scroll * 5)" :class="page === 1 ? 'isSelected' : null">
          <p>The origin</p>
        </div>
        <div @click="jumpToOtherChapter(scroll * 15)" :class="page === 2 ? 'isSelected' : null">
          <p>Decrypt it</p>
        </div>
        <div @click="jumpToOtherChapter(scroll * 25)" :class="page === 3 ? 'isSelected' : null">
          <p>Visual Content</p>
        </div>
        <div @click="jumpToOtherChapter(scroll * 35)" :class="page === 4 ? 'isSelected' : null">
          <p>Audio Content</p>
        </div>
        <div @click="jumpToOtherChapter(scroll * 45)" :class="page === 5 ? 'isSelected' : null">
          <p>The team</p>
        </div>
        <div @click="jumpToOtherChapter(scroll * 55)" :class="page === 6 ? 'isSelected' : null">
          <p>Game</p>
        </div>
      </nav>
    </div>
    <audio class="experience__song" ref="audio" autoplay loop src="../assets/music/drone.mp3"></audio>
  </div>
</template>

<script>
import EventBus from "@/EventBus";
import glitch1 from "../assets/sounds/glitch_1.mp3";
import glitch2 from "../assets/sounds/glitch_2.mp3";

export default {
  data() {
    return {
      isMute: false,
      isFullScreen: false
    };
  },
  methods: {
    toggleMute() {
      this.isMute = !this.isMute;
      this.$refs.audio.muted = !this.$refs.audio.muted;
    },

    toggleScreen() {
      this.isFullScreen = !this.isFullScreen;

      if (this.isFullScreen) {
        document.documentElement.requestFullscreen() ||
          document.documentElement.webkitRequestFullscreen() ||
          document.documentElement.mozRequestFullScreen() ||
          alert("Full screen is not supported on your browser");
      } else {
        document.exitFullscreen();
      }
    },
    jumpToOtherChapter(value) {
      this.$emit("jumpToOtherChapter", value);
    },
    closeOverlay() {
      EventBus.$emit("close");
    },
    handleEnterNav() {
      let audio = new Audio(glitch1);
      this.playSound(audio, 0.01);
    },
    handleLeaveNav() {
      let audio = new Audio(glitch2);
      this.playSound(audio, 0.01);
    },

    playSound(audio, volume) {
      audio.volume = volume;
      audio.play();
    }
  },
  mounted() {
    this.$refs.audio.volume = 0.2;
    // if (document.requestFullscreen !== undefined) {
    //   this.isFullScreenSupported = true;
    // } else {
    //   this.isFullScreenSupported = false;
    // }
  },
  props: {
    page: {
      type: Number
    },
    scroll: {
      type: Number
    }
  },
  watch: {
    page: function(newProp) {
      if (newProp === 4) {
        this.$refs.audio.volume = 0;
      } else {
        this.$refs.audio.volume = 0.2;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.d-none {
  display: none !important;
}
.navBar__timeLineContainer {
  position: fixed;
  z-index: 70;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  height: 100vh;
  width: 60px;
  background-color: rgba($color: #000000, $alpha: 1);
  transition: width 0.3s;
  overflow: hidden;
  border-right: 0.5px solid $primary-white;
  box-shadow: 10px 0px 15px $primary-darkblue;

  &:hover {
    transform: none;
    width: 200px;

    & nav div {
      & p {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        transform: none;
        opacity: 0.7;
        left: 10px;
        top: -10px;
        width: 150px;
        user-select: none;
        font-weight: 400;
        text-align: left;
        transform: translateX(30px);
      }
      &.isSelected p {
        font-size: 1.2rem;
        font-weight: 800;
        opacity: 1;
        transform: translateX(20px) translateY(-8px);
        &:hover {
          text-decoration: none;
          cursor: default;
        }
      }
    }
  }
}

@keyframes chapterTitleShowUp {
  to {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
}

.navBar__timeLine {
  z-index: 70;
  height: 70%;
  width: 2px;
  background-color: $primary-white;
  margin-left: 27px;
  margin-bottom: 8vh;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 67px;

  & div {
    position: relative;
    background-color: $primary-darkblue;
    left: -200%;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid $primary-white;
    cursor: pointer;
    &.isSelected {
      background-color: $primary-white;
      cursor: initial;
      & p {
        animation: chapterTitleShowUp 1.5s forwards;
      }
    }

    & p {
      position: absolute;
      clip-path: polygon(0 0, 0 0, 0 99%, 0% 100%);
      left: -52px;
      top: -200%;
      transform: rotate(-90deg);
      color: $primary-white;
      font-weight: bold;
      font-size: 0.8rem;
      background-color: black;
      padding: 5px 0;
      width: 110px;

      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
}

.navBar__earthLogo {
  z-index: 700;
  position: fixed;
  top: 15px;
  left: 15px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: transform 0.1s;
  opacity: 0.7;
  user-select: none;

  &:hover {
    transform: scale(1.2);
    opacity: 1;
  }
}

.navBar__containerVolumeLogo {
  position: fixed;
  z-index: 2;
  left: 17px;
  bottom: 15px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  opacity: 0.9;
  user-select: none;

  & img {
    width: 100%;
    height: 100%;
  }

  &:hover {
    transform: scale(1.2);
    opacity: 1;
  }

  &.isMute::after {
    content: "";
    position: absolute;
    display: block;
    width: 30px;
    height: 2px;
    background-color: $primary-white;
    border: 0.1px solid $primary-darkblue;
    transform: translateY(-12px) translatex(-7px) rotate(-45deg);
  }
}

.navBar__containerFullscreen {
  position: fixed;
  z-index: 2;
  left: 17px;
  bottom: 55px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  opacity: 0.9;
  user-select: none;

  & img {
    width: 100%;
    height: 100%;
  }

  &:hover {
    transform: scale(1.2);
    opacity: 1;
  }
}
</style>
