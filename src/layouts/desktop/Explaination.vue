<template>
  <div
    class="explaination"
    @click="jumpToOtherChapter(1)"
    :class="overlayIsOpen ? '' : 'none'"
  >
    <h2 class="explaination__title">Hi Stranger ! 👋🏼👽</h2>
    <p class="explaination__text">
      To navigate between the different pages :
      <em>use keyboard arrows</em>
      <span>
        <div>
          <img
            class="key-arrows key-arrows--left"
            :src="leftArrowSrc"
            alt="left arrow key"
          />
          <img
            class="key-arrows key-arrows--right"
            :src="rightArrowSrc"
            alt="right arrow key"
          />
        </div>
      </span>
      <br />or <em>click on the parts in the navbar</em> on the left
    </p>
    <p class="explaination__headphones">
      🎧 Use headphones for more immersive experience
    </p>
    <p class="explaination__pass">Click anywhere to pass the instructions</p>
    <div class="disclaimer">
      <p class="disclaimer__title">Disclaimer</p>
      <p class="disclaimer__text">
        This site has been created for educational purposes as part of the
        Bachelor's curriculum of the HETIC school. The contents presented have
        not been the subject of a request for right of use. This site will in no
        case be used for commercial purposes and will not be published.
      </p>
    </div>
  </div>
</template>

<script>
import leftArrowSrc from '../../assets/img/left-arrow.png';
import rightArrowSrc from '../../assets/img/right-arrow.png';

export default {
  name: 'Explaination',
  props: {},
  data() {
    return {
      overlayIsOpen: true,
      leftArrowSrc,
      rightArrowSrc,
    };
  },
  methods: {
    jumpToOtherChapter(value) {
      this.$emit('jumpToOtherChapterFromInto', value);
    },
    /* closeInstruction() {
      this.overlayIsOpen = false;
      this.$emit("closeinstruction");
    }, */
  },
};
</script>

<style lang="scss" scoped>
.none {
  pointer-events: none;
  opacity: 0;
}

@keyframes right-arrow {
  from {
    transform: translate(0px, 8px);
  }
  to {
    transform: translate(-5px, 8px);
  }
}

@keyframes left-arrow {
  from {
    transform: translate(0px, 8px);
  }
  to {
    transform: translate(5px, 8px);
  }
}

.explaination {
  transition: opacity 0.2s ease;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background: rgba($color: #000000, $alpha: 0.95);
  position: absolute;
  display: flex;

  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 0px 20vw;
  & h2 {
    margin-top: 80px;
    font-weight: bold;
  }
  &__text {
    width: 60vw;
    font-size: 25px;
    margin-top: 100px;
    & em {
      font-weight: bold;
    }
    & span {
      margin: 0px 10px;
    }
  }
  & .key-arrows {
    width: 50px;
    margin: 8px 20px;
    height: auto;
  }

  .key-arrows--right {
    animation: right-arrow 0.6s ease infinite alternate-reverse;
  }
  .key-arrows--left {
    animation: left-arrow 0.6s ease infinite alternate-reverse;
  }

  &__headphones {
    font-size: 26px;
    margin-top: 60px;
  }

  &__pass {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10vh;
    margin-top: 30px;
  }
}

.disclaimer {
  height: 50px;
  width: 98vw;
  opacity: 0.5;
  margin-bottom: 20px;
  justify-self: self-end;

  &__title {
    font-size: 12px;
    margin-bottom: 0px;
    text-transform: uppercase;
  }
  &__text {
    font-size: 12px;
    text-align: center;
    margin: auto;
  }
}
</style>
