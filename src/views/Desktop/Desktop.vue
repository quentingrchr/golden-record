<template>
  <main @wheel="wheel" class="desktopViews-container">
    <transition appear name="slide" mode="out-in">
      <TheJourney v-if="currentPage === 1" key="Journey" />
      <HowToUseIt v-else-if="currentPage === 2" key="How" />
      <DiscoverImg v-else-if="currentPage === 3" key="img" />
      <DiscoverSound v-else-if="currentPage === 4" key="sound" />
      <Team v-else-if="currentPage === 5" key="team" />
    </transition>
    <NavBar
      :page="currentPage"
      :scroll="scrollSpeed"
      @jumpToOtherChapter="changeChapter"
    />
    <Icon />
    <ModalsManager />
  </main>
</template>

<script>
import NavBar from "@/components/NavBar__Desktop.vue";
import DiscoverImg from "@/layouts/desktop/DiscoverImg.vue";
import DiscoverSound from "@/layouts/desktop/DiscoverSound.vue";
import HowToUseIt from "@/layouts/desktop/HowToUseIt.vue";
import Team from "@/layouts/desktop/Team.vue";
import TheJourney from "@/layouts/desktop/TheJourney.vue";
import Icon from "@/components/Icons.vue";
import ModalsManager from "@/components/modals/ModalsManager.vue";


export default {
  components: {
    NavBar,
    DiscoverImg,
    DiscoverSound,
    HowToUseIt,
    Team,
    TheJourney,
    Icon,
    ModalsManager,
  },
  data() {
    return {
      wheelCount: 0,
      // You just have to change he value below to set the scroll' sensitive rate (the highest is less sensitive)
      scrollSpeed: 7,
    };
  },
  computed: {
    currentPage: function() {
      if (this.wheelCount < this.scrollSpeed * 10) {
        return 1;
      } else if (
        this.wheelCount >= this.scrollSpeed * 10 &&
        this.wheelCount < this.scrollSpeed * 20
      ) {
        return 2;
      } else if (
        this.wheelCount >= this.scrollSpeed * 20 &&
        this.wheelCount < this.scrollSpeed * 30
      ) {
        return 3;
      } else if (
        this.wheelCount >= this.scrollSpeed * 30 &&
        this.wheelCount < this.scrollSpeed * 40
      ) {
        return 4;
      } else {
        return 5;
      }
    },
  },
  methods: {
    wheel(e) {
      e.preventDefault();
      if (this.wheelCount >= 0 && this.wheelCount <= this.scrollSpeed * 50) {
        if (e.deltaY < 0 || e.deltaX < 0) {
          this.wheelCount--;
          return;
        } else {
          this.wheelCount++;
          return;
        }
      } else if (this.wheelCount < 0) {
        this.wheelCount = 0;
      } else {
        this.wheelCount = this.scrollSpeed * 50;
      }
    },
    changeChapter(value) {
      this.wheelCount = value;
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  height: 100vh;
}
.desktopViews-container {
  overflow: hidden;
  height: 100vh;
  width: 100vw;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}
.slide-enter {
  opacity: 0.3;
  transform: translateX(100%);
}
.slide-leave-to {
  opacity: 0.3;
  transform: translateX(-100%);
}
</style>
