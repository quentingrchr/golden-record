<template>
  <!--- Contient la vidéo responsive (mobile / desktop) -->
  <div @wheel="isScrolled" @click="goToVideo">
    <Welcome v-show="scrollRate < 50" />
    <Video v-show="scrollRate >= 50" :startVideo="launchVideo" />
  </div>
</template>

<script>
import Welcome from '@/layouts/intro/Welcome.vue';
import Video from '@/layouts/intro/Video.vue';

export default {
  components: {
    Welcome,
    Video,
  },
  data() {
    return {
      scrollRate: 0,
      launchVideo: false,
    };
  },
  methods: {
    goToVideo() {
      this.scrollRate = 100;
      this.launchVideo = true;
    },
    isScrolled(e) {
      e.preventDefault();
      if (e.deltaY > 0) {
        this.scrollRate++;
      }
      if (this.scrollRate >= 50) {
        this.launchVideo = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
