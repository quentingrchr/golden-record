<template>
  <div>
    <Header text="Audio content" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
div {
  width: 100%;
  height: 1000px;
  background-color: $primary-darkblue;
  color: $primary-white;
}
</style>
