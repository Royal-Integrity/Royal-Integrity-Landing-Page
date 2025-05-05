<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <div class="whatsapp-sticky">
      <NuxtLink to="https://wa.me/573180778244" target="_blank" aria-label="Contactar por WhatsApp">
        <Icon name="ion:logo-whatsapp" class="whatsapp-icon" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup></script>
<style lang="scss" scoped>
.whatsapp-sticky {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
  background-color: #25D366;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);

    a::after {
      visibility: visible;
      opacity: 1;
    }
  }

  a {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-decoration: none;

    &::after {
      content: attr(aria-label);
      position: absolute;
      background-color: #25D366;
      color: white;
      padding: 6px 10px;
      border-radius: 5px;
      font-family: "Poppins", sans-serif;
      font-size: 13px;
      white-space: nowrap;
      z-index: 1001;
      right: 100%;
      top: 50%;
      transform: translateY(-50%);
      margin-right: 12px;
      visibility: hidden;
      opacity: 0;
      transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
      pointer-events: none;
    }
  }
}

.whatsapp-icon {
  color: white;
  font-size: 40px;
}
</style>
