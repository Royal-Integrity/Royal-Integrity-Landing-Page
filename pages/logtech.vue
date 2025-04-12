<template>
  <div class="logtech-container">
    <HeroComponent />
    <WhyLogtechComponent />
    <AssistantsMain />
    <LogtechClientsComponent />
    <LogtechFeaturesComponent />
    <ServicesContactUsComponent />
  </div>
</template>

<script setup>
const HeroComponent = defineAsyncComponent(() => import('~/components/LogtechPageComponents/HeroComponent.vue'));
const WhyLogtechComponent = defineAsyncComponent(() => import('../components/LogtechPageComponents/WhyLogtechComponent.vue'));
const AssistantsMain = defineAsyncComponent(() => import('../components/LogtechPageComponents/OurAssistantsMain.vue'));
const LogtechClientsComponent = defineAsyncComponent(() => import('~/components/LogtechPageComponents/LogtechClientsComponent.vue'));
const LogtechFeaturesComponent = defineAsyncComponent(() => import('~/components/LogtechPageComponents/LogtechFeaturesComponent.vue'));
const ServicesContactUsComponent = defineAsyncComponent(() => import('~/components/LogtechPageComponents/ServicesContactUsComponent.vue'));
</script>

<style lang="scss" scoped>
.logtech-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overscroll-behavior: none;
  overflow: hidden;
}
</style>
