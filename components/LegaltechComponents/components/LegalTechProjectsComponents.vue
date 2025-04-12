<template>
  <section class="projects-section">

    <div class="title-container">
      <h2 class="title-container__title">
        <TextHighlighter text="legaltech.ourProjects.title.text" keywords="legaltech.ourProjects.title.keywords"
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
          <el-carousel-item v-for="project, index in projects" :key="index">
            <div class="carousel-item">
              <div class="carousel-item__border-top"></div>
              <div class="carousel-item__content">
                <div class="carousel-item__content--text">
                  <div class="carousel-item--title">
                    <TextHighlighter :text="project.title.text" :keywords="project.title.keywords" />
                  </div>
                  <div class="divider" />
                  <div class="carousel-item--text">
                    <TextHighlighter :text="project.text" :keywords="project.keywords" />
                  </div>
                </div>
                <div class="carousel-item__content--image">
                  <!-- <img :src="project.img" :alt="$t(project.alt)" loading="lazy" width="760" height="550"/> -->
                  <ResponsiveImage :original="project.img" :alt="$t(project.alt)" loading="lazy" width="760"
                    height="550" />
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
      <button class="buttons-container__contact">
        <NuxtLink :to="$t('legaltech.ourProjects.buttonOneAction')" target="_blank" class="link__alt">
          {{ $t('legaltech.ourProjects.buttonOne') }}
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
const projects = [
  {
    title: {
      text: 'legaltech.ourProjects.itemOne.title.text',
      keywords: 'legaltech.ourProjects.itemOne.title.keywords',
    },
    text: 'legaltech.ourProjects.itemOne.text',
    keywords: 'legaltech.ourProjects.itemOne.keywords',
    img: '/images/new_design/legaltech/slide_one.webp',
    alt: 'legaltech.ourProjects.itemOne.alt',
  },
  {
    title: {
      text: 'legaltech.ourProjects.itemTwo.title.text',
      keywords: 'legaltech.ourProjects.itemTwo.title.keywords',
    },
    text: 'legaltech.ourProjects.itemTwo.text',
    keywords: 'legaltech.ourProjects.itemTwo.keywords',
    img: '/images/new_design/legaltech/slide_two.webp',
    alt: 'legaltech.ourProjects.itemTwo.alt',
  },
  {
    title: {
      text: 'legaltech.ourProjects.itemThree.title.text',
      keywords: 'legaltech.ourProjects.itemThree.title.keywords',
    },
    text: 'legaltech.ourProjects.itemThree.text',
    keywords: 'legaltech.ourProjects.itemThree.keywords',
    img: '/images/new_design/legaltech/slide_three.webp',
    alt: 'legaltech.ourProjects.itemThree.alt',
  },
  {
    title: {
      text: 'legaltech.ourProjects.itemFour.title.text',
      keywords: 'legaltech.ourProjects.itemFour.title.keywords',
    },
    text: 'legaltech.ourProjects.itemFour.text',
    keywords: 'legaltech.ourProjects.itemFour.keywords',
    img: '/images/new_design/legaltech/slide_four.webp',
    alt: 'legaltech.ourProjects.itemFour.alt',
  },
]

const backSlide = () => {
  carousel.value?.prev();
}

const nextSlide = () => {
  carousel.value?.next();
}

</script>

<style lang="scss" scoped>
.projects-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: $font-family-royalIntegrity;
  color: $primary-color-dark;
  box-sizing: border-box;
  margin-top: 50px;

  @media (max-width: 369px) {
    height: auto;
  }

  @media (min-width: 370px) and (max-width: 574px) {
    height: auto;
  }

  @media (min-width: 575px) and (max-width: 928px) {
    height: 50dvh;
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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-sizing: border-box;
  padding: 10px;

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

.carousel-item {
  background-color: #fff;
  width: 100%;
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

    @media (max-width: 1280px) {
      height: 5px;
    }
  }

  &__content {
    width: 100%;
    height: 550px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 50px;
    box-sizing: border-box;
    padding-left: 6%;
    position: relative;

    @media (min-width: 928px) and (max-width: 1279px) {
      height: 300px;
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

      @media (min-width: 575px) and (max-width: 1800px) {
        gap: 5px;
        width: 60%;
      }
    }

    &--image {
      width: 60%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;

      @media (min-width: 1800px) {
        width: 100%;
      }

      picture {
        width: 80%;
        height: auto;
        object-fit: contain;
      }
    }
  }

  &--title {
    width: 90%;
    font-size: $section-title;
    font-weight: 300;
    line-height: 42px;

    @media (min-width: 928px) and (max-width: 1279px) {
      font-size: $body-lg;
      line-height: 30px;
      width: 100%;
    }

    @media (min-width: 1280px) and (max-width: 1365px) {
      font-size: $extra-small-title;
      line-height: 35px;
      width: 100%;
    }

    @media (min-width: 1366px) and (max-width: 1600px) {
      font-size: $extra-small-title;
      line-height: 35px;
      width: 100%;
    }
  }

  &--text {
    width: 80%;
    font-size: $body-lg;
    line-height: 28px;
    font-weight: 300;
    text-align: justify;
    text-align-last: left;

    @media (min-width: 928px) and (max-width: 1279px) {
      font-size: $body-sm;
      line-height: 20px;
      width: 100%;
    }

    @media (min-width: 1280px) and (max-width: 1365px) {
      font-size: $body-md;
      line-height: 26px;
      width: 95%;
    }

    @media (min-width: 1366px) and (max-width: 1600px) {
      font-size: $body-md;
      line-height: 26px;
      width: 95%;
    }
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
  background-color: $primary-color-dark;
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
