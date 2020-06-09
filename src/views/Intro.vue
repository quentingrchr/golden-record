<template>
  <!--- Contient la vidéo responsive (mobile / desktop) -->
  <div @wheel="isScrolled">
    <Welcome v-if="!scrolled" />
    <Video v-else />
  </div>
</template>

<script>
import Welcome from '@/layouts/intro/welcome.vue';
import Video from '@/layouts/intro/video.vue';

export default {
  computed: {},
  components: {
    Welcome,
    Video,
  },
  data() {
    return {
      scrolled: false,
    };
  },
  methods: {
    isScrolled(e) {
      e.preventDefault();
      if (e.deltaY > 0) {
        this.scrolled = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.intro {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
}
.title-welcome {
  position: absolute;
  z-index: 3;
  top: 200px;
  /* identical to box height */

  background: -webkit-linear-gradient(
    180deg,
    rgba(139, 89, 89, 0.3) 0%,
    rgba(248, 248, 248, 1) 50%,
    rgba(248, 248, 248, 0.3) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.earth-bg {
  z-index: 2;
  width: 775px;
  height: auto;
  position: absolute;
  bottom: -95%;
  animation: earth-rotation 140s infinite forwards;
  opacity: 0.8;
}
@media screen and (max-width: 300px) {
  .earth-bg {
    width: 400px;
  }
}

.icone-scroll__desktop {
  position: absolute;
  z-index: 10;
  bottom: 10px;
  height: 60px;
  display: flex;
  justify-content: center;
}
.icone-scroll__mobile {
  position: absolute;
  z-index: 10;
  bottom: 40px;
  height: 20px;
  display: flex;
  justify-content: center;
  display: none;
  p {
    margin-bottom: 10px;
    font-family: Product Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 12px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #f8f8f8;
  }
  svg {
    animation: scroll-mouse 2s infinite;
  }
}
@media screen and (max-width: 768px) {
  .icone-scroll__desktop {
    display: none;
  }
  .icone-scroll__mobile {
    display: block;
  }
}

.scroll-arrow {
  animation: scroll-mouse 2s infinite;
  width: 1px;
}

@keyframes scroll-mouse {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes earth-rotation {
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
}
@keyframes move-twink-back {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -10000px 5000px;
  }
}
@-webkit-keyframes move-twink-back {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -10000px 5000px;
  }
}
@-moz-keyframes move-twink-back {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -10000px 5000px;
  }
}
@-ms-keyframes move-twink-back {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -10000px 5000px;
  }
}

.stars,
.twinkling {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;
}

.stars {
  background: #000
    url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top
    center;
  z-index: 0;
}

.twinkling {
  background: transparent
    url(http://www.script-tutorials.com/demos/360/images/twinkling.png) repeat
    top center;
  z-index: 1;

  -moz-animation: move-twink-back 200s linear infinite;
  -ms-animation: move-twink-back 200s linear infinite;
  -o-animation: move-twink-back 200s linear infinite;
  -webkit-animation: move-twink-back 200s linear infinite;
  animation: move-twink-back 200s linear infinite;
}
</style>
