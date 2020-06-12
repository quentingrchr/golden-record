<template>
  <div 
    @click="openModal"
    v-on="$listeners"
    class="Use__symbol"
  >
    <slot name="left"></slot>
    <BaseIcon class="Use__svg" 
      :href="nameIcon"
    />
    <slot name="right"></slot>
    <Icon/>
  </div>
</template>

<script>
import EventBus from '@/EventBus';
import BaseIcon from '@/components/BaseIcon.vue';
import Icon from '@/components/Icons.vue';

export default {
  props:{
    nameIcon:{
      type: String,
      required: true,
    },
  },  
  components:{
    BaseIcon,
    Icon
  },
  methods: {
    openModal() {
      EventBus.$emit("open", {
        component: "BaseModal",
        content: {
          icon: this.nameIcon,
          description: "Hello i am description i waiting for data ok so don't forget bro",
          title: "Hello I a waiting for Title"
        }
      });
    },
  },
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
    cursor: pointer;

    @include media_tablet{
      height: 40%;
    }

    &:hover {
      opacity: 1;
      filter: drop-shadow(0px 0px 2px rgba(255, 255, 255, 0.8));
    }
  }


    &__title {
    font-family: 'Product Sans Regular';
    font-size: 20px;
    color: $primary-white;

    @include media_tablet {
      font-size: 16px;
    }
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
    // border: 1px solid yellow;
    fill: none;

    @include media_tablet {
      width: 55%;
      height: 50%;
    }
  }
}
</style>