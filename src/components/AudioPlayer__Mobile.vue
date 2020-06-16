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
  </div>
</template>

<script>
export default {
  name: "AudioPlayer",
  props: {
    source: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      playing: true
    };
  },
  computed: {
    audio() {
      return this.$refs["audio"];
    }
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
    }
  },
  watch: {
    source: function(newProps, oldProps) {
      this.audio.src = newProps;
    }
  }
};
</script>

<style lang="scss" scoped>
svg,
input {
  cursor: pointer;
}

.player {
  width: 50%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-8vh);
  opacity: 0;
  transition: all 2s;

  &--isFocus {
    transform: translateY(0vh);
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
}
</style>
