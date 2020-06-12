<template>
  <section>
    <div class="stars"></div>
    <div class="twinkling"></div>
    <Icons />
    <header class="header">
      <Header text="Who did it ?" />
      <BaseIcon
        href="sound"
        class="icon-container"
        :class="focusMode ? 'focus-mode' : ''"
        @click="quitFocus"
      />
    </header>

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
      />
      <div class="polaroids__text">
        <h3 class="polaroids__title">{{ focusMode ? imgs[indexFocused].title : "" }}</h3>
        <p
          class="polaroids__description"
          :class="focusMode ? 'visible' : ''"
        >{{ focusMode ? imgs[indexFocused].description : "" }}</p>
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

import srcVid1 from "../../assets/video/ann-vid.mp4";
import srcVid2 from "../../assets/video/ann-vid.mp4";
import srcVid3 from "../../assets/video/carl-vid.mp4";
import srcVid4 from "../../assets/video/jon-vid.mp4";
import srcVid5 from "../../assets/video/frank-vid.mp4";

import Polaroid from "../../components/Polaroid__Desktop.vue";
import Icons from "../../components/Icons";
import BaseIcon from "../../components/BaseIcon";
import Header from "../../components/Header";

export default {
  name: "Team",
  components: { Polaroid, BaseIcon, Icons, Header },
  props: {},
  data: () => {
    return {
      isTrue: false,
      focusMode: false,
      indexFocused: null,
      imgs: [
        {
          isFocused: false,
          imgUrl: srcImg1,
          vidUrl: srcVid1,
          caption: "Ann druyan",
          style: {},
          title: "The pen of the project",
          description:
            "Ann Druyan is an American journalist, writer, lecturer, director and producer, the late wife and widow of astronomer and writer Carl Sagan. She is also involved in science popularization projects. In particular, she is co-author of the Cosmos series. /The chances of aliens finding the Voyagers in the vast emptiness of space are small—some say infinitesimal—but we took our jobs seriously, recalls team member Ann Druyan. /From the moment when Carl first broached the project to Tim Ferris and me, it felt mythic./"
        },
        {
          isFocused: false,
          imgUrl: srcImg2,
          vidUrl: srcVid2,
          caption: "Eward C Stone",
          title: "Inside the science",
          description:
            "Edward Carroll Stone (born January 23, 1936) is an American space scientist, professor of physics at the California Institute of Technology, and former director of the NASA Jet Propulsion Laboratory (JPL). As project scientist for the unmanned Voyager spacecraft missions to the outer Solar System since 1972, and a major spokesman for the Voyager science team, he became especially well known to the public in the 1980s. He has since been principal investigator on nine NASA spacecraft missions and coinvestigator on five more.",
          style: {}
        },
        {
          isFocused: false,
          vidUrl: srcVid3,
          imgUrl: srcImg3,
          caption: "Carl Sagan",
          style: {},
          title: "Chairman of the comittee",
          description:
            "He was an American astronomer, planetary scientist, cosmologist, astrophysicist, astrobiologist, author, science popularizer, and science communicator. He is best known as a science popularizer and communicator. His best known scientific contribution is research on extraterrestrial life, including experimental demonstration of the production of amino acids from basic chemicals by radiation. Sagan assembled the first physical messages sent into space: the Pioneer plaque and the Voyager Golden Record, universal messages that could potentially be understood by any extraterrestrial intelligence that might find them."
        },
        {
          isFocused: false,
          vidUrl: srcVid4,
          imgUrl: srcImg4,
          caption: "Jon Lomberg",
          style: {},
          title: "The artist",
          description:
            "Jon Lomberg (born 1948) is an American space artist and science journalist. He was Carl Sagan's principal artistic collaborator for more than twenty years on many projects from 1972 through 1996. In 1998, the International Astronomical Union officially named an asteroid (6446 Lomberg) in recognition of his achievements in science communication. In 1972, Lomberg showed some of his paintings to astronomer Carl Sagan, who then asked him to illustrate The Cosmic Connection. This was the beginning of their quarter century of collaboration on many projects, including the NASA's interstellar Voyager Golden Record"
        },
        {
          isFocused: false,
          vidUrl: srcVid5,
          imgUrl: srcImg5,
          caption: "Frank Drake",
          style: {},
          title: "DJsigner Frank",
          description:
            "Frank Drake (born May 28, 1930 in Chicago) is an American astronomer. Founder of the SETI project, he is the author of the famous Drake equation. Drake co-designed the Pioneer plaque with Carl Sagan in 1972, the first physical message sent into space. The plaque was designed to be understandable by extraterrestrials should they encounter it. He later supervised the creation of the Voyager Golden Record. He was elected to the American Academy of Arts and Sciences in 1974."
        }
      ]
    };
  },
  methods: {
    handleFocus: function(index) {
      //------------------------------------------------------------
      const POLA_HEIGHT = 420; // Height in polaroid composant
      const POLA_WIDTH = 332; // Width in polaroid composant
      //------------------------------------------------------------
      const SCALE = 0.2;
      const SM_POLA_HEIGHT = POLA_HEIGHT * SCALE;
      const OFFSET = POLA_HEIGHT / 2 - SM_POLA_HEIGHT / 2;
      const MARGIN_LEFT = 150;
      const GAP_VERTICAL = (POLA_HEIGHT - 4 * SM_POLA_HEIGHT) / 3;
      const GAP_HORIZONTAL = 40;
      let incr = 0;

      console.log(GAP_VERTICAL);

      console.log("index of focused element is", index);
      this.imgs[index].isFocused = true;
      this.focusMode = true;
      this.indexFocused = index;

      this.imgs.forEach((img, i) => {
        // apply transformation on focused and unfocused img
        if (index === i) {
          // Code for focused pola

          img.style = {
            transform: `translate(${MARGIN_LEFT +
              POLA_WIDTH * SCALE}px, 0px) rotate(0deg)`,
            zIndex: 11
          };
        } else {
          // Code for unfocused polas

          console.log(incr * 100);
          img.style = {
            transform: `translate(${SCALE * (POLA_WIDTH / 2) -
              POLA_WIDTH / 2 +
              MARGIN_LEFT -
              GAP_HORIZONTAL}px, ${incr * (SM_POLA_HEIGHT + GAP_VERTICAL) -
              OFFSET}px) rotate(0deg) scale(${SCALE})`
          };
          incr++;
        }
      });
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
  width: 30px;
  height: 30px;
  top: 50px;
  right: 50px;
  fill: white;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s;
  &.focus-mode {
    visibility: visible;
    opacity: 1;
  }
}

.polaroids {
  margin: auto;
  margin-top: 14vh;
  flex-wrap: nowrap;
  position: relative;

  &__text {
    position: absolute;
    display: flex;
    flex-direction: column;
    left: 50%;
    width: 40%;
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
  }
}

figure {
  transition: transform 1s;

  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.5);
  &:nth-child(1) {
    z-index: 2;

    transform: scale(0.6) rotate(-21.93deg) translateX(50%) translateY(15%);
  }
  &:nth-child(2) {
    z-index: 3;
    transform: scale(0.6) rotate(7.36deg) translateY(30%) translateX(150%);
  }
  &:nth-child(3) {
    z-index: 4;
    transform: scale(0.9) translateX(180%) translateY(-10%);
  }
  &:nth-child(4) {
    z-index: 5;
    transform: scale(0.8) rotate(-12.6deg) translateY(100%) translateX(250%);
  }
  &:nth-child(5) {
    z-index: 1;
    transform: scale(0.6) rotate(4deg) translateY(-30%) translateX(450%);
  }
}
</style>
