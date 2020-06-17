<template>
  <div class="webDocVue">
    <!--- Contient le web docu a partir de Qu'est ce que c'est -->
    <Desktop v-if="isBigScreen" />
    <Mobile v-else />
  </div>
</template>

<script>
import Desktop from "@/views/desktop/Desktop.vue";
import Mobile from "@/views/mobile/Mobile.vue";

export default {
  data() {
    return {
      isBigScreen: true
    };
  },
  components: {
    Desktop,
    Mobile
  },
  created() {
    this.checkSize();
    window.addEventListener("keydown", function(e) {
      if (e.keyCode == 32 && e.target == document.body) {
        e.preventDefault();
      }
    });
    window.addEventListener("resize", () => {
      this.checkSize();
    });
  },
  methods: {
    checkSize() {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        this.isBigScreen = true;
      } else {
        this.isBigScreen = false;
      }
    }
  }
};
</script>

<style lang="scss">
.webDocVue {
  width: 100%;
}
</style>
