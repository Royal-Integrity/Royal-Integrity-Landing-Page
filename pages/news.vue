<template>
  <div class="news-container">
    <HeroComponent/>
    <TimelineComponent />
    <OurReferencesComponent />
  </div>
</template>

<script setup>
const HeroComponent = defineAsyncComponent(() => import('~/components/NewsPageComponents/HeroComponent.vue'));
const TimelineComponent = defineAsyncComponent(() => import('~/components/NewsPageComponents/TimelineComponent.vue'));
const OurReferencesComponent = defineAsyncComponent(() => import('~/components/NewsPageComponents/OurReferencesComponent.vue'));
</script>

<style lang="scss" scoped>
.news-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overscroll-behavior: none;
  overflow-x: hidden;
}
</style>
