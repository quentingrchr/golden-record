<template>
  <div></div>
</template>

<script>
import Desktop from "@/views/Desktop/Desktop.vue";
import Mobile from "@/views/Mobile/Mobile.vue";

export default {
  computed: {
    isBigScreen: function() {
      if (window.matchMedia("(min-width: 768px)").matches) {
        return true;
      } else {
        return false;
      }
    },
  },
  components: {
    Desktop,
    Mobile,
  },
};
</script>

<style lang="scss"></style>
