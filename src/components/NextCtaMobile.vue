<template>
  <button class="cta">{{ text }} -></button>
</template>

<script>
export default {
  components: {},
  props: {
    text: {
      type: String,
      default: "Lorem Ipsum",
    },
  },
};
</script>

<style scoped lang="scss">
.cta {
  transform-origin: center;
  overflow: hidden;
  font-family: Product Sans;
  width: fit-content;
  padding: 5px 15px;
  background-color: $primary-white;
  color: $primary-darkblue;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  border: 3px solid transparent;
  box-shadow: 0px 5px 16px rgba(0, 0, 0, 0.5);
  transition: background-color 0.2s ease, color 0.2s ease,
    transform 0.2s cubic-bezier(1, -0.27, 0.15, 1.43);

  &:active {
    transform: skewY(-5deg);

    box-shadow: 0px 5px 16px rgba(0, 0, 0, 0.5);
    background-color: $primary-darkblue;
    color: $primary-white;

    em {
      display: inline-block;
      transform: translateX(-3px);
    }
  }

  &:focus {
    outline-color: $primary-darkblue;
    outline-offset: -30px;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
    transform: skewY(-5deg);
    border: 3px solid $primary-white;
  }

  p {
    font-family: inherit;
  }
}
</style>
