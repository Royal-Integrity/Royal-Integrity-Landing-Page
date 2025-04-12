<template>
  <section class="references-section">
    <div class="circle-gradient left"></div>
    <div class="references-section__content">
      <div class="references-container">
        <div class="title-container">
          <h2 class="title-container__title">
            <TextHighlighter text="news.ourReferences.title.text" keywords="news.ourReferences.title.keywords" />
          </h2>
        </div>
        <div class="slider-container">
          <swiper :rewind="true" :slides-per-view="calculateNumSlider()" :space-between="50" :simulate-touch="false"
            :modules="modules" :mouse-wheel="true" :delay="1500" autoplay class="slider-container__swiper-element">
            <swiper-slide v-for="(post, i) in posts" :key="i" class="card">
              <div class="card__image-container">
                <img :src="post.img" :alt="$t(post.alt)" :class="post.class" loading="lazy" width="200" height="100" />
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <div class="circle-gradient right"></div>
  </section>
</template>

<script setup>
import TextHighlighter from '../TextHighlighter.vue';
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
} else if (screenWidth < 768) {
  slides = 1;
} else {
  slides = 2;
}

const posts = [
  {
    img: '/images/ForbesColombia.svg',
    alt: 'news.ourReferences.altOne',
  },
  {
    img: '/images/SerColombia.svg',
    alt: 'news.ourReferences.altTwo',
  },
  {
    img: '/images/new_design/news/references/google.svg',
    alt: 'news.ourReferences.altThree',
    class: 'image-google-sm',
  },
  {
    img: '/images/WorldEnergyCouncil.svg',
    alt: 'news.ourReferences.altFour',
    class: 'image-sm',
  },
  /* {
    img: '/images/Calidda.svg',
    alt: 'news.ourReferences.altFive',
  }, */
  {
    img: '/images/StartUpEnergy.svg',
    alt: 'news.ourReferences.altSix',
  },
  {
    img: '/images/CamaraComercioMedellin.svg',
    alt: 'news.ourReferences.altSeven',
  },
  {
    img: '/images/CamaraComercioBogota.svg',
    alt: 'news.ourReferences.altEight',
  },
  {
    img: '/images/Portafolio.svg',
    alt: 'news.ourReferences.altNine',
  },
  {
    img: '/images/TOP100.svg',
    alt: 'news.ourReferences.altTen',
  },
  {
    img: '/images/ANDI.svg',
    alt: 'news.ourReferences.altEleven',
  },
  {
    img: '/images/new_design/news/references/revista_semana.svg',
    alt: 'news.ourReferences.altTwelve',
    class: 'image-md',
  },
  {
    img: '/images/RevistaDinero.svg',
    alt: 'news.ourReferences.altThirteen',
  },
  {
    img: '/images/Cocier.svg',
    alt: 'news.ourReferences.altFourteen',
  },
  {
    img: '/images/GooglePartner.svg',
    alt: 'news.ourReferences.altFiveteen',
  },
  /* {
    img: '/images/Electrodunas.svg',
    alt: 'news.ourReferences.altSixteen',
  }, */
  {
    img: '/images/GrupoEnergiaBogota.svg',
    alt: 'news.ourReferences.altSeventeen',
  },
];

const calculateNumSlider = () => {
  if (screenWidth.value <= 575) {
    return 2;
  } else if (screenWidth.value > 575 && screenWidth.value < 928) {
    return 3;
  } else if (screenWidth.value >= 928 && screenWidth.value <= 1500) {
    return 3;
  } else if (screenWidth.value > 1500 && screenWidth.value < 1800) {
    return 5;
  } else {
    return 6;
  }
}
</script>

<style lang="scss" scoped>
.references-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 2% 0;
  padding-bottom: 60px;
  position: relative;


  &__content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    box-sizing: border-box;
    padding: 5%;

    @media (min-width: 370px) and (max-width: 574px) {
      padding: 0% 5%;
    }
  }
}

.title-container {
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-top: 10%;
  z-index: 3;

  @media (max-width: 927px) {
    width: 100%;
    margin-top: 2%;
  }

  @media (min-width: 1160px) {
    margin-top: 4%;
  }

  &__title {
    font-family: $font-family-royalIntegrity;
    font-size: $mobile-title;
    font-weight: 300;
    color: $primary-color-dark;
    line-height: normal;

    span {
      font-weight: 600;
    }

    @media (min-width: 768px) {
      font-size: $large;
    }
  }
}

.slider-container {
  width: 90%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  &__swiper-element {
    width: 95%;
    padding: 5px;
  }
}

.card {
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;


  @media (max-width: 369px) {
    height: 60px;
  }

  @media (min-width: 370px) and (max-width: 574px) {
    height: 60px;
  }

  &__image-container {
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 369px) {
      img {
        width: 100%;
      }
    }

    @media (min-width: 370px) and (max-width: 574px) {
      img {
        width: 100%;
      }
    }


    & .image-md {
      height: 65%;
    }

    & .image-sm {
      width: 60%;

      @media (min-width: 928px) and (max-width: 1279px) {
        width: 70%;
      }

    }
  }
}

.references-container {
  width: 100%;
  height: auto;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 22px;
  border: 1px solid #fff;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.circle-gradient {
  height: 100%;
  width: 30%;
  position: absolute;
  z-index: 1;

  @media (max-width: 369px) {
    height: 60%;
    width: 48.5%;
  }

  @media (min-width: 370px) and (max-width: 574px) {
    height: 60%;
    width: 48.5%;
  }

  @media (min-width: 928px) and (max-width: 1279px) {
    width: 50%;
  }

  @media (min-width: 1280px) and (max-width: 1365px) {
    width: 50%;
  }

  @media (min-width: 1366px) and (max-width: 1600px) {
    width: 50%;
  }

  &.right {
    left: 5px;
    background-color: transparent;
    background-image: radial-gradient(circle, rgba(36, 176, 179, 0.4) 0%, rgba(36, 176, 179, 0.3) 20%, rgba(200, 250, 255, 0.2) 60%, rgba(239, 253, 255, 0.1) 87%, rgba(255, 255, 255, 0.05) 100%);
  }

  &.left {
    right: 5px;
    background-color: transparent;
    background-image: radial-gradient(circle, rgba(36, 176, 179, 0.4) 0%, rgba(36, 176, 179, 0.3) 20%, rgba(200, 250, 255, 0.2) 60%, rgba(239, 253, 255, 0.1) 87%, rgba(255, 255, 255, 0.05) 100%);
  }
}
</style>
