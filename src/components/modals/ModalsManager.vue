<template>
  <transition name="modalsManager">
    <div 
      class="modalsManager"
      v-if="component"
      @click.self="handleClose"
    >
        <component 
          :is="component"
          :content="content"
        />
    </div>
  </transition>
</template>

<script>
import EventBus from "@/EventBus";

export default {
  name: "ModalsManager",
  components: {
    BaseModal: () => import("@/components/modals/BaseModal.vue"),
  },
  data: () => ({
    component: null,
    content: null,
  }),
  methods: {
    handleOpen({ component, content}) {
      if(!(component in this.$options.components)) return;
      this.component = component;
      this.content = content
    },
    handleClose() {
      this.component = null;
      this.content = null;
    }
  },
  created() {
    EventBus.$on("open", this.handleOpen);
    EventBus.$on("close", this.handleClose);
  },
  beforeDestroy() {
    EventBus.off("open", this.handleOpen);
    EventBus.off("close", this.handleClose);
  }
}
</script>

<style lang="scss">
  .modalsManager {
    position: fixed;
    z-index: 1000;
    top: 15%;
    right: 0;
    bottom: 0;
    left: 10%;
    transition: all .3s ease;
    display: flex;
    width: 73vw;
    height: 80vh;
    justify-content: center;
    align-items: center;

    @include media_tablet {
      width: 75vw;
    }

    &-enter {
      transform: translateX(100%);
    }

    &-leave-to{
      opacity: 0;
    }
  }
</style>