<template>
  <div>
    <Title :text="title" />
    <img src="../../assets/img/song_of_earth.png" alt="disc song of earth" />
    <AudioPlayer />
    <div class="categoryContainer">
      <AudioCategory
        v-for="category in categories"
        :key="category.categoryId"
        :category="category.categoryName"
        :instruction="category.categoryInstruction"
      />
    </div>
  </div>
</template>

<script>
import Title from "../../components/Title.vue";
import AudioPlayer from "../../components/AudioPlayer.vue";
import AudioCategory from "../../components/AudioCategory.vue";

export default {
  components: { Title, AudioPlayer, AudioCategory },
  data() {
    return {
      title: "Discover what's inside",
      categories: [
        {
          categoryId: 1,
          categoryName: "Songs",
          categoryInstruction: "Press play button to play a song random"
        },
        {
          categoryId: 2,
          categoryName: "Hellos",
          categoryInstruction:
            "Press play button to ear someone say hello in a random language"
        },
        {
          categoryId: 3,
          categoryName: "Noises",
          categoryInstruction:
            "Press play button to play a noise random you can hear on earth"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.categoryContainer {
  display: flex;
}
</style>
