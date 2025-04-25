<template>
  <div class="what_we_do">
    <component :is="currentComponent" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import onResize from '@/Extend/onResize';
const WhatWeDoComponent = defineAsyncComponent(() => import('./components/WhatWeDoComponent.vue'));
const WhatWeDoComponentMobile = defineAsyncComponent(() => import('./components/WhatWeDoComponentMobile.vue'));

const { screenWidth } = onResize();

const largeScreen = computed(() => screenWidth.value > 0 && screenWidth.value > 650);

const currentComponent = computed(() => {
  if (largeScreen.value) return WhatWeDoComponent;
  return WhatWeDoComponentMobile;
});
</script>

<style lang="scss" scoped>
.what_we_do {
  width: 100%;
  height: 100%;
}
</style>