<template>
  <div>//<img v-for="img in imgs.src" :key="img" :src="img" /></div>
</template>

<script>
import json from '@/picturesLink.json';
export default {
  data() {
    return {
      imgs: json,
    };
  },
};
</script>

<style></style>
