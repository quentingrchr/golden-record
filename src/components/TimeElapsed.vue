<template>
  <div class="infos">
    <h3 class="infos__title">🌍 Time elapsed</h3>
    <div class="infos__content">
      <Counter title="🛰 ️Voyager 1" />
      <hr />
      <Counter title="🛰 ️Voyager 2" />
    </div>
  </div>
</template>

<script>
import Counter from "./Counter.vue";
export default {
  name: "TimeElapsed",
  components: { Counter }
};
</script>

<style lang="scss" scoped>
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
  @media (max-width: 380px) {
    font-size: 12px;
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
    }
    hr {
      display: block;
      margin: auto;
      content: "";
      background-color: $primary-darkblue;
      opacity: 0.5;
      height: 2px;
      border-radius: 15px;
      width: 75%;
    }
  }
}
</style>
