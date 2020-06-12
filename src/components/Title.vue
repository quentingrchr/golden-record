<template>
  <div>
    <h2>{{ text }}</h2>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    text: {
      type: String,
      Required: true
    }
  }
};
</script>

<style lang="scss" scoped>
h2 {
  display: inline-block;
  color: $primary-white;
  position: relative;

  @include media_tablet {
    font-size: 32px;
  }

  @include media_mobile {
    font-size: 24px;
  }
}

h2::after {
  content: "";
  width: 150%;
  height: 4px;
  background-color: $primary-white;
  position: absolute;
  top: 50px;
  left: 0px;

  @include media_tablet {
    top: 32px;
  }

  @include media_mobile {
    top: 24px;
  }
}
</style>
