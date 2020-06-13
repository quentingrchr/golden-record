<template>
  <section class="imagesMobile">
    <Header text="Visual Content" />
    <h4 class=" title title--sub" ref="test">Pictures</h4>
    <div class="imagesContainer" :class="scroll ? 'isScrolling' : null">
      <div
        class="imagesContainer__image"
        v-for="(image, index) in imgs"
        :key="index"
        :class="isInOddRow(index)"
      >
        <img
          :src-set="image"
          alt="one of golden pictures content"
          :ref="`image${isInOddRow(index)}`"
        />
      </div>
    </div>
    <Cta nextChapter="Audio content" @goNextChapter="goNextChapter" />
  </section>
</template>

<script>
import Header from '@/components/Header.vue';
import Cta from '@/components/MobileCta.vue';
import { url } from '@/constants.js';

export default {
  data() {
    return {
      imgs: [],
      scroll: false,
      isScrollingStop: null,
      prevScrollY: null,
    };
  },
  components: {
    Header,
    Cta,
  },
  beforeCreate() {
    fetch(`${url}/query/visual_content`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) =>
        data.forEach((element) => {
          this.imgs.push(element.src);
          this.$nextTick(() => {
            this.loadImages();
          });
        })
      );
  },
  created() {
    window.scrollTo({
      top: 0,
    });
    document.addEventListener('scroll', this.isScrolling);
  },
  destroyed() {
    window.removeEventListener('scroll', this.isScrolling);
  },
  computed: {
    dispachByRow() {
      const odd = [];
      for (let i = 0; i < this.imgs.length; i += 3) {
        odd.push(i);
      }
      return odd;
    },
  },
  methods: {
    goNextChapter() {
      this.$emit('changeChapter', 4);
    },
    loadImages() {
      const images = this.$refs.imageOdd.concat(this.$refs.imageEven);

      images.forEach(($image) => {
        if (
          $image.parentNode.offsetTop <
          window.innerHeight + window.scrollY + 300
        ) {
          $image.src = $image.getAttribute('src-set');
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
        return 'Even';
      } else {
        return 'Odd';
      }
    },
    isScrolling() {
      let isScrollingDown = window.scrollY > this.prevScrollY;
      let scrollPosition = window.innerHeight + window.scrollY;

      this.$refs.imageOdd.forEach((el) => {
        let initPos = el.offsetLeft;
        if (
          scrollPosition > el.parentNode.offsetTop + 100 &&
          el.parentNode.offsetTop > window.scrollY - 40
        ) {
          if (isScrollingDown) {
            el.style.left = (initPos + 1).toString() + 'px';
          } else {
            el.style.left = (initPos - 1).toString() + 'px';
          }
        } else {
          el.style.left = '0px';
        }
      });
      this.$refs.imageEven.forEach((el) => {
        let initPos = el.offsetLeft;
        if (
          scrollPosition > el.parentNode.offsetTop + 100 &&
          el.parentNode.offsetTop > window.scrollY - 40
        ) {
          if (isScrollingDown) {
            el.style.left = (initPos - 1).toString() + 'px';
          } else {
            el.style.left = (initPos + 0.2).toString() + 'px';
          }
        } else {
          el.style.left = '0px';
        }
      });
      this.prevScrollY = window.scrollY;
      this.loadImages();
    },
  },
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
</style>
