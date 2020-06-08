<template>
  <div id="app">
    <Desktop v-if="isBigScreen" />
  </div>
</template>

<script>
import Desktop from '@/views/Desktop/Desktop.vue';

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
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
body,
h1 {
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
