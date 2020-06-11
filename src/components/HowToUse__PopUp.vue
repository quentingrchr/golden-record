<template>
  <div v-on="$listeners" class="frame">
    <div class="frame__container">
      <BaseIcon
      class="frame__frames"
      href="#frame"
      />
      <BaseIcon
      class="frame__pulsar"
      href="#pulsar"
      />
      <div class="frame__content">
        <h2 class="frame__title">Where we are ?</h2>
        <p>This symbol represents a pulsar map.
          <br>
          <br>
          This map helping to explain our position in the universe 
          by triangulating the distance from Earth to the 14 neutron 
          stars closest to it.
        </p>
      </div>
    </div>
    <Icons/>
  </div>
</template>

<script>
import BaseIcon from "@/components/BaseIcon.vue"
import Icons from "@/components/Icons.vue"

export default {
  name: "frame",
  components:{
    BaseIcon,
    Icons
  }
}
</script>

<style lang="scss" scoped>
  .frame{
    width: 75vw;
    height: 75vh;
    left: 12%;
    z-index: 12;
    position: absolute;
    color: white;
    background-color: #494949;

    &__frames{
      position: absolute;
      // border: 1px solid blue;
      left: 5px;
      top: 5px;
      width: 100%;
      height: 90%;
    }

    &__container{
      padding: 20px;
      display: flex;
      align-items: center;
      position: relative;
      width: 95%;
      // border: 1px solid red;
      height: 100%;
    }

    &__content{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      text-align: start;
      width: 50%;
      height: 100%;
      justify-content: space-evenly;
      // border: 1px solid yellow;
    }

    &__title{
      // border: 1px solid blue;
      height: 10%;
    }

    &__pulsar{
      // border: 1px solid green;
      stroke: white;
      height: 70%;
      width: 70%;
    }
  }
</style>