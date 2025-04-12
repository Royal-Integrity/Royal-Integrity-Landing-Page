<template>
  <section class="why-logtech-mobile">
    <div class="why-logtech-mobile__information">
      <TextHighlighter text="logtech.whyLogtech.textMobile.text" keywords="logtech.whyLogtech.textMobile.keywords" />
    </div>
    <div class="why-logtech-mobile__image">
      <img src="/images/new_design/logtech/res_mobile/why_logtech.svg" alt="logtech" loading="lazy" height="300" width="300" />
    </div>
    <div class="why-logtech-mobile__stats">

      <div class="why-logtech-mobile__stats--stat stat">
        <span class="stat__number">100%</span>
        <span class="stat__text">
          {{ $t('logtech.whyLogtech.statOne') }}
        </span>
      </div>
      <div class="why-logtech-mobile__stats--stat stat">
        <span class="stat__number">25%</span>
        <span class="stat__text">
          {{ $t('logtech.whyLogtech.statTwo') }}
        </span>
      </div>
      <div class="why-logtech-mobile__stats--stat stat">
        <span class="stat__number">600+</span>
        <span class="stat__text">
          {{ $t('logtech.whyLogtech.statThree') }}
        </span>
      </div>
      <div class="why-logtech-mobile__stats--stat stat">
        <span class="stat__number">1M+</span>
        <span class="stat__text">
          {{ $t('logtech.whyLogtech.statFour') }}
        </span>
      </div>

    </div>
  </section>
</template>

<script setup>
import TextHighlighter from '~/components/TextHighlighter.vue';
</script>

<style lang="scss" scoped>
.why-logtech-mobile {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  margin-bottom: 60px;

  &__information {
    box-sizing: border-box;
    width: 100%;
    text-align: justify;
    font-size: $small;
    line-height: normal;

    @media (min-width: 570px) {
      font-size: $body-sm;
    }

    @media (min-width: 650px) {
      font-size: $body;
    }

    @media (min-width: 928px) {
      font-size: $medium;
    }
  }

  &__image {
    width: 100%;
    height: auto;

    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }

  &__stats {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;

    &--stat {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 10px;
    }
  }
}

.stat {
  &__number {
    width: 20%;
    font-size: $medium;
    text-align: center;

    @media (min-width: 570px) {
      font-size: $body-md;
    }

    @media (min-width: 650px) {
      font-size: $body-lg-2;
    }

    @media (min-width: 928px) {
      font-size: $large-sm;
    }
  }

  &__text {
    width: 100%;
    font-size: $small;
    line-height: normal;

    @media (min-width: 570px) {
      font-size: $body-sm;
    }

    @media (min-width: 650px) {
      font-size: $body;
    }

    @media (min-width: 928px) {
      font-size: $medium;
    }
  }
}
</style>