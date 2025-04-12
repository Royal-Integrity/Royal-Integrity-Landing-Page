<template>
  <section class="legaltech-section">

    <div class="legaltech-section__title">
      <TextHighlighter text="legaltech.whyLegaltech.title.text" keywords="legaltech.whyLegaltech.title.keywords"
        highlight-class="text-highlighter-gradient" />
    </div>

    <div class="legaltech-section__content">
      <div class="legaltech-section__content--image">
        <img src="/images/new_design/legaltech/why_legaltech.svg" alt="why_legal" width="800" height="600">
      </div>
      <div class="legaltech-section__content--information">
        <div v-for="item, index in legaltech_texts" class="information-text">
          <div class="information-text__index" :class="`index__${index + 1}`">{{ index + 1 }}</div>
          <div class="information-text__item">
            <TextHighlighter :text="item.text" :keywords="item.keywords" />
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import TextHighlighter from '../TextHighlighter.vue';

const legaltech_texts = [
  {
    text: "legaltech.whyLegaltech.text_one",
    keywords: "legaltech.whyLegaltech.keywords"
  },
  {
    text: "legaltech.whyLegaltech.text_two",
    keywords: "legaltech.whyLegaltech.keywords"
  },
  {
    text: "legaltech.whyLegaltech.text_three",
    keywords: "legaltech.whyLegaltech.keywords"
  },
  {
    text: "legaltech.whyLegaltech.text_four",
    keywords: "legaltech.whyLegaltech.keywords"
  },
]
</script>

<style lang="scss" scoped>
.legaltech-section {
  width: 100%;
  box-sizing: border-box;
  padding: 1% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  font-family: $font-family-royalIntegrity;
  color: $primary-color-dark;
  margin: 5% 0px;

  &__title {
    font-size: $mobile-title;
    text-align: center;
    line-height: normal;

    @media (min-width: 570px) {
      font-size: $mobile-title-md;
    }

    @media (min-width: 928px) {
      font-size: $section-subtitle;
    }

    @media (min-width: 1280px) {
      font-size: $section-subtitle;
    }

    @media (min-width: 1366px) {
      font-size: $section-title;
    }

    @media (min-width: 1600px) {
      font-size: $small-title;
    }
  }

  &__content {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    margin-top: 5%;

    @media (min-width: 928px) {
      flex-direction: row;
    }

    &--image {
      width: 100%;
      height: auto;
      img {
        width: 100%;
        height: auto;
        object-fit: contain;
      }
    }
    
    &--information {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      gap: 20px;
      box-sizing: border-box;
      padding: 0px 20px;
    }
  }

}

.information-text {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;

  &__index {
    width: 5%;
    text-align: center;
    font-size: $medium;

    @media (min-width: 570px) {
      font-size: $body-md;
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

    @media (min-width: 1600px) {
      font-size: $section-subtitle;
    }

  }
  
  &__item {
    font-size: $small;
    line-height: normal;

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

.index__1 {
  color: $primary-color-dark;
}

.index__2 {
  color: $secondary-color;
}

.index__3 {
  color: $primary-color-highlight;
}

.index__4 {
  color: $quintiary-color;
}
</style>
