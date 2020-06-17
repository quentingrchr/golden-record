<template>
  <div class="game">
    <div class="stars"></div>
    <div class="twinkling"></div>
    <div
      class="game__playground playground"
      ref="playground"
      v-if="!failed && !isMissionCompleted"
    >
      <div class="playgroung__item item item--end">
        <h1 class="final-message">
          We are approximativly in 2035, you have no more energy to continue...
          Let Voyager do the path it wants, <br />and finally, maybe meet
          someone... 🖖
        </h1>
      </div>
      <div class="playground__item item item--random">
        <img
          src="./../../assets/img/planets/meteorite.png"
          class="item__obstacle meteorite3"
        />
      </div>
      <div class="playground__item item item--random">
        <img
          src="./../../assets/img/planets/black-hole.png"
          class="item__obstacle blackhole1"
        />
      </div>
      <div class="playground__item item item--random">
        <img
          src="./../../assets/img/planets/meteorite.png"
          class="item__obstacle meteorite2"
        />
      </div>
      <div class="playground__item item item--random">
        <img
          src="./../../assets/img/planets/black-hole.png"
          class="item__obstacle blackhole2"
        />
      </div>
      <div class="playground__item item item--random">
        <img
          src="./../../assets/img/planets/meteorite.png"
          class="item__obstacle meteorite1"
        />
      </div>
      <div class="playground__item item">
        <p class="item__description">
          <em class="date">1989</em> <br />
          Voyager 2 was at <br />
          <em class="distance">4,950km</em><br />
          from the clouds of<br />
          <em class="planet">Neptune</em>
        </p>
        <img
          src="./../../assets/img/planets/neptune.png"
          class="item__obstacle neptune"
        />
      </div>
      <div class="playground__item item item--random">
        <img
          src="./../../assets/img/planets/satellite.png"
          class="item__obstacle satellite"
        />
      </div>
      <div class="playground__item item">
        <img
          src="./../../assets/img/planets/uranus.png"
          class="item__obstacle uranus"
        />
        <p class="item__description">
          <em class="date">1986</em> <br />
          Voyager 2 was at <br />
          <em class="distance">81,500km</em><br />
          from the clouds of<br />
          <em class="planet">Uranus</em>
        </p>
      </div>
      <div class="playground__item item">
        <p class="item__description">
          <em class="date">1980</em> <br />
          Voyager 1 was at <br />
          <em class="distance">124,000km</em><br />
          from the center of<br />
          <em class="planet">Saturne</em>
        </p>
        <img
          src="./../../assets/img/planets/saturne.png"
          class="item__obstacle saturne"
        />
      </div>
      <div class="playground__item item item--random">
        <img
          src="./../../assets/img/planets/spoutnik.png"
          class="item__obstacle spoutnik"
        />
      </div>
      <div class="playground__item item">
        <img
          src="./../../assets/img/planets/jupiter.png"
          class="item__obstacle jupiter"
        />
        <p class="item__description">
          <em class="date">1979</em> <br />
          Voyager 1 was at <br />
          <em class="distance">78.000km</em><br />
          from the surface of<br />
          <em class="planet">Jupiter</em>
        </p>
      </div>
      <div class="playground__item item info">
        <h1 class="item__start">
          Don't bump into the planets 🌎
        </h1>
      </div>
      <div class="playground__item item info">
        <h1 class="item__start">
          You are in 1977, Let's Start
        </h1>
      </div>
      <div
        class="playgroung__item item start--item"
        :class="start ? 'start' : null"
      >
        <h1>You are Voyager, try to do its journey from the beginning</h1>
        <h1>
          Press <img class="keyboard" src="./../../assets/logo/Q.svg" /> to go
          left and <img class="keyboard" src="./../../assets/logo/D.svg" /> to
          go right <br />
          Press one of both to start
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
        <h3>...Voyager is destroyed 😪 ...</h3>
        <button @click="playAgain" class="play">Try again</button>
      </div>
    </transition>
    <button
      @click="playAgain"
      v-if="restartButtonVisible"
      class="play play--again"
    >
      Play again
    </button>
  </div>
</template>

<script>
import explosion from '@/assets/img/planets/explosion.gif';

export default {
  data() {
    return {
      rightLimit: window.innerWidth - 200,
      leftLimit: 65,
      voyagerMoveSpeed: 10,
      gameSpeed: 6,
      template: null,
      failed: false,
      start: false,
      isMissionCompleted: false,
      isBackgroundVisible: true,
      restartButtonVisible: false,
      imgExplosion: explosion,
    };
  },
  methods: {
    moveVoyager(e) {
      let voyagerPosition = this.$refs.voyager.offsetLeft;
      if (e.key === 'q') {
        if (!this.start) {
          this.play();
          this.start = true;
        }
        let nextPosition = voyagerPosition - this.voyagerMoveSpeed;
        if (nextPosition > this.leftLimit) {
          this.$refs.voyager.style.left = nextPosition.toString() + 'px';
        } else {
          this.$refs.voyager.style.left = this.leftLimit + 'px';
        }
      } else if (e.key === 'd') {
        if (!this.start) {
          this.play();
          this.start = true;
        }
        let nextPosition = voyagerPosition + this.voyagerMoveSpeed;
        if (nextPosition < this.rightLimit) {
          this.$refs.voyager.style.left = nextPosition.toString() + 'px';
        } else {
          this.$refs.voyager.style.left = this.rightLimit + "'px";
        }
      }
    },
    backgroundMove() {
      this.$refs.playground.style.top =
        (this.$refs.playground.offsetTop + 1).toString() + 'px';

      if (this.$refs.playground.offsetTop === 0) {
        this.success();
      }
    },
    collision() {
      document.querySelectorAll('.item__obstacle').forEach(($el) => {
        const elementTop = $el.offsetTop + this.$refs.playground.offsetTop;
        if (
          elementTop + 30 <
            this.$refs.voyager.offsetTop + this.$refs.voyager.offsetHeight &&
          elementTop + $el.offsetHeight - 100 >= this.$refs.voyager.offsetTop &&
          $el.offsetLeft + $el.offsetWidth - 20 >
            this.$refs.voyager.offsetLeft &&
          $el.offsetLeft + 100 <
            this.$refs.voyager.offsetLeft + this.$refs.voyager.offsetWidth
        ) {
          this.loose();
        }
      });
    },
    loose() {
      clearInterval(this.template);
      this.$refs.voyager.src = this.imgExplosion;
      setTimeout(() => {
        this.failed = true;
        this.template = null;
      }, 1200);
    },
    play() {
      const gameTemplate = setInterval(() => {
        this.backgroundMove();
        this.collision();
      }, this.gameSpeed);
      this.template = gameTemplate;
      this.intro = false;
    },
    success() {
      clearInterval(this.template);
      this.restartButtonVisible = true;
    },
    playAgain() {
      this.isMissionCompleted = true;
      setTimeout(() => {
        this.failed = false;
        this.isMissionCompleted = false;
        this.restartButtonVisible = false;
        this.play();
      }, 100);
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
  user-select: none;

  & .playground__item {
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 400px;

    &.info {
      display: inline;

      & h1 {
        font-size: 3rem;
        opacity: 1;
      }
    }

    & .item__obstacle {
      &.jupiter {
        width: 55%;
      }

      &.saturne {
        width: 40%;
      }

      &.uranus {
        width: 40%;
      }

      &.neptune {
        width: 35%;
      }
    }
    // Informations next to the planets
    & .item {
      &__start {
        font-weight: 600;
      }
      &__description {
        font-size: 25px;
        font-weight: 400;
        color: $primary-white;
        opacity: 0.5;

        & em {
          &.date {
            font-size: 70px;
            font-weight: 600;
          }
          &.distance {
            font-weight: 600;
          }
          &.planet {
            font-size: 55px;
            font-weight: 600;
          }
        }
      }
    }
  }
}

.keyboard {
  transform: translateY(0px);
}

.final-message {
  font-size: 50px;
  width: 85vw;
}

@keyframes blackhole {
  50% {
    transform: translateX(200%) rotate(360deg);
  }

  to {
    transform: translateX(0) rotate(720deg);
  }
}

@keyframes spoutnik {
  25% {
    transform: translateX(200%) translateY(-200%) rotate(-90deg);
  }
  50% {
    transform: translateX(0) translateY(-400%) rotate(-180deg);
  }
  75% {
    transform: translateX(-200%) translateY(-200%) rotate(-270deg);
  }
  to {
    transform: translateX(0) translateY(0) rotate(-360deg);
  }
}

@keyframes satellite {
  to {
    transform: translateX(400%);
  }
}

.item--random {
  margin-top: 200px;

  & .meteorite1 {
    margin-right: 50%;
    width: 30%;
    animation: meteorites 8s linear;
  }

  & .meteorite3 {
    margin-left: 50%;
    width: 60%;
    animation: meteorites 4s linear;
  }

  & .blackhole1 {
    width: 20%;
    animation: blackhole 5s linear infinite;
    margin-right: 100%;
  }
  & .blackhole2 {
    width: 20%;
    animation: blackhole 5s linear infinite;
    margin-right: 100%;
  }

  & .spoutnik {
    width: 10%;
    animation: spoutnik 5s linear infinite;
    margin-left: 40%;
  }
  & .satellite {
    width: 10%;
    animation: satellite 3s linear alternate infinite;
    margin-right: 100%;
  }
}

.start--item {
  height: 100vh;
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0.7;

  & h1 {
    font-size: 3rem;
    line-height: 150%;
  }

  &.start {
    opacity: 0;
  }
  & h1 {
    color: $primary-white;

    &:first-child {
      margin-bottom: 15vh;
    }
  }
}

.item--end {
  width: 90%;
  color: $primary-white;
  opacity: 0.7;
  line-height: 5rem;
  margin: 30vh 0;
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
  font-family: Product Sans;
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    transform: scale(1.05);
    opacity: 1;
  }
}

.play--again {
  position: fixed;
  bottom: 10vh;
  right: 10vh;
  transition: transform 0.2s;
  opacity: 0.7;

  &:hover {
    transform: scale(1.05);
    opacity: 1;
  }
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
