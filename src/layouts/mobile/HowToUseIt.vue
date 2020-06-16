<template>
  <div class="useIt__container">
    <Header text="How to use it?" />
    <div class="disc" :class="step">
      <Icons />
      <BaseIcon class="disc__logo disc__record" href="record" />
      <BaseIcon class="disc__logo disc__elevation" href="elevation" />
      <BaseIcon class="disc__logo disc__pulsar" href="pulsar" />
      <BaseIcon class="disc__logo disc__hydrogen" href="hydrogen" />
      <BaseIcon class="disc__logo disc__frames" href="frames" />
      <BaseIcon class="disc__logo disc__waveForm" href="waves" />
    </div>
    <section class="useIt__explications">
      <article>
        <BaseIcon
          class="article__logo article__record"
          :href="content[0].symbol"
        />
        <h3>{{ content[0].title }}</h3>
        <p>
          {{ content[0].text_1 }}
          <br />
          <br />
          {{ content[0].text_2 }}
        </p>
      </article>
      <article>
        <BaseIcon class="article__logo article__elevation" href="elevation" />
        <h3>Side View</h3>
        <p>
          This symbol is a representation of the disc in side view with the read
          head placed on it. It is accompanied by another number in binary
          which, converted to decimal, equal to 4 587 025 072 128.
          <br />
          <br />This number multiplied by 0.7 nanoseconds gives the result of 3
          229 seconds or 54.22 minutes: the total time of article__logoing.
        </p>
      </article>
      <article>
        <BaseIcon class="article__logo article__pulsar" href="pulsar" />
        <h3>Pulsar Map</h3>
        <p>
          This symbol represents a pulsar map.
          <br />
          <br />This map helping to explain our position in the universe by
          triangulating the distance from Earth to the 14 neutron stars closest
          to it.
        </p>
      </article>
      <article>
        <BaseIcon class="article__logo article__hydrogen" href="hydrogen" />
        <h3>The Key</h3>
        <p>
          This shema represents the tilting of the spin and the nucleus of
          hydrogen.
          <br />
          <br />During this switchover, the hydrogen atom emits a wave of 0.7
          nanoseconds.
          <br />
          <br />This figure is the key to deciphering the rest of the schemes.
        </p>
      </article>
      <article>
        <BaseIcon class="article__logo article__frames" href="frames" />
        <h3>The Images</h3>
        <p>
          This symbol follows the wave symbol. It is accompanied by a binary
          number: 512.
          <br />
          <br />It should be understood that each section of data completes one
          of the 512 scan lines which form a complete image.
        </p>
      </article>
      <article>
        <BaseIcon class="article__logo article__waveForm" href="waves" />
        <h3>The Waves</h3>
        <p>
          This symbol shows when the waveform data should be broken down.
          Accompanied by a binary number : 11,845,632, if we multiply this
          binary number with our key figure : 0.7 nanoseconds, this gives us
          0.008 seconds.
          <br />
          <br />This means that each section takes 0.008 seconds to play.
        </p>
      </article>
      <Cta nextChapter="Visual content" @goNextChapter="goNextChapter" />
    </section>
  </div>
</template>

<script>
import EventBus from "@/EventBus";
import BaseIcon from "@/components/BaseIcon";
import Icons from "@/components/Icons";
import Header from "@/components/Header.vue";
import Cta from "@/components/MobileCta.vue";
import { url } from "@/constants.js";

export default {
  props: {
    nameIcon: {
      type: String,
      required: true,
    },
  },
  components: { BaseIcon, Icons, Header, Cta },
  data: () => {
    return {
      content: [
        {
          title: "",
          symbol: "",
          text_1: "",
          text_2: "",
        },
        {
          title: "",
          symbole: "",
          text_1: "",
          text_2: "",
        },
        {
          title: "",
          symbole: "",
          text_1: "",
          text_2: "",
        },
        {
          title: "",
          symbole: "",
          text_1: "",
          text_2: "",
        },
        {
          title: "",
          symbole: "",
          text_1: "",
          text_2: "",
        },
        {
          title: "",
          symbole: "",
          text_1: "",
          text_2: "",
        },
      ],
      step: "step0",
      symbol: "record",
      title: "",
      text1: "",
      text2: "",
    };
  },
  methods: {
    goNextChapter() {
      this.$emit("changeChapter", 3);
    },
    isScrolling() {
      let isScrollingDown = window.scrollY > this.prevScrollY;
      let scrollPosition = window.innerHeight + window.scrollY;

      document.querySelectorAll("article").forEach((e, i) => {
        let initPos = e.offsetTop;
        if (scrollPosition > e.offsetTop + 150) {
          scrollPosition > e.offsetTop + 150 && e.offsetTop > window.scrollY;
          this.step = `step${i.toString()}`;
        }
      });
      this.prevScrollY = window.scrollY;
    },
  },
  created() {
    window.scrollTo({
      top: 0,
    });
    document.addEventListener("scroll", this.isScrolling);
    fetch(`${url}/query/how_use`, {
      method: "GET",
    })
      .then((Response) => Response.json())
      .then((rawData) => {
        this.content = [];

        console.log(rawData);
        rawData.forEach((el) => {
          this.content.push({
            text_1: el.text_1,
            text_2: el.text_2,
            title: el.title,
            symbol: el.symbol,
          });
        });
      })
      .catch((error) => console.log(error));
  },
  destroyed() {
    window.removeEventListener("scroll", this.isScrolling);
  },
};
</script>

<style lang="scss" scoped>
.useIt__container {
  padding: 10px;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background-color: $primary-darkblue;
  color: $primary-white;
}

.useIt__title {
  display: flex;
  width: 100%;
  & > .title {
    width: 180px;
  }
}

.disc {
  position: absolute;
  position: fixed;
  top: 30vh;
  right: -110px;
  width: 220px;
  height: 220px;
  border-radius: 100000px;
  transition: transform 1s;
  background: linear-gradient(
    45deg,
    rgba(166, 122, 59, 1) 0%,
    rgba(215, 195, 127, 1) 100%
  );
  &__logo {
    width: 10px;
    height: auto;
    position: absolute;
    fill: transparent;
    stroke: $primary-darkblue;
  }
  &__record {
    width: 60px;
    bottom: 80px;
    left: 25px;
  }
  &__elevation {
    width: 60px;
    bottom: 30px;
    left: 25px;
  }
  &__pulsar {
    width: 140px;
    bottom: -20px;
    left: 25px;
  }
  &__hydrogen {
    width: 30px;
    bottom: -40px;
    right: 55px;
  }
  &__frames {
    width: 30px;
    bottom: 30px;
    right: 60px;
  }
  &__waveForm {
    width: 80px;
    top: -15px;
    right: 35px;
  }
}

.step0 {
  transform: rotate(-35deg);
  .disc__record {
    stroke: $primary-white;
    filter: drop-shadow(0px 4px 2px rgba($primary-darkblue, 0.8));
  }
}

.step1 {
  transform: rotate(0deg);
  .disc__elevation {
    stroke: $primary-white;
    filter: drop-shadow(0px 4px 2px rgba($primary-darkblue, 0.8));
  }
}

.step2 {
  transform: rotate(45deg);
  .disc__pulsar {
    stroke: $primary-white;
    filter: drop-shadow(0px 4px 2px rgba($primary-darkblue, 0.8));
  }
}

.step3 {
  transform: rotate(130deg);
  .disc__hydrogen {
    stroke: $primary-white;
    filter: drop-shadow(0px 3px 1px rgba($primary-darkblue, 0.8));
  }
}

.step4 {
  transform: rotate(180deg);
  .disc__frames {
    stroke: $primary-white;
    filter: drop-shadow(0px 4px 2px rgba($primary-darkblue, 0.8));
  }
}

.step5 {
  transform: rotate(220deg);
  .disc__waveForm {
    stroke: $primary-white;
    filter: drop-shadow(0px 4px 2px rgba($primary-darkblue, 0.8));
  }
}

.article {
  &__logo {
    height: auto;
    position: relative;
    fill: transparent;
    stroke: white;
  }
  &__record {
    width: 90px;
  }
  &__elevation {
    width: 130px;
  }
  &__pulsar {
    width: 170px;
  }
  &__hydrogen {
    width: 150px;
  }
  &__waveForm {
    width: 150px;
  }
  &__frames {
    width: 150px;
    margin-bottom: 20px;
  }
}

.useIt__explications {
  width: 50vw;
  margin-top: 50px;
  margin-right: 40vw;
}

h3 {
  font-size: 20px;
  margin-bottom: 20px;
}

p {
  font-size: 14px;
  line-height: 150%;
  text-align: left;
}

article {
  margin-bottom: 100px;
}
</style>
