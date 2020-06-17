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
    EventBus.$off("open", this.handleOpen);
    EventBus.$off("close", this.handleClose);
  }
}
</script>

<style lang="scss">
  .modalsManager {
    position: fixed;
    z-index: 50;
    top: 0%;
    right: 0;
    bottom: 0;
    left: 0%;
    transition: all .3s ease;
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: rgba($primary-darkblue,0.8);

    &-enter,
    &-leave-to{
      transform: translateX(100%);
    }
  }
</style>