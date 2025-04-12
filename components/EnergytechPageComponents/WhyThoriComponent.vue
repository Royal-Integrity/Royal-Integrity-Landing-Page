<template>
  <section class="thori-section">
    <div class="thori-section__title">
      <TextHighlighter text="energytech.whyThori.title.text" keywords="energytech.whyThori.title.keywords"
        highlight-class="text-highlighter-gradient" />
    </div>

    <div class="thori-section__content">
      <component :is="currentComponent" />
    </div>

  </section>
</template>

<script setup>
import { computed } from 'vue';
import onResize from '@/Extend/onResize';
const TextHighlighter = defineAsyncComponent(() => import('../TextHighlighter.vue'));
const WhyThoriLarge = defineAsyncComponent(() => import('./components/WhyThoriLarge.vue'));
const WhyThoriSmall = defineAsyncComponent(() => import('./components/WhyThoriSmall.vue'));
const WhyThoriMobile = defineAsyncComponent(() => import('./components/WhyThoriMobile.vue'));

const { screenWidth } = onResize();

const largeScreen = computed(() => screenWidth.value > 0 && screenWidth.value > 1366);
const smallScreen = computed(() => screenWidth.value >= 928 && screenWidth.value <= 1366);
const mobileScreen = computed(() => screenWidth.value > 0 && screenWidth.value < 928);

const currentComponent = computed(() => {
  if (smallScreen.value) return WhyThoriSmall;
  if (largeScreen.value) return WhyThoriLarge;
  return WhyThoriMobile;
});

</script>

<style lang="scss" scoped>
.thori-section {
  width: 100%;
  box-sizing: border-box;
  padding: 1% 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  font-family: $font-family-royalIntegrity;
  color: $primary-color-dark;
  margin-top: 5%;

  @media (max-width: 369px) {
    padding: 0;
    margin-top: 8%;
  }

  @media (min-width: 370px) and (max-width: 574px) {
    padding: 0;
    margin-top: 8%;
  }

  &__title {
    font-size: $small-title;

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
      font-size: $section-title;
    }

    @media (min-width: 1366px) and (max-width: 1600px) {
      font-size: $section-title;
    }
  }

  &__content {
    width: 100%;
    margin-top: 40px;
  }
}
</style>
