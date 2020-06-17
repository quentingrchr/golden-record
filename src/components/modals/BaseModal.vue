<template>
  <div class="modal">
    <BaseIcon class="modal__aroundIcon" href="#frame" />
    <BaseIcon class="modal__icon" :href="content.symbol" />
    <div class="modal__content">
      <h2 class="modal__title">{{ content.title }}</h2>
      <br />
      <p class="modal__text">{{ content.text1 }}</p>
      <br />
      <p class="modal__text">{{ content.text2 }}</p>
    </div>
    <BaseIcon class="modal__close" href="#close" @click="closeModal" />
  </div>
</template>

<script>
import BaseIcon from "@/components/BaseIcon";
import EventBus from "@/EventBus";

export default {
  name: "BaseModal",
  components: {
    BaseIcon
  },
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  methods: {
    closeModal() {
      EventBus.$emit("close");
    }
  }
};
</script>

<style lang="scss">
.modal {
  width: 70%;
  height: 70%;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: rgba(#494949, 1);
  color: $primary-white;
  border-radius: 5px;

  @include media_tablet {
    width: 60%;
    height: 35%;
  }

  &__icon {
    stroke: $primary-white;
    fill: none;
    width: 30%;
    height: 40%;
    margin-left: 10%;
  }

  &__aroundIcon {
    position: absolute;
    stroke: $primary-white;
    height: 100%;
    width: 93%;
    top: -2%;

    @include media_tablet {
      width: 80%;
      height: 100%;
      top: -3%;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 50%;
    height: 50%;
    margin-left: 8%;

    @include media_tablet {
      width: 45%;
      height: 70%;
    }
  }

  &__title {
    transform: translateX(-5%);
    @include media_desktop {
      font-size: 30px;
    }

    @include media_tablet {
      font-size: 18px;
    }
  }

  &__text {
    text-align: start;
    width: 95%;
    @include media_desktop {
      font-size: 17px;
    }

    @include media_tablet {
      font-size: 8.5px;
    }
  }

  &__close {
    cursor: pointer;
    position: absolute;
    width: 30px;
    height: 30px;
    fill: $primary-white;
    right: 30px;
    top: 25px;
    transition: ease 0.3s;

    &:hover {
      transform: scale(1.2);
    }

    @include media_tablet {
      width: 20px;
      height: 20px;
      top: 10px;
      right: 20px;
    }
  }
}
</style>
