<template>
  <div class="customized-container">
    <HeroComponent />
    <HowItWorksComponent />
    <ServicesContactUsComponent />
  </div>
</template>

<script setup>
const HeroComponent = defineAsyncComponent(() => import('~/components/CustomizedPageComponents/HeroComponent.vue'));
const HowItWorksComponent = defineAsyncComponent(() => import('~/components/CustomizedPageComponents/HowItWorksComponent.vue'));
const ServicesContactUsComponent = defineAsyncComponent(() => import('~/components/CustomizedPageComponents/ServicesContactUsComponent.vue'));
</script>

<style lang="scss" scoped>
.customized-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overscroll-behavior: none;
  overflow: hidden;
}
</style>
