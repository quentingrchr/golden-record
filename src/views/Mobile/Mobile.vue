<template>
  <main>
    <NavBar />
  </main>
</template>

<script>
import NavBar from '@/components/NavBar__Mobile.vue';
export default {
  name: 'Mobile',
  components: {
    NavBar,
  },
};
</script>

<style lang="scss" scoped>
main {
  background-color: $primary-darkblue;
  width: 100vh;
}
</style>
