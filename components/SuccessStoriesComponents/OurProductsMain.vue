<template>
    <div class="our_products">
      <component :is="currentComponent" />
    </div>
</template>
  
<script setup>
import { computed } from 'vue';
import onResize from '@/Extend/onResize';
import OurProductsComponent from './components/OurProductsComponent.vue';
import OurProductsMobile from './components/OurProductsMobile.vue';

const { screenWidth } = onResize();

const largeScreen = computed(() => screenWidth.value > 0 && screenWidth.value >= 928);
const mobileScreen = computed(() => screenWidth.value > 0 && screenWidth.value < 928);

const currentComponent = computed(() => {
  if (largeScreen.value) return OurProductsComponent;
  return OurProductsMobile;
});


</script>
  
<style lang="scss" scoped>
.our_products {
    width: 100%;
    height: 100%;
}
</style>