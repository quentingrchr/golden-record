<template>
  <div class="intro">
    <!--- Contient la vidéo responsive (mobile / desktop) -->
    <h1 class="title-welcome">The song of Earth</h1>
    <img class="earth-bg" src="@/assets/earth-welcome.png" alt />
    <div class="stars"></div>
    <div class="twinkling"></div>
    <svg
      class="icone-scroll"
      width="15"
      height="39"
      viewBox="0 0 30 69"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.25"
        y="1.25"
        width="27.5"
        height="46.7857"
        rx="13.75"
        stroke="#F8F8F8"
        stroke-width="2.5"
      />
      <rect x="13" y="10.7144" width="3.21429" height="8.57143" rx="1.60714" fill="#F8F8F8" />
      <path
        class="scroll-arrow"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28.1295 55.6256C28.5995 55.1556 28.5995 54.3937 28.1295 53.9238C27.6596 53.4538 26.8976 53.4538 26.4277 53.9238L15.241 65.1104L4.0543 53.9238C3.58435 53.4538 2.82241 53.4538 2.35246 53.9238C1.88251 54.3937 1.88251 55.1556 2.35246 55.6256L14.3788 67.6519C14.6167 67.8899 14.9295 68.0073 15.2413 68.0043C15.553 68.0071 15.8654 67.8897 16.1032 67.6519L28.1295 55.6256Z"
        fill="#F8F8F8"
      />
    </svg>
  </div>
</template>

<script>
export default {
  computed: {},
  components: {}
};
</script>

<style lang="scss" scoped >
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

.icone-scroll {
  position: absolute;
  z-index: 10;
  bottom: 10px;
  height: 60px;
  display: flex;
  justify-content: center;
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
