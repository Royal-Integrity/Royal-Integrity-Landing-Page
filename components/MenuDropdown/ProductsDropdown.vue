<template>
  <div class="dropdown-list-products">
    <div class="dropdown-list-products__item">
      <div class="dropdown-list-products__item--title">
        {{ $t('navbar.services') }}
      </div>
      <div class="dropdown-list-products__item--sub-list">
        <NuxtLink
          :to="
            localePath(
              locale === 'es' ? '/preservationProgram-royalIntegrity' : '/royalIntegrity-preservationProgram'
            )
          "
          class="link"
          @click="toggleCloseMenu"
        >
          <span>{{ $t('navbar.preservationProgram') }}</span>
        </NuxtLink>
        <NuxtLink
          :to="
            localePath(
              locale === 'es' ? '/pipelineCleaning-royalIntegrity' : '/royalIntegrity-pipelineCleaning'
            )
          "
          class="link"
          @click="toggleCloseMenu"
        >
          <span>{{ $t('navbar.pipelineCleaning') }}</span>
        </NuxtLink>
        <NuxtLink
          :to="
            localePath(
              locale === 'es' ? '/trapsStations-royalIntegrity' : '/royalIntegrity-trapsStations'
            )
          "
          class="link"
          @click="toggleCloseMenu"
        >
          <span>{{ $t('navbar.trapsStations') }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const { locale, setLocale } = useI18n();
const localePath = useLocalePath();

const emit = defineEmits(['closeMenu']);

const toggleCloseMenu = () => {
  emit('closeMenu', 'products');
};
</script>

<style lang="scss" scoped>

.dropdown-list-products {
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 350px;
  z-index: 99;
  border-radius: 15px;
  border: 0.15rem solid white;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  position: absolute;
  top: calc($navbar-height - 40px);
  left: 54%;

  &__item {
    color: $primary-color-dark;
    font-size: $body;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 40px;

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

    &--title {
      width: 35%;
    }

    &--sub-list {
      width: 65%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
    }
  }
}

.link {
  @include link-decoration;
  color: $primary-color-dark;
}

.divider {
  border: 1px solid white;
}
</style>
