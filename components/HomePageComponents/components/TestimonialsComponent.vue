<template>
  <section class="testimonials-section">
    <div class="title-container">
      <h2 class="title-container__title">
        <TextHighlighter text="home.testimonials.title.text" keywords="home.testimonials.title.keywords"
          highlightClass="text-highlighter-gradient" />
      </h2>
    </div>

    <div class="divider" />

    <div class="testimonials-container">

      <swiper :rewind="true" :slider-per-view="1" :space-between="100" :simulate-touch="false" :modules="modules"
        :mouse-wheel="true" direction="vertical" :delay="1500" autoplay class="testimonials-container__swiper-element">
        <swiper-slide v-for="item, index in testimonials">
          <div class="testimonials-container__card">
            <div class="testimonials-container__card--image" :class="item.class">
              <ResponsiveImage :original="item.img" :alt="item.alt" loading="lazy" />
            </div>
            <div class="testimonials-container__card--content">
              <div class="testimonials-container__card--experience">
                {{ $t(item.text) }}
              </div>
              <div class="testimonials-container__card--information">
                {{ item.person }}
                <span>{{ $t(item.company) }} </span>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

  </section>
</template>

<script setup>
import TextHighlighter from '~/components/TextHighlighter.vue';
import ResponsiveImage from '~/components/ResponsiveImage.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';

const modules = reactive([Navigation, Pagination, Autoplay]);

const testimonials = [
  {
    text: 'home.testimonials.cardOne.text',
    person: 'Simón Pérez',
    company: 'home.testimonials.cardOne.rol',
    img: '/images/new_design/home/section_7_03.webp',
    alt: 'Grupo Energía Bogotá Logo',
  },
  {
    text: 'home.testimonials.cardTwo.text',
    person: 'Daniel Muñoz',
    company: 'home.testimonials.cardTwo.rol',
    img: '/images/new_design/home/section_7_02.webp',
    alt: 'Celsia Logo',
  },
  {
    text: 'home.testimonials.cardThree.text',
    person: 'Yoniel García',
    company: 'home.testimonials.cardThree.rol',
    img: '/images/new_design/home/section_7_01.webp',
    alt: 'Magaya Logo',
  },
];
</script>

<style lang="scss" scoped>
.testimonials-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #fff;
  /* padding: 3%; */
  box-sizing: border-box;
  font-family: $font-family-royalIntegrity;
  color: $primary-color-dark;
}

.title-container {
  width: 100%;
  text-align: center;

  &__title {
    font-size: $section-subtitle;
    font-weight: 300;
    line-height: normal;
    text-align: center;

    @media (min-width: 1280px) {
      font-size: $section-title;
    }

  }
}


.divider {
  @include divider-gradient;
  width: 60%;
  margin-top: 5px;
  margin-bottom: 5px;

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

.testimonials-container {
  width: 100%;
  height: 100%;
  margin-top: 30px;
  box-sizing: border-box;
  /* border: 1px solid blue; */

  &__swiper-element {
    width: 100%;
    box-sizing: border-box;
    padding: 3%;
    height: 290px;

    @media (min-width: 990px) {
      height: 320px;
    }

    @media (min-width: 1050px) {
      height: 350px;
    }

    @media (min-width: 1120px) {
      height: 400px;
    }

    @media (min-width: 1280px) {
      height: 450px;
    }

    @media (min-width: 1475px) {
      height: 500px;
    }

    @media (min-width: 1740px) {
      height: 550px;
    }

    @media (min-width: 1890px) {
      height: 560px;
    }
  }

  &__card {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    padding-right: 20px;
    box-sizing: border-box;

    background-color: #fff;
    border-radius: 32px;
    box-shadow: 0 4px 12px rgb(0, 0, 0, 0.1);

    @media (min-width: 1200px) {
      border-radius: 38px;
    }

    @media (min-width: 1560px) {
      border-radius: 46px;
    }

    &--image {
      width: 30%;
      height: fit-content;

      picture {
        width: 100%;
        height: auto;
        object-fit: contain;
      }
    }

    &--content {
      width: 70%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 10px;
      box-sizing: border-box;

    }

    &--experience {
      width: 100%;
      height: 100%;
      font-style: italic;
      font-size: $body;
      line-height: normal;
      text-align: justify;

      @media (min-width: 1280px) {
        font-size: $body-md;
      }

      @media (min-width: 1600px) {
        font-size: $body-lg-2;
      }
    }

    &--information {
      width: 100%;
      height: 100%;
      font-weight: 500;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 5px;
      font-size: $body;

      @media (min-width: 1280px) {
        font-size: $medium;
      }


    }
  }
}
</style>
