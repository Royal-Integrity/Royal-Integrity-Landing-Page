<template>
  <div class="stories-container">
    <FormContactsUsComponent />
  </div>
</template>

<script setup>
const FormContactsUsComponent = defineAsyncComponent(() => import('~/components/ContactsUsComponent/FormContactsUsComponent.vue'));
</script>

<style lang="scss" scoped>
.stories-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overscroll-behavior: none;
  overflow-x: hidden;
}
</style>
