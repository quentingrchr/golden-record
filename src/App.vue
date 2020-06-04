<template>
  <div id="app" @wheel="wheel">
    <transition name="slide-fade" appear mode="out-in">
      <Message v-if="currentPage === 1" key="message" />
      <Team v-else-if="currentPage === 2" key="team" />
      <Content v-else-if="currentPage === 3" key="content" />
      <Method v-else-if="currentPage === 4" key="method" />
      <Limits v-else-if="currentPage === 5" key="limit" />
    </transition>
    <ProgressBar :page="currentPage" @jumpToPart="changePart" />
  </div>
</template>

<script>
import Message from '@/views/Message.vue';
import Team from '@/views/Team.vue';
import Content from '@/views/Content.vue';
import Method from '@/views/Method.vue';
import Limits from '@/views/Limits.vue';
import ProgressBar from '@/components/partial/ProgressBar.vue';

export default {
  data() {
    return {
      wheelUnit: 0,
    };
  },
  computed: {
    currentPage: function() {
      if (this.wheelUnit < 50) {
        return 1;
      } else if (this.wheelUnit >= 50 && this.wheelUnit < 100) {
        return 2;
      } else if (this.wheelUnit >= 100 && this.wheelUnit < 150) {
        return 3;
      } else if (this.wheelUnit >= 150 && this.wheelUnit < 200) {
        return 4;
      } else {
        return 5;
      }
    },
  },
  methods: {
    wheel(e) {
      e.preventDefault();
      if (this.wheelUnit >= 0 && this.wheelUnit <= 250) {
        if (e.deltaY > 0 || e.deltaX < 0) {
          this.wheelUnit--;
        } else {
          this.wheelUnit++;
        }
      } else if (this.wheelUnit < 0) {
        this.wheelUnit = 0;
      } else {
        this.wheelUnit = 250;
      }
    },
    changePart(value) {
      this.wheelUnit = value;
    },
  },
  components: {
    Team,
    Message,
    Content,
    Method,
    Limits,
    ProgressBar,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s;
}

.slide-fade-enter {
  opacity: 0;
  transform: translateX(30px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
