<template>
  <section class="imagesMobile">
    <Title class=" title" text="Visual Content" />
    <h4 class=" title title--sub" @click="test" ref="test">Pictures</h4>
    <div class="imagesContainer" :class="scroll ? 'isScrolling' : null">
      <div
        class="imagesContainer__image"
        v-for="(image, index) in imgs"
        :key="index"
        :class="isInOddRow(index)"
        :ref="`row${isInOddRow(index)}`"
      >
        <img :src="image" alt="one of golden pictures content" />
      </div>
    </div>
  </section>
</template>

<script>
import Title from '@/components/Title.vue';
import json from '@/picturesLink.json';
export default {
  data() {
    return {
      imgs: json.src,
      scroll: false,
      isScrollingStop: null,
      prevScrollY: null,
    };
  },
  created() {
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
  components: {
    Title,
  },
  methods: {
    test() {
      console.log(this.$refs.test.offsetLeft);
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
        return 'even';
      } else {
        return 'odd';
      }
    },
    isScrolling() {
      let isScrollingDown = window.scrollY > this.prevScrollY;
      let scrollPosition = window.innerHeight + window.scrollY;

      document.querySelectorAll('.odd img').forEach((el) => {
        let initPos = el.offsetLeft;
        if (
          scrollPosition > el.parentNode.offsetTop + 100 &&
          el.parentNode.offsetTop > window.scrollY - 60
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
      document.querySelectorAll('.even img').forEach((el) => {
        let initPos = el.offsetLeft;
        if (
          scrollPosition > el.parentNode.offsetTop + 100 &&
          el.parentNode.offsetTop > window.scrollY - 60
        ) {
          if (isScrollingDown) {
            el.style.left = (initPos - 1).toString() + 'px';
          } else {
            el.style.left = (initPos + 1).toString() + 'px';
          }
        } else {
          el.style.left = '0px';
        }
      });
      this.prevScrollY = window.scrollY;
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
  padding-bottom: 100px;

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
