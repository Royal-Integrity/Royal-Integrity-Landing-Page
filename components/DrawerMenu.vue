<template>
  <div class="drawer-container">
    <el-drawer v-model="drawer" :before-close="closeDrawer" :size="drawerSize" :show-close="false">
      <template #header>
        <div class="drawer-container__header">
          <Icon name="si:close-fill" class="close-button" @click="closeDrawer" />
        </div>
      </template>
      <div>
        <el-menu unique-opened mode="vertical" :default-active="getMenuIndex(currentRoute)">
          <!-- INICIO -->
          <NuxtLink :to="localePath('/')" class="link" @click="closeDrawer">
            <el-menu-item index="1" class="menu__nav" :class="isCurrentRoute(localePath('/'), currentRoute)">
              {{ $t('navbar.home') }}
            </el-menu-item>
          </NuxtLink>

          <!-- ACERCA DE NOSOTROS -->
          <el-sub-menu index="2">
            <template #title>
              <span class="submenu__title">{{ $t('navbar.whoweare') }}</span>
            </template>
            <NuxtLink :to="localePath(locale === 'es' ? '/acerca-de-nosotros' : '/about-us')" class="link"
              @click="closeDrawer">
              <el-menu-item class="menu__nav subnav" :class="isCurrentRoute(localePath(
                locale === 'es' ? '/acerca-de-nosotros' : '/about-us'
              ), currentRoute)" index="2-1">
                {{ $t('navbar.aboutRoyalIntegrity') }}
              </el-menu-item>
            </NuxtLink>
          </el-sub-menu>

          <!-- SOLUCIONES -->
          <el-sub-menu index="3">
            <template #title>
              <span class="submenu__title">{{ $t('navbar.products') }}</span>
            </template>
            <NuxtLink :to="localePath(
              locale === 'es' ? '/preservationProgram-royalIntegrity' : '/royalIntegrity-preservationProgram'
            )
              " class="link" @click="closeDrawer">
              <el-menu-item class="menu__nav subnav" :class="isCurrentRoute(localePath(
                locale === 'es' ? '/preservationProgram-royalIntegrity' : '/royalIntegrity-preservationProgram'
              ), currentRoute)" index="3-1">
                <span>{{ $t('navbar.preservationProgram') }}</span>
              </el-menu-item>
            </NuxtLink>
            <NuxtLink :to="localePath(
              locale === 'es' ? '/pipelineCleaning-royalIntegrity' : '/royalIntegrity-pipelineCleaning'
            )
              " class="link" @click="closeDrawer">
              <el-menu-item class="menu__nav subnav" :class="isCurrentRoute(localePath(
                locale === 'es' ? '/pipelineCleaning-royalIntegrity' : '/royalIntegrity-pipelineCleaning'
              ), currentRoute)" index="3-2">
                <span>{{ $t('navbar.pipelineCleaning') }}</span>
              </el-menu-item>
            </NuxtLink>
            <NuxtLink :to="localePath(
              locale === 'es' ? '/trapsStations-royalIntegrity' : '/royalIntegrity-trapsStations'
            )
              " class="link" @click="closeDrawer">
              <el-menu-item class="menu__nav subnav" :class="isCurrentRoute(localePath(
                locale === 'es' ? '/trapsStations-royalIntegrity' : '/royalIntegrity-trapsStations'
              ), currentRoute)" index="3-3">
                <span>{{ $t('navbar.trapsStations') }}</span>
              </el-menu-item>
            </NuxtLink>
          </el-sub-menu>

          <!-- CONTACTANOS -->
          <NuxtLink :to="localePath(locale === 'es' ? '/contactanos' : '/contact-us')" class="link"
            @click="closeDrawer">
            <el-menu-item index="4" class="menu__nav"
              :class="isCurrentRoute(localePath(locale === 'es' ? '/contactanos' : '/contact-us'), currentRoute)">
              {{ $t('navbar.contacts') }}
            </el-menu-item>
          </NuxtLink>
        </el-menu>
      </div>
    </el-drawer>
  </div>
</template>

<script setup>
import { computed, h, defineComponent } from 'vue';
import { useRoute } from '#app';
import onResize from '@/Extend/onResize';

const { locale } = useI18n();
const localePath = useLocalePath();
const { screenWidth } = onResize();

const props = defineProps({
  drawerVisible: {
    type: Boolean,
    default: false,
    required: true,
  }
});

const emits = defineEmits(['close', 'update:drawerVisible']);

const drawer = computed({
  get: () => props.drawerVisible,
  set: (value) => emits('update:drawerVisible', value),
});

const route = useRoute();
const currentRoute = computed(() => route.path);

const drawerSize = computed(() => {
  if (screenWidth.value > 500 && screenWidth.value < 820) {
    return "55%";
  }
  else if (screenWidth.value > 375 && screenWidth.value <= 500) {
    return "75%";
  }
  else if (screenWidth.value <= 375) {
    return "75%";
  }
  return "40%";
});

const closeDrawer = () => {
  emits('close');
}

const isCurrentRoute = (route, currRoute) => {
  return route === currRoute ? 'menu__nav--active' : '';
}

const getMenuIndex = (routePath) => {
  const routes = {
    home: ['/', '/en'],
    about: {
      about_us: ['/acerca-de-nosotros', '/en/about-us'],
    },
    products: {
      preservationProgram: ['/preservationProgram-royalIntegrity', '/en/royalIntegrity-preservationProgram'],
      pipelineCleaning: ['/pipelineCleaning-royalIntegrity', '/en/royalIntegrity-pipelineCleaning'],
      trapsStations: ['/trapsStations-royalIntegrity', '/en/royalIntegrity-trapsStations'],

    },
    stories: ['/casos-de-exito', '/en/success-stories'],
    contact: ['/contactanos', '/en/contact-us'],
  }

  for (const [mainKey, value] of Object.entries(routes)) {
    if (Array.isArray(value)) {
      const index = value.indexOf(routePath);
      if (index !== -1) return Object.keys(routes).indexOf(mainKey) + 1;
    } else if (typeof value === 'object') {
      for (const [subKey, subRoutes] of Object.entries(value)) {
        const index = subRoutes.indexOf(routePath);
        if (index !== -1) {
          return `${Object.keys(routes).indexOf(mainKey) + 1}-${Object.keys(value).indexOf(subKey) + 1}`;
        }
      }
    }
  }
  return '';
}

</script>

<style lang="scss" scoped>
.drawer-container {
  color: $primary-color-dark;
  font-family: $font-family-royalIntegrity;

  &__header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0;
    margin: 0;
  }
}

.menu {
  &__nav {
    margin: 3px 0px;
    border-radius: 16px;

    color: $primary-color-dark;
    font-size: $extra-small;

    @media (min-width: 928px) {
      font-size: $body;
    }

    &:hover {
      background-color: #F7F7F7;
    }

    &--active {
      background-color: #F7F7F7;

      &::before {
        content: '';
        width: 3px;
        height: 25px;
        border-radius: 25px;
        background-color: $secondary-color;
        margin-right: 10px;
      }

    }
  }
}

.submenu {
  &__title {
    color: $primary-color-dark;
    font-family: $font-family-royalIntegrity;
    font-size: $extra-small;

    @media (min-width: 928px) {
      font-size: $body;
    }
  }
}

.link {
  @include link-decoration;
}


.close-button {
  background-color: transparent;
  border: 0;
  font-family: $font-family-royalIntegrity;
  font-size: $large;
  color: $primary-color-dark;
  cursor: pointer;
}

.subnav {
  font-size: $extra-small;

  @media (min-width: 928px) {
    font-size: $body;
  }
}

:deep() {

  .el-overlay {
    backdrop-filter: blur(10px);
  }

  .el-drawer {
    &__header {
      margin-bottom: 0;
    }

    &__body {
      padding-top: 0;
    }
  }

  .el-sub-menu {
    &__title {
      border-radius: 16px;

      &:hover {
        background-color: #F7F7F7;
      }
    }

    &__icon-arrow {
      color: $secondary-color;
      font-weight: bold;
    }
  }
}
</style>