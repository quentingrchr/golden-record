<template>
  <div class="category">
    <h3>{{ category }}</h3>
    <svg>
      <use href="#play" />
    </svg>
    <div>
      <p>Here are {{ category }}</p>
      <p>{{ instruction }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AudioCategory",
  props: {
    category: {
      type: String,
      Required: true
    },
    instruction: {
      type: String,
      Required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.category {
  width: 240px;
  height: 314px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: $primary-darkblue;
}

svg {
  width: 122px;
  height: 122px;
}

p {
  font-size: 16px;

  &:first-child {
    margin-bottom: 16px;
  }
}
</style>