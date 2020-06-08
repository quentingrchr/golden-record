<template>
  <div id="desktop" @wheel="wheel">
    <h1>DESKTOP</h1>
    <transition
      :name="pageMoveNext ? 'slide-forward' : 'slide-backward'"
      appear
      mode="out-in"
    >
      <!--METTRE TOUS LES COMPOSANTS CONCERNÉES PAR LA TRANSITION -->
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
export default {
  data() {
    return {
      /* wheelCount: 0,
      scrollSpeed: 7,
      pageMoveNext: true, */
    };
  },
  computed: {
    /* currentPage: function() {
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
    }, */
  },
  methods: {
    /*  wheel(e) {
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
    },*/
  },
  components: {},
};
</script>

<style lang="scss">
#desktop {
  width: 100%;
  height: 100%;
}

/* .slide-forward-enter-active,
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
} */
</style>
