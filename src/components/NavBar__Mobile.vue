<template>
  <div>
    <nav class="menu" :class="isMenuOpen ? 'isOpen' : null">
      <ul>
        <li
          v-for="(title, index) in titles"
          :class="actualSelectedPage - 1 === index ? 'isSelected' : null"
          :key="index"
          @click="jumpToChapter(index)"
        >
          {{ title }}
        </li>
      </ul>
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
        <p>{{ titles[actualSelectedPage - 1] }}</p>
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
import { titles } from "../constants";
import Icons from "@/components/Icons.vue";
import BaseIcon from "@/components/BaseIcon.vue";
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
  props: {
    titles: {
      type: Array,
      required: true,
    },
    actualSelectedPage: {
      type: Number,
      required: true,
    },
  },
  methods: {
    toggleVolume() {
      this.isVolumeOff = !this.isVolumeOff;
    },
    toggleOpenMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    jumpToChapter(index) {
      this.$emit("getSelectedPageIndex", index);
      this.isMenuOpen = false;
      window.scrollTo({
        top: 0,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  z-index: 700;
  top: 0;
  left: 0;
  background-color: $mobile-background;
  width: 100%;
  height: 90%;
  transform: translateX(100%);
  transition: transform 0.3s;

  &.isOpen {
    transform: none;
  }

  & ul {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    height: 100%;
    color: $primary-white;
    margin-left: 10vw;
    border-left: 0.5px solid $primary-white;

    & li {
      display: flex;
      align-items: center;
      opacity: 0.7;

      &::before {
        content: "";
        display: block;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        border: 1px solid $primary-white;
        margin: 0 40px;
      }

      &.isSelected {
        font-size: 1.1rem;
        font-weight: bold;
        opacity: 1;

        &::before {
          background-color: $primary-white;
          transform: scale(1.2);
        }
      }
    }
  }
}

.navBar {
  z-index: 100;
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

.navbar__item--chapterTitle {
  color: $primary-white;
  font-weight: bold;
}

.navBar__item--volume {
  position: relative;
  &.volumeOff::after {
    position: absolute;
    content: "";
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
  transition: transform 0.3s;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 10px;
    width: 100%;
    height: 100%;
    background-color: $primary-white;
  }
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: -10px;
    width: 100%;
    height: 100%;
    background-color: $primary-white;
  }
}
</style>
