<template>
  <div class="hero-main">
    <component :is="currentComponent" />
  </div>

</template>

<script setup>
import { computed } from 'vue';
import onResize from '@/Extend/onResize';
import HeroComponent from './components/HeroComponent.vue';
import HeroMobile from './components/HeroMobile.vue';

const { screenWidth } = onResize();

const largeScreen = computed(() => screenWidth.value > 0 && screenWidth.value >= 928);
const mobileScreen = computed(() => screenWidth.value > 0 && screenWidth.value < 928);


const currentComponent = computed(() => {
  if (mobileScreen.value === true) return HeroMobile;
  return HeroComponent;
})

</script>

<style lang="scss" scoped>
.hero-main {
  width: 100%;
  height: 100%;
}
</style>
