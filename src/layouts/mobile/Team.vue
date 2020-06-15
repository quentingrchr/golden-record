<template>
  <section>
    <Header text="Who did it?" />
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

// Polaroids images (to fetch from API)
import srcImg1 from "../../assets/img/ann_druyan.jpg";
import srcImg2 from "../../assets/img/eward_c_stone.jpg";
import srcImg3 from "../../assets/img/carl_sagan.jpg";
import srcImg4 from "../../assets/img/jon_lomberg.jpg";
import srcImg5 from "../../assets/img/frank_drake.jpg";

export default {
  components: {
    Polaroid,
    Header,
  },
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
          caption: "Ann druyan",
          style: {},
          description:
            "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou",
        },
        {
          isFocused: false,
          imgUrl: srcImg2,
          caption: "Eward C Stone",
          description:
            "Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu'il n'y a rien d'embarrassant caché dans le texte. Tous les générateurs de Lorem Ipsum sur Internet tendent à reproduire le même extrait sans fin, ce qui fait de lipsum.com le seul vrai générateur de Lorem Ipsum. Iil utilise",
          style: {},
        },
        {
          isFocused: false,

          imgUrl: srcImg3,
          caption: "Carl Sagan",
          style: {},
          description:
            "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié",
        },
        {
          isFocused: false,

          imgUrl: srcImg4,
          caption: "Jon Lomberg",
          style: {},
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate massa ac purus venenatis commodo. Pellentesque dictum orci vel gravida tristique. Phasellus in purus tellus. Vivamus lobortis pharetra tortor, eget tempor orci interdum quis. Sed condimentum iaculis risus sit amet imperdiet. Ut efficitur libero ut tellus suscipit maximus. Quisque turpis mauris, fringilla sit amet consectetur id, tempus nec velit. Morbi hendrerit metus sed ornare accumsan. Ut tempor arcu sem, vitae pulvinar ligula accumsan vel. Nulla augue massa, porttitor sit amet mattis condimentum, pellentesque at dui. Maecenas ut commodo magna. Cras efficitur facilisis varius. Quisque ultrices erat erat, id sagittis ex gravida nec. Phasellus eget metus turpis.",
        },
        {
          isFocused: false,
          imgUrl: srcImg5,
          caption: "Frank Drake",
          style: {},
          description:
            "Integer efficitur erat at sapien pharetra congue. Praesent velit dui, rutrum vitae metus consequat, sagittis tempor massa. Curabitur ligula purus, luctus ac lacus eget, interdum pellentesque est. Pellentesque vel sem et lacus sodales dignissim. Sed enim elit, iaculis quis magna ac, auctor volutpat erat. Ut quis arcu condimentum, suscipit tortor id, condimentum ex. Integer sed sapien enim. Maecenas aliquet suscipit dui, vel dignissim elit dictum pharetra. Nullam dictum pretium ex vel efficitur.",
        },
      ],
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
            transform: "translate(0px, 0px) rotate(0deg) scale(1.6)",
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
};
</script>

<style lang="scss" scoped>
section {
  width: 100%;
  background-color: $primary-darkblue;
  color: $primary-white;
  overflow: hidden;
}

header.header {
  width: 100%;
  padding: 40px 15%;
  display: flex;
}

.overlay {
  height: 100%;
  widows: 100vw;
  background-color: rgba(0, 0, 0, 0.646);
  position: absolute;

  z-index: 10;

  &.active {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
}

.polaroids {
  height: 100vh;
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

      transform: scale(0.9) rotate(30deg) translateX(10%) translateY(-100%);
    }
    &:nth-child(2) {
      z-index: 7;
      transform: scale(1) rotate(10deg) translateY(90%) translateX(-20%);
    }
    &:nth-child(3) {
      z-index: 6;
      transform: scale(1) translateX(0%) translateY(0%);
    }
    &:nth-child(4) {
      z-index: 5;
      transform: scale(1) rotate(-20deg) translateY(100%) translateX(50%);
    }
    &:nth-child(5) {
      z-index: 1;
      transform: scale(0.8) rotate(-30deg) translateY(-100%) translateX(-30%);
    }
  }
}
</style>
