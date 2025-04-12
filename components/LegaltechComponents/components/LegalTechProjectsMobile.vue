<template>
  <section class="legaltech-projects-mobile">
    <div class="title-container">
      <h2 class="title-container__title">
        <TextHighlighter text="legaltech.ourProjects.title.text" keywords="legaltech.ourProjects.title.keywords"
          highlight-class="text-highlighter-gradient" />
      </h2>
    </div>

    <div class="slide-container">
      <div class="slide-container__carousel">

        <el-carousel ref="carousel" tigger="click" arrow="never" class="carousel" :autoplay="true" :interval="5000">
          <el-carousel-item v-for="project, index in projects" :key="index">
            <div class="carousel-item">
              <div class="carousel-item__border-top" />
              <div class="carousel-item__content">
                <div class="carousel-item__content--image">
                  <ResponsiveImage :original="project.img" :alt="$t(project.alt)" loading="lazy" width="460"
                    height="350" :large-range="true"/>
                </div>
                <div class="carousel-item__content--text">
                  <div class="carousel-item--title">
                    <TextHighlighter :text="project.title.text" :keywords="project.title.keywords" />
                  </div>
                  <div class="divider" />
                  <div class="carousel-item--text">
                    <TextHighlighter :text="project.text" :keywords="project.keywords" />
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
        <NuxtLink :to="$t('legaltech.ourProjects.buttonOneAction')" target="_blank" class="link__alt">
          {{ $t('legaltech.ourProjects.buttonOne') }}
        </NuxtLink>
      </button>
    </div>

  </section>
</template>

<script setup>
import TextHighlighter from '~/components/TextHighlighter.vue';
import ResponsiveImage from '~/components/ResponsiveImage.vue';

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

</script>

<style lang="scss" scoped>
.legaltech-projects-mobile {
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
  width: 90%;
  text-align: center;
  text-wrap: balance;
  margin-bottom: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  &__title {
    font-size: $mobile-title;
    line-height: normal;

    @media (min-width: 575px) {
      font-size: $mobile-title-md;
    }

    @media (min-width: 650px) {
      font-size: $mobile-title-lg;
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
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    &--image {
      width: 100%;
      height: auto;

      picture {
        width: 100%;
        height: auto;
        object-fit: contain;
      }
    }

    &--text {
      width: 100%;
      height: auto;
      box-sizing: border-box;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 20px 20px;
    }
  }

  &--title {
    text-align: center;
    font-size: $body;
    line-height: normal;

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
  border-width: 1px;
  width: 80%;
  background-color: $primary-color-dark;
  margin-top: 5px;
  margin-bottom: 5px;
}

:deep() {
  .el-carousel {
    &__container {
      height: 480px;

      @media (min-width: 400px) {
        height: 520px;
      }

      @media (min-width: 450px) {
        height: 580px;
      }

      @media (min-width: 575px) {
        height: 640px;
      }

      @media (min-width: 650px) {
        height: 700px;
      }

      @media (min-width: 700px) {
        height: 750px;
      }

      @media (min-width: 820px) {
        height: 800px;
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