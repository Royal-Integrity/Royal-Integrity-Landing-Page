<template>
  <div class="our-assistants-main">
    <component :is="currentComponent" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import onResize from '@/Extend/onResize';
import OurAssistantsLarge from './components/OurAssistantsLarge.vue';
import OurAssistantsMobile from './components/OurAssistantsMobile.vue';

const { screenWidth } = onResize();

const largeScreen = computed(() => screenWidth.value > 0 && screenWidth.value >= 928);
const mobileScreen = computed(() => screenWidth.value > 0 && screenWidth.value < 928);


const currentComponent = computed(() => {
  if (largeScreen.value === true) return OurAssistantsLarge;
  return OurAssistantsMobile;
})
</script>

<style lang="scss" scoped>
.our-assistants-main {
  width: 100%;
  height: 100%;
}
</style>