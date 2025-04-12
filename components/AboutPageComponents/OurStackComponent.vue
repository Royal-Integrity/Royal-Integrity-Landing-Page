<template>
  <section class="ourstack-section">
    <div class="title-container">
      <h2 class="title-container__title">
        {{ $t('about.technologiesStack.title.partOne') }}
        <span>{{ $t('about.technologiesStack.title.partTwo') }}</span>
      </h2>
    </div>

    <div class="divider" />

    <section class="mobile-container">
      <div class="slider-container">
        <swiper
          :rewind="true"
          :slides-per-view="screenWidth >= 1160 ? 6 : 2"
          :space-between="20"
          :simulate-touch="false"
          :navigation="true"
          :modules="modules"
          :mouse-wheel="true"
          :delay="2000"
          autoplay
          class="slider-container__swiper-element"
        >
          <swiper-slide v-for="(item, i) in royalIntegrityStack" :key="i" class="card">
            <div class="card__image-container">
              <img :src="item.img" :alt="$t(item.alt)" loading="lazy" />
            </div>
            <article class="card__text-container">
              <h3 class="card__text-container--text">{{ $t(item.text) }}</h3>
            </article>
          </swiper-slide>
        </swiper>
      </div>
    </section>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/bundle';

import onResize from '@/Extend/onResize';

const modules = reactive([Navigation, Pagination, Autoplay]);
const { screenWidth } = onResize();
let slides;

if (screenWidth >= 1024) {
  slides = 3;
} else if (screenWidth >= 1500) {
  slides = 4;
} else {
  slides = 2;
}

const royalIntegrityStack = [
  {
    img: '/images/Golang.svg',
    alt: 'about.technologiesStack.altEleven',
    text: 'about.technologiesStack.itemEleven',
  },
  {
    img: '/images/Angular.svg',
    alt: 'about.technologiesStack.altOne',
    text: 'about.technologiesStack.itemOne',
  },
  {
    img: '/images/React.png',
    alt: 'about.technologiesStack.altTwo',
    text: 'about.technologiesStack.itemTwo',
  },
  {
    img: '/images/Vue.svg',
    alt: 'about.technologiesStack.altThree',
    text: 'about.technologiesStack.itemThree',
  },
  {
    img: '/images/Torch.svg',
    alt: 'about.technologiesStack.altFour',
    text: 'about.technologiesStack.itemFour',
  },
  {
    img: '/images/Node.svg',
    alt: 'about.technologiesStack.altFive',
    text: 'about.technologiesStack.itemFive',
  },
  {
    img: '/images/Express.svg',
    alt: 'about.technologiesStack.altSix',
    text: 'about.technologiesStack.itemSix',
  },
  {
    img: '/images/FastApi.svg',
    alt: 'about.technologiesStack.altSeven',
    text: 'about.technologiesStack.itemSeven',
  },
  {
    img: '/images/Flask.svg',
    alt: 'about.technologiesStack.altEight',
    text: 'about.technologiesStack.itemEight',
  },
  {
    img: '/images/Docker.svg',
    alt: 'about.technologiesStack.altNine',
    text: 'about.technologiesStack.itemNine',
  },
  {
    img: '/images/Kubernetes.svg',
    alt: 'about.technologiesStack.altTen',
    text: 'about.technologiesStack.itemTen',
  },
];
</script>

<style lang="scss" scoped>
.ourstack-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: $quartiary-color;
  padding: 2% 0;
  padding-bottom: 60px;
}

.divider {
  @include divider;
  width: 57%;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1024px) {
    width: 35%;
  }

  @media (min-width: 1160px) {
    width: 33%;
  }

  @media (min-width: 1280px) {
    width: 30%;
  }

  @media (min-width: 1500px) {
    width: 25%;
  }

  @media (min-width: 1800px) {
    width: 19%;
  }
}

.title-container {
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-top: 10%;

  @media (min-width: 1160px) {
    margin-top: 4%;
  }

  &__title {
    font-family: $font-family-royalIntegrity;
    font-size: $medium;
    font-weight: bold;
    color: $text-tertiary-color;
    line-height: normal;

    span {
      color: $text-secondary-color;
    }

    @media (min-width: 768px) {
      font-size: $large;
    }
  }
}

.mobile-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
}

.slider-container {
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  &__swiper-element {
    width: 90%;
    padding: 5px;

    @media (max-width: 1159px) {
      margin: 0 auto;
    }
  }
}

.card {
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px;
  box-shadow: 0px 5px 10px #00000033;

  @media (min-width: 500px) {
    height: 300px;
  }

  @media (min-width: 1160px) {
    height: 210px;
  }

  @media (min-width: 1365px) {
    height: 225px;
  }

  @media (min-width: 1500px) {
    height: 300px;
  }

  &__image-container {
    width: 90%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 70%;
      height: auto;
      margin: auto;

      @media (min-width: 500px) {
        width: 40%;
      }

      @media (min-width: 1160px) {
        width: 55%;
      }

      @media (min-width: 1800px) {
        width: 40%;
      }
    }
  }

  &__text-container {
    width: 95%;
    height: 15%;
    display: flex;
    justify-content: center;
    margin-bottom: auto;
    padding: 0 5px;

    @media (max-width: 1159px) {
      margin-left: auto;
    }

    @media (min-width: 1160px) {
      width: 95%;
      margin: 0 auto;
    }

    &--text {
      font-family: $font-family-royalIntegrity;
      font-size: $small;
      font-weight: 400;
      color: $text-primary-color;
      line-height: normal;
      text-align: center;

      @media (min-width: 1024px) {
        font-size: $medium;
      }

      @media (min-width: 1160px) {
        font-size: $small;
      }

      @media (min-width: 1365px) {
        font-size: $body;
      }
    }
  }
}
</style>
