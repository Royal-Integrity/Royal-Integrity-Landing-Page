<template>
  <div class="who_we_are">
    <component :is="currentComponent" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import onResize from '@/Extend/onResize';

const WhoWeAreComponent = defineAsyncComponent(() => import('./components/WhoWeAreComponent.vue'));
const WhoWeAreComponentMobile = defineAsyncComponent(() => import('./components/WhoWeAreComponentMobile.vue'));

const { screenWidth } = onResize();

const largeScreen = computed(() => screenWidth.value > 0 && screenWidth.value > 650);
const mobileScreen = computed(() => screenWidth.value > 0 && screenWidth.value < 650);

const currentComponent = computed(() => {
  if (mobileScreen.value) return WhoWeAreComponentMobile;
  return WhoWeAreComponent;
});

</script>

<style lang="scss" scoped>
.who_we_are {
  width: 100%;
  height: 100%;
}
</style>