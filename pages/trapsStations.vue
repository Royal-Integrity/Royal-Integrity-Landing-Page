<template>
  <div class="pipelineCleaning-container">
    <HeroComponent />
  </div>
</template>

<script setup>
const HeroComponent = defineAsyncComponent(() => import('~/components/pipelineCleaningPageComponents/HeroComponent.vue'));
</script>

<style lang="scss" scoped>
.pipelineCleaning-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overscroll-behavior: none;
  overflow: hidden;
}
</style>
