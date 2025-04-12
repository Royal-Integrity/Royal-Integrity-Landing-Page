<template>
  <section class="solutions-section">
    <div class="title-container">
      <h2 class="title-container__title">
        <TextHighlighter text="legaltech.ourSolutions.title.text" keywords="legaltech.ourSolutions.title.keywords"
          highlight-class="text-highlighter-gradient" />
      </h2>
    </div>

    <div class="cards-container">
      <div class="card" v-for="solution, index in solutions" :key="index">
        <div class="card__text">
          <div class="card__text--title">
            <TextHighlighter :text="solution.title" :keywords="solution.keywords" />
          </div>
          <div class="card__text--description">
            {{ $t(solution.text) }}
          </div>
        </div>
        <div class="card__image" :class="solution.img_class">
          <img :src="solution.img" :alt="$t(solution.alt)" loading="lazy" width="200" height="270" />
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import TextHighlighter from '../TextHighlighter.vue';
const solutions = [
  {
    title: "legaltech.ourSolutions.itemOne.title",
    keywords: "legaltech.ourSolutions.itemOne.keywords",
    text: "legaltech.ourSolutions.itemOne.text",
    img: "/images/new_design/legaltech/solution_one.svg",
    alt: "legaltech.ourSolutions.itemOne.alt",
  },
  {
    title: "legaltech.ourSolutions.itemTwo.title",
    keywords: "legaltech.ourSolutions.itemTwo.keywords",
    text: "legaltech.ourSolutions.itemTwo.text",
    img: "/images/new_design/legaltech/solution_two.svg",
    img_class: "image-md",
    alt: "legaltech.ourSolutions.itemTwo.alt",
  },
  {
    title: "legaltech.ourSolutions.itemThree.title",
    keywords: "legaltech.ourSolutions.itemThree.keywords",
    text: "legaltech.ourSolutions.itemThree.text",
    img: "/images/new_design/legaltech/solution_three.svg",
    alt: "legaltech.ourSolutions.itemThree.alt",
  },
  {
    title: "legaltech.ourSolutions.itemFour.title",
    keywords: "legaltech.ourSolutions.itemFour.keywords",
    text: "legaltech.ourSolutions.itemFour.text",
    img: "/images/new_design/legaltech/solution_four.svg",
    img_class: "image-md",
    alt: "legaltech.ourSolutions.itemFour.alt",
  },
]
</script>

<style lang="scss" scoped>
.solutions-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  background-color: $background-secondary-color;
  font-family: $font-family-royalIntegrity;
  color: $primary-color-dark;
  box-sizing: border-box;
  padding: 30px 20px;
}

.title-container {
  text-align: center;
  font-weight: 300;

  &__title {
    font-size: $mobile-title;
    text-align: center;
    line-height: 30px;

    @media (min-width: 570px) {
      font-size: $mobile-title-md;
      line-height: 40px;
    }

    @media (min-width: 928px) {
      font-size: $mobile-title-lg;
      line-height: 45px;
    }

    @media (min-width: 1280px) {
      font-size: $section-title;
      line-height: 50px;
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
  padding: 10px;

  @media (min-width: 1600px) {
    justify-content: center;
    padding: 10px 60px;
  }

}

.card {
  min-width: 200px;
  height: 260px;
  box-sizing: border-box;
  padding: 20px 10px;
  background-color: #fff;
  border-radius: 14px;
  box-shadow: 0px 5px 10px #00000033;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  position: relative;

  @media (min-width: 575px) {
    min-width: 240px;
    max-width: 240px;
    height: 300px;
  }

  @media (min-width: 928px) {
    border-radius: 16px;
    min-width: 240px;
    max-width: 240px;
    height: 360px;
  }

  @media (min-width: 1280px) {
    padding: 40px 30px;
    min-width: 300px;
    max-width: 300px;
    height: 460px;
  }

  @media (min-width: 1366px) {
    border-radius: 20px;
    min-width: 360px;
    max-width: 360px;
    height: 460px;
  }

  @media (min-width: 1600px) {}


  &__text {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    &--title {
      font-size: $body-sm;

      @media (min-width: 570px) {
        font-size: $body;
      }

      @media (min-width: 928px) {
        font-size: $body-md;
      }

      @media (min-width: 1280px) {
        font-size: $body-lg-2;
      }

      @media (min-width: 1366px) {
        font-size: $extra-small-title;
      }
    }

    &--description {
      font-size: $small;
      line-height: normal;

      @media (min-width: 570px) {
        font-size: $body-sm;
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
    }
  }

  &__image {
    width: auto;
    height: 60%;
    position: absolute;
    bottom: 0;
    right: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    &.image-md {
      height: 55%;

      @media (min-width: 928px) {
        height: 50%;
      }

      @media (min-width: 1280px) {}

      @media (min-width: 1366px) {}

      @media (min-width: 1600px) {}
    }

    @media (min-width: 928px) {
      height: 55%;
    }

    @media (min-width: 1280px) {}

    @media (min-width: 1366px) {}

    @media (min-width: 1600px) {}
  }
}
</style>
