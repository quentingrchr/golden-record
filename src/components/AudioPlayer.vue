<template>
  <div class="player">
    <div class="player__titleContainer">
      <p class="player__title">{{ name }}</p>
    </div>
    <audio ref="audio" autoplay>
      <source type="audio/mpeg" />
    </audio>
    <div class="player__mainSettings">
      <svg>
        <use href="#previous" />
      </svg>
      <svg @click="togglePlay">
        <use :href="playing ? '#pause' : '#play'" />
      </svg>
      <svg>
        <use href="#next" />
      </svg>
    </div>
    <div class="player__soundSettings">
      <svg @click="isMuted">
        <use :href="muted ? '#soundoff' : '#soundon'" />
      </svg>
      <input
        class="player__soundSlider"
        ref="slider"
        type="range"
        min="0"
        max="100"
        step="1"
        value="50"
        @input="updateVolume"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "AudioPlayer",
  props: {
    source: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      playing: false,
      muted: false,
      volume: 0,
    };
  },
  computed: {
    audio() {
      return this.$refs["audio"];
    },
    slider() {
      return this.$refs["slider"];
    },
  },
  methods: {
    togglePlay() {
      if (!this.audio.paused && !this.audio.ended) {
        this.audio.pause();
        this.playing = false;
      } else {
        this.audio.play();
        this.playing = true;
      }
    },
    updateVolume: function(e) {
      this.volume = e.target.value;
      console.log(this.volume, this.audio.volume);
      this.audio.volume = this.volume / 100;
      this.volume == 0 ? (this.muted = true) : (this.muted = false);
    },
    isMuted() {
      this.muted = !this.muted;
      let volumeNow = this.audio.volume * 100;
      if (this.audio.muted != true) {
        this.audio.muted = true;
        this.slider.value = 0;
      } else {
        this.audio.muted = false;
        this.slider.value = volumeNow;
      }
    },
  },
  watch: {
    source: function(newProps, oldProps) {
      this.audio.src = newProps;
      this.togglePlay();
    },
  },
};
</script>

<style lang="scss" scoped>
svg,
input {
  cursor: pointer;
}

@keyframes slide {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}

.player {
  width: 800px;
  height: 300px;
  border: 1px solid red;
  top: 270px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.player__titleContainer {
  overflow-x: hidden;
  width: 80%;
  margin-bottom: 16px;
}

.player__title {
  color: $primary-white;
  animation: 10s linear 1s infinite running slide;
}

.player__mainSettings {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;

  svg {
    width: 50px;
    height: 50px;

    &:nth-child(2) {
      width: 70px;
      height: 70px;
      margin: 0px 24px;
    }
  }
}

.player__soundSettings {
  display: flex;
  align-items: center;

  svg {
    width: 24px;
    height: 24px;
    fill: #ae8908;
  }
}

.player__soundSettings input {
  -webkit-appearance: none; /* reset default style for chrome */
  -moz-appearance: none; /* reset default style for mozz */
  outline: none;
  background-color: transparent;
  margin-left: 16px;
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
  border: 1px solid #ae8908;
  border-radius: 50%;
  padding: 4px;
  background: #ae8908;
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
  background: #ae8908;
  margin-top: -3px;
}
</style>
