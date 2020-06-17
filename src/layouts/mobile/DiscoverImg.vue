<template>
  <section class="imagesMobile">
    <Header :text="titleChapter" />
    <h4 class="title title--sub" ref="test">Pictures</h4>
    <p class="imageExplications" :class="selectedImage ? 'opacity' : ''">
      The Golden Records disk contains 116 images supposed to represent
      the Humanity
    </p>
    <div class="imagesContainer" :class="scroll ? 'isScrolling' : null">
      <div
        class="imagesContainer__image"
        v-for="(image, index) in imgs"
        :key="index"
        :class="isInOddRow(index)"
        @click="select(image)"
      >
        <img
          :src-set="image"
          alt="one of golden pictures content"
          :ref="`image${isInOddRow(index)}`"
        />
      </div>
    </div>
    <div class="overlay" v-show="selectedImage" ref="overlay">
      <img :src="selectedImage" />
      <img
        class="close"
        src="./../../assets/logo/controller/close.svg"
        @click="closeOverlay"
        alt="close"
      />
    </div>
    <Cta nextChapter="Audio content" @goNextChapter="goNextChapter" />
  </section>
</template>

<script>
import Header from "@/components/Header.vue";
import Cta from "@/components/MobileCta.vue";
import { url } from "@/constants.js";
import { titles } from "@/constants.js";

export default {
  data() {
    return {
      titleChapter: titles.page3,
      imgs: [],
      scroll: false,
      isScrollingStop: null,
      prevScrollY: null,
      selectedImage: null
    };
  },
  components: {
    Header,
    Cta
  },
  beforeCreate() {
    fetch(`${url}/query/visual_content`, {
      method: "GET"
    })
      .then(response => response.json())
      .then(data =>
        data.forEach(element => {
          this.imgs.push(element.src);
          this.$nextTick(() => {
            this.loadImages();
          });
        })
      );
  },
  created() {
    window.scrollTo({
      top: 0
    });
    document.addEventListener("scroll", this.isScrolling);
  },
  destroyed() {
    window.removeEventListener("scroll", this.isScrolling);
  },
  computed: {
    dispachByRow() {
      const odd = [];
      for (let i = 0; i < this.imgs.length; i += 3) {
        odd.push(i);
      }
      return odd;
    }
  },
  methods: {
    select(image) {
      this.selectedImage = image;
      this.$refs.overlay.style.top = window.scrollY + "px";
    },
    closeOverlay() {
      this.selectedImage = null;
    },
    goNextChapter() {
      this.$emit("changeChapter", 4);
    },
    loadImages() {
      const images = this.$refs.imageOdd.concat(this.$refs.imageEven);

      images.forEach($image => {
        if (
          $image.parentNode.offsetTop <
          window.innerHeight + window.scrollY + 300
        ) {
          $image.src = $image.getAttribute("src-set");
        }
      });
    },
    isInOddRow(Elindex) {
      let result = null;
      this.dispachByRow.forEach((element, index) => {
        if (Elindex === element) {
          result = index;
        } else if (Elindex - 1 === element) {
          result = index;
        } else if (Elindex - 2 === element) {
          result = index;
        }
      });
      if (result % 2 === 0) {
        return "Even";
      } else {
        return "Odd";
      }
    },
    isScrolling() {
      let isScrollingDown = window.scrollY > this.prevScrollY;
      let scrollPosition = window.innerHeight + window.scrollY;

      this.$refs.imageOdd.forEach(el => {
        let initPos = el.offsetLeft;
        if (
          scrollPosition > el.parentNode.offsetTop + 100 &&
          el.parentNode.offsetTop > window.scrollY - 40
        ) {
          if (isScrollingDown) {
            el.style.left = (initPos + 1).toString() + "px";
          } else {
            el.style.left = (initPos - 1).toString() + "px";
          }
        } else {
          el.style.left = "0px";
        }
      });
      this.$refs.imageEven.forEach(el => {
        let initPos = el.offsetLeft;
        if (
          scrollPosition > el.parentNode.offsetTop + 100 &&
          el.parentNode.offsetTop > window.scrollY - 40
        ) {
          if (isScrollingDown) {
            el.style.left = (initPos - 1).toString() + "px";
          } else {
            el.style.left = (initPos + 0.2).toString() + "px";
          }
        } else {
          el.style.left = "0px";
        }
      });
      this.prevScrollY = window.scrollY;
      this.loadImages();
    }
  }
};
</script>

<style lang="scss" scoped>
.imagesMobile {
  width: 100%;
  color: $primary-white;
  padding-top: 30px;
}

.title {
  width: 100%;
  text-align: left;
  margin-left: 10%;
}

.title--sub {
  margin-top: 50px;
  margin-bottom: 20px;
}

.imageExplications {
  margin: 5vw;
}

.imagesContainer {
  display: grid;
  width: 130%;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;

  &.isScrolling {
    & .imagesContainer__image {
      &.odd {
        transform: translateX(25%);
      }
      &.even {
        transform: translateX(-25%);
      }
    }
  }
}

.imagesContainer__image {
  position: relative;
  height: 100px;
  margin-bottom: 20px;
  transition: transform 2s linear;

  @media (min-width: 400px) {
    height: 150px;
  }
  @media (min-width: 600px) {
    height: 200px;
  }

  &.odd {
    transform: translateX(-25%);
  }
  &.even {
    transform: translateX(25%);
  }

  & img {
    position: absolute;
    width: 100%;
    left: 0;
    max-height: 100%;
  }
}

.overlay {
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 60px;

  & img {
    width: 90%;
  }

  & img.close {
    position: absolute;
    top: 30px;
    right: 30px;
    width: 30px;
  }
}
</style>
