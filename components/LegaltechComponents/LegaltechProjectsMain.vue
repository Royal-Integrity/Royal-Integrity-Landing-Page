<template>
  <div class="legaltech-projects-main">
    <component :is="currentComponent" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import onResize from '@/Extend/onResize';
import LegalTechProjectsComponents from './components/LegalTechProjectsComponents.vue';
import LegalTechProjectsMobile from './components/LegalTechProjectsMobile.vue';

const { screenWidth } = onResize();

const largeScreen = computed(() => screenWidth.value > 0 && screenWidth.value >= 928);
const mobileScreen = computed(() => screenWidth.value > 0 && screenWidth.value < 928);


const currentComponent = computed(() => {
  if (largeScreen.value === true) return LegalTechProjectsComponents;
  return LegalTechProjectsMobile;
})
</script>

<style lang="scss" scoped>
.legaltech-projects-main {
  width: 100%;
  height: 100%;
}
</style>