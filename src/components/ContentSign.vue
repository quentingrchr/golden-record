<template>
  <div v-on="$listeners" :class="contentRight ? 'Use__text--right' : 'Use__text--left'" class="Use__text">
    <span class="Use__title">{{ title }}</span>
    <BaseIcon class="Use__plus" 
    href="#plus" 
    />
  </div>
</template>

<script>
import BaseIcon from '@/components/BaseIcon.vue'

export default {
  props:{
    title: {
      type: String,
      required: true
    },
    contentRight:{
      type: Boolean,
      required: true,
    }
  },
  components:{
    BaseIcon
  }
}
</script>

<style lang="scss">
.Use{
    &__text {
    height: 18%;
    width: 65%;
    display: flex;
    align-items: center;
    position: absolute;
    
    &__title {
      font-family: 'Product Sans Regular';
      font-size: 20px;
      color: $primary-white;
  }

    &--left {
      top: 60%;
      left: 55%;
    }

    &--right {
      top: 55%;
      right: 55%;
    }
  }

    &__plus {
    width: 20px;
    height: 20px;
    margin-left: 10px;
  }
}
</style>