<template>
  <section class="logtech-section">
    <div class="logtech-section__title">
      <TextHighlighter text="logtech.whyLogtech.title.text" keywords="logtech.whyLogtech.title.keywords"
        highlight-class="text-highlighter-gradient" />
    </div>
    <div class="logtech-section__content">
      <component :is="currentComponent" />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import onResize from '@/Extend/onResize';
const TextHighlighter = defineAsyncComponent(() => import('../TextHighlighter.vue'));
const WhyLogtechLarge = defineAsyncComponent(() => import('./components/WhyLogtechLarge.vue'));
const WhyLogtechSmall = defineAsyncComponent(() => import('./components/WhyLogtechSmall.vue'));
const WhyLogtechMobile = defineAsyncComponent(() => import('./components/WhyLogtechMobile.vue'));

const { screenWidth } = onResize();

const largeScreen = computed(() => screenWidth.value > 0 && screenWidth.value > 1280);
const smallScreen = computed(() => screenWidth.value >= 928 && screenWidth.value <= 1280);
const mobileScreen = computed(() => screenWidth.value > 0 && screenWidth.value < 928);

const currentComponent = computed(() => {
  if (smallScreen.value) return WhyLogtechSmall;
  if (largeScreen.value) return WhyLogtechLarge;
  return WhyLogtechMobile;
});

</script>

<style lang="scss" scoped>
.logtech-section {
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

  &__title {
    font-size: $small-title;
    text-align: center;

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
