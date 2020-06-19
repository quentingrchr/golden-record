<template>
  <section class="thejourney">
    <div class="stars"></div>
    <Header :text="titleChapter" />
    <div class="voyager">
      <div class="voyager_image">
        <img src="@/assets/img/voyager_journey_mobile.png" alt="voyager prob" />
      </div>
      <div class="voyager_description">
        <p>{{ text_1 }}</p>
        <p>{{ text_2 }}</p>
        <p>{{ text_3 }}</p>
        <Time-elapsed class="time" />
      </div>
    </div>
    <Cta nextChapter="How to use it?" @goNextChapter="goNextChapter" />
  </section>
</template>

<script>
import Header from "@/components/Header.vue";
import TimeElapsed from "@/components/TimeElapsed.vue";
import Cta from "@/components/MobileCta.vue";
import { titles } from "@/constants.js";
import { page1 } from "@/content.js";

export default {
  name: "TheJourney",
  data() {
    return {
      titleChapter: titles.page1,
      text_1: "loading",
      text_2: "loading",
    };
  },
  components: { Header, TimeElapsed, Cta },
  beforeMount() {
    this.text_1 = page1[0].text_1;
    this.text_2 = page1[0].text_2;
    this.text_3 = page1[0].text_3;
  },
  methods: {
    goNextChapter() {
      this.$emit("changeChapter", 2);
    },
  },
  created() {
    window.scrollTo({
      top: 0,
    });
  },
};
</script>

<style lang="scss" scoped>
.stars {
  z-index: -1;
}
.thejourney {
  width: 100vw;
  margin: auto;
  color: $primary-white;
  position: relative;
  z-index: 10;
  padding: 0 10vw;
  &_title {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 60px 0;
    font-family: Product Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
  }
}
.voyager {
  &_img {
    width: 80vw;
    margin: auto;
  }
  &_description {
    margin-top: 24px;
    p {
      font-size: 14px;
      text-align: left;
      line-height: 150%;
      margin-top: 20px;
      text-align: left;
    }
  }
  .time {
    margin-top: 40px;
  }
}
</style>
