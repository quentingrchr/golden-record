<template>
  <section>
    <NextCtaMobile />
  </section>
</template>

<script>
import NextCtaMobile from "../../components/NextCtaMobile";
export default {
  name: "Quentin",
  components: { NextCtaMobile },
  props: {},
  data: () => {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
section {
  height: 100vh;
  background-color: $primary-darkblue;
}
</style>
