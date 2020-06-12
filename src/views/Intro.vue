<template>
  <!--- Contient la vidéo responsive (mobile / desktop) -->
  <div @wheel="isScrolled">
    <Welcome v-if="scrollRate < 100" v-on:clickWelcome="clickWelcome" />
    <Video v-show="scrollRate > 100" />
  </div>
</template>

<script>
import Welcome from '@/layouts/intro/Welcome.vue';
import Video from '@/layouts/intro/Video.vue';

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
    clickWelcome() {
      this.scrollRate = 200;
    },
  },
};
</script>

<style lang="scss" scoped></style>
