<template>
  <!-- Web Design -->
  <section class="hero-section">
    <div class="hero-section__container">
      <img src="/images/new_design/stories/section_1.svg" alt="hero" width="1600" height="800" class="hero-img">
      <div class="hero-section__container--content">
        <div class="hero__title">
          <TextHighlighter text="successStories.hero.title.text" keywords="successStories.hero.title.keywords" />
        </div>
        <div class="hero__description">
          <TextHighlighter text="successStories.hero.text" keywords="successStories.hero.keywords" />
        </div>
        <div class="buttons-container">
          <button class="buttons-container__contact">
            <NuxtLink :to="$t('successStories.hero.buttonAction')" target="_blank" class="link__alt">
              {{ $t('successStories.hero.button') }}
            </NuxtLink>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import TextHighlighter from '~/components/TextHighlighter.vue';
</script>

<style lang="scss" scoped>
@import '../scss/hero_large.module.scss';

.buttons-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5%;
  box-sizing: border-box;
  padding: 20px;
  margin: 30px 0;

  &__contact {
    @include button-gradient-alt;
    cursor: pointer;

    @media (max-width: 369px) {
      font-size: 10px;
      height: 35px;
      padding: 0px 15px;
      border-width: 1px;
    }

    @media (min-width: 370px) and (max-width: 574px) {
      font-size: 10px;
      height: 35px;
      padding: 0px 15px;
      border-width: 1px;
    }

    @media (min-width: 575px) and (max-width: 928px) {
      font-size: $body;
      height: 45px;
    }
  }
}

.link {
  @include link-decoration;
  background: $gradient-color;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  &__alt {
    @include link-decoration;
    color: #fff;
  }
}
</style>
