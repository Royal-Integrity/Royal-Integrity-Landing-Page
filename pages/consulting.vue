<template>
  <div class="consulting-container">
    <HeroComponent />
    <HowItWorksComponent />
    <ServicesContactUsComponent />
  </div>
</template>

<script setup>
const HeroComponent = defineAsyncComponent(() => import('~/components/ConsultingPageComponents/HeroComponent.vue'));
const HowItWorksComponent = defineAsyncComponent(() => import('~/components/ConsultingPageComponents/HowItWorksComponent.vue'));
const ServicesContactUsComponent = defineAsyncComponent(() => import('~/components/ConsultingPageComponents/ServicesContactUsComponent.vue'));

</script>

<style lang="scss" scoped>
.consulting-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overscroll-behavior: none;
  overflow: hidden;
}
</style>
