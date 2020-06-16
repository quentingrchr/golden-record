<template>
  <div
    class="playlist"
    @mouseenter="showOverlay"
    @mouseleave="resetOverlay"
    @click="selectPlaylist"
  >
    <h3>{{ playlistName }}</h3>
    <button>
      <svg>
        <use
          :href="hovering ? '#' + playlistName + 'Reverse' : '#' + playlistName"
        />
      </svg>
    </button>
    <div class="paylist__infoContainer">
      <p v-if="!hovering">{{ playlistInfo1 }}</p>
      <p v-if="!hovering">{{ playlistInfo2 }}</p>
      <h4 v-else class="playlist__textOverlay">
        <span>CLICK</span>
        <br />
        on the playlist to play a random song of {{ playlistName }}'s playlist.
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

  &:hover {
    border-radius: 8px;
    background-color: $primary-white;
    opacity: 0.6;

    h3,
    h4 {
      color: $primary-darkblue;
    }
  }

  &--isFocus {
    border-radius: 8px;
    background-color: $primary-white;
    opacity: 0.6;
    transform: translate(1vw, 2vh);

    h3,
    p {
      color: $primary-darkblue;
    }
  }
}

h3 {
  @include media_tablet {
    font-size: 24px;
  }
}

button {
  height: 100px;
  margin: 3vh 0;
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
    background-color: $primary-white;
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
  user-select: none;

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
  color: $primary-darkblue;

  span {
    font-weight: 900;
    font-size: 24px;
  }
}
</style>
