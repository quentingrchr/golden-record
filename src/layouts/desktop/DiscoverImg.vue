<template>
  <section class="visualContent">
    <Header class="visualContent__title" :text="title" />
    <div class="visualContent__images" :style="position" ref="imageContainer">
      <div
        v-for="(image, index) in imgs"
        :key="index"
        @click="isSelected(image)"
      >
        <img
          :src="image"
          alt="One of the golden record pictures"
          ref="lazyImage"
        />
      </div>
    </div>
    <div class="visualContent__overlays">
      <transition name="scale">
        <div class="loading-overlay" v-if="isLoading">
          <div class="stars"></div>
          <div class="loading-overlay__grid">
            <div v-for="img in fakeImgNumber" :key="img"></div>
          </div>
          <div
            class="loading-overlay__infos"
            :class="hideInfos ? 'isInvisible' : null"
          >
            <h3>
              The Golden Records disk contains 116 images supposed to represent
              the Humanity
            </h3>
            <p class="loading-overlay__instruction">
              Click on an image to enlarge it
            </p>
            <img src="./../../assets/logo/arrows.svg" />
          </div>
        </div>
      </transition>
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
import { titles } from '../../constants';
import Header from '@/components/Header.vue';
import { url } from '@/constants.js';
export default {
  data() {
    return {
      title: titles.page3,
      imgs: [],
      loadingDuration: 6500,
      moveDirection: null,
      isLoading: true,
      hideInfos: false,
      position: {
        top: '-20%',
        left: '-20%',
      },
      selectedImage: null,
    };
  },
  computed: {
    fakeImgNumber() {
      let fakesImg = [];
      for (let i = 0; i < 72; i++) {
        fakesImg.push(i);
      }
      return fakesImg;
    },
  },
  beforeCreate() {
    fetch(`${url}/query/visual_content`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        data.forEach((element) => this.imgs.push(element.src));
      });
  },
  components: {
    Header,
  },
  created() {
    setTimeout(() => {
      this.isLoading = false;
    }, this.loadingDuration);
    setTimeout(() => {
      this.hideInfos = true;
    }, this.loadingDuration - 100);
  },
  methods: {
    setDirection(value) {
      const imgContainer = this.$refs.imageContainer;
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
      const imgContainer = this.$refs.imageContainer;
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

.visualContent__images {
  position: absolute;
  width: 220%;
  height: 250%;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  grid-gap: 10px;
  transition: all 2s ease-in;
  -moz-transition: all 2s ease-in;

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

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin-left: 30px;

  & .loading-overlay__infos {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.isInvisible {
      display: none;
    }
    & h3 {
      font-size: 25px;
      color: $primary-white;
      width: 50%;
      line-height: 2rem;
      font-weight: 400;
      margin-bottom: 30px;
    }

    & .loading-overlay__instruction {
      font-size: 20px;
      font-weight: bold;
    }

    & img {
      margin-top: 70px;
      width: 20%;
    }
  }

  & .loading-overlay__grid {
    width: 100%;
    height: 100%;
    z-index: 5;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    background-image: url('./../../assets/img/patchwork.png');
    background-size: 100%;
    opacity: 0.2;

    @keyframes flashing {
      to {
        opacity: 0;
      }
    }
    & div {
      opacity: 1;
      background-color: $primary-darkblue;
      animation: flashing 1s forwards;

      @for $i from 1 through 72 {
        &:nth-child(#{$i}) {
          animation-delay: $i * 0.1s;
        }
      }
    }
  }

  .stars {
    z-index: 0;
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

  &.bottom {
    width: 100%;
    height: 20vh;
    bottom: 0;
    background: linear-gradient(to top, black, transparent);
    cursor: s-resize;
  }

  &.top {
    width: 100%;
    height: 20vh;
    top: 0;
    background: linear-gradient(black, transparent);
  }

  &.topOverlay {
    z-index: 3;
    width: 100%;
    height: 20vh;
    top: 0;
    cursor: n-resize;
  }

  &.left {
    height: 100vh;
    width: 20vw;
    left: 60px;
    top: 0;
    background: linear-gradient(to right, black, transparent);
    cursor: w-resize;
  }
  &.right {
    height: 100vh;
    width: 20vw;
    right: 0;
    top: 0;
    background: linear-gradient(to left, black, transparent);
    cursor: e-resize;
  }
  &.cornerTopRight {
    z-index: 4;
    height: 20vh;
    width: 20vw;
    top: 0;
    right: 0;
    cursor: ne-resize;
  }
  &.cornerTopLeft {
    z-index: 4;
    height: 20vh;
    width: 20vw;
    top: 0;
    left: 0;
    cursor: nw-resize;
  }
  &.cornerBottomRight {
    z-index: 2;
    height: 20vh;
    width: 20vw;
    bottom: 0;
    right: 0;
    cursor: se-resize;
  }
  &.cornerBottomLeft {
    z-index: 2;
    height: 20vh;
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
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s;
}
.scale-enter,
.scale-leave-to {
  transform: scale(5);
  opacity: 0;
}
</style>
