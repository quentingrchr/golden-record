<template>
  <section>
    <div class="stars"></div>
    <Header :text="title" />
    <div
      @click="quitFocus"
      class="overlay"
      :class="focusMode ? 'active' : ''"
    ></div>
    <div class="polaroids">
      <Polaroid
        v-for="(img, index) in imgs"
        :key="index"
        @focused="handleFocus"
        :caption="img.caption"
        :imgUrl="img.imgUrl"
        :index="index"
        :style="img.style"
        :vidUrl="img.vidUrl"
        :isFocused="index === indexFocused"
        :description="img.description"
      />
    </div>
  </section>
</template>

<script>
import Header from "@/components/Header.vue";
import Polaroid from "../../components/Polaroid__Mobile";
import { page5 } from "../../content";

// Polaroids images (to fetch from API)

import srcImg1 from "../../assets/img/ann_druyan.jpg";
import srcImg2 from "../../assets/img/eward_c_stone.jpg";
import srcImg3 from "../../assets/img/carl_sagan.jpg";
import srcImg4 from "../../assets/img/jon_lomberg.jpg";
import srcImg5 from "../../assets/img/frank_drake.jpg";
import { titles } from "../../constants";

export default {
  components: {
    Polaroid,
    Header,
  },
  props: {},
  data: () => {
    return {
      title: titles.page5,
      isTrue: false,
      focusMode: false,
      indexFocused: null,
      imgs: [],
    };
  },
  methods: {
    handleFocus: function(index) {
      this.imgs[index].isFocused = true;
      this.focusMode = true;
      this.indexFocused = index;

      this.imgs.forEach((img, i) => {
        // apply transformation on focused and unfocused img
        if (index === i) {
          // Code for focused pola

          img.style = {
            transform: "translate(0px, -50px) rotate(0deg) scale(1.6)",
            zIndex: 11,
          };
        } else {
          // Code for unfocused polas

          img.style = {};
        }
      });
    },
    quitFocus: function() {
      this.focusMode = false;
      this.indexFocused = null;
      this.imgs.forEach((img) => {
        img.isFocused = false;
        img.style = {};
      });
    },
  },
  beforeMount() {
    let staticData = {
      annDruyan: {
        imgSrc: srcImg1,
        caption: "Ann Druyan",
        order: 0,
      },
      carlSagan: {
        imgSrc: srcImg3,
        caption: "Carl Sagan",
        order: 2,
      },
      frankDrake: {
        imgSrc: srcImg5,
        caption: "Frank Drake",
        order: 4,
      },
      jonLomberg: {
        imgSrc: srcImg4,
        caption: "Jon Lomberg",
        order: 3,
      },
      ewardCStone: {
        imgSrc: srcImg2,
        caption: "Eward C Stone",
        order: 1,
      },
    };
    // FETCH GOES HERE

    page5.forEach((el) => {
      console.log(el);
      this.imgs[staticData[el.name].order] = {
        isFocused: false,
        vidUrl: staticData[el.name].vidSrc,
        imgUrl: staticData[el.name].imgSrc,
        title: el.title,
        caption: staticData[el.name].caption,
        style: {},
        description: el.text_1 + el.text_2,
      };
    });
  },
};
</script>

<style lang="scss" scoped>
section {
  width: 100%;
  background-color: $primary-darkblue;
  color: $primary-white;
  overflow: hidden;
  position: relative;
  z-index: 10;
}
.stars {
  z-index: -1;
}

header.header {
  width: 100%;
  padding: 40px 15%;
  display: flex;
}

.overlay {
  height: 100%;
  width: 0;
  background-color: rgba(0, 0, 0, 0.646);
  position: absolute;
  z-index: 10;

  &.active {
    width: 100vw;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
}

.polaroids {
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  figure {
    transition: transform 1s, height 0.3s ease;
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.5);
    transform-origin: center;
    &:nth-child(1) {
      z-index: 2;
      transform: scale(0.7) rotate(30deg) translateX(-35%) translateY(-150%);
    }
    &:nth-child(2) {
      z-index: 7;
      transform: scale(0.8) rotate(10deg) translateY(50%) translateX(-30%);
    }
    &:nth-child(3) {
      z-index: 6;
      transform: scale(0.8) translateX(0%) translateY(-30%);
    }
    &:nth-child(4) {
      z-index: 5;
      transform: scale(0.7) rotate(-20deg) translateY(80%) translateX(35%);
    }
    &:nth-child(5) {
      z-index: 1;
      transform: scale(0.6) rotate(-30deg) translateY(-150%) translateX(30%);
    }
  }
}
</style>
