<template>
  <section class="thejourney">
    <Header text="The Journey" />
    <div class="voyager">
      <div class="voyager_image">
        <img src="@/assets/img/voyager_journey_mobile.png" alt="voyager prob" />
      </div>
      <div class="voyager_description">
        <p>
          NASA placed an amibitous message aboard Voyager 1 and 2, a kind of
          time capsule, intended to communicate a story of our world to
          extraterrestrials.
        </p>
        <p>
          It is carried by a phonograph record, a gold-plated copper disk called
          “The Golden Record“ containing what’s supposed to be the portray of
          the diversity of life and culture on Earth.
        </p>

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

export default {
  name: "TheJourney",
  components: { Header, TimeElapsed, Cta },
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
