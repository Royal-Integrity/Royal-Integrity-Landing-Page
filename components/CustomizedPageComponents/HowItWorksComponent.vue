<template>
  <section class="works-section-main">
    <component :is="currentComponent"/>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import onResize from '@/Extend/onResize';
import HowItWorksLarge from './components/HowItWorksLarge.vue';
import HowItWorksMobile from './components/HowItWorksMobile.vue';

const { screenWidth } = onResize();

const largeScreen = computed(() => screenWidth.value > 0 && screenWidth.value >= 928);
const mobileScreen = computed(() => screenWidth.value > 0 && screenWidth.value < 928);

const currentComponent = computed(() => {
  if (mobileScreen.value === true) return HowItWorksMobile;
  return HowItWorksLarge;
})

</script>

<style lang="scss" scoped>
.works-section-main {
  width: 100%;
  height: 100%;
}
</style>
