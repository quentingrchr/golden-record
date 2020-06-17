<template>
  <main>
    <!-- <transition> -->
    <Journey v-if="currentPage === 1" @changeChapter="changeChapter" />
    <HowToUse v-else-if="currentPage === 2" @changeChapter="changeChapter" />
    <Images v-else-if="currentPage === 3" @changeChapter="changeChapter" />
    <Sounds v-else-if="currentPage === 4" @changeChapter="changeChapter" />
    <Team v-else-if="currentPage === 5" />
    <Icon />
    <!-- </transition> -->
    <NavBar
      :titles="chaptersName"
      @getSelectedPageIndex="setSelectedPage"
      :actualSelectedPage="currentPage"
    />
    <div class="gradientEffect gradientEffect--top"></div>
    <div class="gradientEffect gradientEffect--bottom"></div>
  </main>
</template>

<script>
import NavBar from "@/components/NavBar__Mobile.vue";
import { titles } from "../../constants";
import Images from "@/layouts/mobile/DiscoverImg.vue";
import Sounds from "@/layouts/mobile/DiscoverSound.vue";
import HowToUse from "@/layouts/mobile/HowToUseIt.vue";
import Journey from "@/layouts/mobile/TheJourney.vue";
import Team from "@/layouts/mobile/Team.vue";
import Icon from "../../components/Icons";

export default {
  name: "Mobile",
  data() {
    return {
      chaptersName: Object.values(titles).splice(0, 5),
      currentPage: 1
    };
  },
  components: {
    NavBar,
    Images,
    Sounds,
    HowToUse,
    Journey,
    Team,
    Icon
  },
  methods: {
    check(e) {
      console.log(e.target.offsetTop);
    },
    setSelectedPage(index) {
      this.currentPage = index + 1;
    },
    changeChapter(value) {
      this.currentPage = value;
    }
  }
};
</script>

<style lang="scss" scoped>
main {
  background-color: $primary-darkblue;
  width: 100%;
  min-height: 100vh;
}
.gradientEffect {
  width: 100%;
  height: 15vh;
  position: fixed;
  pointer-events: none;

  &--top {
    top: 0;
    background: linear-gradient($primary-darkblue 10%, transparent);
  }

  &--bottom {
    bottom: 10vh;
    background: linear-gradient(transparent 10%, $primary-darkblue);
  }
}
</style>
