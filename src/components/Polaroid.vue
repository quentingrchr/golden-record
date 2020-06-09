<template>
  <figure
    ref="pola"
    @mouseenter="handleHover"
    @mouseleave="handleHover"
    @click="handleClick()"
    :style="
      isClicked
        ? {
            transform: `translate(${0}px, 0px) rotate(0deg)`,
            zIndex: 11,
          }
        : null
    "
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
    handleHover() {
      this.isHovered = !this.isHovered;
    },
    handleClick() {
      this.isClicked = !this.isClicked;
      this.element.left = this.$refs.pola.getBoundingClientRect().left;
      this.element.top = this.$refs.pola.getBoundingClientRect().top;
      this.element.height = this.$refs.pola.getBoundingClientRect().height;
      this.element.width = this.$refs.pola.getBoundingClientRect().width;
    }
  },
  data: function() {
    return {
      isClicked: false,
      zIndex: {
        zIndex: 11
      },
      window: {
        h: window.innerHeight,
        w: window.innerWidth
      },
      element: {
        left: null,
        top: null,
        width: null,
        height: null
      }
    };
  },
  props: {
    src: {
      required: true,
      type: String
    },
    caption: {
      required: true,
      type: String
    }
  },
  mounted() {
    console.log(this.$refs);
  }
};
</script>

<style lang="scss" scoped>
.pola {
  position: absolute;
  transform-origin: center;
  transition: all 1s;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: $primary-white;
  border-radius: 4px;
  max-height: 280px;

  &__img {
    width: 200px;
    border-radius: 5px;
    overflow: hidden;
  }
  &__caption {
    margin-bottom: 24px;
    font-weight: 700;
  }
}
</style>
