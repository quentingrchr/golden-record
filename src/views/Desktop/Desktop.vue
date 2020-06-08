<template>
  <div id="desktop" @wheel="wheel">
    <transition
      :name="pageMoveNext ? 'slide-forward' : 'slide-backward'"
      appear
      mode="out-in"
    >
      <Message v-if="currentPage === 1" key="message" />
      <Team v-else-if="currentPage === 2" key="team" />
      <Content v-else-if="currentPage === 3" key="content" />
      <Method v-else-if="currentPage === 4" key="method" />
      <Limits v-else-if="currentPage === 5" key="limit" />
    </transition>
    <GoldenRecord :step="currentPage" />
    <ProgressBar
      :page="currentPage"
      :scroll="this.scrollSpeed"
      @jumpToPart="changePart"
    />
  </div>
</template>

<script>
import Message from '@/views/Desktop/Message.vue';
import Team from '@/views/Desktop/Team.vue';
import Content from '@/views/Desktop/Content.vue';
import Method from '@/views/Desktop/Method.vue';
import Limits from '@/views/Desktop/Limits.vue';
import ProgressBar from '@/components/partial/ProgressBar.vue';
import GoldenRecord from '@/components/partial/GoldenRecord';

export default {
  data() {
    return {
      wheelCount: 0,
      scrollSpeed: 7,
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
        this.wheelCount = this.scrollSpeed * 50;
      }
    },
    changePart(value) {
      value > this.wheelCount
        ? (this.pageMoveNext = true)
        : (this.pageMoveNext = false);
      this.wheelCount = value;
    },
  },
  components: {
    Team,
    Message,
    Content,
    Method,
    Limits,
    ProgressBar,
    GoldenRecord,
  },
};
</script>

<style lang="scss">
#desktop {
  width: 100%;
  height: 100%;
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
