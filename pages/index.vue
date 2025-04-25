<script setup>
const HeroComponent = defineAsyncComponent(() => import('~/components/HomePageComponents/HeroComponent.vue'));
const WhatWeDoMain = defineAsyncComponent(() => import('~/components/HomePageComponents/WhatWeDoMain.vue'));
const WhoWeAreMain = defineAsyncComponent(() => import('~/components/HomePageComponents/WhoWeAreMain.vue'));
const OurServicesComponent = defineAsyncComponent(() => import('~/components/HomePageComponents//OurServicesComponent.vue'));
const ContactUsComponent = defineAsyncComponent(() => import('~/components/ContactUsComponent.vue'));
</script>

<template>
  <div class="home-container">
    <HeroComponent />
    <WhatWeDoMain />
    <WhoWeAreMain />
    <OurServicesComponent />
    <ContactUsComponent />
  </div>
</template>

<style lang="scss" scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overscroll-behavior: none;
  overflow: hidden;
}
</style>
