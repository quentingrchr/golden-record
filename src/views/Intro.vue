<template>
  <!--- Contient la vidéo responsive (mobile / desktop) -->
  <div @wheel="isScrolled">
    <Welcome v-if="scrollRate < 100" />
    <Video v-else />
  </div>
</template>

<script>
import Welcome from '@/layouts/intro/welcome.vue';
import Video from '@/layouts/intro/video.vue';

export default {
  computed: {},
  components: {
    Welcome,
    Video,
  },

  data() {
    return {
      scrollRate: 0,
    };
  },
  methods: {
    isScrolled(e) {
      e.preventDefault();
      if (e.deltaY > 0) {
        this.scrollRate++;
      }

      console.log(this.scrollRate);
    },
  },
};
</script>

<style lang="scss" scoped></style>
