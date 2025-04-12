<template>
  <section class="timeline-section">

    <section class="timeline timeline--left" id="royalIntegrityRecognition">
      <div class="timeline__title">
        <h2 id="number">{{ $t(`news.timeline.2024.title`) }}</h2>
      </div>
      <div class="timeline__content" id="wrap">
        <ul class="timeline__content--list">
          <li class="timeline__content--item">{{ $t(`news.timeline.2024.itemOne`) }}</li>
          <li class="timeline__content--item">{{ $t(`news.timeline.2024.itemTwo`) }}</li>
          <li class="timeline__content--item">{{ $t(`news.timeline.2024.itemThree`) }}</li>
          <li class="timeline__content--item">{{ $t(`news.timeline.2024.itemFour`) }}</li>
        </ul>
      </div>
    </section>

    <section class="timeline timeline--right" id="royalIntegrityRecognition">
      <div class="timeline__title variant_one">
        <h2 id="number">{{ $t(`news.timeline.2023.title`) }}</h2>
      </div>
      <div class="timeline__content" id="wrap">
        <ul class="timeline__content--list">
          <li class="timeline__content--item">{{ $t(`news.timeline.2023.itemOne`) }}</li>
          <li class="timeline__content--item">{{ $t(`news.timeline.2023.itemTwo`) }}</li>
          <li class="timeline__content--item">{{ $t(`news.timeline.2023.itemThree`) }}</li>
          <li class="timeline__content--item">{{ $t(`news.timeline.2023.itemFour`) }}</li>
          <li class="timeline__content--item">{{ $t(`news.timeline.2023.itemFive`) }}</li>
          <li class="timeline__content--item">{{ $t(`news.timeline.2023.itemSix`) }}</li>
        </ul>
      </div>
    </section>

    <section class="timeline timeline--left" id="royalIntegrityRecognition">
      <div class="timeline__title variant_two">
        <h2 id="number">{{ $t(`news.timeline.2022.title`) }}</h2>
      </div>
      <div class="timeline__content" id="wrap">
        <ul class="timeline__content--list">
          <li class="timeline__content--item">{{ $t(`news.timeline.2022.itemOne`) }}</li>
          <li class="timeline__content--item">{{ $t(`news.timeline.2022.itemTwo`) }}</li>
          <li class="timeline__content--item">{{ $t(`news.timeline.2022.itemThree`) }}</li>
          <li class="timeline__content--item">{{ $t(`news.timeline.2022.itemFour`) }}</li>
        </ul>
      </div>
    </section>

    <section class="timeline timeline--right" id="royalIntegrityRecognition">
      <div class="timeline__title variant_three">
        <h2 id="number">{{ $t(`news.timeline.2021.title`) }}</h2>
      </div>
      <div class="timeline__content" id="wrap">
        <ul class="timeline__content--list">
          <li class="timeline__content--item">{{ $t(`news.timeline.2021.itemOne`) }}</li>
          <li class="timeline__content--item">{{ $t(`news.timeline.2021.itemTwo`) }}</li>
          <li class="timeline__content--item">{{ $t(`news.timeline.2021.itemThree`) }}</li>
          <li class="timeline__content--item">{{ $t(`news.timeline.2021.itemFour`) }}</li>
        </ul>
      </div>
    </section>

    <section class="timeline timeline--left" id="royalIntegrityRecognition">
      <div class="timeline__title">
        <h2 id="number">{{ $t(`news.timeline.2020.title`) }}</h2>
      </div>
      <div class="timeline__content" id="wrap">
        <ul class="timeline__content--list">
          <li class="timeline__content--item">{{ $t(`news.timeline.2020.itemOne`) }}</li>
          <li class="timeline__content--item">{{ $t(`news.timeline.2020.itemTwo`) }}</li>
          <li class="timeline__content--item">{{ $t(`news.timeline.2020.itemThree`) }}</li>
          <li class="timeline__content--item">{{ $t(`news.timeline.2020.itemFour`) }}</li>
          <li class="timeline__content--item">{{ $t(`news.timeline.2020.itemFive`) }}</li>
          <li class="timeline__content--item">{{ $t(`news.timeline.2020.itemSix`) }}</li>
        </ul>
      </div>
    </section>

    <section class="timeline timeline--right" id="royalIntegrityRecognition">
      <div class="timeline__title variant_one">
        <h2 id="number">{{ $t(`news.timeline.2019.title`) }}</h2>
      </div>
      <div class="timeline__content" id="wrap">
        <ul class="timeline__content--list">
          <li class="timeline__content--item">{{ $t(`news.timeline.2019.itemOne`) }}</li>
          <li class="timeline__content--item">{{ $t(`news.timeline.2019.itemTwo`) }}</li>
          <li class="timeline__content--item">{{ $t(`news.timeline.2019.itemThree`) }}</li>
          <li class="timeline__content--item">{{ $t(`news.timeline.2019.itemFour`) }}</li>
        </ul>
      </div>
    </section>

  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';

const news = [
  "2024", "2023", "2022", "2021", "2020", "2019"
];

onMounted(() => {
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.timeline.play();
      }
      // else {
      //   entry.target.timeline.pause(0);
      // }
    });
  };

  const options = {
    threshold: 0.6,
    rootMargin: '0px 0px -40px 0px',
  };

  const observer = new IntersectionObserver(callback, options);
  const targets = document.querySelectorAll('#royalIntegrityRecognition');

  targets.forEach((target) => {
    const thisWrap = target.querySelector('#wrap');
    const thisNumber = target.querySelector('#number');

    const action = gsap
      .timeline({ paused: true, scrub: 1 })
      .from(thisWrap, { autoAlpha: 0, x: -100, duration: 1 }, 0)
      .from(thisNumber, { autoAlpha: 0, duration: 1 });

    target.timeline = action;
  });

  Array.prototype.forEach.call(targets, (el) => {
    observer.observe(el);
  });
});

</script>

<style lang="scss" scoped>
.timeline-section {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  gap: 60px;
  color: $primary-color-dark;
  font-family: $font-family-royalIntegrity;
  padding: 5px 10px;
  box-sizing: border-box;
}

.timeline {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;

  &--right {
    flex-direction: row-reverse;
    justify-content: space-between;
    box-sizing: border-box;
    gap: 10px;
    padding-left: 5%;

    @media (min-width: 570px) {}

    @media (min-width: 928px) {}

    @media (min-width: 1280px) {}

    @media (min-width: 1366px) {}

    @media (min-width: 1600px) {}
  }

  &--left {
    & .timeline__title {
      margin-right: 5%;
    }
  }

  &__title {
    width: auto;
    height: auto;
    font-size: 80px;
    font-weight: 600;
    text-orientation: sideways;
    transform: rotate(180deg);
    white-space: nowrap;
    writing-mode: vertical-rl;

    @media (min-width: 570px) {
      font-size: 90px
    }

    @media (min-width: 928px) {
      font-size: 100px
    }

    @media (min-width: 1280px) {
      font-size: 120px
    }

    @media (min-width: 1366px) {
      font-size: 130px
    }

    @media (min-width: 1600px) {
      font-size: 150px
    }
  }

  &__content {
    width: 70%;

    @media (min-width: 570px) {
      width: 80%;
    }

    @media (min-width: 928px) {
      width: 85%;
    }

    @media (min-width: 1600px) {
      width: 90%;
    }

    &--list {
      width: 100%;
    }

    &--item {
      font-size: $small;
      line-height: calc($small + 16px);
      font-weight: 300;
      text-align: left;
      list-style-type: disc;
      margin: 30px 0px;

      @media (min-width: 570px) {
        font-size: $extra-small;
      }

      @media (min-width: 928px) {
        font-size: $body;
      }

      @media (min-width: 1280px) {
        font-size: $medium;
      }

      @media (min-width: 1366px) {
        font-size: $body-md;
      }

      @media (min-width: 1600px) {
        font-size: $body-lg;
      }
    }

    li::marker {
      color: $primary-color-dark;
      font-size: 14px;
    }
  }
}

.variant_one {
  color: $secondary-color;
}

.variant_two {
  color: $primary-color-highlight;
}

.variant_three {
  color: $quintiary-color;
}
</style>
