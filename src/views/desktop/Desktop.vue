<template>
  <main @wheel="wheel" class="desktopViews-container">
    <Explaination v-show="currentPage === 1" />
    <transition
      :name="pageMoveNext ? 'slide-forward' : 'slide-backward'"
      appear
      mode="out-in"
    >
      <TheJourney v-if="currentPage === 1" key="Journey" />
      <HowToUseIt v-else-if="currentPage === 2" key="How" />
      <DiscoverImg v-else-if="currentPage === 3" key="img" />
      <DiscoverSound v-else-if="currentPage === 4" key="sound" />
      <Team v-else-if="currentPage === 5" key="team" />
      <Game v-else-if="currentPage === 6" key="game" />
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
import EventBus from "@/EventBus";
import NavBar from "@/components/NavBar__Desktop.vue";
import DiscoverImg from "@/layouts/desktop/DiscoverImg.vue";
import DiscoverSound from "@/layouts/desktop/DiscoverSound.vue";
import Explaination from "@/layouts/desktop/Explaination.vue";

import HowToUseIt from "@/layouts/desktop/HowToUseIt.vue";
import Team from "@/layouts/desktop/Team.vue";
import TheJourney from "@/layouts/desktop/TheJourney.vue";
import Game from "@/layouts/desktop/Game.vue";
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
    Game,
    Explaination,
  },
  data() {
    return {
      wheelCount: 0,
      // You just have to change he value below to set the scroll' sensitive rate (the highest is less sensitive)
      scrollSpeed: 6,
      goingNextPart: true,
      pageMoveNext: true,
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
      } else if (
        this.wheelCount >= this.scrollSpeed * 40 &&
        this.wheelCount < this.scrollSpeed * 50
      ) {
        return 5;
      } else {
        return 6;
      }
    },
  },
  methods: {
    wheel(e) {
      e.preventDefault();
      EventBus.$emit("close");
      if (this.wheelCount >= 0 && this.wheelCount <= this.scrollSpeed * 50) {
        if (e.deltaY < 0 || e.deltaX < 0) {
          this.wheelCount--;
          this.pageMoveNext = false;
          return;
        } else {
          this.wheelCount++;
          this.pageMoveNext = true;
          return;
        }
      } else if (this.wheelCount < 0) {
        this.wheelCount = 0;
      } else {
        this.wheelCount = this.scrollSpeed * 60;
      }
    },
    changeChapter(value) {
      value > this.wheelCount
        ? (this.pageMoveNext = true)
        : (this.pageMoveNext = false);
      this.wheelCount = value;
    },
    changeChapterWithKeyboard(e) {
      if (e.key === "ArrowRight") {
        if (this.wheelCount < this.scrollSpeed * 10) {
          this.changeChapter(this.scrollSpeed * 15);
        } else if (
          this.wheelCount >= this.scrollSpeed * 10 &&
          this.wheelCount < this.scrollSpeed * 20
        ) {
          this.changeChapter(this.scrollSpeed * 25);
        } else if (
          this.wheelCount >= this.scrollSpeed * 20 &&
          this.wheelCount < this.scrollSpeed * 30
        ) {
          this.changeChapter(this.scrollSpeed * 35);
        } else if (
          this.wheelCount >= this.scrollSpeed * 30 &&
          this.wheelCount < this.scrollSpeed * 40
        ) {
          this.changeChapter(this.scrollSpeed * 45);
        } else if (
          this.wheelCount >= this.scrollSpeed * 40 &&
          this.wheelCount < this.scrollSpeed * 50
        ) {
          this.changeChapter(this.scrollSpeed * 55);
        }
      } else if (e.key === "ArrowLeft") {
        if (
          this.wheelCount >= this.scrollSpeed * 50 &&
          this.wheelCount < this.scrollSpeed * 60
        ) {
          this.changeChapter(this.scrollSpeed * 45);
        } else if (
          this.wheelCount >= this.scrollSpeed * 40 &&
          this.wheelCount < this.scrollSpeed * 50
        ) {
          this.changeChapter(this.scrollSpeed * 35);
        } else if (
          this.wheelCount >= this.scrollSpeed * 30 &&
          this.wheelCount < this.scrollSpeed * 40
        ) {
          this.changeChapter(this.scrollSpeed * 25);
        } else if (
          this.wheelCount >= this.scrollSpeed * 20 &&
          this.wheelCount < this.scrollSpeed * 30
        ) {
          this.changeChapter(this.scrollSpeed * 15);
        } else if (
          this.wheelCount >= this.scrollSpeed * 10 &&
          this.wheelCount < this.scrollSpeed * 20
        ) {
          this.changeChapter(this.scrollSpeed * 5);
        }
      }
    },
  },
  created() {
    window.addEventListener("keydown", this.changeChapterWithKeyboard);
  },
  destroyed() {
    window.removeEventListener("keydown", this.changeChapterWithKeyboard);
  },
};
</script>

<style lang="scss" scoped>
main {
  height: 100vh;
  background-color: black;
}
.desktopViews-container {
  overflow: hidden;
  height: 100vh;
  width: 100vw;
}

.slide-forward-enter-active,
.slide-forward-leave-active,
.slide-backward-enter-active,
.slide-backward-leave-active {
  transition: all 0.5s;
}
.slide-forward-enter,
.slide-backward-leave-to {
  opacity: 0.3;
  transform: translateX(100%);
}
.slide-forward-leave-to,
.slide-backward-enter {
  opacity: 0.3;
  transform: translateX(-100%);
}
</style>
