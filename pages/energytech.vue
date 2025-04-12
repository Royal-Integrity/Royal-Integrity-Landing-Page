<template>
  <div class="energytech-container">
    <HeroComponent />
    <WhyThoriComponent />
    <ThoriFeaturesComponent />
    <ThoriModulesMain />
    <ThoriClientsComponent />
    <CustomizedDevelopmentComponent />
    <ServicesContactUsComponent />
  </div>
</template>

<script setup>
const HeroComponent = defineAsyncComponent(() => import('../components/EnergytechPageComponents/HeroComponent.vue'));
const WhyThoriComponent = defineAsyncComponent(() => import('../components/EnergytechPageComponents/WhyThoriComponent.vue'));
const ThoriFeaturesComponent = defineAsyncComponent(() => import('~/components/EnergytechPageComponents/ThoriFeaturesComponent.vue'));
const ThoriModulesMain = defineAsyncComponent(() => import('~/components/EnergytechPageComponents/ThoriModulesMain.vue'));
const ThoriClientsComponent = defineAsyncComponent(() => import('~/components/EnergytechPageComponents/ThoriClientsComponent.vue'));
const CustomizedDevelopmentComponent = defineAsyncComponent(() => import('~/components/EnergytechPageComponents/CustomizedDevelopmentComponent.vue'));
const ServicesContactUsComponent = defineAsyncComponent(() => import('~/components/ServicesContactUsComponent.vue'));
</script>

<style lang="scss" scoped>
.energytech-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overscroll-behavior: none;
  overflow: hidden;
}
</style>
