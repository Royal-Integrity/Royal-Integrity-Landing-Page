<template>
<div class="thori-modules-main">
  <component :is="currentComponent"/>
</div>
</template>

<script setup>
import { computed } from 'vue';
import onResize from '@/Extend/onResize';
import ThoriModulesComponent from './components/ThoriModulesComponent.vue';
import ThoriModulesMobile from './components/ThoriModulesMobile.vue';

const { screenWidth } = onResize();

const largeScreen = computed(() => screenWidth.value > 0 && screenWidth.value >= 928);
const mobileScreen = computed(() => screenWidth.value > 0 && screenWidth.value < 928);


const currentComponent = computed(() => {
  if (mobileScreen.value === true) return ThoriModulesMobile;
  return ThoriModulesComponent;
})

</script>

<style lang="scss" scoped>
.thori-modules-main {
  width: 100%;
  height: 100%;
}
</style>
