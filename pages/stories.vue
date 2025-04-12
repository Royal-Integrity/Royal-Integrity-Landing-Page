<template>
  <div class="stories-container">
    <HeroMain />
    <OurProductsMain />
    <CallToActionComponent />
  </div>
</template>

<script setup>
const HeroMain = defineAsyncComponent(() => import('~/components/SuccessStoriesComponents/HeroMain.vue'));
const OurProductsMain = defineAsyncComponent(() => import('../components/SuccessStoriesComponents/OurProductsMain.vue'));
const CallToActionComponent = defineAsyncComponent(() => import('~/components/SuccessStoriesComponents/CallToActionComponent.vue'));
</script>

<style lang="scss" scoped>
.stories-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overscroll-behavior: none;
  overflow: hidden;
}
</style>
