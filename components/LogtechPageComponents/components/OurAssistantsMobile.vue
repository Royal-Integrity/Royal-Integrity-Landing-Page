<template>
  <section class="assistant-mobile">
    <div class="title-container">
      <h2 class="title-container__title">
        <TextHighlighter text="logtech.ourAssistants.title.text" keywords="logtech.ourAssistants.title.keywords"
          highlight-class="text-highlighter-gradient" />
      </h2>

      <div class="title-container__information">
        <TextHighlighter text="logtech.ourAssistants.text" keywords="logtech.ourAssistants.keywords" />
      </div>
    </div>
    <div class="slide-container">
      <div class="slide-container__carousel">
        <el-carousel ref="carousel" tigger="click" arrow="never" class="carousel" :autoplay="true" :interval="5000">
          <el-carousel-item v-for="assistant, index in assistants" :key="index">
            <div class="carousel-item">
              <div class="carousel-item__border-top" />
              <div class="carousel-item__content">
                <div class="carousel-item__content--image">
                  <ResponsiveImage :original="assistant.img" :alt="assistant.alt" loading="lazy" width="450"
                    height="450" :large-range="true"/>
                </div>
                <div class="carousel-item__content--text">
                  <div class="carousel-item--title">
                    <TextHighlighter :text="assistant.title.text" :keywords="assistant.title.keywords" />
                  </div>
                  <div class="divider" />
                  <div class="carousel-item--text">
                    <TextHighlighter :text="assistant.text.text" :keywords="assistant.text.keywords" />
                  </div>
                </div>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
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
</script>

<style lang="scss" scoped>
.assistant-mobile {
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  &__title {
    font-size: $mobile-title;

    @media (min-width: 575px) {
      font-size: $mobile-title-md;
    }

    @media (min-width: 650px) {
      font-size: $mobile-title-lg;
    }
  }

  &__information {
    text-align: justify;
    font-weight: 300;
    font-size: $small;
    line-height: normal;


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
}

.carousel-item {
  width: 100%;
  box-shadow: 2px 7px 9px rgba(0, 0, 0, 0.1019607843);
  box-sizing: border-box;

  &__border-top {
    width: 100%;
    height: 5px;
    background-color: $primary-color-dark;
  }

  &__content {
    width: 100%;
    box-sizing: border-box;
    padding-bottom: 20%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    position: relative;

    @media (min-width: 720px) {
      padding-bottom: 10%;
    }

    &--image {
      width: 80%;
      height: auto;

      @media (min-width: 720px) {
        width: 60%;
      }

      picture {
        width: 100%;
        height: auto;
        object-fit: contain;
      }
    }

    &--text {
      width: 85%;
      height: auto;

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 10px;

      position: absolute;
      bottom: 10%;
      left: 5%;

      @media (min-width: 720px) {
        width: 65%;
        bottom: 15%;
      }
    }
  }

  &--title {
    width: 80%;
    text-align: left;
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

.divider {
  @include divider;
  width: 80%;
  border-image: linear-gradient(to right, #6306fc 0%, #24b0b3 100%) 1;
  margin-top: 5px;
  margin-bottom: 5px;

  @media (min-width: 575px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}

:deep() {
  .el-carousel {
    &__container {
      height: 380px;

      @media (min-width: 400px) {
        height: 430px;
      }

      @media (min-width: 450px) {
        height: 480px;
      }

      @media (min-width: 575px) {
        height: 580px;
      }

      @media (min-width: 650px) {
        height: 650px;
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