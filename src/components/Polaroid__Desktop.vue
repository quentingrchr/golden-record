<template>
  <figure @click="handleClick(index)" :class="isFocused ? 'is-focused' : ''" class="pola">
    <figcaption class="pola__caption">{{ caption }}</figcaption>
    <div class="pola__img">
      <img :src="imgUrl" alt="team member" />
      <video autoplay loop muted :src="vidUrl" type="video/mp4">
        <source :src="vidUrl" type="video/mp4" />Your browser doesn't support the video player
      </video>
    </div>
  </figure>
</template>

<script>
export default {
  name: "Polaroid",

  components: {},
  methods: {
    handleClick(index) {
      this.$emit("focused", index);
      this.$emit("play-click", index);
    }
  },
  data: function() {
    return {
      zIndex: {
        zIndex: 11
      }
    };
  },
  props: {
    isFocused: {
      type: Boolean
    },
    imgUrl: {
      required: true,
      type: String
    },
    vidUrl: {
      type: String
    },
    caption: {
      type: String
    },
    index: {
      type: Number
    }
  }
};
</script>

<style lang="scss" scoped>
.pola {
  &:not(:hover) {
    &:not(.focusMode) {
      & .pola__caption {
        font-family: Product sans;
        opacity: 0.7;
      }
      img {
        filter: blur(0.7px);
      }
    }
  }

  &.is-focused {
    & .pola__caption {
      font-family: Product sans;
      opacity: 1;
    }
    img {
      filter: blur(0px);
    }
  }

  position: absolute;
  transform-origin: center;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: $primary-white;
  border-radius: 4px;
  height: 420px; // Constante !
  cursor: pointer;

  &__img {
    width: 300px;
    border-radius: 5px;
    overflow: hidden;
    position: relative;

    img {
      width: 300px;
      border-radius: 5px;
      transition: filter 0.3s ease, transform 10s, opacity 0.1s ease;
    }
    video {
      transition: opacity 0.1s;
      visibility: hidden;
      height: 300px;
      border-radius: 5px;
      opacity: 0;
    }
  }
  &__caption {
    font-family: Product sans;
    margin-bottom: 24px;
    font-size: 18px;
    font-weight: 700;
  }

  &.is-focused {
    cursor: initial;
    img {
      transition: opacity 1s 3s ease;
      opacity: 0;
    }
    video {
      visibility: visible;
      transition: opacity 1s 3s ease;
      position: absolute;
      left: 0;
      opacity: 1;
      height: 300px;
      border-radius: 5px;
    }
  }
}
</style>
