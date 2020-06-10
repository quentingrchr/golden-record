<template>
  <div class="category" v-on="$listeners">
    <h3>{{ category }}</h3>
    <svg @click="clickSelect" v-if="isSelected">
      <use href="#pause" />
    </svg>
    <svg @click="clickSelect" v-else>
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
    },
    isSelected: {
      type: Boolean,
      Required: true
    }
  },
  methods: {
    clickSelect() {
      this.$emit("click-select");
    }
  }
};
</script>

<style lang="scss" scoped>
svg {
  cursor: pointer;
}

.category {
  width: 240px;
  height: 314px;
  margin-right: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: $primary-white;
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