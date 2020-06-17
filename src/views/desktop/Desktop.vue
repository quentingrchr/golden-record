<template>
  <main class="desktopViews-container">
    <Explaination
      v-on:closeinstruction="closeInstruction"
      v-show="currentPage === 1"
    />
    <transition
      :name="pageMoveNext ? 'slide-forward' : 'slide-backward'"
      appear
      mode="out-in"
    >
      <TheJourney
        :instructionIsClosed="instructionIsClosed"
        v-if="currentPage === 1"
        key="Journey"
      />

      <HowToUseIt v-else-if="currentPage === 2" key="How" />
      <DiscoverImg v-else-if="currentPage === 3" key="img" />
      <DiscoverSound v-else-if="currentPage === 4" key="sound" />
      <Team v-else-if="currentPage === 5" key="team" />
      <Game v-else-if="currentPage === 6" key="game" />
    </transition>
    <NavBar :page="currentPage" @jumpToOtherChapter="changeChapter" />
    <Icon />
    <ModalsManager />
  </main>
</template>

<script>
import EventBus from '@/EventBus';
import NavBar from '@/components/NavBar__Desktop.vue';
import DiscoverImg from '@/layouts/desktop/DiscoverImg.vue';
import DiscoverSound from '@/layouts/desktop/DiscoverSound.vue';
import Explaination from '@/layouts/desktop/Explaination.vue';

import HowToUseIt from '@/layouts/desktop/HowToUseIt.vue';
import Team from '@/layouts/desktop/Team.vue';
import TheJourney from '@/layouts/desktop/TheJourney.vue';
import Game from '@/layouts/desktop/Game.vue';
import Icon from '@/components/Icons.vue';
import ModalsManager from '@/components/modals/ModalsManager.vue';

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
      instructionIsClosed: false,
      goingNextPart: true,
      pageMoveNext: true,
      speaking: false,
      currentPage: 1,
    };
  },
  methods: {
    closeInstruction() {
      this.instructionIsClosed = true;
    },
    changeChapter(value) {
      value > this.currentPage
        ? (this.pageMoveNext = true)
        : (this.pageMoveNext = false);
      this.currentPage = value;
    },
    changeChapterWithKeyboard(e) {
      if (e.key === 'ArrowRight') {
        this.pageMoveNext = true;
        EventBus.$emit("close");
        this.currentPage >= 6 ? (this.currentPage = 6) : this.currentPage++;
      } else if (e.key === 'ArrowLeft') {
        this.pageMoveNext = false;
        EventBus.$emit("close");
        this.currentPage <= 1 ? (this.currentPage = 1) : this.currentPage--;
      }
    },
  },
  created() {
    window.addEventListener('keydown', this.changeChapterWithKeyboard);
  },
  destroyed() {
    window.removeEventListener('keydown', this.changeChapterWithKeyboard);
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
