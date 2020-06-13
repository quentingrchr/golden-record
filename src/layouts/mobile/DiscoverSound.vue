<template>
  <div>
    <Header text="Audio content" />
    <Cta nextChapter="Who did it ?" @goNextChapter="goNextChapter" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Cta from '@/components/MobileCta.vue';

export default {
  components: {
    Header,
    Cta,
  },
  methods: {
    goNextChapter() {
      this.$emit('changeChapter', 5);
    },
  },
  created() {
    window.scrollTo({
      top: 0,
    });
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
