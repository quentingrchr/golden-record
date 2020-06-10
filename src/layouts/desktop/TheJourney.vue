<template>
  <section class="thejourney">
    <Title class="thejourney_title" text="The journey" />

    <div class="voyager">
      <div class="voyager_image">
        <h4>Voyager probe</h4>
        <img src="@/assets/img/voyager_journey.png" alt="voyager prob" />
        <h4>The golden record</h4>
      </div>
      <div class="voyager_description">
        <p>
          NASA placed an amibitous message aboard Voyager 1 and 2,
          a kind of time capsule, intended to communicate a story of our
          world to extraterrestrials.
        </p>
        <p>
          It is carried by a phonograph record, a gold-plated copper disk called “The Golden Record“
          containing what’s supposed to be the portray of the diversity of life and culture on Earth.
        </p>
        <p>
          How inteligent life would be able to use this disk ?
          Scroll down to discover how scientifcs tried to answer that question
        </p>
        <Time-elapsed class="time" />
      </div>
    </div>
  </section>
</template>

<script>
import Title from "../../components/Title";
import TimeElapsed from "../../components/TimeElapsed.vue";

export default {
  name: "TheJourney",
  components: { Title, TimeElapsed }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.thejourney {
  background: rgb(33, 32, 32);
  height: 100vh;
  width: 100vw;
  &_title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px 150px;
  }
}
.voyager {
  width: 80vw;
  height: 80vh;
  margin: auto;
  display: flex;
  justify-content: space-between;
  h4 {
    color: white;
  }
  &_image {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &_description {
    display: flex;
    flex-direction: column;
  }
  p {
    width: 500px;
    margin-top: 28px;
    font-family: Product Sans Light;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 150%;
    color: #f8f8f8;
    text-align: left;
  }
  .time {
    margin-top: 24px;
  }
}
</style>
