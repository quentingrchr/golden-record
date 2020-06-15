<template>
  <div class="game">
    <div class="stars"></div>
    <div class="twinkling"></div>
    <div class="game__playground playground" ref="playground" v-if="!failed">
      <div class="playground__item item">
        <p class="item__description">
          <strong>Neptune</strong> <br /><strong>25.08.1989</strong
          ><br />Distance: 4.950km<br />from the surface<br />Voyager 2
        </p>
        <img
          src="./../../assets/img/planets/neptune.png"
          class="item__obstacle neptune"
        />
      </div>
      <div class="playground__item item">
        <img
          src="./../../assets/img/planets/uranus.png"
          class="item__obstacle uranus"
        />
        <p class="item__description">
          <strong>Uranus</strong> <br /><strong>24.01.1986</strong
          ><br />Distance: 81.500km<br />from the surface<br />Voyager 2
        </p>
      </div>
      <div class="playground__item item">
        <p class="item__description">
          <strong>Saturne</strong> <br /><strong>10.11.1980</strong
          ><br />Distance: 124.000km<br />from the surface<br />Voyager 1
        </p>
        <img
          src="./../../assets/img/planets/saturne.png"
          class="item__obstacle saturne"
        />
      </div>
      <div class="playground__item item">
        <img
          src="./../../assets/img/planets/jupiter.png"
          class="item__obstacle jupiter"
        />
        <p class="item__description">
          <strong>Jupiter</strong> <br /><strong>5.03.1979</strong
          ><br />Distance: 278.000km<br />from the surface<br />Voyager 1
        </p>
      </div>
      <div class="playground__item item info">
        <h2 class="item__description">
          Don't dump into the planets 🌎
        </h2>
      </div>
      <div class="playground__item item info">
        <h1 class="item__description">
          1977 Let's Start
        </h1>
      </div>

      <img
        src="./../../assets/img/voyager_journey.png"
        ref="voyager"
        class="voyager"
      />
    </div>
    <transition name="fade">
      <div class="overlay" v-if="failed">
        <h3>Voyager is destroy, your a shit</h3>
        <button @click="play" class="play">Try again</button>
      </div>
    </transition>
    <transition name="fade">
      <div class="overlay" v-if="intro">
        <h3>Press key "Q" to go left <br />Press key "D" to go right</h3>
        <button @click="play" class="play">Play</button>
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
      gameSpeed: 8,
      template: null,
      failed: false,
      intro: true,
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
        (this.$refs.playground.offsetTop + 1).toString() + 'px';
    },
    collision() {
      document.querySelectorAll('.item__obstacle').forEach(($el) => {
        const elementTop = $el.offsetTop + this.$refs.playground.offsetTop;
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
      });
    },
    loose() {
      console.log('lose');
      this.failed = true;
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
      this.intro = false;
    },
  },
  created() {
    window.addEventListener('keydown', this.moveVoyager);
  },
  destroyed() {
    window.removeEventListener('keydown', this.moveVoyager);
  },

  beforeDestroy() {
    clearInterval(this.template);
  },
};
</script>

<style lang="scss" scoped>
.game {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: white;
  overflow: hidden;
}

@keyframes moveVoyager {
  to {
    transform: translateY(20%);
  }
}

.voyager {
  position: fixed;
  left: 80%;

  bottom: 20vh;
  width: 200px;
  animation: moveVoyager 1s ease-in-out alternate infinite forwards;
}

.game__playground {
  position: absolute;
  width: 100%;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 50px;
  margin-bottom: 50vh;

  & .playground__item {
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 400px;

    &.info {
      display: inline;
    }

    & .item__obstacle {
      border-radius: 50%;

      &.jupiter {
        width: 70%;
      }

      &.saturne {
        width: 50%;
      }

      &.uranus {
        width: 50%;
      }

      &.neptune {
        width: 40%;
      }
    }

    & .item__description {
      color: grey;
      opacity: 0.4;

      & strong {
        font-size: 1.2rem;
        font-weight: bold;
      }
    }
  }
}

.star {
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: gold;
  top: 0;
  left: 50%;
}

.overlay {
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
  margin-left: 50px;
  line-height: 3rem;
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
