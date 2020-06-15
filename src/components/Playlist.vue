<template>
  <div
    class="playlist"
    :class="hovering ? 'playlist--isHover' : ''"
    @mouseenter="showOverlay"
    @mouseleave="resetOverlay"
    @click="selectPlaylist"
  >
    <h3>{{ playlistName }}</h3>
    <button @click="selectPlaylist">
      <svg>
        <use :href="'#' + playlistName" />
      </svg>
    </button>
    <div class="paylist__infoContainer">
      <p v-if="!hovering">{{ playlistInfo1 }}</p>
      <p v-if="!hovering">{{ playlistInfo2 }}</p>
      <h4 v-else class="playlist__textOverlay">
        <span>CLICK</span>
        <br />
        on the logo to play a random song of {{ playlistName }}'s playlist
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "Playlist",
  props: {
    playlistName: {
      type: String,
      Required: true,
    },
    playlistInfo1: {
      type: String,
      Required: true,
    },
    playlistInfo2: {
      type: String,
      Required: true,
    },
  },
  data() {
    return {
      isHover: false,
    };
  },
  computed: {
    hovering() {
      return this.isHover;
    },
  },
  methods: {
    selectPlaylist() {
      this.$emit("select-playlist");
    },
    showOverlay() {
      this.isHover = true;
    },
    resetOverlay() {
      this.isHover = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.playlist {
  width: 20vw;
  padding: 3vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: $primary-white;
  cursor: pointer;
  transition: all 0.2s;

  &--isFocus {
    border-radius: 10px;
    background-color: $secondary-light-grey-blue;
    transform: translateY(2vh);
  }

  &:hover {
    background-color: $secondary-light-grey-blue;
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
  background-color: transparent;
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

.playlist__textOverlay {
  line-height: 150%;

  span {
    font-weight: bold;
  }
}
</style>
