<template>
  <div class="player">
    <div class="player__titleContainer">
      <p class="player__title">Songs - Title of Song</p>
    </div>
    <div class="player__controller">
      <div class="player__mainSettings">
        <svg>
          <use href="#previous" />
        </svg>
        <svg @click="clickPlay" v-if="isPlaying">
          <use href="#pause" />
        </svg>
        <svg @click="clickPlay" v-else>
          <use href="#play" />
        </svg>
        <svg>
          <use href="#next" />
        </svg>
      </div>
      <div class="player__soundSettings">
        <svg @click="clickMute" v-if="isMuted">
          <use href="#soundoff" />
        </svg>
        <svg @click="clickMute" v-else>
          <use href="#soundon" />
        </svg>
        <input
          class="player__soundSlider"
          type="range"
          min="0"
          max="100"
          step="1"
          value="50"
          @input="changeVolume"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AudioPlayer",
  props: {
    isPlaying: {
      type: Boolean,
      required: true
    },
    isMuted: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    clickPlay() {
      this.$emit("click-play");
    },

    clickMute() {
      this.$emit("click-mute");
    },

    changeVolume: function(e) {
      this.$emit("change-volume", e);
    }
  }
};
</script>

<style lang="scss" scoped>
svg,
input {
  cursor: pointer;
}

@keyframes slide {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(105%);
  }
}

.player {
  width: 304px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.player__titleContainer {
  overflow-x: hidden;
  width: 60%;
  padding-bottom: 4px;
}

.player__title {
  color: $primary-white;
  animation: 10s linear 1s infinite running slide;
}

.player__controller {
  width: 100%;
  height: 48px;
  padding: 8px 16px;
  border-radius: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #b68d01;
}

.player__mainSettings {
  display: flex;

  svg {
    width: 32px;
    height: 32px;

    &:nth-child(2) {
      margin: 0px 16px;
    }
  }
}

.player__soundSettings {
  display: flex;
  align-items: center;

  svg {
    width: 16px;
    height: 16px;
  }
}

.player__soundSettings input {
  -webkit-appearance: none; /* reset default style for chrome */
  -moz-appearance: none; /* reset default style for mozz */
  width: 92px;
  outline: none;
  background-color: transparent;
  margin-left: 8px;
}

/* slider for chrome*/
.player__soundSettings input::-webkit-slider-runnable-track {
  height: 4px;
  border: none;
  border-radius: 10px;
  background-color: $primary-white;
}

/* slider for mozz */
.player__soundSettings input::-moz-range-track {
  height: 4px;
  border: none;
  border-radius: 10px;
  background-color: $primary-white;
}

/* cursor for chrome*/
.player__soundSettings input::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 8px;
  height: 8px;
  border: 1px solid $primary-darkblue;
  border-radius: 50%;
  padding: 4px;
  background: $primary-darkblue;
  margin-top: -3px;
}

/* cursor for mozz */
.player__soundSettings input::-moz-range-thumb {
  -moz-appearance: none;
  width: 4px;
  height: 4px;
  border: none;
  border-radius: 50%;
  padding: 4px;
  background: $primary-darkblue;
  margin-top: -3px;
}
</style>