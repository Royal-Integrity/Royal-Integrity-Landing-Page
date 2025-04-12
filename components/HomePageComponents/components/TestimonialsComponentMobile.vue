<template>
  <div class="testimonials-mobile">
    <div class="testimonials-mobile__title">
      <TextHighlighter text="home.testimonials.title.text" keywords="home.testimonials.title.keywords"
        highlightClass="text-highlighter-gradient" />
    </div>
    <div class="divider" />
    <div class="testimonials-container">

      <swiper :rewind="true" :slider-per-view="1" :space-between="50" :simulate-touch="false" :modules="modules"
        :mouse-wheel="true" direction="vertical" :delay="1500" autoplay class="testimonials-container__swiper-element">
        <swiper-slide v-for="item, index in testimonials">
          <div class="testimonials-container__card">
            <div class="testimonials-container__card--image">
              <ResponsiveImage :original="item.img" :alt="item.alt" loading="lazy" :largeRange="true" width="300" height="200" />
            </div>
            <div class="testimonials-container__card--content">
              <div class="testimonials-container__card--experience">
                {{ $t(item.text) }}
              </div>
              <div class="testimonials-container__card--person">
                {{ item.person }}
                <span>{{ $t(item.company) }} </span>
              </div>
            </div>
          </div>
        </swiper-slide>

      </swiper>
    </div>
  </div>
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
    class: 'testimonial--sm'
  },
  {
    text: 'home.testimonials.cardTwo.text',
    person: 'Daniel Muñoz',
    company: 'home.testimonials.cardTwo.rol',
    img: '/images/new_design/home/section_7_02.webp',
    alt: 'Celsia Logo',
    class: ''
  },
  {
    text: 'home.testimonials.cardThree.text',
    person: 'Yoniel García',
    company: 'home.testimonials.cardThree.rol',
    img: '/images/new_design/home/section_7_01.webp',
    alt: 'Magaya Logo',
    class: '',
  },
];
</script>

<style lang="scss" scoped>
.testimonials-mobile {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 10px 0px;
  box-sizing: border-box;
  font-family: $font-family-royalIntegrity;

  &__title {
    font-size: $mobile-title;

    @media (min-width: 574px) {
      font-size: $mobile-title-md;
    }

    @media (min-width: 650px) {
      font-size: $mobile-title-lg;
    }

  }
}

.testimonials-container {
  width: 100%;
  box-sizing: border-box;
  padding: 10%;

  @media (min-width: 575px) {
    padding: 5% 10%;
  }

  @media (min-width: 650px) {
    padding: 5% 15%;
  }

  &__swiper-element {
    width: 100%;
    padding: 15px 0px;
    height: 360px;

    @media (min-width: 575px) {
      height: 440px;
    }

    @media (min-width: 660px) {
      height: 480px;
    }
  }

  &__card {
    border-radius: 36px;
    width: 100%;
    height: auto;
    box-sizing: border-box;
    box-shadow: 0 4px 12px rgb(0, 0, 0, 0.1);
    border: 1px solid #b6b6b6;
    display: flex;
    flex-direction: column;

    @media (min-width: 575px) {
      width: 95%;
      border-radius: 45px;
    }

    &--sm {
      height: 360px;
    }

    &--image {
      height: 40%;
      width: 100%;

      picture {
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    }

    &--content {
      width: 100%;
      height: 60%;
      box-sizing: border-box;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      gap: 10px;
    }

    &--experience {
      font-size: $small;
      line-height: 16px;
      text-align: justify;

      @media (min-width: 575px) {
        font-size: $body-sm;
        line-height: 20px;
      }
    }

    &--person {
      font-size: $extra-small;
      display: flex;
      flex-direction: column;
      gap: 5px;

      @media (min-width: 575px) {
        font-size: $body;
      }

      span {
        font-style: italic;
      }
    }
  }
}

.divider {
  @include divider;
  width: 60%;
  border-image: linear-gradient(to right, #6306fc 0%, #24b0b3 100%) 1;
  margin: 10px 0px;
}
</style>