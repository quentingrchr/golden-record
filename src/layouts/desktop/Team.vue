<template>
  <section>
    <audio :src="audioSrc.click1"></audio>
    <div class="stars"></div>
    <div class="twinkling"></div>
    <Icons />
    <header class="header">
      <Header text="The team" />
      <BaseIcon
        href="arrow-top"
        class="icon-container"
        :class="focusMode ? 'focus-mode' : ''"
        @click="quitFocus"
      />
    </header>

    <div class="polaroids">
      <Polaroid
        v-for="(img, index) in imgs"
        :key="index"
        @play-click="handleClickSound"
        @focused="handleFocus"
        :caption="img.caption"
        :imgUrl="img.imgUrl"
        :index="index"
        :style="img.style"
        :vidUrl="img.vidUrl"
        :isFocused="index === indexFocused"
        :class="focusMode ? 'focusMode' : ''"
      />
      <div class="polaroids__text">
        <h3 class="polaroids__title">{{ focusMode ? imgs[indexFocused].title : "" }}</h3>
        <div class="polaroids__description" :class="focusMode ? 'visible' : ''">
          <p>{{ focusMode ? imgs[indexFocused].description[0] : "" }}</p>
          <p>{{ focusMode ? imgs[indexFocused].description[1] : "" }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
// Polaroids images (to fetch from API)
import srcImg1 from "../../assets/img/ann_druyan.jpg";
import srcImg2 from "../../assets/img/eward_c_stone.jpg";
import srcImg3 from "../../assets/img/carl_sagan.jpg";
import srcImg4 from "../../assets/img/jon_lomberg.jpg";
import srcImg5 from "../../assets/img/frank_drake.jpg";
import notFound from "../../assets/img/pola_thumbnail.jpg";

import srcVid1 from "../../assets/video/ann-vid.mp4";
import srcVid2 from "../../assets/video/ann-vid.mp4";
import srcVid3 from "../../assets/video/carl-vid.mp4";
import srcVid4 from "../../assets/video/jon-vid.mp4";
import srcVid5 from "../../assets/video/frank-vid.mp4";

import click1 from "../../assets/sounds/click_1.mp3";
import click2 from "../../assets/sounds/click_2.mp3";

import Polaroid from "../../components/Polaroid__Desktop.vue";
import Icons from "../../components/Icons";
import BaseIcon from "../../components/BaseIcon";
import Header from "../../components/Header";

import { url } from "@/constants.js";

export default {
  name: "Team",
  components: { Polaroid, BaseIcon, Icons, Header },
  props: {},
  data: () => {
    return {
      audioSrc: {
        click1,
        click2
      },
      uiValue: {
        MARGIN_LEFT: 30
      },
      isTrue: false,
      focusMode: false,
      indexFocused: null,
      imgs: [
        {
          isFocused: false,
          vidUrl: null,
          imgUrl: srcImg1,
          title: "Loading",
          caption: "Loading",
          style: {},
          description: [null, null]
        },
        {
          isFocused: false,
          vidUrl: null,
          imgUrl: notFound,
          title: "Loading",
          caption: "Loading",
          style: {},
          description: [null, null]
        },
        {
          isFocused: false,
          vidUrl: null,
          imgUrl: notFound,
          title: "Loading",
          caption: "Loading",
          style: {},
          description: [null, null]
        },
        {
          isFocused: false,
          vidUrl: null,
          imgUrl: notFound,
          title: "Loading",
          caption: "Loading",
          style: {},
          description: [null, null]
        },
        {
          isFocused: false,
          vidUrl: null,
          imgUrl: notFound,
          title: "Loading",
          caption: "Loading",
          style: {},
          description: [null, null]
        }
      ]
    };
  },
  beforeCreate() {
    let staticData = {
      annDruyan: {
        vidSrc: srcVid1,
        imgSrc: srcImg1,
        caption: "Ann Druyan",
        order: 0
      },
      carlSagan: {
        vidSrc: srcVid3,
        imgSrc: srcImg3,
        caption: "Carl Sagan",
        order: 2
      },
      frankDrake: {
        vidSrc: srcVid5,
        imgSrc: srcImg5,
        caption: "Frank Drake",
        order: 4
      },
      jonLomberg: {
        vidSrc: srcVid4,
        imgSrc: srcImg4,
        caption: "Jon Lomberg",
        order: 3
      },
      ewardCStone: {
        vidSrc: srcVid2,
        imgSrc: srcImg2,
        caption: "Eward C Stone",
        order: 1
      }
    };

    fetch(`${url}/query/polaroids`, {
      method: "GET"
    })
      .then(response => response.json())
      .then(data => {
        this.imgs = [];
        data.forEach(el => {
          this.imgs[staticData[el.name].order] = {
            isFocused: false,
            vidUrl: staticData[el.name].vidSrc,
            imgUrl: staticData[el.name].imgSrc,
            title: el.title,
            caption: staticData[el.name].caption,
            style: {},
            description: [el.text_1, el.text_2]
          };
        });
      });
  },
  methods: {
    handleClickSound: function(i) {
      console.log(i);
      if (this.focusMode) {
        this.playSound();
      }
    },

    playSound: function() {
      let random = Math.random();
      let audio1 = new Audio(this.audioSrc.click1);
      let audio2 = new Audio(this.audioSrc.click2);

      if (random < 0.5) {
        audio1.volume = 0.1;
        audio1.play();
      } else {
        audio2.volume = 0.1;
        audio2.play();
      }
    },
    handleFocus: function(index) {
      //------------------------------------------------------------
      const POLA_HEIGHT = 420; // Height in polaroid composant
      const POLA_WIDTH = 332; // Width in polaroid composant
      //------------------------------------------------------------
      const SCALE = 0.2;
      const SM_POLA_HEIGHT = POLA_HEIGHT * SCALE;
      const OFFSET = POLA_HEIGHT / 2 - SM_POLA_HEIGHT / 2;
      const GAP_VERTICAL = (POLA_HEIGHT - 4 * SM_POLA_HEIGHT) / 3;
      const GAP_HORIZONTAL = 40;
      let incr = 0;

      this.imgs[index].isFocused = true;
      this.focusMode = true;
      this.indexFocused = index;

      this.imgs.forEach((img, i) => {
        // apply transformation on focused and unfocused img
        if (index === i) {
          // Code for focused pola

          img.style = {
            transform: `translate(${this.uiValue.MARGIN_LEFT +
              POLA_WIDTH * SCALE}px, 0px) rotate(0deg)`,
            zIndex: 11
          };
        } else {
          // Code for unfocused polas

          img.style = {
            transform: `translate(${SCALE * (POLA_WIDTH / 2) -
              POLA_WIDTH / 2 +
              this.uiValue.MARGIN_LEFT -
              GAP_HORIZONTAL}px, ${incr * (SM_POLA_HEIGHT + GAP_VERTICAL) -
              OFFSET}px) rotate(0deg) scale(${SCALE})`
          };
          incr++;
        }
      });
    },
    resizeHandler: function() {
      let width = document.body.clientWidth;
      if (width < 801) {
        this.uiValue.MARGIN_LEFT = 10;
        this.handleFocus(this.indexFocused);
      } else {
        this.uiValue.MARGIN_LEFT = 30;
      }
    },
    quitFocus: function() {
      this.focusMode = false;
      this.indexFocused = null;
      this.imgs.forEach(img => {
        img.isFocused = false;
        img.style = {};
      });
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  height: 100vh;
  position: relative;
  z-index: 10;
}
.stars {
  z-index: -1;
}
.twinkling {
  z-index: 0;
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-right: 10%;
  position: relative;
  z-index: 10;
}

.icon-container {
  width: 50px;
  height: 50px;
  top: 50px;
  right: 50px;
  fill: white;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s;
  cursor: pointer;

  &.focus-mode {
    visibility: visible;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
  }
}

.polaroids {
  display: block;
  width: 80%;
  margin: 0 10vw;
  margin-top: 5vh;
  flex-wrap: nowrap;
  position: relative;
  transition: left 0.2s ease;
  &__text {
    position: absolute;
    display: flex;
    flex-direction: column;
    left: 50%;
    width: 40%;

    @media (max-width: 1100px) {
      left: 60%;
    }
    @media (max-width: 1000px) {
      left: 70%;
    }
    @media (max-width: 1000px) {
      width: 30%;
    }

    p {
      width: 100%;
    }
  }

  &__title {
    left: 50%;
    margin-bottom: 50px;
    text-align: justify;
    color: $primary-white;
  }

  &__description {
    text-align: justify;
    visibility: hidden;
    opacity: 0;
    color: $primary-white;
    transition: opacity 0.3s ease;

    &.visible {
      visibility: visible;
      opacity: 1;
    }

    p {
      margin-bottom: 20px;
    }
  }
}

$hoverOffset: 5;
$bp-lg: 1150px;
$offsetX: 40%;

figure {
  transition: transform 1s;
  &.focusMode {
    transition: transform 1s;
  }

  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.5);
  &:nth-child(1) {
    z-index: 2;
    transform: scale(0.6) rotate(-21.93deg) translateX(50% - $offsetX)
      translateY(15%);

    &:hover:not(.focusMode) {
      transition: transform 0.5s ease;
      transform: scale(0.6) rotate(-21.93deg) translateX(50% - $offsetX)
        translateY(15% - $hoverOffset);
    }

    @media (max-width: $bp-lg) {
      transform: scale(0.4) rotate(-21.93deg) translateX(50% - $offsetX)
        translateY(15%);
      &:hover:not(.focusMode) {
        transform: scale(0.4) rotate(-21.93deg) translateX(50% - $offsetX)
          translateY(15% - $hoverOffset);
      }
    }
  }

  &:nth-child(2) {
    z-index: 3;
    transform: scale(0.6) rotate(7.36deg) translateY(30%)
      translateX(150% - $offsetX);

    &:hover:not(.focusMode) {
      transition: transform 0.5s ease;

      transform: scale(0.6) rotate(7.36deg) translateY(30% - $hoverOffset)
        translateX(150% - $offsetX);
    }

    @media (max-width: $bp-lg) {
      transform: scale(0.4) rotate(7.36deg) translateY(30%)
        translateX(150% - $offsetX);
      &:hover:not(.focusMode) {
        transform: scale(0.4) rotate(7.36deg) translateY(30% - $hoverOffset)
          translateX(150% - $offsetX);
      }
    }
  }
  &:nth-child(3) {
    z-index: 4;
    transform: scale(0.9) translateX(180% - $offsetX) translateY(-10%);

    &:hover:not(.focusMode) {
      transition: transform 0.5s ease;

      transform: scale(0.9) translateX(180% - $offsetX)
        translateY(-10% - $hoverOffset);
    }

    @media (max-width: $bp-lg) {
      transform: scale(0.6) translateX(180% - $offsetX) translateY(-10%);
      &:hover:not(.focusMode) {
        transform: scale(0.6) translateX(180% - $offsetX)
          translateY(-10% - $hoverOffset);
      }
    }
  }
  &:nth-child(4) {
    z-index: 5;
    transform: scale(0.8) rotate(-12.6deg) translateY(100%)
      translateX(250% - $offsetX);

    &:hover:not(.focusMode) {
      transition: transform 0.5s ease;

      transform: scale(0.8) rotate(-12.6deg) translateY(100% - $hoverOffset)
        translateX(250% - $offsetX);
    }

    @media (max-width: $bp-lg) {
      transform: scale(0.5) rotate(-12.6deg) translateY(100%)
        translateX(250% - $offsetX);
      &:hover:not(.focusMode) {
        transition: transform 0.5s ease;
        transform: scale(0.5) rotate(-12.6deg) translateY(100% - $hoverOffset)
          translateX(250% - $offsetX);
      }
    }
  }
  &:nth-child(5) {
    z-index: 1;
    transform: scale(0.6) rotate(4deg) translateY(-30%)
      translateX(450% - $offsetX);

    &:hover:not(.focusMode) {
      transform: scale(0.6) rotate(4deg) translateY(-30% - $hoverOffset)
        translateX(450% - $offsetX);
    }

    @media (max-width: $bp-lg) {
      transform: scale(0.4) rotate(4deg) translateY(-30%)
        translateX(420% - $offsetX);
      &:hover:not(.focusMode) {
        transition: transform 0.5s ease;

        transform: scale(0.4) rotate(4deg) translateY(-30% - $hoverOffset)
          translateX(420% - $offsetX);
      }
    }
  }
}
</style>
