<template>
  <div class="legaltech-container">
    <HeroComponent />
    <WhyLegaltechComponent />
    <OurSolutionsComponent />
    <!-- <LegaltechClientsComponents /> -->
    <LegaltechProjectsMain />
    <ServicesContactUsComponent />
  </div>
</template>

<script setup>
const HeroComponent = defineAsyncComponent(() => import('~/components/LegaltechComponents/HeroComponent.vue'));
const WhyLegaltechComponent = defineAsyncComponent(() => import('../components/LegaltechComponents/WhyLegaltechComponent.vue'));
const OurSolutionsComponent = defineAsyncComponent(() => import('~/components/LegaltechComponents/OurSolutionsComponent.vue'));
const LegaltechProjectsMain = defineAsyncComponent(() => import('../components/LegaltechComponents/LegaltechProjectsMain.vue'));
const ServicesContactUsComponent = defineAsyncComponent(() => import('~/components/LegaltechComponents/ServicesContactUsComponent.vue'));

/* import LegaltechClientsComponents from '~/components/LegaltechComponents/LegaltechClientsComponents.vue'; */
</script>

<style lang="scss" scoped>
.legaltech-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overscroll-behavior: none;
  overflow: hidden;
}
</style>
