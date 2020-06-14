<template>
  <!--- Contient la vidéo responsive (mobile / desktop) -->
  <div @wheel="isScrolled" @click="goToVideo">
    <Welcome v-if="scrollRate < changePageControll" />
    <Video v-else />
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
      changePageControll: 50,
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
      } else if (this.scrollRate >= this.changePageControll) {
        this.launchVideo = true;
      }
      console.log(this.scrollRate);
    },
  },
};
</script>

<style lang="scss" scoped></style>
