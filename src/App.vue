<template>
  <div id="app">
    <router-view>
      <!-- Route de l'application -->
    </router-view>
  </div>
</template>

<script>
export default {
  computed: {},
  components: {},
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
