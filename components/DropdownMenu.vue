<script setup lang="ts"></script>

<template>
  <div class="dropdown-container">
    <slot name="dropdown-container-content"></slot>
  </div>
</template>

<style lang="scss" scoped>
.dropdown-container {
  background-color: $quartiary-color;
}
</style>
