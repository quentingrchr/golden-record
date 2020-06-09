<template>
  <div>
    <Title :text="titre" />
  </div>
</template>

<script>
import Title from "../../components/Title.vue";

export default {
  components: { Title },
  data() {
    return {
      titre: "The Journey"
    };
  }
};
</script>

<style>
</style>