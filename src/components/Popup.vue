<template>
  <div class="pop_up" v-bind:class="{ closed: isClosed, open: !isClosed }">
    <svg
      @click="closePopUp"
      class="pop_up_close"
      width="36"
      height="36"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 0C15.53 0 20 4.47 20 10C20 15.53 15.53 20 10 20C4.47 20 0 15.53 0 10C0 4.47 4.47 0 10 0ZM13.59 5L10 8.59L6.41 5L5 6.41L8.59 10L5 13.59L6.41 15L10 11.41L13.59 15L15 13.59L11.41 10L15 6.41L13.59 5Z"
        fill="#FFFCFC"
      />
    </svg>

    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "PopUp",
  data: () => ({
    isClosed: false
  }),
  methods: {
    closePopUp() {
      this.isClosed = true;
    }
  },
  props: {
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
/* pop_up */
.pop_up {
  position: absolute;
  z-index: 200;
  background-repeat: no-repeat;
  background-size: cover;
  width: 500px;
  height: 300px;
  background-image: url("https://66.media.tumblr.com/71d2be50c56e9bdefca1bc45db972ccf/tumblr_nu08b1P4G01rtynt1o3_r1_500.png");
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-radius: 12px;
  &_close {
    margin-top: 24px;
    margin-right: 24px;
    &:hover {
      cursor: pointer;
    }
  }

  p {
    color: $primary-white;
    font-family: "Product Sans";
    font-size: 20px;
    text-align: left;
    margin-top: 24px;
    background-color: rgba(0, 0, 0, 0.4);
    padding-left: 16px;
    text-align: left;
    width: 100%;
  }
}
.open {
  animation: appear 2s forwards;
}

.closed {
  animation: disappear 2s forwards;
}
@keyframes appear {
  0% {
    transform: scale(0) rotate(500deg);
  }
  100% {
    transform: scale(1) rotate(0deg);
  }
}
@keyframes disappear {
  0% {
    transform: scale(1) rotate(0deg);
  }
  100% {
    transform: scale(0) rotate(500deg);
  }
}
</style>
