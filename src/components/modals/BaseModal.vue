<template>
  <div class="modal">
    <BaseIcon 
      class="modal__icon"
      :href="content.icon"
    />
    <div class="modal__content">
      <h1>{{ content.title }}</h1>
      <p>{{ content.description }}</p>
    </div>
    <p class="modal__close" @click="closeModal">X</p>
  </div>
</template>

<script>
import BaseIcon from "@/components/BaseIcon";
import EventBus from "@/EventBus";

export default {
  name: "BaseModal",
  components: {
    BaseIcon,
  },
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  methods: {
    closeModal() {
      EventBus.$emit("close")
    },
  },
};
</script>

<style lang="scss">
  .modal{
    width: 70vw;
    height: 80vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: $primary-white;

    &__icon{
      stroke: $primary-white;
      fill: none;
      width: 300px;
      height: 40%;
    }

    &__content{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 50%;
      height: 50%;
    }

    &__close{
      cursor: pointer;
      position: absolute;
      right: 30px;
      top: 10px;
      font-size: 48px;
    }
  }

</style>