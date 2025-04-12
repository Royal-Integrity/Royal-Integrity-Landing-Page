<template>
  <section class="hero-section">
    <div class="hero-section__content">
      <div class="title-container">
        <div class="title-container__title">
          <TextHighlighter text="energytech.hero.title.text" keywords="energytech.hero.title.keywords" />
        </div>
        <div class="title-container__text">
          <TextHighlighter text="energytech.hero.text" keywords="energytech.hero.keywords" />
        </div>
      </div>
      <div class="image-container">
        <ResponsiveImage
          original="/images/new_design/energytech/hero.webp"
          alt="hero"
          loading="lazy" 
          :largeRange="true"
          height="400"
          width="500"
        />
      </div>
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
  background: linear-gradient(0deg, #fff 50%, $energytech-color);
  font-family: $font-family-royalIntegrity;
  color: $primary-color-dark;

  &__content {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    @media (max-width: 375px) {
      flex-direction: column;
    }

    @media (min-width: 376px) and (max-width: 574px) {
      flex-direction: column;
    }

    @media (min-width: 575px) and (max-width: 927px) {
      flex-direction: column;
    }
  }
}

.title-container {
  width: 50%;
  margin-top: calc($navbar-spacing + 10%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  box-sizing: border-box;
  padding-left: 10%;
  gap: 20px;

  @media (max-width: 927px) {
    width: 100%;
    margin: 0;
    padding: 0;
    align-items: center;
    margin-top: calc($navbar-height-mobile + 10%);
    box-sizing: border-box;
  }

  @media (min-width: 928px) and (max-width: 1800px) {
    padding-left: 5%;
  }

  &__title {
    font-size: $large-title;
    font-weight: 300;

    span {
      font-weight: 600;
    }

    @media (max-width: 375px) {
      font-size: $mobile-title;
    }

    @media (min-width: 376px) and (max-width: 574px) {
      font-size: $mobile-title;
    }

    @media (min-width: 575px) and (max-width: 927px) {
      font-size: $mobile-title-lg;
    }

    @media (min-width: 928px) and (max-width: 1279px) {
      font-size: $section-title;
    }

    @media (min-width: 1280px) and (max-width: 1365px) {
      font-size: $small-title;
      line-height: 74px;
    }

    @media (min-width: 1366px) and (max-width: 1600px) {
      font-size: $medium-title;
      line-height: 74px;
    }
  }

  &__text {
    width: 80%;
    font-size: $body-lg-2;
    font-weight: 300;
    line-height: 26px;

    span {
      font-weight: 600;
    }

    @media (max-width: 375px) {
      font-size: $small;
      line-height: normal;
      text-align: center;
      width: 90%;
    }

    @media (min-width: 376px) and (max-width: 574px) {
      font-size: $small;
      line-height: normal;
      text-align: center;
      width: 90%;
    }

    @media (min-width: 575px) and (max-width: 927px) {
      font-size: $body-sm;
      line-height: normal;
      text-align: center;
      width: 95%;
    }

    @media (min-width: 928px) and (max-width: 1279px) {
      font-size: $body;
      line-height: 24px;
      width: 100%;
    }

    @media (min-width: 1280px) and (max-width: 1365px) {
      font-size: $body-md;
      line-height: normal;
      width: 90%;
    }

    @media (min-width: 1366px) and (max-width: 1600px) {
      font-size: $body-lg;
      line-height: normal;
      width: 90%;
    }
  }
}

.image-container {
  display: flex;
  justify-content: flex-end;
  width: 50%;
  height: 100%;

  @media (max-width: 927px) {
    width: 100%;
  }

  picture {
    width: 120%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
