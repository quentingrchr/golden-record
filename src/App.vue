<template>
  <div id="app">
    <router-view>
      <!-- Route de l'application -->
    </router-view>
  </div>
</template>

<script>
import { ascii } from "./constants";
export default {
  computed: {},
  components: {},
  mounted() {
    let doc = document.querySelector("html");
    let com = document.createComment(ascii);
    doc.prepend(com);
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
}

#app {
  background-color: red;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  overflow: hidden;
}
</style>
