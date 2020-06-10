<template>
  <section>
    <div class="stars"></div>
    <div class="twinkling"></div>
    <Icons />
    <header class="header">
      <Title text="Who did it ?" />
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
      <p class="polaroids__description" :class="focusMode ? 'visible' : ''">
        {{ focusMode ? imgs[indexFocused].description : "" }}
      </p>
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
import Title from "../../components/Title";

export default {
  name: "Team",
  components: { Polaroid, BaseIcon, Icons, Title },
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
          description:
            "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou"
        },
        {
          isFocused: false,
          imgUrl: srcImg2,
          vidUrl: srcVid2,
          caption: "Eward C Stone",
          description:
            "Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu'il n'y a rien d'embarrassant caché dans le texte. Tous les générateurs de Lorem Ipsum sur Internet tendent à reproduire le même extrait sans fin, ce qui fait de lipsum.com le seul vrai générateur de Lorem Ipsum. Iil utilise",
          style: {}
        },
        {
          isFocused: false,
          vidUrl: srcVid3,
          imgUrl: srcImg3,
          caption: "Carl Sagan",
          style: {},
          description:
            "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié"
        },
        {
          isFocused: false,
          vidUrl: srcVid4,
          imgUrl: srcImg4,
          caption: "Jon Lomberg",
          style: {},
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate massa ac purus venenatis commodo. Pellentesque dictum orci vel gravida tristique. Phasellus in purus tellus. Vivamus lobortis pharetra tortor, eget tempor orci interdum quis. Sed condimentum iaculis risus sit amet imperdiet. Ut efficitur libero ut tellus suscipit maximus. Quisque turpis mauris, fringilla sit amet consectetur id, tempus nec velit. Morbi hendrerit metus sed ornare accumsan. Ut tempor arcu sem, vitae pulvinar ligula accumsan vel. Nulla augue massa, porttitor sit amet mattis condimentum, pellentesque at dui. Maecenas ut commodo magna. Cras efficitur facilisis varius. Quisque ultrices erat erat, id sagittis ex gravida nec. Phasellus eget metus turpis."
        },
        {
          isFocused: false,
          vidUrl: srcVid5,
          imgUrl: srcImg5,
          caption: "Frank Drake",
          style: {},
          description:
            "Integer efficitur erat at sapien pharetra congue. Praesent velit dui, rutrum vitae metus consequat, sagittis tempor massa. Curabitur ligula purus, luctus ac lacus eget, interdum pellentesque est. Pellentesque vel sem et lacus sodales dignissim. Sed enim elit, iaculis quis magna ac, auctor volutpat erat. Ut quis arcu condimentum, suscipit tortor id, condimentum ex. Integer sed sapien enim. Maecenas aliquet suscipit dui, vel dignissim elit dictum pharetra. Nullam dictum pretium ex vel efficitur."
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

header.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 150px;
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
  background-color: red;
  flex-wrap: nowrap;
  position: relative;

  &__description {
    position: absolute;
    left: 50%;
    width: 40%;
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
