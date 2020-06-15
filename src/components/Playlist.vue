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
  width: 18vw;
  padding: 3vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: $primary-white;

  &--isFocus {
    box-shadow: inset 5px 5px 10px #0e0d14, inset -5px -5px 10px #1a1924;
    border-radius: 10px;
  }
}

h3 {
  @include media_tablet {
    font-size: 24px;
  }
}

button {
  height: 100px;
  margin: 5vh 0;
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

  @include media_mobile {
    height: 72px;
  }
}

svg {
  width: 88px;
  height: 88px;

  @include media_mobile {
    height: 64px;
    width: 64px;
  }
}

p {
  font-size: 1rem;

  &:first-child {
    margin-bottom: 2vh;
  }

  @include media_tablet {
    font-size: 0.8rem;
  }

  @include media_mobile {
    min-width: 20vw;
  }
}
</style>
