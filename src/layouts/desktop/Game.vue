<template>
  <div class="game">
    <div class="stars"></div>
    <div class="twinkling"></div>
    <div class="game__playground" ref="playground">
      <div class="star" ref="star"></div>
      <img
        src="./../../assets/img/voyager_journey.png"
        ref="voyager"
        class="voyager"
      />
    </div>
    <transition name="fade">
      <div class="looseOverlay" v-if="failed">
        <h3>Voyager is destroy, your a shit</h3>
        <button @click="play" class="play">Try again</button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rightLimit: window.innerWidth - 100,
      leftLimit: 65,
      voyagerMoveSpeed: 10,
      gameSpeed: 200,
      template: null,
      failed: false,
    };
  },
  methods: {
    moveVoyager(e) {
      let voyagerPosition = this.$refs.voyager.offsetLeft;
      if (e.key === 'q') {
        let nextPosition = voyagerPosition - this.voyagerMoveSpeed;
        if (nextPosition > this.leftLimit) {
          this.$refs.voyager.style.left = nextPosition.toString() + 'px';
        } else {
          this.$refs.voyager.style.left = this.leftLimit + 'px';
        }
      } else if (e.key === 'd') {
        let nextPosition = voyagerPosition + this.voyagerMoveSpeed;
        if (nextPosition < this.rightLimit) {
          this.$refs.voyager.style.left = nextPosition.toString() + 'px';
        } else {
          this.$refs.voyager.style.left = this.rightLimit + "'px";
        }
      }
    },
    starFalling() {
      this.$refs.playground.style.top =
        (this.$refs.playground.offsetTop + 30).toString() + 'px';
    },
    collision($el) {
      console;
      const elementTop = $el.offsetTop + $el.parentNode.offsetTop;

      if (
        elementTop <
          this.$refs.voyager.offsetTop + this.$refs.voyager.offsetHeight &&
        elementTop + $el.offsetHeight >= this.$refs.voyager.offsetTop &&
        $el.offsetLeft + $el.offsetWidth > this.$refs.voyager.offsetLeft &&
        $el.offsetLeft <
          this.$refs.voyager.offsetLeft + this.$refs.voyager.offsetWidth
      ) {
        this.loose();
      }
    },
    loose() {
      this.failed = true;
      this.$refs.playground.style.top =
        (
          (this.$refs.playground.offsetHeight - window.innerHeight) *
          -1
        ).toString() + 'px';
      clearInterval(this.template);
      this.template = null;
    },
    play() {
      const gameTemplate = setInterval(() => {
        this.starFalling();
        this.collision(this.$refs.star);
      }, this.gameSpeed);
      this.template = gameTemplate;
      this.failed = false;
    },
  },
  created() {
    window.addEventListener('keydown', this.moveVoyager);
  },
  destroyed() {
    window.removeEventListener('keydown', this.moveVoyager);
  },
  mounted() {
    const gameTemplate = setInterval(() => {
      this.starFalling();
      this.collision(this.$refs.star);
    }, this.gameSpeed);
    this.template = gameTemplate;
  },
  beforeDestroy() {
    clearInterval(this.template);
  },
};
</script>

<style lang="scss" scoped>
.game {
  width: 100%;
  height: 100%;
  background-color: white;
  overflow: hidden;
}

@keyframes moveVoyager {
  to {
    transform: translateY(50%);
  }
}

.game__playground {
  position: relative;
  height: 110vh;
  width: 100%;
  bottom: 0;
}

.voyager {
  position: fixed;
  left: 50%;
  bottom: 10vh;
  width: 100px;
  animation: moveVoyager 1s ease-in-out alternate infinite forwards;
}

.star {
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: gold;
  top: 0;
  left: 50%;
}

.looseOverlay {
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
}

.play {
  padding: 10px 20px;
  font-size: 1.5rem;
  margin-top: 50px;
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
