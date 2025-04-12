<script setup>
const HeroComponent = defineAsyncComponent(() => import('~/components/HomePageComponents/HeroComponent.vue'));
const WhatWeDoMain = defineAsyncComponent(() => import('~/components/HomePageComponents/WhatWeDoMain.vue'));
const WhoWeAreMain = defineAsyncComponent(() => import('~/components/HomePageComponents/WhoWeAreMain.vue'));
const OurServicesComponent = defineAsyncComponent(() => import('~/components/HomePageComponents//OurServicesComponent.vue'));
const CompetitiveAdvantagesComponent = defineAsyncComponent(() => import('~/components/HomePageComponents/CompetitiveAdvantagesComponent.vue'));
const OurClientsComponent = defineAsyncComponent(() => import('~/components/HomePageComponents/OurClientsComponent.vue'));
const TestimonialsMain = defineAsyncComponent(() => import('~/components/HomePageComponents/TestimonialsMain.vue'));
const ContactUsComponent = defineAsyncComponent(() => import('~/components/ContactUsComponent.vue'));
</script>

<template>
  <div class="home-container">
    <HeroComponent />
    <WhatWeDoMain />
    <WhoWeAreMain />
    <OurServicesComponent />
    <CompetitiveAdvantagesComponent />
    <OurClientsComponent />
    <TestimonialsMain />
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
