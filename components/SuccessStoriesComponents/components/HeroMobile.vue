<template>
    <section class="hero-section-mobile">
      <div class="hero-section-mobile__container">
        <img src="/images/new_design/stories/res_mobile/hero.svg" alt="hero" width="1600" height="800" class="hero-img">
        <div class="buttons-container">
          <button class="buttons-container__contact">
            <NuxtLink :to="$t('successStories.hero.buttonAction')" target="_blank" class="link__alt">
              {{ $t('successStories.hero.button') }}
            </NuxtLink>
          </button>
        </div>
        <div class="hero-section-mobile__container--content hero">
          <div class="hero__title">
            <TextHighlighter text="successStories.hero.title.text" keywords="successStories.hero.title.keywords" />
          </div>
          <div class="hero__description">
            <TextHighlighter text="successStories.hero.text" keywords="successStories.hero.keywords" />
          </div>
        </div>
      </div>
    </section>
</template>
  
<script setup>
import TextHighlighter from '~/components/TextHighlighter.vue';
</script>
  
<style lang="scss" scoped>
@import '../scss/hero_mobile.module.scss';

.buttons-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 10px 0px;
  gap: 20px;
  margin: 40px 0;

  &__contact {
    @include button-gradient-alt;
    cursor: pointer;
    font-size: $extra-small;
    width: 200px;
    height: 50px;
    margin: 0;
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