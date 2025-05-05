<template>
  <div class="preservationProgram-container">
    <HeroComponent />
  </div>
</template>

<script setup>
const HeroComponent = defineAsyncComponent(() => import('../components/preservationProgramPageComponents/HeroComponent.vue'));
</script>

<style lang="scss" scoped>
.preservationProgram-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overscroll-behavior: none;
  overflow: hidden;
}
</style>
