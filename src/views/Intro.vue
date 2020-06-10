<template>
  <!--- Contient la vidéo responsive (mobile / desktop) -->
  <div @wheel="isScrolled">
    <Welcome v-if="!scrolled" />
    <Video v-else />
  </div>
</template>

<script>
import Welcome from "@/layouts/intro/Welcome.vue";
import Video from "@/layouts/intro/Video.vue";

export default {
  computed: {},
  components: {
    Welcome,
    Video
  },

  data() {
    return {
      scrolled: false
    };
  },
  methods: {
    isScrolled(e) {
      e.preventDefault();
      if (e.deltaY > 0) {
        this.scrolled = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
