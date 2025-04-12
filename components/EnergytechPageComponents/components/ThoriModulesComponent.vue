<template>
  <section class="modules-section">
    <div class="title-container">
      <h2 class="title-container__title">
        <TextHighlighter text="energytech.thoriModules.title.text" keywords="energytech.thoriModules.title.keywords"
          highlight-class="text-highlighter-gradient" />
      </h2>
    </div>

    <div class="slide-container">
      <div class="slide-container__button-left">
        <el-button type="primary" class="btn-nav" @click="backSlide">
          <Icon name="majesticons:arrow-left" class="btn-icon" />
        </el-button>
      </div>

      <div class="slide-container__carousel">
        <el-carousel ref="carousel" tigger="click" arrow="never" class="carousel" :autoplay="true" :interval="5000">
          <el-carousel-item v-for="module, index in thoriModules" :key="index">
            <div class="carousel-item">
              <div class="carousel-item__border-top"></div>
              <div class="carousel-item__content">
                <div class="carousel-item__content--text">
                  <div class="carousel-item--title">
                    <TextHighlighter :text="module.title.text" :keywords="module.title.keywords" />
                  </div>
                  <div class="divider" />
                  <div class="carousel-item--text">
                    <TextHighlighter :text="module.text" :keywords="module.keywords" />
                  </div>
                </div>
                <div class="carousel-item__content--image">
                  <ResponsiveImage :original="module.img" :alt="module.alt" loading="lazy" width="450" height="450" />
                </div>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class="slide-container__button-right">
        <el-button type="primary" class="btn-nav" @click="nextSlide">
          <Icon name="majesticons:arrow-right" class="btn-icon" />
        </el-button>
      </div>
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

const backSlide = () => {
  carousel.value?.prev();
}

const nextSlide = () => {
  carousel.value?.next();
}

</script>

<style lang="scss" scoped>
.modules-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 2% 2%;
  padding-bottom: 60px;
  font-family: $font-family-royalIntegrity;
  color: $primary-color-dark;
  box-sizing: border-box;

  @media (min-width: 370px) and (max-width: 574px) {
    padding: 0;
  }

  @media (min-width: 928px) and (max-width: 1279px) {
    padding: 2% 1%;
  }

}

.title-container {
  font-weight: 300;

  &__title {
    font-size: $small-title;

    @media (max-width: 369px) {
      font-size: $body;
    }

    @media (min-width: 370px) and (max-width: 574px) {
      font-size: $body;
    }

    @media (min-width: 575px) and (max-width: 927px) {
      font-size: $medium-lg;
    }

    @media (min-width: 928px) and (max-width: 1279px) {
      font-size: $extra-small-title;
    }

    @media (min-width: 1280px) and (max-width: 1365px) {
      font-size: $section-title;
    }

    @media (min-width: 1366px) and (max-width: 1600px) {
      font-size: $section-title;
    }
  }
}

.slide-container {
  width: 100%;
  height: 100%;
  margin-top: 3%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  &__carousel {
    width: 70%;
    height: 100%;
    box-sizing: border-box;
    padding: 20px;

    @media (min-width: 370px) and (max-width: 574px) {
      padding: 10px;
    }

    @media (min-width: 928px) and (max-width: 1279px) {
      padding: 10px;
    }
  }

  &__button-left {
    width: 10%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__button-right {
    width: 10%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.buttons-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5%;
  box-sizing: border-box;
  padding: 20px;

  &__thori {
    @include button-gradient;
    cursor: pointer;

    @media (max-width: 369px) {
      font-size: 10px;
      height: 35px;
      padding: 0px 15px;
      border-width: 1px;
    }

    @media (min-width: 370px) and (max-width: 574px) {
      font-size: 10px;
      height: 35px;
      padding: 0px 15px;
      border-width: 1px;
    }

    @media (min-width: 575px) and (max-width: 928px) {
      font-size: $body;
      height: 45px;
    }
  }

  &__contact {
    @include button-gradient-alt;
    cursor: pointer;

    @media (max-width: 369px) {
      font-size: 10px;
      height: 35px;
      padding: 0px 15px;
      border-width: 1px;
    }

    @media (min-width: 370px) and (max-width: 574px) {
      font-size: 10px;
      height: 35px;
      padding: 0px 15px;
      border-width: 1px;
    }

    @media (min-width: 575px) and (max-width: 928px) {
      font-size: $body;
      height: 45px;
    }
  }
}

.carousel-item {
  width: 100%;
  box-shadow: 2px 7px 9px rgba(0, 0, 0, 0.1019607843);
  box-sizing: border-box;

  &__border-top {
    width: 100%;
    height: 10px;
    background-color: $secondary-color;

    @media (max-width: 369px) {
      height: 5px;
    }

    @media (min-width: 370px) and (max-width: 574px) {
      height: 5px;
    }

    @media (min-width: 575px) and (max-width: 927px) {
      height: 5px;
    }

    @media (min-width: 928px) and (max-width: 1280px) {
      height: 5px;
    }
  }

  &__content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 50px;
    box-sizing: border-box;
    padding: 2% 4%;
    padding-left: 6%;

    @media (max-width: 369px) {
      gap: 20px;
    }

    @media (min-width: 370px) and (max-width: 574px) {
      gap: 20px;
    }

    @media (min-width: 575px) and (max-width: 928px) {
      gap: 20px;
    }

    @media (min-width: 928px) and (max-width: 1279px) {
      gap: 10px;
      padding: 2%;
    }

    &--text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 10px;
      width: 60%;

      @media (max-width: 369px) {
        gap: 5px;
      }

      @media (min-width: 370px) and (max-width: 574px) {
        gap: 5px;
      }

      @media (min-width: 575px) and (max-width: 928px) {
        gap: 0px;
      }

      @media (min-width: 929px) and (max-width: 1280px) {
        gap: 5px;
      }
    }

    &--image {
      width: 34%;

      picture {
        width: 100%;
        height: auto;
        object-fit: contain;
      }
    }
  }

  &--title {
    width: 85%;
    font-size: $section-title;
    font-weight: 300;
    line-height: 42px;

    span {
      font-weight: 600;
    }

    @media (max-width: 369px) {
      font-size: 8px;
      line-height: normal;
      width: 100%;
    }

    @media (min-width: 370px) and (max-width: 574px) {
      font-size: 8px;
      line-height: normal;
      width: 100%;
    }

    @media (min-width: 575px) and (max-width: 927px) {
      width: 100%;
      font-size: $body;
      line-height: 24px;
    }

    @media (min-width: 928px) and (max-width: 1279px) {
      font-size: $body-lg;
      line-height: 30px;
      width: 100%;
    }

    @media (min-width: 1280px) and (max-width: 1365px) {
      font-size: $extra-small-title;
      line-height: 35px;
    }

    @media (min-width: 1366px) and (max-width: 1600px) {
      font-size: $extra-small-title;
      line-height: 35px;
    }
  }

  &--text {
    width: 70%;
    font-size: $body-lg;
    line-height: 28px;
    font-weight: 300;
    text-align: justify;

    span {
      font-weight: 600;
    }

    @media (max-width: 369px) {
      font-size: 6px;
      line-height: normal;
      width: 100%;
    }

    @media (min-width: 370px) and (max-width: 574px) {
      font-size: 6px;
      line-height: normal;
      width: 100%;
    }

    @media (min-width: 575px) and (max-width: 927px) {
      width: 100%;
      font-size: $extra-small;
      line-height: 20px;
    }

    @media (min-width: 928px) and (max-width: 1279px) {
      font-size: $body-sm;
      line-height: 20px;
      width: 100%;
    }

    @media (min-width: 1280px) and (max-width: 1365px) {
      font-size: $body-md;
      line-height: 26px;
      width: 83%;
    }

    @media (min-width: 1366px) and (max-width: 1600px) {
      font-size: $body-md;
      line-height: 26px;
      width: 80%;
    }
  }
}

.highlight {
  background: $gradient-color;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
}

.btn-nav {
  background-color: #fff;
  border: 0;
  font-size: $body-lg-2;
  padding: 20px 10px;
  color: $primary-color-dark;
  box-shadow: 0px 10px 15px #0000001A;

  width: 60%;
  height: 50px;
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

.divider {
  @include divider;
  width: 60%;
  border-image: linear-gradient(to right, #6306fc 0%, #24b0b3 100%) 1;
  margin-top: 10px;
  margin-bottom: 10px;

  @media (min-width: 370px) and (max-width: 574px) {
    margin-top: 0px;
    margin-bottom: 0px;
  }
}

:deep() {
  .el-carousel {
    &__container {
      height: 600px;

      @media (max-width: 369px) {
        height: 150px;
      }

      @media (min-width: 370px) and (max-width: 574px) {
        height: 150px;
      }

      @media (min-width: 575px) and (max-width: 927px) {
        height: 300px;
      }

      @media (min-width: 928px) and (max-width: 1000px) {
        height: 340px;
      }

      @media (min-width: 1001px) and (max-width: 1140px) {
        height: 380px;
      }

      @media (min-width: 1141px) and (max-width: 1279px) {
        height: 430px;
      }

      @media (min-width: 1280px) and (max-width: 1365px) {
        height: 430px;
      }

      @media (min-width: 1366px) and (max-width: 1470px) {
        height: 450px;
      }

      @media (min-width: 1471px) and (max-width: 1600px) {
        height: 490px;
      }

      @media (min-width: 1601px) and (max-width: 1710px) {
        height: 520px;
      }

      @media (min-width: 1711px) and (max-width: 1800px) {
        height: 560px;
      }

    }

    &__item {
      padding: 0px 10px;
      box-sizing: border-box;

      @media (min-width: 370px) and (max-width: 574px) {
        padding: 0px 5px;
      }
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
          border: 3px solid $primary-color-dark;

          @media (min-width: 370px) and (max-width: 574px) {
            border-width: 2px;
          }
        }
      }

      & .el-carousel__button {
        background-color: $indicator-color;
        border: 3px solid $indicator-color;

        @media (min-width: 370px) and (max-width: 574px) {
          border-width: 2px;
          width: 14px;
        }
      }
    }
  }
}
</style>
