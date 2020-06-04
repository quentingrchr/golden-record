<template>
  <div id="app">
    <transition name="fade">
      <div v-if="unit < 1000" class="a"></div>
    </transition>
    <transition name="fade">
      <div v-if="unit >= 1000 && unit < 2000" class="b"></div>
    </transition>
    <transition name="fade">
      <div v-if="unit > 2000" class="c"></div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      unit: 0,
    };
  },
  methods: {
    scroll() {
      this.unit = window.scrollY;
    },
  },
  created() {
    window.addEventListener('scroll', this.scroll);
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
  height: 500vh;
}

.a,
.b,
.c {
  width: 100vw;
  height: 100vh;
  position: fixed;
}

.a {
  background-color: blue;
}
.b {
  background-color: red;
}
.c {
  background-color: yellow;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s;
}

.fade-enter {
  transform: translateX(100%);
  //opacity: 0;
}
.fade-leave-to {
  transform: translateX(-100%);
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
