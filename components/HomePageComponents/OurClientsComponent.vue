<template>
  <section class="ourclients-section">
    <div class="title-container">
      <h2 class="title-container__title">
        <TextHighlighter text="home.ourClients.title.text" keywords="home.ourClients.title.keywords"
          highlightClass="text-highlighter-gradient" />
      </h2>
    </div>

    <div class="divider" />


    <div class="slider-container">
      <swiper :rewind="true" :slides-per-view="itemPerSlide" :space-between="20" :simulate-touch="false"
        :modules="modules" :mouse-wheel="true" :delay="1500" autoplay class="slider-container__swiper-element">
        <swiper-slide v-for="client in pageContent" class="client-container">
          <div class="client-container__image">
            <img :src="client.img" :alt="client.alt" loading="lazy" width="200" height="100" />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import TextHighlighter from '@/components/TextHighlighter.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';

import onResize from '@/Extend/onResize';

const modules = reactive([Navigation, Pagination, Autoplay]);
const { screenWidth } = onResize();

const pageContent = [
  {
    img: '/images/epm.svg',
    alt: 'Grupo EPM Logo',
  },
  {
    img: '/images/vatia.svg',
    alt: 'Vatia Logo',
  },
  {
    img: '/images/isagen.svg',
    alt: 'Isagen Logo',
  },
  {
    img: '/images/celsia.svg',
    alt: 'Celsia Logo',
  },
  {
    img: '/images/magaya.svg',
    alt: 'Magaya Logo',
  },
  {
    img: '/images/cargocare.svg',
    alt: 'Cargo Care Logo',
  },
  {
    img: '/images/rc.svg',
    alt: 'RC Migration Logo',
  },
  {
    img: '/images/electrodunas.svg',
    alt: 'Electro Dunas Logo',
  },
  {
    img: '/images/hubtek.svg',
    alt: 'Hubtek Logo',
  },
  {
    img: '/images/deloitte.svg',
    alt: 'Deloitte Logo',
  },
  {
    img: '/images/tenten.svg',
    alt: 'Ten Ten Logo',
  },
  {
    img: '/images/urt.svg',
    alt: 'Unidad Restitucion de Tierras Logo',
  },
  {
    img: '/images/logistics.svg',
    alt: 'GLT Logistics Logo',
  },
  {
    img: '/images/calidda.svg',
    alt: 'Calidda Logo',
  },
  {
    img: '/images/urra.png',
    alt: 'Empresa Urra Logo',
  },
];

const itemPerSlide = computed(() => {
  if (screenWidth.value >= 650 && screenWidth.value <= 928) {
    return 4;
  } else if (screenWidth.value > 390 && screenWidth.value < 650) {
    return 3
  } else if (screenWidth.value <= 390) {
    return 2;
  }
  return 7;
})
</script>

<style lang="scss" scoped>
.ourclients-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 5% 0;
  box-sizing: border-box;
  font-family: $font-family-royalIntegrity;
}

.title-container {
  width: 100%;
  text-align: center;

  &__title {
    font-size: $mobile-title;
    font-weight: 300;
    line-height: normal;

    @media (min-width: 575px) {
      font-size: $mobile-title-md;
    }

    @media (min-width: 928px) {
      font-size: $section-subtitle;
    }

    @media (min-width: 1280px) {
      font-size: $section-title;
    }
  }
}

.divider {
  @include divider-gradient;
  width: 60%;
  margin-top: 10px;
  margin-bottom: 10px;

  @media (min-width: 575px) {
    width: 50%;
  }

  @media (min-width: 650px) {
    width: 40%;
  }

  @media (min-width: 928px) {
    width: 30%;
  }

  @media (min-width: 1366px) {
    width: 20%;
  }
}

.slider-container {
  width: 100%;
  box-sizing: border-box;
  padding: 0px 5%;

  &__swiper-element {
    width: 100%;
    box-sizing: border-box;
    padding: 3%;
  }
}

.client-container {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__image {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      filter: grayscale(100%);
      transition: filter 0.1s ease-in;
    }

    &:hover {
      img {
        filter: grayscale(0%);
      }
    }
  }
}
</style>
