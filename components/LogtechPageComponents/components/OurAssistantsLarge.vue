<template>
  <section class="assistant-section">
    <div class="title-container">
      <h2 class="title-container__title">
        <TextHighlighter text="logtech.ourAssistants.title.text" keywords="logtech.ourAssistants.title.keywords"
          highlight-class="text-highlighter-gradient" />
      </h2>
    </div>

    <div class="description-container">
      <div class="description-container__text">
        <TextHighlighter text="logtech.ourAssistants.text" keywords="logtech.ourAssistants.keywords" />
      </div>
    </div>

    <div class="slide-container">
      <div class="slide-container__button-left">
        <el-button type="primary" class="btn-nav" @click="backSlide">
          <Icon name="majesticons:arrow-left" class="btn-icon" />
        </el-button>
      </div>

      <div class="slide-container__carousel">
        <el-carousel ref="carousel" tigger="click" arrow="never" class="carousel" :autoplay="true" :interval="5000">
          <el-carousel-item v-for="assistant, index in assistants" :key="index">
            <div class="carousel-item">
              <div class="carousel-item__border-top" />
              <div class="carousel-item__content">
                <div class="carousel-item__content--text">
                  <div class="carousel-item--title">
                    <TextHighlighter :text="assistant.title.text" :keywords="assistant.title.keywords" />
                  </div>
                  <div class="divider"></div>
                  <div class="carousel-item--text">
                    <TextHighlighter :text="assistant.text.text" :keywords="assistant.text.keywords" />
                  </div>
                </div>
                <div class="carousel-item__content--image">
                  <ResponsiveImage :original="assistant.img" :alt="$t(assistant.alt)" loading="lazy" width="760"
                    height="550" />
                </div>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
        <ResponsiveImage original="/images/new_design/logtech/assistant_complement.webp" alt="complement"
          class="background-complement" loading="lazy" />
      </div>

      <div class="slide-container__button-right">
        <el-button type="primary" class="btn-nav" @click="nextSlide">
          <Icon name="majesticons:arrow-right" class="btn-icon" />
        </el-button>
      </div>
    </div>

    <div class="buttons-container">
      <button class="buttons-container__contact">
        <NuxtLink :to="$t('logtech.ourAssistants.buttonOneAction')" target="_blank" class="link__alt">
          {{ $t('logtech.ourAssistants.buttonOne') }}
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
const assistants = [
  {
    title: {
      text: 'logtech.ourAssistants.itemOne.title.text',
      keywords: 'logtech.ourAssistants.itemOne.title.keywords'
    },
    text: {
      text: 'logtech.ourAssistants.itemOne.text',
      keywords: 'logtech.ourAssistants.itemOne.keywords',
    },
    img: '/images/new_design/logtech/slide_one.webp',
    alt: 'logtech.ourAssistants.itemOne.alt',
  },
  {
    title: {
      text: 'logtech.ourAssistants.itemTwo.title.text',
      keywords: 'logtech.ourAssistants.itemTwo.title.keywords'
    },
    text: {
      text: 'logtech.ourAssistants.itemTwo.text',
      keywords: 'logtech.ourAssistants.itemTwo.keywords',
    },
    img: '/images/new_design/logtech/slide_two.webp',
    alt: 'logtech.ourAssistants.itemTwo.alt',
  },
  {
    title: {
      text: 'logtech.ourAssistants.itemThree.title.text',
      keywords: 'logtech.ourAssistants.itemThree.title.keywords'
    },
    text: {
      text: 'logtech.ourAssistants.itemThree.text',
      keywords: 'logtech.ourAssistants.itemThree.keywords',
    },
    img: '/images/new_design/logtech/slide_three.webp',
    alt: 'logtech.ourAssistants.itemThree.alt',
  },
  {
    title: {
      text: 'logtech.ourAssistants.itemFour.title.text',
      keywords: 'logtech.ourAssistants.itemFour.title.keywords'
    },
    text: {
      text: 'logtech.ourAssistants.itemFour.text',
      keywords: 'logtech.ourAssistants.itemFour.keywords',
    },
    img: '/images/new_design/logtech/slide_four.webp',
    alt: 'logtech.ourAssistants.itemFour.alt',
  },
  {
    title: {
      text: 'logtech.ourAssistants.itemFive.title.text',
      keywords: 'logtech.ourAssistants.itemFive.title.keywords'
    },
    text: {
      text: 'logtech.ourAssistants.itemFive.text',
      keywords: 'logtech.ourAssistants.itemFive.keywords',
    },
    img: '/images/new_design/logtech/slide_five.webp',
    alt: 'logtech.ourAssistants.itemFive.alt',
  },
  {
    title: {
      text: 'logtech.ourAssistants.itemSix.title.text',
      keywords: 'logtech.ourAssistants.itemSix.title.keywords'
    },
    text: {
      text: 'logtech.ourAssistants.itemSix.text',
      keywords: 'logtech.ourAssistants.itemSix.keywords',
    },
    img: '/images/new_design/logtech/slide_six.webp',
    alt: 'logtech.ourAssistants.itemSix.alt',
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
.assistant-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: $font-family-royalIntegrity;
  color: $primary-color-dark;
  box-sizing: border-box;
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

.description-container {
  width: 70%;
  text-align: center;
  font-size: $body-lg-2;
  line-height: 32px;
  margin: 40px 0px 60px 0px;

  @media (min-width: 928px) and (max-width: 1279px) {
    font-size: $body;
    line-height: 26px;
    width: 90%;
    margin-bottom: 30px;
  }

  @media (min-width: 1280px) and (max-width: 1365px) {
    font-size: $body-md;
    line-height: 30px;
    width: 90%;
  }

  @media (min-width: 1366px) and (max-width: 1600px) {
    font-size: $body-lg;
    line-height: 30px;
    width: 90%;
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
  gap: 10px;
  background-image: url('/images/new_design/logtech/assistant_background.webp');
  background-position: center;
  background-size: 90%;
  background-repeat: no-repeat;

  @media (max-width: 369px) {
    background-size: 90%;
    gap: 0px;
  }

  @media (min-width: 370px) and (max-width: 574px) {
    background-size: 90%;
    gap: 0px;
  }

  @media (min-width: 575px) and (max-width: 928px) {
    background-size: 75%;
  }

  @media (min-width: 929px) and (max-width: 1280px) {
    height: auto;
  }

  @media (min-width: 1281px) and (max-width: 1600px) {
    height: auto;
  }

  &__carousel {
    width: 70%;
    height: 100%;
    box-sizing: border-box;
    position: relative;

    @media (min-width: 370px) and (max-width: 574px) {
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
  margin: 30px 0;

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

.carousel-item {
  width: 100%;
  background-color: #fff;
  box-shadow: 2px 7px 9px rgba(0, 0, 0, 0.1019607843);
  position: relative;

  &__border-top {
    width: 100%;
    height: 10px;
    background-color: $primary-color-dark;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;

    @media (max-width: 369px) {
      height: 5px;
    }

    @media (min-width: 370px) and (max-width: 574px) {
      height: 5px;
    }

    @media (min-width: 575px) and (max-width: 928px) {
      height: 5px;
    }

    @media (min-width: 929px) and (max-width: 1280px) {
      height: 5px;
    }
  }

  &__content {
    width: 100%;
    height: 650px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 50px;
    box-sizing: border-box;
    padding-left: 6%;
    position: relative;

    @media (max-width: 369px) {
      height: 130px;
      padding-left: 1%;
    }

    @media (min-width: 370px) and (max-width: 574px) {
      height: 130px;
      padding-left: 1%;
    }

    @media (min-width: 575px) and (max-width: 927px) {
      height: 230px;
    }

    @media (min-width: 928px) and (max-width: 1279px) {
      height: 350px;
    }

    @media (min-width: 1280px) and (max-width: 1600px) {
      height: 400px;
    }

    @media (min-width: 1601px) and (max-width: 1800px) {
      height: 500px;
    }

    &--text {
      width: 60%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 10px;
      z-index: 5;

      @media (max-width: 369px) {
        gap: 0px;
        width: 50%;
      }

      @media (min-width: 370px) and (max-width: 574px) {
        gap: 0px;
        width: 50%;
      }

      @media (min-width: 575px) and (max-width: 1800px) {
        gap: 5px;
        width: 60%;
      }
    }

    &--image {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;

      picture {
        width: 60%;
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

    @media (max-width: 369px) {
      font-size: 8px;
      line-height: normal;
      width: 75%;
    }

    @media (min-width: 370px) and (max-width: 574px) {
      font-size: 8px;
      line-height: normal;
      width: 75%;
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
    text-align-last: left;

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
      width: 90%;
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

.background-complement {
  z-index: 5;
  position: absolute;
  bottom: -5%;
  right: 5%;
  width: 35%;

  @media (min-width: 928px) and (max-width: 1279px) {
    width: 38%;
    bottom: -2%;
    right: 0%;
  }

  @media (min-width: 1366px) and (max-width: 1600px) {
    width: 32%;
    bottom: -7%;
  }
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

.divider {
  @include divider;
  width: 60%;
  border-image: linear-gradient(to right, #6306fc 0%, #24b0b3 100%) 1;
  margin-top: 10px;
  margin-bottom: 10px;

  @media (min-width: 370px) and (max-width: 574px) {
    margin-top: 0px;
    margin-bottom: 5px;
  }
}

.highlight {
  background: $gradient-color;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
}

:deep() {
  .el-carousel {
    &__container {
      height: 700px;

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
        height: 380px;
      }

      @media (min-width: 1001px) and (max-width: 1140px) {
        height: 400px;
      }

      @media (min-width: 1141px) and (max-width: 1279px) {
        height: 430px;
      }

      @media (min-width: 1280px) and (max-width: 1365px) {
        height: 440px;
      }

      @media (min-width: 1366px) and (max-width: 1470px) {
        height: 450px;
      }

      @media (min-width: 1471px) and (max-width: 1600px) {
        height: 490px;
      }

      @media (min-width: 1601px) and (max-width: 1710px) {
        height: 540px;
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
          width: 2px;
        }
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
