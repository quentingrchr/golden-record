<template>
  <div class="playlist" @click="selectPlaylist">
    <button>
      <svg>
        <use :href="'#' + playlistName" />
      </svg>
    </button>
    <h3>{{ playlistName }}</h3>
  </div>
</template>

<script>
export default {
  name: "Playlist",
  props: {
    playlistName: {
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
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.playlist {
  width: 25vw;
  padding: 1vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: $primary-white;
  transition: border-radius 1s, opacity 0.2s;

  &--isFocus {
    border-radius: 5px;
    background-color: $primary-white;
    opacity: 0.6;

    h3 {
      color: $primary-darkblue;
    }

    button {
      height: 66px;
      background-color: $primary-darkblue;

      svg {
        animation: rotate 3.6s 0.5s linear infinite;
      }
    }
  }
}

svg {
  width: 54px;
  height: 54px;
}

h3 {
  font-size: 18px;
  margin-top: 2vh;
}

button {
  height: 54px;
  border: none;
  outline: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: transparent;
  overflow: hidden;
  transition: height 0.5s;

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
    outline: none;
    transition: 0s;
    opacity: 1;
    transform: translate(-50%, -50%) scale(0);
  }
}
</style>
