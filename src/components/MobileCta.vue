<template>
  <div class="mobile-cta" @click="goNext">{{ nextChapter }}<span>→</span></div>
</template>

<script>
export default {
  props: {
    nextChapter: {
      type: String,
      required: true,
    },
  },
  methods: {
    goNext() {
      console.log('click');
      this.$emit('goNextChapter', '');
    },
  },
};
</script>

<style lang="scss" scoped>
.mobile-cta {
  color: $primary-darkblue;
  background-color: white;
  display: inline-block;
  padding: 10px;
  margin-top: 30px;
  margin-bottom: 150px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;

  & span {
    margin-left: 10px;
  }
}
</style>
