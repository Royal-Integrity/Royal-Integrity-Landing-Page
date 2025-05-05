<template>
  <div class="trapsStations-container">
    <HeroComponent />
  </div>
</template>

<script setup>
const HeroComponent = defineAsyncComponent(() => import('~/components/trapsStationsComponents/HeroComponent.vue'));
</script>

<style lang="scss" scoped>
.trapsStations-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overscroll-behavior: none;
  overflow: hidden;
}
</style>
