<template>
  <div class="video">
    <div class="fullscreen-bg">
      <video
        autoplay
        preload="auto"
        class="fullscreen-bg__video video"
        id="video"
        ref="video"
      >
        <div class="hideBrandData"></div>
        <source src="@/assets/video/video_intro.mp4" type="video/mp4" />
        Sorry, your browser doesn't support embedded videos, but don't worry,
        you can
        <a href="@/assets/video/video.mp4">download it</a>
        and watch it with your favorite video player!
      </video>
    </div>
    <div class="video-bottom">
      <div class="pulsar">
        <img class="pulsar" src="@/assets/video/pulsar.svg" alt />
      </div>
      <div class="next">
        <router-link to="/golden-record">
          <div class="next__content">
            <p>Skip</p>
            <svg
              viewBox="0 0 28 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 50L26 25.5L1 1" stroke="#E5E5E5" stroke-width="5" />
            </svg>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  /* methods: {
    launchVideo() {
      this.$refs.video.play();
    },
  },
  props: {
    startVideo: {
      type: Boolean,
      required: true,
    },
  },
  watch: {
    startVideo: function(newProps, oldProps) {
      if (newProps === true) {
        this.launchVideo();
      }
    },
  }, */
};
</script>

<style lang="scss" scoped>
.hideBrandData {
  z-index: 11;
  position: absolute;
  width: 100%;
  height: 20px;
  background-color: white;
  top: 50%;
  transform: translateY(-50%);
}
.next:hover {
  cursor: pointer;
}
.next {
  margin-right: 10vh;
  &__content {
    display: flex;
    align-items: center;
  }
  & p {
    font-size: 15px;
    margin-right: 10px;
  }
  & svg {
    width: 8px;
  }
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
  position: relative;
  z-index: 10;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  display: block;
  height: 110%;
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
