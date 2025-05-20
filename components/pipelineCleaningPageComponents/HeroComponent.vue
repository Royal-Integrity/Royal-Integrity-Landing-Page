<template>
  <section class="hero-section">
    <div class="hero-section__content">
      <div class="title-container">
        <div class="title-container__title">
          <TextHighlighter text="pipelineCleaning.hero.title.text" keywords="pipelineCleaning.hero.title.keywords" />
        </div>
        <div class="title-container__text">
          <TextHighlighter text="pipelineCleaning.hero.text" keywords="pipelineCleaning.hero.keywords" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import TextHighlighter from '../TextHighlighter.vue';
</script>

<style lang="scss" scoped>
.hero-section {
  width: 100%;
  height: 80dvh;
  background-color: #fff;
  background: linear-gradient(0deg, #fff 50%, #F6AF33);
  font-family: $font-family-royalIntegrity;
  color: $primary-color-dark;

  &__content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

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
  height: 55dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  gap: 20px;
  align-items: center;

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
</style>
