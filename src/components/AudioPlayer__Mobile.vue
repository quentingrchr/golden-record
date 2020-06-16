<template>
  <div class="player">
    <audio ref="audio" autoplay @playing="isPlaying" @ended="isFinish">
      <source type="audio/mpeg" />
    </audio>
    <svg class="player__svgPlay" @click="togglePlay">
      <use :href="playing ? '#pause' : '#play'" />
    </svg>
    <svg class="player__svgNext" @click="nextMusic">
      <use href="#next" />
    </svg>
    <div class="player__titleContainer">
      <p class="player__title">
        {{ name }}
      </p>
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
      playing: true,
    };
  },
  computed: {
    audio() {
      return this.$refs["audio"];
    },
  },
  methods: {
    togglePlay() {
      if (!this.audio.paused && !this.audio.ended) {
        this.audio.pause();
        this.playing = false;
      } else {
        this.audio.play();
        this.audio.volume = 0.25;
        this.playing = true;
      }
    },
    nextMusic() {
      this.$emit("next-music");
    },
    isFinish() {
      return (this.playing = false);
    },
    isPlaying() {
      return (this.playing = true);
    },
  },
  watch: {
    source: function(newProps, oldProps) {
      this.audio.src = newProps;
    },
  },
};
</script>

<style lang="scss" scoped>
svg,
input {
  cursor: pointer;
}

.player {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  opacity: 0;

  &--isFocus {
    opacity: 1;
  }

  &__svgPlay {
    width: 48px;
    height: 48px;
  }

  &__svgNext {
    width: 40px;
    height: 40px;
    margin: 0 3vh;
  }

  &__titleContainer {
    padding: 0.5vh 0;
    overflow-x: hidden;
  }

  &__title {
    width: 100%;
    display: inline-block;
    color: $primary-white;
    font-size: 0.7rem;
    user-select: none;
    text-align: initial;
  }

  &__soundSettings {
    margin: 0 4vw 0 2vw;
    display: flex;
    align-items: center;

    svg {
      width: 24px;
      height: 24px;
      fill: #ae8908;
    }
  }
}
</style>
