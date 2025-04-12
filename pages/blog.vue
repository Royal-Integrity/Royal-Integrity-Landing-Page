<template>
  <div class="blog-container">
    <Error404Component />
  </div>
</template>

<script setup>
const Error404Component = defineAsyncComponent(() => import('../components/Error404Component.vue'));

</script>

<style lang="scss" scoped>
.blog-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overscroll-behavior: none;
  overflow-x: hidden;
  min-height: 100vh;
}
</style>
