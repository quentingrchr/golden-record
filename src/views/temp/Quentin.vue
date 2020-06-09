<template>
  <section>
    <TimeElapsed />
  </section>
</template>

<script>
import TimeElapsed from '../../components/TimeElapsed.vue';

export default {
  name: 'Quentin',
  components: { TimeElapsed },
};
</script>

<style lang="scss" scoped>
section {
  height: 100vh;
  background-color: $primary-darkblue;
}

.infos {
  display: inline-block;
  font-family: Product Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  @media (max-width: 740px) {
    font-size: 12px;
  }
  @media (max-width: 370px) {
    font-size: 10px;
  }
  &__title {
    margin-bottom: 16px;
    color: $primary-white;
  }
  &__content {
    border-radius: 5px;
    background-color: $primary-white;
    padding: 16px 0px;
    @media (max-width: 740px) {
      padding: 8px 0px;
    }

    div {
      display: flex;
      padding: 8px 32px;
      position: relative;

      @media (max-width: 580px) {
        padding: 8px 16px;
      }

      span {
        margin-left: 40px;
        color: $primary-white;
        @media (max-width: 390px) {
          margin-left: 20px;
        }

        @media (max-width: 316px) {
          margin-left: 8px;
        }

        em {
          font-size: 1.2em;
          color: $primary-white;
        }
      }
    }
    hr {
      display: block;
      margin: auto;
      content: '';
      background-color: $primary-darkblue;
      opacity: 0.5;
      height: 2px;
      border-radius: 15px;
      width: 75%;
    }
  }
}
</style>
