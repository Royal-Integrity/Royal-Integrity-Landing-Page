<template>
  <section class="features-section">
    <div class="title-container">
      <h2 class="title-container__title">
        <TextHighlighter text="logtech.characteristics.title.text" keywords="logtech.characteristics.title.keywords"
          highlight-class="text-highlighter-gradient" />
      </h2>
    </div>

    <div class="slider-container">
      <div v-for="(feature, i) in features" class="card">
        <div class="card__image" :class="feature.class">
          <ResponsiveImage :original="feature.img" :alt="$t(feature.alt)" width="200" height="300" loading="lazy" />
        </div>
        <div class="card__text">
          <TextHighlighter :text="feature.text" :keywords="feature.keywords" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import TextHighlighter from '../TextHighlighter.vue';
import ResponsiveImage from '../ResponsiveImage.vue';

const features = [
  {
    img: '/images/new_design/logtech/feature_one.webp',
    text: 'logtech.characteristics.itemOne.title',
    keywords: 'logtech.characteristics.itemOne.keywords',
    alt: 'logtech.characteristics.itemOne.alt',
  },
  {
    img: '/images/new_design/logtech/feature_two.webp',
    text: 'logtech.characteristics.itemTwo.title',
    keywords: 'logtech.characteristics.itemTwo.keywords',
    alt: 'logtech.characteristics.itemTwo.alt',
    class: " image-md",
  },
  {
    img: '/images/new_design/logtech/feature_three.webp',
    text: 'logtech.characteristics.itemThree.title',
    keywords: 'logtech.characteristics.itemThree.keywords',
    alt: 'logtech.characteristics.itemThree.alt',
  },
  {
    img: '/images/new_design/logtech/feature_four.webp',
    text: 'logtech.characteristics.itemFour.title',
    keywords: 'logtech.characteristics.itemFour.keywords',
    alt: 'logtech.characteristics.itemFour.alt',
  },
  {
    img: '/images/new_design/logtech/feature_five.webp',
    text: 'logtech.characteristics.itemFive.title',
    keywords: 'logtech.characteristics.itemFive.keywords',
    alt: 'logtech.characteristics.itemFive.alt',
  },
];
</script>

<style lang="scss" scoped>
.features-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  box-sizing: border-box;
  font-family: $font-family-royalIntegrity;
  color: $primary-color-dark;
  margin-top: 40px;
}

.title-container {
  font-weight: 300;
  text-align: center;

  &__title {
    font-size: $mobile-title;

    @media (min-width: 570px) {
      font-size: $mobile-title-md;
    }

    @media (min-width: 928px) {
      font-size: $section-subtitle;
    }

    @media (min-width: 1280px) {
      font-size: $section-title;
    }
  }
}

.slider-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 3%;
  box-sizing: border-box;
  gap: 40px;

  overflow-x: auto;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 1800px) {
    justify-content: center;
  }

}

.card {
  min-width: 180px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #fff;
  box-shadow: 0px 5px 10px #00000033;

  @media (min-width: 570px) {
    min-width: 200px;
    height: 240px;
  }

  @media (min-width: 928px) {
    min-width: 220px;
    height: 300px;
  }

  @media (min-width: 1280px) {
    min-width: 280px;
    height: 320px;
  }

  @media (min-width: 1366px) {
    min-width: 320px;
    height: 380px;
  }

  @media (min-width: 1600px) {
    min-width: 340px;
    max-width: 340px;
    height: 420px;
  }

  &__image {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: hidden;

    picture {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }

  &__text {
    width: 100%;
    height: 40%;
    font-size: $small;
    line-height: normal;
    text-align: center;
    text-wrap: balance;
    box-sizing: border-box;
    padding-top: 10px;

    @media (min-width: 570px) {
      font-size: $extra-small;
    }

    @media (min-width: 928px) {
      font-size: $body;
    }

    @media (min-width: 1280px) {
      font-size: $medium;
      padding: 10px;
    }

    @media (min-width: 1366px) {
      font-size: $body-md;
    }

    @media (min-width: 1600px) {
      font-size: $body-lg-2;
    }
  }
}
</style>
