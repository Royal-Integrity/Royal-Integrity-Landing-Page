<template>
  <div class="dropdown-list">
    <div class="dropdown-list__item" @click.stop>
      <NuxtLink
        :to="
          localePath(
            locale === 'es' ? '/acerca-de-nosotros' : '/about-us'
          )
        "
        class="link"
        @click="toggleCloseMenu"
      >
        {{ $t('navbar.aboutRoyalIntegrity') }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { locale, setLocale } = useI18n();
const localePath = useLocalePath();

const emit = defineEmits(['closeMenu']);

const toggleCloseMenu = () => {
  emit('closeMenu', 'aboutUs');
};
</script>

<style lang="scss" scoped>

.dropdown-list {
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 180px;
  z-index: 99;
  border-radius: 15px;
  border: 0.15rem solid #F6AF33;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  position: absolute;
  top: calc($navbar-height - 40px);
  left: 42%;

  &__item {
    color: $primary-color-dark;
    font-size: $body;

    @media (max-width: 369px) {
      font-size: 8px;
    }

    @media (min-width: 370px) and (max-width: 574px) {
      font-size: 8px;
    }

    @media (min-width: 575px) and (max-width: 927px) {
      font-size: $small;
    }

    @media (min-width: 928px) and (max-width: 1279px) {}
    @media (min-width: 1280px) and (max-width: 1365px) {}

    @media (min-width: 1366px) and (max-width: 1600px) {
      font-size: $body;
    }
  }
}
.link {
  @include link-decoration;
  color: $primary-color-dark;
} 
</style>
