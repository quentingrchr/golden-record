<template>
  <div>
    <nav class="menu" :class="isMenuOpen ? 'isOpen' : null">
      <ul></ul>
    </nav>
    <div class="navBar">
      <div
        class="navBar__item navBar__item--volume"
        :class="isVolumeOff ? 'volumeOff' : null"
        @click="toggleVolume"
      >
        <BaseIcon class="iconVolume" href="sound" />
      </div>
      <div class="navBar__item navbar__item--chapterTitle">
        <p>TEXT ACTUEL</p>
      </div>
      <div
        class="navBar__item navBar__item--burgerMenu"
        :class="isMenuOpen ? 'menuOpen' : null"
        @click="toggleOpenMenu"
      >
        <div class="burgerMenu__icon"></div>
      </div>
      <Icons class="iconGenerator" />
    </div>
  </div>
</template>

<script>
import Icons from '@/components/Icons.vue';
import BaseIcon from '@/components/BaseIcon.vue';
export default {
  data() {
    return {
      isVolumeOff: false,
      isMenuOpen: false,
    };
  },
  components: {
    Icons,
    BaseIcon,
  },
  methods: {
    toggleVolume() {
      this.isVolumeOff = !this.isVolumeOff;
    },
    toggleOpenMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  top: 0;
  left: 0;
  background-color: $mobile-background;
  width: 100%;
  height: 90vh;
  transform: translateX(100%);
  transition: transform 0.2s;

  &.isOpen {
    transform: none;
  }
}

.navBar {
  position: fixed;
  display: flex;
  bottom: 0;
  width: 100%;
  height: 10vh;
  background-color: $mobile-background;
  border-top: 1px solid $primary-white;

  & .navBar__item {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:nth-child(2) {
      width: 60%;
    }
  }
}

.iconVolume {
  fill: $primary-white;
  width: 20px;
  height: 20px;
}

.navBar__item--volume {
  position: relative;
  &.volumeOff::after {
    position: absolute;
    content: '';
    display: block;
    width: 50%;
    height: 3px;
    background-color: $primary-white;
    border: 0.1px solid $mobile-background;
    transform: rotate(-45deg);
  }
}

.navBar__item--burgerMenu {
  border-left: 0.5px solid $primary-white;

  &.menuOpen {
    & .burgerMenu__icon {
      transform: rotate(-45deg);

      &::after {
        opacity: 0;
      }
      &::before {
        transform: rotate(90deg) translateX(10px);
      }
    }
  }
}

.burgerMenu__icon {
  position: relative;
  width: 25px;
  height: 2px;
  background-color: $primary-white;
  transition: transform 0.2s;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 10px;
    width: 100%;
    height: 100%;
    background-color: $primary-white;
  }
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: -10px;
    width: 100%;
    height: 100%;
    background-color: $primary-white;
  }
}
</style>
