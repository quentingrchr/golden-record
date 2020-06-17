<template>
  <section class="thejourney">
    <Header :text="titleChapter" />
    <div class="voyager">
      <div class="voyager_image">
        <img src="@/assets/img/voyager_journey_mobile.png" alt="voyager prob" />
      </div>
      <div class="voyager_description">
        <p>{{ text_1 }}</p>
        <p>{{ text_2 }}</p>

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
import { url } from "@/constants.js";
import { titles } from "@/constants.js";

export default {
  name: "TheJourney",
  data() {
    return {
      titleChapter: titles.page1,
      text_1: "loading",
      text_2: "loading"
    };
  },
  components: { Header, TimeElapsed, Cta },
  beforeCreate() {
    fetch(`${url}/query/journey`, {
      method: "GET"
    })
      .then(response => response.json())
      .then(data => {
        this.text_1 = data[0].text_1;
        this.text_2 = data[0].text_2;
      });
  },
  methods: {
    goNextChapter() {
      this.$emit("changeChapter", 2);
    }
  },
  created() {
    window.scrollTo({
      top: 0
    });
  }
};
</script>

<style lang="scss" scoped>
.thejourney {
  width: 80vw;
  margin: auto;
  color: $primary-white;
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
