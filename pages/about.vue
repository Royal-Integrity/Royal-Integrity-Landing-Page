<template>
  <div class="about-container">
    <HeroComponent />
    <AboutUsComponent />
    <OurTeamComponent />
    <OurPathComponent />
    <AboutUsContactComponent />
  </div>
</template>

<script setup>
const HeroComponent = defineAsyncComponent(() => import('~/components/AboutPageComponents/HeroComponent.vue'));
const AboutUsComponent = defineAsyncComponent(() => import('~/components/AboutPageComponents/AboutUsComponent.vue'));
const OurTeamComponent = defineAsyncComponent(() => import('~/components/AboutPageComponents/OurTeamComponent.vue'));
const OurPathComponent = defineAsyncComponent(() => import('~/components/AboutPageComponents/OurPathComponent.vue'));
const AboutUsContactComponent = defineAsyncComponent(() => import('~/components/AboutPageComponents/AboutUsContactComponent.vue'));
</script>

<style lang="scss" scoped>
.about-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overscroll-behavior: none;
  overflow-x: hidden;
}
</style>
