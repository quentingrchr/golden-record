<template>
  <div id="app">
    <div class="fullscreen-bg">
      <video autoplay preload="auto" loop class="fullscreen-bg__video video" id="video">
        <source src="@/assets/video/video_intro.mp4" type="video/mp4" />Sorry, your browser doesn't support embedded videos,
        but don't worry, you can
        <a
          href="@/assets/video/video.mp4"
        >download it</a>
        and watch it with your favorite video player!
      </video>
    </div>
    <div class="video-bottom">
      <div class="pulsar">
        <img class="pulsar" src="@/assets/video/pulsar.svg" alt />
      </div>
      <div class="next">
        <router-link to="/golden-record">
          <svg
            width="12"
            height="38"
            viewBox="0 0 28 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 50L26 25.5L1 1" stroke="#E5E5E5" stroke-width="2" />
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.next:hover {
  cursor: pointer;
}
.next svg {
  margin-right: 80px;
}
.pulsar {
  margin-left: 8px;
}
.fullscreen-bg {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  font-size: 0;
  z-index: 2;
  background: black;
}

.fullscreen-bg__video {
  position: absolute;
  z-index: 200;
  top: 0;
  left: 0;
  display: block;

  object-fit: fill;
}

@media (min-aspect-ratio: 16/9) {
  .fullscreen-bg__video {
    height: 95vh;
    width: 100vw;
  }
}

@media (max-aspect-ratio: 16/9) {
  .fullscreen-bg__video {
    height: auto;
    width: 100%;
  }
}

.video-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 20vh;
  width: 100%;
  font-size: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
}
</style>
