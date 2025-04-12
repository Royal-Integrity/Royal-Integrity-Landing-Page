<template>
  <section class="hero-section">
    <div class="hero-section__content">
      <div class="hero-section__content--title">
        <TextHighlighter text="about.hero.title.text" keywords="about.hero.title.keywords" />
      </div>
      <div class="hero-section__content--description">
        <TextHighlighter text="about.hero.text" keywords="about.hero.keywords" />
      </div>
    </div>
    <div class="hero-section__image">
      <ResponsiveImage original="/images/new_design/about_us/hero.webp" :alt="$t('about.hero.alt')" loading="eager"
        width="400" height="400" />
    </div>
  </section>
</template>

<script setup>
import TextHighlighter from '../TextHighlighter.vue';
import ResponsiveImage from '../ResponsiveImage.vue';
</script>

<style lang="scss" scoped>
.hero-section {
  width: 100%;
  font-family: $font-family-royalIntegrity;
  color: $text-light-color;
  background-color: white;
  background: linear-gradient(to top, #fff, $secondary-color);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  padding-top: 20%;
  padding-bottom: 5%;


  @media (min-width: 928px) {
    flex-direction: row;
    justify-content: flex-end;
    padding-top: 7%;
    position: relative;
  }

  &__content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;

    @media (min-width: 928px) {
      position: absolute;
      top: 25%;
      left: 3%;
      width: 50%;
    }

    @media (min-width: 1600px) {
      top: 30%;
    }

    &--title {
      width: 100%;
      line-height: normal;
      text-align: center;
      font-size: $mobile-title;

      @media (min-width: 420px) {
        font-size: $mobile-title-md;
      }

      @media (min-width: 575px) {
        font-size: $mobile-title-lg;
      }

      @media (min-width: 928px) {
        font-size: $section-subtitle;
        text-align: left;
      }

      @media (min-width: 1280px) {
        font-size: $small-title;
      }

      @media (min-width: 1366px) {
        font-size: $medium-title;
      }

      @media (min-width: 1600px) {
        font-size: $large-title;

      }

    }

    &--description {
      width: 100%;
      font-size: $small;
      line-height: normal;
      text-align: center;
      text-wrap: balance;

      @media (min-width: 420px) {
        font-size: $extra-small;
      }

      @media (min-width: 575px) {
        font-size: $body-sm;
      }

      @media (min-width: 928px) {
        text-align: left;
        font-size: $body;
      }

      @media (min-width: 1280px) {
        font-size: $medium;
      }

      @media (min-width: 1366px) {
        font-size: $body-md;
      }

      @media (min-width: 1600px) {
        font-size: $body-lg-2;
      }

    }

  }

  &__image {
    width: 100%;

    @media (min-width: 928px) {
      width: 60%;
    }

    @media (min-width: 1600px) {
      width: 55%;
    }

    picture {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }
}
</style>
