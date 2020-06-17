<template>
  <!--- Contient la vidéo responsive (mobile / desktop) -->
  <div @wheel="isScrolled" @click="goToVideo">
    <Welcome v-if="scrollRate < changePageControll" />
    <Video v-else />
  </div>
</template>

<script>
import Welcome from "@/layouts/intro/Welcome.vue";
import Video from "@/layouts/intro/Video.vue";
import { appTitle } from "../constants";

export default {
  components: {
    Welcome,
    Video
  },
  data() {
    return {
      scrollRate: 0,
      changePageControll: 50,
      launchVideo: false,
      mobileClicked: 0
    };
  },
  methods: {
    goToVideo() {
      if (window.innerWidth >= 768) {
        this.scrollRate = 100;
        this.launchVideo = true;
        return;
      }
      this.mobileClicked++;
      if (this.mobileClicked >= 2) {
        this.scrollRate = 100;
        this.launchVideo = true;
      }
    },
    isScrolled(e) {
      e.preventDefault();
      if (e.deltaY > 0) {
        this.scrollRate++;
      } else if (this.scrollRate >= this.changePageControll) {
        this.launchVideo = true;
      }
    }
  },
  mounted() {
    let $title = document.querySelector("title");

    function titleScroller(text) {
      $title.textContent = text;
      setTimeout(function() {
        titleScroller(text.substr(1) + text.substr(0, 1));
      }, 500);
    }
    titleScroller(appTitle);
  }
};
</script>

<style lang="scss" scoped></style>