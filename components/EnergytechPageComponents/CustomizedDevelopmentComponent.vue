<template>
  <section class="customized-section">
    <div class="title-container">
      <h2 class="title-container__title">
        <TextHighlighter text="energytech.customized.title.text" keywords="energytech.customized.title.keywords"
          highlight-class="text-highlighter-gradient" />
      </h2>
    </div>

    <div class="cards-container">
      <div class="card" v-for="item, index in cards" :key="index">
        <div class="card__image">
          <ResponsiveImage :original="item.img" :alt="$t(item.alt)" loading="lazy" />
        </div>

        <div class="card__text">
          <div class="card__text--title">
            <TextHighlighter :text="item.title" :keywords="item.title_keywords" />
          </div>
          <div class="card__text--divider" />
          <div class="card__text--description">
            <TextHighlighter :text="item.text" :keywords="item.keywords" />
          </div>
        </div>
        <img :src="item.img_complement" :alt="$t(item.alt)" class="card__image-complement" loading="lazy" width="250px"
          height="330px" />
      </div>
    </div>


  </section>
</template>

<script setup>
import TextHighlighter from '../TextHighlighter.vue';
import ResponsiveImage from '../ResponsiveImage.vue';
const cards = [
  {
    img: '/images/new_design/energytech/card_one.webp',
    img_complement: '/images/new_design/energytech/card_one_1.svg',
    title: 'energytech.customized.cards.cardOne.title',
    title_keywords: 'energytech.customized.cards.cardOne.title_keywords',
    text: 'energytech.customized.cards.cardOne.text',
    keywords: 'energytech.customized.cards.cardOne.keywords',
    alt: 'energytech.customized.cards.cardOne.alt',
  },
  {
    img: '/images/new_design/energytech/card_two.webp',
    img_complement: '/images/new_design/energytech/card_two_1.svg',
    title: 'energytech.customized.cards.cardTwo.title',
    title_keywords: 'energytech.customized.cards.cardTwo.title_keywords',
    text: 'energytech.customized.cards.cardTwo.text',
    keywords: 'energytech.customized.cards.cardTwo.keywords',
    alt: 'energytech.customized.cards.cardTwo.alt',
  },
  {
    img: '/images/new_design/energytech/card_three.webp',
    img_complement: '/images/new_design/energytech/card_three_1.svg',
    title: 'energytech.customized.cards.cardThree.title',
    title_keywords: 'energytech.customized.cards.cardThree.title_keywords',
    text: 'energytech.customized.cards.cardThree.text',
    keywords: 'energytech.customized.cards.cardThree.keywords',
    alt: 'energytech.customized.cards.cardThree.alt',
  },
]
</script>

<style lang="scss" scoped>
.customized-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  background-color: #fff;
  font-family: $font-family-royalIntegrity;
  color: $primary-color-dark;
  box-sizing: border-box;
  margin-top: 60px;
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

.cards-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;

  overflow-x: auto;
  scroll-behavior: smooth;

  box-sizing: border-box;
  padding: 20px;

  @media (min-width: 1100px) {
    justify-content: center;
  }
}

.card {
  min-width: 250px;
  height: 330px;
  position: relative;

  @media (min-width: 650px) {
    min-width: 300px;
    height: 380px;
  }

  @media (min-width: 928px) {
    min-width: 320px;
    height: 450px;
  }

  @media (min-width: 1280px) {
    min-width: 350px;
    height: 480px;
  }

  @media (min-width: 1366px) {
    min-width: 350px;
    height: 560px;
  }

  @media (min-width: 1600px) {
    min-width: 400px;
    height: 740px;
  }

  &__image {
    width: 100%;
    opacity: 1;
    transition: opacity 0.3s ease-in;

    picture {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &__text {
    width: 100%;
    height: 80px;
    box-sizing: border-box;
    padding: 30px 30px;
    background-color: $primary-color-dark;
    color: #fff;

    position: absolute;
    bottom: 0;
    transition: height 0.3s ease-in;

    @media (min-width: 928px) {
      padding: 15px 20px;
      height: 100px;
    }

    @media (min-width: 1280px) {
      padding: 20px;
      height: 110px;
    }

    @media (min-width: 1600px) {
      height: 170px;
    }

    &--title {
      font-size: $extra-small;
      line-height: 18px;

      @media (min-width: 570px) {
        font-size: $body-sm;
      }

      @media (min-width: 928px) {
        font-size: $medium;
        line-height: 22px;
      }

      @media (min-width: 1280px) {
        font-size: $medium;
        line-height: 22px;
      }

      @media (min-width: 1366px) {
        font-size: $body-md;
        line-height: 26px;
      }

      @media (min-width: 1600px) {
        font-size: $extra-small-title;
        line-height: 38px;
      }
    }

    &--divider {
      width: 100%;
      border: 1px solid #fff;
      margin: 10px 0px;
      opacity: 0;
      display: none;
    }

    &--description {
      font-size: $small;
      line-height: normal;
      opacity: 0;
      display: none;

      @media (min-width: 570px) {
        font-size: $extra-small;
      }

      @media (min-width: 928px) {
        font-size: $body-sm;
      }

      @media (min-width: 1280px) {
        font-size: $body;
      }

      @media (min-width: 1366px) {
        font-size: $body-md;
      }

      @media (min-width: 1600px) {
        font-size: $body-lg-2;
      }
    }
  }

  &__image-complement {
    z-index: 2;
    position: absolute;
    bottom: 25%;
    right: 2%;
    width: 20%;
    height: auto;

    transition: bottom 0.2s ease;
  }

  &:hover {
    .card {
      &__image {
        opacity: 0;
      }

      &__text {
        height: 100%;

        &--divider {
          opacity: 1;
          display: block;
        }

        &--description {
          opacity: 1;
          display: block;
        }
      }

      &__image-complement {
        @media (min-width: 928px) {
          /* bottom: 0%; */
        }
      }
    }
  }
}
</style>
