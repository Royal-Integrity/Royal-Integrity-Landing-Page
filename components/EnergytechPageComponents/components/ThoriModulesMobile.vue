<template>
  <section class="modules-section-mobile">
    <div class="title-container">
      <h2 class="title-container__title">
        <TextHighlighter text="energytech.thoriModules.title.text" keywords="energytech.thoriModules.title.keywords"
          highlight-class="text-highlighter-gradient" />
      </h2>
    </div>
    <div class="slide-container">
      <div class="slide-container__carousel">
        <el-carousel ref="carousel" tigger="click" arrow="never" class="carousel" :autoplay="true" :interval="5000">
          <el-carousel-item v-for="module, index in thoriModules" :key="index">
            <div class="carousel-item">
              <div class="carousel-item__border-top" />
              <div class="carousel-item__content">
                <div class="carousel-item__content--image">
                  <ResponsiveImage :original="module.img" :alt="module.alt" loading="lazy" width="450" height="450" />
                </div>
                <div class="carousel-item__content--text">
                  <div class="carousel-item--title">
                    <TextHighlighter :text="module.title.text" :keywords="module.title.keywords" />
                  </div>
                  <div class="divider" />
                  <div class="carousel-item--text">
                    <TextHighlighter :text="module.text" :keywords="module.keywords" />
                  </div>
                </div>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>

      </div>
      <!-- <div class="slide-container__nav-button-container">
        <el-button type="primary" class="btn-nav" @click="backSlide">
          <Icon name="majesticons:arrow-left" class="btn-icon" />
        </el-button>

        <el-button type="primary" class="btn-nav" @click="nextSlide">
          <Icon name="majesticons:arrow-right" class="btn-icon" />
        </el-button>
      </div> -->
    </div>
    <div class="buttons-container">

      <button class="buttons-container__thori">
        <NuxtLink to="https://thori.ai/" target="_blank" class="link">
          {{ $t('energytech.thoriModules.modules.buttonOne') }}
        </NuxtLink>
      </button>

      <button class="buttons-container__contact">
        <NuxtLink :to="$t('energytech.thoriModules.modules.buttonTwoAction')" target="_blank" class="link__alt">
          {{ $t('energytech.thoriModules.modules.buttonTwo') }}
        </NuxtLink>
      </button>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import TextHighlighter from '~/components/TextHighlighter.vue';
import ResponsiveImage from '~/components/ResponsiveImage.vue';

const carousel = ref(null);

const thoriModules = [
  {
    img: '/images/new_design/energytech/slide_one.webp',
    title: {
      text: 'energytech.thoriModules.modules.forecast.title.text',
      keywords: 'energytech.thoriModules.modules.forecast.title.keywords'
    },
    alt: 'energytech.thoriModules.modules.forecast.alt',
    text: 'energytech.thoriModules.modules.forecast.text',
    keywords: 'energytech.thoriModules.modules.forecast.keywords',
  },
  {
    img: '/images/new_design/energytech/slide_two.webp',
    title: {
      text: 'energytech.thoriModules.modules.dhog.title.text',
      keywords: 'energytech.thoriModules.modules.dhog.title.keywords'
    },
    alt: 'energytech.thoriModules.modules.dhog.alt',
    text: 'energytech.thoriModules.modules.dhog.text',
    keywords: 'energytech.thoriModules.modules.dhog.keywords',
  },
  {
    img: '/images/new_design/energytech/slide_three.webp',
    title: {
      text: 'energytech.thoriModules.modules.dam.title.text',
      keywords: 'energytech.thoriModules.modules.dam.title.keywords'
    },
    alt: 'energytech.thoriModules.modules.dam.alt',
    text: 'energytech.thoriModules.modules.dam.text',
    keywords: 'energytech.thoriModules.modules.dam.keywords',
  },
  {
    img: '/images/new_design/energytech/slide_four.webp',
    title: {
      text: 'energytech.thoriModules.modules.management.title.text',
      keywords: 'energytech.thoriModules.modules.management.title.keywords'
    },
    alt: 'energytech.thoriModules.modules.management.alt',
    text: 'energytech.thoriModules.modules.management.text',
    keywords: 'energytech.thoriModules.modules.management.keywords',
  },
];

/* const backSlide = () => {
  carousel.value?.prev();
}

const nextSlide = () => {
  carousel.value?.next();
} */
</script>

<style lang="scss" scoped>
.modules-section-mobile {
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: $font-family-royalIntegrity;
  color: $primary-color-dark;
}

.title-container {
  width: 100%;
  text-align: center;
  margin-bottom: 10%;

  &__title {
    font-size: $mobile-title;
  }
}

.slide-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;

  &__carousel {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }

  &__nav-button-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
}

.carousel-item {
  width: 100%;
  box-shadow: 2px 7px 9px rgba(0, 0, 0, 0.1019607843);
  box-sizing: border-box;

  &__border-top {
    width: 100%;
    height: 5px;
    background-color: $secondary-color;
  }

  &__content {
    width: 100%;
    box-sizing: border-box;
    padding: 10px 10px 20px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &--image {
      width: 100%;
      height: auto;

      @media (min-width: 650px) {
        width: 80%;
      }

      @media (min-width: 720px) {
        width: 70%;
      }

      @media (min-width: 800px) {
        width: 65%;
      }

      picture {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    &--text {
      width: 100%;
      height: auto;
    }
  }

  &--title {
    width: 100%;
    text-align: center;
    font-size: $body;
    line-height: 24px;

    @media (min-width: 400px) {
      font-size: $medium;
    }

    @media (min-width: 450px) {
      font-size: $body-md;
    }

    @media (min-width: 575px) {
      font-size: $body-lg;
    }

    @media (min-width: 650px) {
      font-size: $body-lg-2;
    }
  }

  &--text {
    width: 100%;
    text-align: justify;
    font-size: $small;
    line-height: normal;
    margin: 0 auto;

    @media (min-width: 400px) {
      font-size: $extra-small;
    }

    @media (min-width: 450px) {
      font-size: $body-sm;
    }

    @media (min-width: 575px) {
      font-size: $body;
    }

    @media (min-width: 650px) {
      font-size: $medium;
    }
  }
}

.buttons-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 10px 0px;
  gap: 20px;

  &__thori {
    @include button-gradient;
    cursor: pointer;
    font-size: $extra-small;
    width: 200px;
    height: 50px;
    margin: 0;
  }

  &__contact {
    @include button-gradient-alt;
    cursor: pointer;
    font-size: $extra-small;
    width: 200px;
    height: 50px;
    margin: 0;
  }
}

.link {
  @include link-decoration;
  background: $gradient-color;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  &__alt {
    @include link-decoration;
    color: #fff;
  }
}

.btn-nav {
  background-color: #fff;
  border: 0;
  font-size: $body-lg-2;
  padding: 20px 10px;
  color: $text-primary-color;
  box-shadow: 0px 10px 15px #0000001A;
}

.divider {
  @include divider;
  width: 60%;
  border-image: linear-gradient(to right, #6306fc 0%, #24b0b3 100%) 1;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;

  @media (min-width: 575px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
}


:deep() {
  .el-carousel {
    &__container {
      height: 530px;

      @media (min-width: 400px) {
        height: 600px;
      }

      @media (min-width: 450px) {
        height: 650px;
      }

      @media (min-width: 575px) {
        height: 730px;
      }

      @media (min-width: 650px) {
        height: 750px;
      }
    }

    &__item {
      padding: 0px 5px;
      box-sizing: border-box;
    }

    &__button {
      width: 40px;
      border-radius: 10px;
    }

    &__indicator {
      margin: 0px 5px;

      &.is-active {
        & .el-carousel__button {
          background-color: $primary-color-dark;
          border: 2px solid $primary-color-dark;
        }
      }

      & .el-carousel__button {
        background-color: $indicator-color;
        border: 2px solid $indicator-color;
      }
    }

    &__indicators {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
}
</style>