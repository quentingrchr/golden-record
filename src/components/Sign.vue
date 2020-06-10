<template>
  <div class="Use__symbol">
    <slot name="left"></slot>
    <BaseIcon class="Use__svg" 
    :href="nameIcon" 
    />
    <slot name="right"></slot>
    <Icon/>
  </div>
</template>

<script>
import BaseIcon from '@/components/BaseIcon.vue'
import Icon from '@/components/Icons.vue'

export default {
  props:{
    nameIcon:{
      type: String,
      required: true
    }
  },
  components:{
    BaseIcon,
    Icon
  }
}
</script>

<style lang='scss'>
.Use{
  &__symbol {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    // border: 1px solid red;
    height: 40%;
    opacity: 0.3;

    &:hover {
      opacity: 1;
    }
  }


    &__title {
    font-family: 'Product Sans Regular';
    font-size: 20px;
    color: $primary-white;
  }

    &__plus {
    width: 20px;
    height: 20px;

    &--left {
      margin-left: 10px;
    }
  }

  &__svg {
    width: 140px;
    height: 120px;
    stroke: $primary-white;
    fill: none;
  }
}
</style>