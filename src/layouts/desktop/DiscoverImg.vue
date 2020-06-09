<template>
  <div></div>
</template>

<script>
import json from '@/picturesLink.json';
export default {
  data() {
    return {
      imgs: json,
    };
  },
  beforeMount() {
    console.log(json);
  },
};
</script>

<style></style>
