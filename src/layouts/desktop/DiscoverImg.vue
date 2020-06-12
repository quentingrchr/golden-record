<template>
  <section class="visualContent">
    <Title class="visualContent__title" text="Visual content" />
    <div
      class="visualContent__images"
      :class="imagesApparition ? 'isVisible' : null"
      :style="position"
    >
      <div
        v-for="(image, index) in imgs"
        :key="index"
        @click="isSelected(image)"
      >
        <img :src="image" alt="One of the golden record pictures" />
      </div>
    </div>
    <div class="visualContent__overlays">
      <transition name="fade">
        <div class="overlay" v-if="selectedImage" @click="closeOverlay">
          <img :src="selectedImage" alt="One of the golden record pictures" />
        </div>
      </transition>
      <div class="borderEffect top"></div>
      <div
        class="borderEffect topOverlay"
        @mouseenter="setDirection('down')"
        @mouseleave="cancelDirection"
        @click="closeOverlay"
      ></div>
      <div
        class="borderEffect bottom"
        @mouseenter="setDirection('up')"
        @mouseleave="cancelDirection"
        @click="closeOverlay"
      ></div>
      <div
        class="borderEffect left"
        @mouseenter="setDirection('right')"
        @mouseleave="cancelDirection"
        @click="closeOverlay"
      ></div>
      <div
        class="borderEffect right"
        @mouseenter="setDirection('left')"
        @mouseleave="cancelDirection"
        @click="closeOverlay"
      ></div>
      <div
        class="borderEffect cornerTopRight"
        @mouseenter="setDirection('cornerTopRight')"
        @mouseleave="cancelDirection"
        @click="closeOverlay"
      ></div>
      <div
        class="borderEffect cornerTopLeft"
        @mouseenter="setDirection('cornerTopLeft')"
        @mouseleave="cancelDirection"
        @click="closeOverlay"
      ></div>
      <div
        class="borderEffect cornerBottomRight"
        @mouseenter="setDirection('cornerBottomRight')"
        @mouseleave="cancelDirection"
        @click="closeOverlay"
      ></div>
      <div
        class="borderEffect cornerBottomLeft"
        @mouseenter="setDirection('cornerBottomLeft')"
        @mouseleave="cancelDirection"
        @click="closeOverlay"
      ></div>
    </div>
  </section>
</template>

<script>
import Title from '@/components/Title.vue';
import { url } from '@/constants.js';

export default {
  data() {
    return {
      imgs: [],
      moveDirection: null,
      imagesApparition: false,
      position: {
        top: '-20%',
        left: '-20%',
      },
      selectedImage: null,
    };
  },
  components: {
    Title,
  },
  beforeCreate() {
    fetch(`${url}/query/visual_content`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) =>
        data.forEach((element) => {
          this.imgs.push(element.src);
        })
      );
  },

  beforeUpdate() {
    this.imagesApparition = true;
  },
  methods: {
    setDirection(value) {
      const imgContainer = document.querySelector('.visualContent__images');
      if (value === 'down') {
        this.position.top = '100px';
      } else if (value === 'right') {
        this.position.left = '170px';
      } else if (value === 'left') {
        this.position.left =
          (window.innerWidth - imgContainer.offsetWidth - 100).toString() +
          'px';
      } else if (value === 'up') {
        this.position.top =
          (window.innerHeight - imgContainer.offsetHeight - 80).toString() +
          'px';
      } else if (value === 'cornerTopRight') {
        this.position.top = '100px';
        this.position.left =
          (window.innerWidth - imgContainer.offsetWidth - 100).toString() +
          'px';
      } else if (value === 'cornerTopLeft') {
        this.position.left = '170px';
        this.position.top = '100px';
      } else if (value === 'cornerBottomRight') {
        this.position.top =
          (window.innerHeight - imgContainer.offsetHeight - 80).toString() +
          'px';
        this.position.left =
          (window.innerWidth - imgContainer.offsetWidth - 100).toString() +
          'px';
      } else if (value === 'cornerBottomLeft') {
        this.position.top =
          (window.innerHeight - imgContainer.offsetHeight - 80).toString() +
          'px';
        this.position.left = '170px';
      }
    },
    cancelDirection() {
      const imgContainer = document.querySelector('.visualContent__images');
      const top = imgContainer.offsetTop + 'px';
      const left = imgContainer.offsetLeft + 'px';
      this.position.top = top;
      this.position.left = left;
    },
    isSelected(image) {
      this.selectedImage = image;
    },
    closeOverlay() {
      this.selectedImage = null;
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
}

.visualContent__title {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 20px 150px;
}

.visualContent__images {
  position: absolute;
  width: 220%;
  height: 250%;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  grid-gap: 10px;
  opacity: 0;
  transition: all 2s ease-in, opacity linear 0.5s 3s;

  &.isVisible {
    opacity: 1;
  }

  filter: contrast(120%);

  & div {
    cursor: pointer;
    opacity: 0.6;
    transition: all 0.3s;
    overflow: hidden;

    & img {
      width: 100%;
    }
    &:hover {
      opacity: 1;
    }
  }
}

.overlay {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);

  & img {
    width: 50%;
    max-width: 400px;
    max-height: 70%;
    z-index: 3;
  }
}

.borderEffect {
  position: absolute;
  filter: blur(10px);

  &.bottom {
    width: 100%;
    height: 10vh;
    bottom: 0;
    background: linear-gradient(to top, black, transparent);
    cursor: s-resize;
  }

  &.top {
    width: 100%;
    height: 10vh;
    top: 0;
    background: linear-gradient(black, transparent);
  }

  &.topOverlay {
    z-index: 3;
    width: 100%;
    height: 10vh;
    top: 0;
    cursor: n-resize;
  }

  &.left {
    height: 100vh;
    width: 10vw;
    left: 60px;
    top: 0;
    background: linear-gradient(to right, black, transparent);
    cursor: w-resize;
  }
  &.right {
    height: 100vh;
    width: 10vw;
    right: 0;
    top: 0;
    background: linear-gradient(to left, black, transparent);
    cursor: e-resize;
  }
  &.cornerTopRight {
    z-index: 4;
    height: 10vh;
    width: 10vw;
    top: 0;
    right: 0;
    cursor: ne-resize;
  }
  &.cornerTopLeft {
    z-index: 4;
    height: 10vh;
    width: 20vw;
    top: 0;
    left: 0;
    cursor: nw-resize;
  }
  &.cornerBottomRight {
    z-index: 2;
    height: 10vh;
    width: 10vw;
    bottom: 0;
    right: 0;
    cursor: se-resize;
  }
  &.cornerBottomLeft {
    z-index: 2;
    height: 10vh;
    width: 20vw;
    bottom: 0;
    left: 0;
    cursor: sw-resize;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
