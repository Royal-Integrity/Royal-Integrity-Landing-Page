<script setup>
import { ref, onMounted } from 'vue';
import MenuDropdownAboutUsDropdown from '~/components/MenuDropdown/AboutUsDropdown.vue';
import MenuDropdownProductsDropdown from '~/components/MenuDropdown/ProductsDropdown.vue';
import DrawerMenu from './DrawerMenu.vue';

import onResize from '@/Extend/onResize';

const { screenWidth } = onResize();
const isMenuOpen = ref(false);
const isDropdownAboutUsOpen = ref(false);
const isDropdownProductsOpen = ref(false);
const isHidden = ref(false);
const navbar = ref(null);
const drawerIcon = ref(null);
const drawer = ref(false);
const { locale, setLocale } = useI18n();
const localePath = useLocalePath();
const scrollThreshold = 150;
const scrollThresholdNavbar = 300;
const scrollThresholdMobile = 50;

onMounted(() => {
  if (process.client) {
    document.addEventListener('click', handleSidebarClick);
    document.addEventListener('click', handleDropdownClick);
  }

  window.addEventListener('wheel', handleScroll);

});

const collapseNavbar = computed(() => screenWidth.value > 0 && screenWidth.value > 1020);

const toggleMenu = (data) => {
  isMenuOpen.value = data !== undefined ? data : !isMenuOpen.value;
};

const toggleDropdown = (dropdown, value) => {
  isDropdownAboutUsOpen.value = false;
  isDropdownProductsOpen.value = false;
  if (dropdown === 'aboutUs') {
    isDropdownAboutUsOpen.value = value || !isDropdownAboutUsOpen.value;
    return;
  }
  if (dropdown === 'products') {
    isDropdownProductsOpen.value = value || !isDropdownProductsOpen.value;
    return;
  }
};

const handleSidebarClick = (event) => {
  const menuContainer = document.querySelector('.navbar-menu-responsive');
  const burgerButton = document.querySelector('.navbar-menu-icon');
  if (
    screenWidth.value <= 800 &&
    menuContainer &&
    !menuContainer.contains(event.target) &&
    !burgerButton.contains(event.target)
  ) {
    toggleMenu(false);
  }
};

const handleDropdownClick = (event) => {
  const isClickInsideDropdownAboutUs = isDropdownClickInside(event, 'aboutUs');
  const isClickInsideDropdownProducts = isDropdownClickInside(
    event,
    'products'
  );

  if (!isClickInsideDropdownAboutUs && !isClickInsideDropdownProducts) {
    isDropdownAboutUsOpen.value = false;
    isDropdownProductsOpen.value = false;
  }
};

const isDropdownClickInside = (event, dropdown) => {
  let dropdownSelector, dropdownElement;
  if (screenWidth.value >= 800) {
    dropdownSelector = `.navbar-container__menu--dropdown[data-dropdown='${dropdown}']`;
    dropdownElement = document.querySelector(dropdownSelector);
  } else {
    dropdownSelector = `.navbar-container__menu--item[data-dropdown='${dropdown}']`;
    dropdownElement = document.querySelector(dropdownSelector);
  }
  return dropdownElement && dropdownElement.contains(event.target);
};

const closeDropdown = (payload) => {
  handleDropdownClick(payload);
  handleSidebarClick(payload);
};

const toggleLocale = (menu, locale) => {
  toggleMenu(menu);
  setLocale(locale)
}

let lastScrollPosition = 0;
const handleScroll = (event) => {
  const currentScroll = window.scrollY;
  const currentScrollThreshold = screenWidth.value < 928 ? scrollThresholdMobile : scrollThreshold;

  if (currentScroll > lastScrollPosition && currentScroll > currentScrollThreshold) {
    isHidden.value = true;
  } else if (currentScroll < lastScrollPosition && currentScroll < currentScrollThreshold) {
    isHidden.value = false;
  }

  if (currentScroll > lastScrollPosition && currentScroll > scrollThresholdNavbar) {
    navbar?.value?.classList?.add('navbar-container__menu--dark');
    drawerIcon?.value?.classList?.add('drawer-button--dark');
  } else if (currentScroll < lastScrollPosition && currentScroll < scrollThresholdNavbar) {
    navbar?.value?.classList?.remove('navbar-container__menu--dark');
    drawerIcon?.value?.classList?.remove('drawer-button--dark');
  }

  lastScrollPosition = currentScroll;
}

const openDrawer = () => drawer.value = true;
const closeDrawer = () => drawer.value = false;

</script>

<template>
  <div>
    <div class="navbar-container">
      <div class="navbar-container__content">

        <div class="logo-container" :class="{ hidden: isHidden }">
          <NuxtLink :to="localePath('/')" class="link">
            <img src="/images/new_design/logo_navbar_naranja.png" alt="royalIntegrity Logo" width="280" height="100"
              loading="lazy" />
          </NuxtLink>
        </div>

        <div class="center-navbar" v-if="collapseNavbar === true">
          <ul class="navbar-container__menu" ref="navbar">
            <li class="navbar-container__menu--item">
              <NuxtLink :to="localePath('/')" class="link">
                {{ $t('navbar.home') }}
              </NuxtLink>
            </li>
            <li class="navbar-container__menu--item navbar-container__menu--dropdown" data-dropdown="aboutUs"
              @click="toggleDropdown('aboutUs')">
              {{ $t('navbar.whoweare') }}
            </li>
            <li class="navbar-container__menu--item navbar-container__menu--dropdown" data-dropdown="products"
              @click="toggleDropdown('products')">
              {{ $t('navbar.products') }}
            </li>
            <li class="navbar-container__menu--item">
              <NuxtLink :to="localePath(locale === 'es' ? '/contactanos' : '/contact-us')" class="link"
                @click="toggleMenu(false)">
                {{ $t('navbar.contacts') }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <MenuDropdownAboutUsDropdown v-if="isDropdownAboutUsOpen" class="dropdown-container"
          @closeMenu="closeDropdown" />

        <MenuDropdownProductsDropdown v-if="isDropdownProductsOpen" class="dropdown-container"
          @closeMenu="closeDropdown" />

      </div>

      <div class="language-container" :class="{ hidden_invert: isHidden }">
        <Icon name="ion:ios-globe" class="world-icon" />
        <button v-if="locale === 'es'" @click="toggleLocale(false, 'en')" class="tongue-icon">
          EN
        </button>
        <button v-else @click="toggleLocale(false, 'es')" class="tongue-icon">
          ES
        </button>
      </div>

      <div class="drawer-button" v-if="collapseNavbar === false" ref="drawerIcon">
        <Icon name="ic:baseline-menu" class="drawer-icon" @click="openDrawer" />
      </div>
    </div>
    <DrawerMenu :drawerVisible="drawer" @close="closeDrawer" />
  </div>
</template>

<style lang="scss" scoped>
.navbar-container {
  background-color: transparent;
  font-family: $font-family-royalIntegrity;
  padding: 20px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  height: $navbar-height;
  box-sizing: border-box;

  @media (max-width: 375px) {
    gap: 10px;
    height: $navbar-height-mobile;
    justify-content: space-between;
    padding: 40px 10px;
  }

  @media (min-width: 376px) and (max-width: 574px) {
    height: $navbar-height-mobile;
    padding: 40px 10px;
  }

  &__content {
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    position: relative;
  }

  &__menu {
    flex-grow: 20%;
    height: 55px;
    border-radius: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 50px;
    padding: 0px 50px;
    border: 0.15rem solid #F6AF33;
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);

    &--item {
      transition: color 0.3s ease;
      font-size: $medium-md;
      font-weight: 300;
      color: $primary-color-dark;
      cursor: pointer;
      color: #4E4A9E;
      text-align: center;

      &:hover {
        color: #F6AF33;
      }

      @media (max-width: 369px) {
        font-size: 8px;
        text-align: center;
      }

      @media (min-width: 370px) and (max-width: 574px) {
        font-size: 8px;
        text-align: center;
      }

      @media (min-width: 575px) and (max-width: 927px) {
        font-size: $small;
        transition: all 0.2s ease-in;
      }

      @media (min-width: 928px) and (max-width: 1279px) {
        font-size: $small;
      }

      @media (min-width: 1280px) and (max-width: 1365px) {
        font-size: $medium;
      }

      @media (min-width: 1366px) and (max-width: 1600px) {
        font-size: $medium;
      }
    }

    &--item-dropdown {
      font-size: $medium;
      font-weight: 300;
      color: $primary-color-dark;
      cursor: pointer;
    }
  }
}

.logo-container {
  flex-basis: 20%;
  box-sizing: border-box;
  margin-left: 30px;
  transition: transform 0.3s ease;

  @media (max-width: 375px) {
    margin-left: 0px;
  }

  @media (min-width: 376px) and (max-width: 574px) {
    margin-left: 0;
  }

  @media (min-width: 575px) and (max-width: 927px) {
    margin-left: 5px;
  }

  @media (min-width: 928px) and (max-width: 1280px) {
    margin-left: 5px;
  }

  img {
    width: 150px;
    height: auto;

    @media (max-width: 375px) {
      width: 100px;
    }

    @media (min-width: 376px) and (max-width: 574px) {
      width: 115px;
    }

    @media (min-width: 575px) and (max-width: 927px) {
      width: 160px;
    }

    @media (min-width: 928px) and (max-width: 1280px) {
      width: 170px;
    }
  }
}

.language-container {
  width: 10%;
  font-size: $medium;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;

  @media (max-width: 927px) {
    width: 17%;
  }

  .world-icon {
    font-size: $large;
    font-weight: bold;
    color: #4E4A9E;

    @media (max-width: 369px) {
      font-size: 30px;
    }

    @media (min-width: 370px) and (max-width: 574px) {
      font-size: 30px;
    }

    @media (min-width: 575px) and (max-width: 927px) {
      font-size: 30px;
    }

    @media (min-width: 928px) and (max-width: 1279px) {}

    @media (min-width: 1280px) and (max-width: 1365px) {}

    @media (min-width: 1366px) and (max-width: 1600px) {
      font-size: 30px;
    }
  }
}

.tongue-icon {
  background-color: transparent;
  border: 0;
  font-family: $font-family-royalIntegrity;
  font-size: $medium-md;
  color: #4E4A9E;
  cursor: pointer;

  &:hover {
    color: #F6AF33;
  }

  @media (max-width: 369px) {
    font-size: 15px;
  }

  @media (min-width: 370px) and (max-width: 574px) {
    font-size: 15px;
  }

  @media (min-width: 575px) and (max-width: 928px) {
    font-size: 20px;
  }

  @media (min-width: 928px) and (max-width: 1279px) {}

  @media (min-width: 1280px) and (max-width: 1365px) {}

  @media (min-width: 1366px) and (max-width: 1600px) {
    font-size: $medium;
  }
}

.link {
  transition: color 0.3s ease;
  @include link-decoration;
  color: $primary-color-dark;
  color: #4E4A9E;

  &:hover {
    color: #F6AF33;
  }
}

.center-navbar {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.hidden {
  transform: translateX(-110%);

  @media (max-width: 927px) {
    transform: translateX(-220%);
  }

  @media (min-width: 928px) and (max-width: 1279px) {
    transform: translateX(-190%);
  }

  @media (min-width: 1280px) and (max-width: 1365px) {}

  @media (min-width: 1366px) and (max-width: 1600px) {}
}

.hidden_invert {
  transform: translateX(110%);

  @media (max-width: 927px) {
    transform: translateX(220%);
  }

  @media (min-width: 928px) and (max-width: 1279px) {
    transform: translateX(190%);
  }

  @media (min-width: 1280px) and (max-width: 1365px) {}

  @media (min-width: 1366px) and (max-width: 1600px) {}
}

.mobile-logo {
  width: 35%;
  height: 100%;

  @media (min-width: 370px) and (max-width: 574px) {
    width: 35%;
  }

  @media (min-width: 575px) and (max-width: 928px) {
    width: 25%;
  }
}

.navbar-container__menu--dark {
  & .navbar-container__menu--item {
    transition: color 0.3s ease;
    color: $primary-color-dark;

    &:hover {
      color: #F6AF33;
    }
  }

  & .link {
    transition: color 0.3s ease;
    color: $primary-color-dark;

    &:hover {
      color: #F6AF33;
    }
  }
}

.drawer-button {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  box-sizing: border-box;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;

  @media (max-width: 574px) {
    margin-right: 5px;
    border-radius: 4px;
  }
}

.drawer-button--dark {
  background-color: rgba(255, 255, 255, 0.3);

  & .drawer-icon {
    color: $primary-color-dark;
  }
}

.drawer-icon {
  font-size: $large-sm;
  font-weight: bold;
  color: black;
  cursor: pointer;

  &--dark {
    font-size: $large-sm;
    font-weight: bold;
    color: $primary-color-dark;
    cursor: pointer;

    @media (max-width: 375px) {
      font-size: $body-lg-2;
    }

    @media (min-width: 376px) and (max-width: 574px) {
      font-size: $body-lg-2;
    }

    @media (min-width: 575px) and (max-width: 927px) {
      font-size: $body-extra-lg;
    }
  }

  @media (max-width: 375px) {
    font-size: $body-lg-2;
  }

  @media (min-width: 376px) and (max-width: 574px) {
    font-size: $body-lg-2;
  }

  @media (min-width: 575px) and (max-width: 927px) {
    font-size: $body-extra-lg;
  }
}
</style>
