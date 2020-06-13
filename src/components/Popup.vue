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
  background-image: url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIIArQMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAAAgEDBAUHBgj/xAA5EAABBAEDAwAHBQYHAQAAAAABAAIDESEEEjEFQVEGEyIyYXGBB5Gh0eEUI0JSscEWM2KSsvDxFf/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAGhEBAQEBAAMAAAAAAAAAAAAAAAERAiExQf/aAAwDAQACEQMRAD8A8qNpHEq0hVPC4R6VZykcrCEpC1EUPVWbWktSFi1GbFPCrKvc0UqHhVioClwSgpiVUIpFfH4INKOyICoCdrS54a0EuJoDyV9F0/o0ejdJ/wDYha5j2HYQXEMrk+zm/gmzcR84WEAFwIB4PlKuj1HRtbqJDoWPk0oNtfnjxlc9wo0qAhQp3W2qFD4ZUIAfFCEIACzSk00kEWgYKl+3ce+eb5Qd0nCqcnBBRt8Lzx6FdI2piKTNqlrRSWKl5ABWt4FLDOVeU68Ec61W4KLTtyFtz9qtqWleQqnEgVZoG6VZDLF5qxRyqym3miMUecKGgYvi+yqHbI5kjXtdlp3A+CuxN6S6mePbLGxzwCN3HIr9VxXgBx23tvF8q3Swxzbt8m0j3R5KmTdHY6PD66JkMry2PaXEX2y6/wCi4gc0S2bLfhhdx+kdJUDJTHt9kluLAAb+a4urjEOpliBsRvc0fQ0qKUKFKBnlpPs2BQ5KVM0OcCKwBZpLWaQSQQBfdQrHlriSeewAA+Sr47IO03CuYbWYGk7XLhj0rJAkuhfZS51quUgE7eOyYiHyX3WWTKZ7zx2Ve6105jF8q6yhppWFVnlVkwt2G5KpfkpkjjlVmoAtDmltA1kXzalos0FZPBJDt9Y0gOGHDIKqKqNKzTNLpm1eDZISyCncAX2HZbdBCZZodLE25pH5deB4H5/og6mg6P1P0m1vq+lRl3qmb3ve7a1lkkWfK4Os082l1U0GpYWTRPLJGnkOBor9Eeh/Q4ui9Fggaz968CSV5GXOI7/IUKXj/wBqmmbp/TXWhor1jY3n5loQfIgWg4QEIBAygc5TkANaWk3/ABYQKBZA8+UOFGieEA5tQcmzyg65CUmla8KlxXGPSZrkOs8fekCe67BVGeQKkkA5C0PWd7VqOdG8cEEfJKcpSDadoVZIUpyrXilWqlXaZjjJiEvseapdrouhOv1MOgcwBk0gsufYaO5v8iuQyWUtZe8er911HaPmvo/QyXSxazVTa3Y2RkDq9YQQ4ngC/krErV6a9K6b0aWDTaFznSOG9weQ6h2zXfK0/Z90z9r6qJpbLQ4Mo4A7ur6D8VwuomCRuk9XLv1LyRNm9uQAPgvo9Cx2l0Omh0+sZpZpZtzXuDvaO7gFoJHZWpHscU0RcWtdkYyKB+R7rwj7XXB/pxqg03tiiaf9oXuOmMv7PWqiMR3EbrDvqfAK8g9KOnM631D0k6hNHBBFoN5i1DHndK9hDdhs0c32Bx3WVec12QRSkt9m7F3woVAjshSBygkPIDawRkEf9+CU55tCEHdeFneKWxzVS5lrhK9OM6guPZXerSGIrUqVWRaXZZoKzbSFdZVeqzhQY6WhotSWfBTTGN7Sq9q0vbSpJIuieKWozYhpkiAc1zmXwQ6rWiDUvlfseRuOAQ2iSszWOe4NaCSfATxw1M0bgacLLTdLUYrp6sMps8MYja2rGefOSvUPQHQ6bXaaGbVQMldB6qSMubZY4Bxv+i86i6e/XAuDmxCt2xx9qr8d+y9L+zB4k6XKWPzE71TsZx/4rWY+31eri0Wkm1Mzw1kMbpHE8AAWSfgvANV6R6RnRNb06Fsk+o1GpZP+0vjDQ1wJ3Ob38AE5IJuuF6b9q3V29N9FJNNG79/r3CEedvLj9wr6rwg5UVNlziTm8lKUIqyqJdXbKhFcqQEEIQhB9QWJTGtAbfevmoIXl17GYsChzAtBHhUv5wFZWayyMVZZa0kWUbVrWcUNZ80+3Ct2oEbnE7RxmzwE0ximCpEXDpDtacjGT8gt8m2O9g3OI948D5D81z5dznW4knuSeVvmsVpj00s7AyExxteMAuy75lb5JY+jaRkccETtQ4W10jLLf9We/j9E2iYdL08T6tu7TkB7HNbk9q+faj4XC12pk1OpfLJdu4B7DsFtzo0+tn0+q/aY5XetzbjklfffZ56RwdE1Osi6pqi3T6gCRkxsgOHmvII+oXnNrbCTPpiw+8zDfxI/Gx9QiOv6eekv+Jeseui3DSQD1enacWO7q8n+wXzR4Uirzx3UE+FVSC2nXd1ikpKkj4KEQIQjsgkG6B4Q4VVeFCEH1rSmKqBTBy8mPYlwVLgrdyrckSq3BKrmRl/gAck8KSRH/lXf8x5+nhaYKI2tozEg9mDn9Esri4Ae60ZDRwoFnkpjkIrLIs72rRKFQfitxmqH6idmnfp2zSCF5t0YdTSfNLJg1X1taZwspxhdI5dIWnRSNZNRJpw2rLam6GFpldrIzHMce9n81Qt0/wC/0jZP4hz8+/8AYrCUAhAxflS5xe8ucbJ5KCEIUg4pBARRU1gnmkbjQF4CD6e0ApeApAxbjtb5P9gvK9OrG59kC7+9MWsblx3n+Ucfeq/WY2sw08/FFo17M5zne8br8EhCZCJS7coIwmCkhFxkkYSaAWWQOBLD2PF91ul4WCQe1wt81is0yyO5WqU4WV3K6xx6R2+qAa7pnAACr4SrTLboJBudE44cPvWaaMxyOaeyWN2x4cO2Vt10YexszSbNNI/FBgU7Tt3Vi6tQpBrsgC0hoJ4KhMQaz4v6JUAi0KEH1UYuQA8JHEmR1m80hC83x6R2TBCFFhghCEqpQVKFkUS8rny+8UIXTliscqob7yELtHHpAy0pUIWmUhbmEnpz7N4b/wAihCDCVCEIHd77vqld7x+aEIJ8fRQVCEH/2Q==");
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
