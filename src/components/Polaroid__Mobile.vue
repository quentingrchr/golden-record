<template>
  <figure
    @click="handleClick(index)"
    :class="isFocused ? 'is-focused' : ''"
    class="pola"
  >
    <figcaption class="pola__caption">{{ caption }}</figcaption>

    <img class="pola__img" :src="imgUrl" alt="team member" />

    <p class="pola__desc">{{ description }}</p>
  </figure>
</template>

<script>
export default {
  name: 'Polaroid',

  components: {},

  methods: {
    handleClick(index) {
      this.$emit('focused', index);
    },
  },
  data: function() {
    return {
      isClicked: false,
      zIndex: {
        zIndex: 11,
      },
    };
  },
  props: {
    isFocused: {
      type: Boolean,
    },
    imgUrl: {
      required: true,
      type: String,
    },
    caption: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
    },
  },
};
</script>

<style lang="scss" scoped>
.pola {
  &:not(:hover) {
    & .pola__caption {
      opacity: 0.7;
    }
    img {
      filter: blur(0.7px);
    }
  }

  &.focused {
    & .pola__caption {
      opacity: 1;
    }
    img {
      filter: blur(0px);
    }
  }

  color: $primary-darkblue;
  position: absolute;
  transform-origin: center;

  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: $primary-white;
  border-radius: 4px;
  height: 200px; // Constante !

  &__img {
    width: 140px;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    border-radius: 5px;
    transition: filter 0.3s ease, transform 10s, opacity 0.1s ease;
  }
  &__caption {
    margin-bottom: 24px;
    font-size: 18px;
    font-weight: 700;
  }

  &__desc {
    height: 0px;
    width: 0px;
    overflow: hidden;
    font-size: 10px;
    transition: height 0.3s ease, width 0.3s ease;
  }

  &.is-focused {
    height: 300px;

    .pola__desc {
      margin-top: 10px;
      height: 100px;
      width: 140px;
      overflow: scroll;
    }
  }
}
</style>
