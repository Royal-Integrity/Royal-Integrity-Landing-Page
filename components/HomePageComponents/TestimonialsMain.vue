<template>
  <div class="testimonials">
    <component :is="currentComponent" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import onResize from '@/Extend/onResize';
import TestimonialsComponent from './components/TestimonialsComponent.vue';
import TestimonialsComponentMobile from './components/TestimonialsComponentMobile.vue';
const { screenWidth } = onResize();

const largeScreen = computed(() => screenWidth.value > 0 && screenWidth.value > 928);
const mobileScreen = computed(() => screenWidth.value > 0 && screenWidth.value < 928);

const currentComponent = computed(() => {
  if (mobileScreen.value) return TestimonialsComponentMobile;
  return TestimonialsComponent;
});
</script>

<style lang="scss" scoped>
.testimonials {
  width: 100%;
  height: 100%;
}
</style>