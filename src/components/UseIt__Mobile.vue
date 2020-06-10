<template>
  <div class="useIt__container">
    <header class="useIt__title">
      <Title class="title" text="How to use it ?" />
      <Icons />
    </header>
    <div class="disc">
      <BaseIcon class="disc__logo disc__record" href="record" />
      <BaseIcon class="disc__logo disc__elevation" href="elevation" />
      <BaseIcon class="disc__logo disc__pulsar" href="pulsar" />
      <BaseIcon class="disc__logo disc__hydrogen" href="hydrogen" />
      <BaseIcon class="disc__logo disc__waveForm" href="waveForm" />
      <BaseIcon class="disc__logo disc__frames" href="frames" />
    </div>
    <section class="useIt__explications">
      <article>
        <BaseIcon class="article__logo article__record" href="record" />
        <h3>Radial Circle</h3>
        <p>
          This circle represents the disc. Around this circle is defined a
          number in binary = 100 110,000 110 ,010 ,000 ,000 ,000 ,000 ,000 ,000
          ,000, which corresponds to 5,113,380,864 in decimal.
          <br />
          <br />Multiplying this binary number by 0.7 nanoseconds gives
          3.6 seconds as a result. 3.6 seconds is the rotation time of the disc
          on a lap.
        </p>
      </article>
      <article>
        <BaseIcon class="article__logo article__elevation" href="elevation" />
        <h3>Side View</h3>
        <p>
          This symbol is a representation of the disc in side view with the read
          head placed on it. It is accompanied by another number in binary
          which, converted to decimal, equal to 4 587 025 072 128.
          <br />
          <br />This number multiplied by 0.7 nanoseconds gives the result of 3
          229 seconds or 54.22 minutes: the total time of article__logoing.
        </p>
      </article>
      <article>
        <BaseIcon class="article__logo article__pulsar" href="pulsar" />
        <h3>Pulsar Map</h3>
        <p>
          This symbol represents a pulsar map.
          <br />
          <br />This map helping to explain our position in the universe by
          triangulating the distance from Earth to the 14 neutron stars closest
          to it.
        </p>
      </article>
      <article>
        <BaseIcon class="article__logo article__hydrogen" href="hydrogen" />
        <h3>The Key</h3>
        <p>
          This shema represents the tilting of the spin and the nucleus of hydrogen.
          <br />
          <br />During this switchover, the hydrogen atom emits a wave of 0.7 nanoseconds.
          <br />
          <br />This figure is the key to deciphering the rest of the schemes.
        </p>
      </article>
      <article>
        <BaseIcon class="article__logo article__waveForm" href="waveForm" />
        <h3>The Waves</h3>
        <p>
          This symbol shows when the waveform data should be broken down. Accompanied by a binary number : 11,845,632, if we multiply this binary number with our key figure : 0.7 nanoseconds, this gives us 0.008 seconds.
          <br />
          <br />This means that each section takes 0.008 seconds to play.
        </p>
      </article>
      <article>
        <BaseIcon class="article__logo article__frames" href="frames" />
        <h3>The Images</h3>
        <p>
          This symbol follows the wave symbol. It is accompanied by a binary number: 512.
          <br />
          <br />It should be understood that each section of data completes one of the 512 scan lines which form a complete image.
        </p>
      </article>
    </section>
  </div>
</template>

<script>
import Title from "../components/Title";
import BaseIcon from "../components/BaseIcon";
import Icons from "../components/Icons";
export default {
  components: { Title, BaseIcon, Icons },
  data: () => {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.useIt__container {
  padding: 10px;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background-color: $primary-darkblue;
  color: $primary-white;
}

.useIt__title {
  display: flex;
  width: 100%;
  & > .title {
    width: 180px;
  }
}

.disc {
  position: absolute;
  position: fixed;
  top: 30vh;
  right: -110px;
  width: 220px;
  height: 220px;
  border-radius: 100000px;
  transform: rotate(-35deg);
  background: linear-gradient(
    45deg,
    rgba(166, 122, 59, 1) 0%,
    rgba(215, 195, 127, 1) 100%
  );
  &__logo {
    width: 10px;
    height: auto;
    position: absolute;
    fill: transparent;
    stroke: $primary-darkblue;
  }
  &__record {
    stroke: white;
    width: 60px;
    bottom: 80px;
    left: 25px;
  }
  &__elevation {
    width: 60px;
    bottom: 30px;
    left: 25px;
  }
  &__pulsar {
    width: 140px;
    bottom: -20px;
    left: 25px;
  }
  &__hydrogen {
    width: 30px;
    bottom: -40px;
    right: 55px;
  }
  &__waveForm {
    width: 80px;
    top: -15px;
    right: 35px;
  }
  &__frames {
    width: 30px;
    bottom: 30px;
    right: 60px;
  }
}

.article {
  &__logo {
    height: auto;
    position: relative;
    fill: transparent;
    stroke: white;
  }
  &__record {
    width: 90px;
  }
  &__elevation {
    width: 130px;
  }
  &__pulsar {
    width: 170px;
  }
  &__hydrogen {
    width: 150px;
  }
  &__waveForm {
    width: 150px;
  }
  &__frames {
    width: 150px;
    margin-bottom: 20px;
  }
}

.useIt__explications {
  width: 50vw;
  margin-top: 50px;
  margin-right: 40vw;
}

h3 {
  font-size: 20px;
  margin-bottom: 20px;
}

p {
  font-size: 14px;
  line-height: 150%;
  text-align: left;
}

article {
  margin-bottom: 100px;
}
</style>
