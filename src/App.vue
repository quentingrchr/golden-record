<template>
  <div id="app">
    <Desktop v-if="isBigScreen" />
    <Mobile v-else />
  </div>
</template>

<script>
import Desktop from '@/views/Desktop/Desktop.vue';
import Mobile from '@/views/Mobile/Mobile.vue';

export default {
  computed: {
    isBigScreen: function() {
      if (window.matchMedia('(min-width: 768px)').matches) {
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

<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  width: 100vw;
  height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
