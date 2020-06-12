<template>
  <div class="header__container">
    <Title class="header__title" :text="text" />
  </div>
</template>

<script>
import Title from "../components/Title";
export default {
  name: "Header",
  props: {
    text: {
      type: String,
      Required: true
    }
  },
  components: {
    Title
  }
};
</script>

<style lang="scss" scoped>
.header {
  &__container {
    width: 100%;
    height: 10vh;
    padding: 5vh 10vw 2vh 10vw;
    margin-bottom: 5vh;
    display: flex;
    align-items: center;
  }
  &__title {
    position: relative;
    z-index: 10;
  }
}
</style>
