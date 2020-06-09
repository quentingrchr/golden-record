<template>
  <div>
    <!--- Contient le web docu a partir de Qu'est ce que c'est -->
    <Desktop v-if="isBigScreen" />
    <Mobile v-else />
  </div>
</template>

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
    }
  },
  components: {
    Desktop,
    Mobile
  }
};
</script>

<style lang="scss"></style>
