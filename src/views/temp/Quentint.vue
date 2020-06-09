<template>
  <div>
    <Title :text="titre" />
    <AudioPlayer />
  </div>
</template>

<script>
import Title from "../../components/Title.vue";
import AudioPlayer from "../../components/AudioPlayer.vue";

export default {
  components: { Title, AudioPlayer },
  data() {
    return {
      titre: "The Journey"
    };
  }
};
</script>

<style>
</style>