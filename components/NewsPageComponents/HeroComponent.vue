<template>
  <section class="hero-section">
    <div class="hero-section__content">
      <div class="hero-section__content--title">
        <TextHighlighter text="about.heroNews.title.text" keywords="about.heroNews.title.keywords" />
      </div>
      <div class="hero-section__content--description">
        <TextHighlighter text="about.heroNews.text" keywords="about.heroNews.keywords" />
      </div>
    </div>
    <div class="hero-section__image">
      <ResponsiveImage original="/images/new_design/news/hero.webp" alt="hero" loading="lazy" width="500" height="400" />
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
  background-color: #fff;
  background: linear-gradient(0deg, #fff 50%, $secondary-color);
  font-family: $font-family-royalIntegrity;
  color: $primary-color-dark;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;

  @media (max-width: 375px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 20%;
  }

  @media (min-width: 376px) and (max-width: 574px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 20%;
  }


  @media (min-width: 575px) and (max-width: 927px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 20%;
  }

  @media (min-width: 928px) and (max-width: 1279px) {
    position: relative;
  }

  @media (min-width: 1280px) and (max-width: 1365px) {
    position: relative;
  }

  @media (min-width: 1366px) and (max-width: 1600px) {
    position: relative;
  }

  &__content {
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 40px;

    @media (max-width: 927px) {
      width: 100%;
      gap: 10px;
      box-sizing: border-box;
      padding: 0px 10px;
    }

    @media (min-width: 928px) and (max-width: 1279px) {
      position: absolute;
      top: 35%;
      left: 5%;
      width: 40%;
    }


    @media (min-width: 1280px) and (max-width: 1365px) {
      position: absolute;
      top: 35%;
      left: 5%;
      width: 40%;
    }

    @media (min-width: 1366px) and (max-width: 1600px) {
      position: absolute;
      top: 35%;
      left: 5%;
      width: 45%;
    }

    &--title {
      font-weight: 300;
      font-size: $large-title;

      @media (max-width: 375px) {
        width: 100%;
        font-size: $mobile-title;
        line-height: 35px;
        text-align: center;
      }

      @media (min-width: 376px) and (max-width: 574px) {
        width: 100%;
        font-size: $mobile-title-md;
        line-height: 45px;
        text-align: center;
      }

      @media (min-width: 575px) and (max-width: 927px) {
        width: 100%;
        font-size: $mobile-title-lg;
        line-height: 55px;
        text-align: center;
      }

      @media (min-width: 928px) and (max-width: 1279px) {
        font-size: $section-title;
      }

      @media (min-width: 1280px) and (max-width: 1365px) {
        font-size: $medium-title;
      }

      @media (min-width: 1366px) and (max-width: 1600px) {
        font-size: $medium-title;
      }
    }

    &--description {
      font-size: $body-lg-2;
      line-height: normal;
      font-weight: 300;
      text-align: justify;

      @media (max-width: 375px) {
        width: 100%;
        font-size: $small;
        line-height: normal;
        text-align: center;
      }

      @media (min-width: 376px) and (max-width: 574px) {
        width: 100%;
        font-size: $extra-small;
        line-height: normal;
        text-align: center;
      }

      @media (min-width: 575px) and (max-width: 927px) {
        width: 100%;
        font-size: $body-sm;
        line-height: normal;
        text-align: center;
      }

      @media (min-width: 928px) and (max-width: 1279px) {
        font-size: $body-sm;
        width: 100%;
      }

      @media (min-width: 1280px) and (max-width: 1365px) {
        font-size: $body-md;
        width: 100%;
      }

      @media (min-width: 1366px) and (max-width: 1600px) {
        font-size: $body-md;
        width: 100%;
      }
    }
  }

  &__image {
    width: 60%;

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }

    @media (max-width: 927px) {
      width: 100%;
    }
  }
}
</style>