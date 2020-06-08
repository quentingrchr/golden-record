<template>
  <div>
    <!--- Contient le web docu a partir de Qu'est ce que c'est -->
    <Desktop />
    <Mobile />
  </div>
</template>

<script>
import Desktop from "@/views/desktop/Desktop.vue";
import Mobile from "@/views/mobile/Mobile.vue";

export default {
  computed: {
    isBigScreen: function() {
      if (window.matchMedia("(min-width: 768px)").matches) {
        return true;
      } else {
        return false;
      }
    }
  },
  components: {
    Desktop,
    Mobile
  }
};
</script>

<style lang="scss"></style>
