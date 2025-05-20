<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useResizeObserver } from '@vueuse/core';
import { createApp } from 'vue';
import UseAppStore from '../stores/AppStore';
import App from '../App.vue';

// Components
const NavbarMenu = defineAsyncComponent(() => import('~/components/NavbarMenu.vue'));
const FooterComponent = defineAsyncComponent(() => import('~/components/FooterComponent.vue'));

const app = createApp(App);

const pageContainer = ref(null);
const appStore = UseAppStore();
let stopObserver;

onMounted(() => {
  stopObserver = useResizeObserver(pageContainer, (entries) => {
    const entry = entries[0];
    appStore.screenWidth = entry.contentRect.width;
  });
});

onBeforeUnmount(() => {
  if (stopObserver) stopObserver();
})
</script>

<template>
  <div ref="pageContainer" class="layout-container">
    <NavbarMenu class="navbar" />
    <div class="section-maxwidth">
      <main class="main-container-content">
        <slot />
      </main>
    </div>
    <FooterComponent />
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/_main.scss';

.layout-container {
  position: relative;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}
</style>
