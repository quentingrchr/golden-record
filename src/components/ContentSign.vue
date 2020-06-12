<template>
  <div
    v-on="$listeners"
    :class="contentRight ? 'Use__text--right' : 'Use__text--left'"
    class="Use__text"
  >
    <p class="Use__title">{{ title }}</p>
    <BaseIcon class="Use__plus" href="#plus" />
  </div>
</template>

<script>
import BaseIcon from "@/components/BaseIcon.vue";

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    contentRight: {
      type: Boolean,
      required: true
    }
  },
  components: {
    BaseIcon
  }
};
</script>

<style lang="scss">
.Use {
  &__text {
    height: 18%;
    width: 73%;
    display: flex;
    align-items: center;
    position: absolute;

    @include media_tablet {
      width: 75%;
    }

    &--left {
      top: 65%;
      left: 55%;

      @include media_tablet {
        top: 65%;
        left: 40%;
      }
    }

    &--right {
      top: 55%;
      right: 55%;

      @include media_tablet {
        top: 65%;
        right: 40%;
      }
    }
  }

  &__plus {
    width: 20px;
    height: 20px;
    margin-left: 10px;
  }
}
</style>