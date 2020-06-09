<template>
  <figure
    @click="handleClick(index)"
    :style="isClicked ? {} : null"
    class="pola"
  >
    <figcaption class="pola__caption">{{ caption }}</figcaption>
    <img class="pola__img" :src="src" alt="team member" />
  </figure>
</template>

<script>
export default {
  name: "Polaroid",

  components: {},
  methods: {
    handleClick(index) {
      // this.isClicked = !this.isClicked;
      this.$emit("focused", index);
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
    src: {
      required: true,
      type: String,
    },
    caption: {
      required: true,
      type: String,
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

  position: absolute;
  transform-origin: center;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: $primary-white;
  border-radius: 4px;
  height: 270px;
  max-height: 300px;

  &__img {
    width: 200px;
    border-radius: 5px;
    overflow: hidden;

    img {
      transition: filter 0.3s ease, transform 10s;
    }
  }
  &__caption {
    margin-bottom: 24px;
    font-weight: 700;
  }
}
</style>
