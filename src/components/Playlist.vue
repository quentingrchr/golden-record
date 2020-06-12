<template>
  <div class="playlist">
    <h3>{{ playlistName }}</h3>
    <button @click="selectPlaylist">
      <svg>
        <use :href="'#' + playlistName" />
      </svg>
    </button>
    <div class="paylist__infoContainer">
      <p>{{ playlistInfo1 }}</p>
      <p>{{ playlistInfo2 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Playlist",
  props: {
    playlistName: {
      type: String,
      Required: true
    },
    playlistInfo1: {
      type: String,
      Required: true
    },
    playlistInfo2: {
      type: String,
      Required: true
    }
  },
  methods: {
    selectPlaylist() {
      this.$emit("select-playlist");
    }
  }
};
</script>

<style lang="scss" scoped>
.playlist {
  width: 270px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: $primary-white;

  &--isFocus {
    height: 200px;
    overflow: hidden;
    position: absolute;
    left: 80%;
  }

  &--isFocusIndex {
    position: absolute;
    left: 50%;
  }
}

button {
  min-height: 104px;
  margin: 40px 0;
  border: none;
  outline: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 50%;
    border-radius: 50%;
    background-color: $primary-darkblue;
    opacity: 0;
    transform: translate(-50%, -50%) scale(1);
    transition: transform 1s, opacity 1s;
  }

  &:active::before {
    transition: 0s;
    opacity: 1;
    transform: translate(-50%, -50%) scale(0);
  }
}

svg {
  width: 104px;
  height: 104px;
}

p {
  font-size: 16px;

  &:first-child {
    margin-bottom: 16px;
  }
}
</style>

var wavesurfer = WaveSurfer.create({ container:
document.querySelector('#waveform'), waveColor: '#D9DCFF', progressColor:
'#4353FF', cursorColor: '#4353FF', barWidth: 3, barRadius: 3, cursorWidth: 1,
height: 200, barGap: 3 });


<!-- <AudioPlayer
        class="audio__controller"
        :isPlaying="audioSettings.isPlaying"
        :isMuted="audioSettings.isMuted"
        @click-play="togglePlay"
        @click-mute="toggleMute"
        @change-volume="updateVolume"
      />-->

      <div id="waveform"></div>

