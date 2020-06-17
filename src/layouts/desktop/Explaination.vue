<template>
  <div
    class="explaination"
    @click="closeInstruction()"
    :class="overlayIsOpen ? '' : 'none'"
  >
    <h2 class="explaination__title">Hi Stranger ! 👋🏼👽</h2>
    <p class="explaination__text">
      To navigate between the different pages :
      <em>use keyboard arrows</em>
      <span>
        <div>
          <svg
            class="key-arrows key-arrows--right"
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="512"
            viewBox="0 0 512 512"
          >
            <title>ionicons-v5-a</title>
            <polyline
              points="244 400 100 256 244 112"
              style="stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"
            />
            <line
              x1="120"
              y1="256"
              x2="412"
              y2="256"
              style="stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"
            />
          </svg>

          <svg
            class="key-arrows key-arrows--left"
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="512"
            viewBox="0 0 512 512"
          >
            <title>ionicons-v5-a</title>
            <polyline
              points="268 112 412 256 268 400"
              style="stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"
            />
            <line
              x1="392"
              y1="256"
              x2="100"
              y2="256"
              style="stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"
            />
          </svg>
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
export default {
  name: "Explaination",
  props: {},
  data() {
    return {
      overlayIsOpen: true,
    };
  },
  methods: {
    closeInstruction() {
      this.overlayIsOpen = false;
      this.$emit("closeinstructions");
    },
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
    line,
    polyline {
      stroke: $primary-white;
    }
    width: 50px;
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
