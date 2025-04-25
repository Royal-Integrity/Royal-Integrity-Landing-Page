<template>
  <section class="ourservices-section">
    <ResponsiveImage original="/images/new_design/home/pigs.png" alt="pigs" loading="lazy" width="1280" height="960"
      class="ourservices-img" />
    <div class="title-container">
      <h2 class="title-container__title">
        <TextHighlighter text="home.ourServices.title.text" keywords="home.ourServices.title.keywords"
          highlightClass="text-highlighter-gradient" />
      </h2>
    </div>

    <div class="divider" />


    <div class="slide-container">
      <div ref="cards" class="cards-container">
        <div class="slide-container__button-left">
          <el-button type="primary" class="btn-nav" @click="backSlide">
            <Icon name="majesticons:arrow-left" class="btn-icon" />
          </el-button>
        </div>
        <div class="slide-container__carousel">
          <el-carousel ref="carousel" tigger="click" arrow="never" class="carousel" :autoplay="false" :interval="5000">
            <el-carousel-item v-for="module, index in  pageContent " :key="index">
              <div class="card">
                <div :class="['slider-card__img', { 'is-grid': module.img && module.img.length >= 3 }]">
                  <template v-for="(imageUrl, imgIndex) in module.img" :key="imgIndex">
                    <img :src="imageUrl" :alt="module.alt || `Imagen ${imgIndex + 1} de ${module.title}`" loading="lazy"
                      class="card-image-item" />
                  </template>
                </div>
                <div class="card__text">
                  <div class="card__text--title">
                    {{ module.title }}
                  </div>
                  <div class="card__text--divider" />
                  <div class="card__text--description">
                    {{ module.text }}
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
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import TextHighlighter from '../TextHighlighter.vue';
import onResize from '@/Extend/onResize';
import ResponsiveImage from '~/components/ResponsiveImage.vue';

const { screenWidth } = onResize();
const { t, locale } = useI18n();

const cards = ref(null);
const carousel = ref(null);
const backSlide = () => {
  carousel.value?.prev();
}

const nextSlide = () => {
  carousel.value?.next();
}
const cardBackground = computed(() => {
  if (screenWidth.value < 928) {
    return "background-mobile";
  }
  return "background-large";
});
const pageContentBase = [
  {
    img: ['/images/services/pig_encamisado_1.png'],
    altKey: 'home.ourServices.services.slides.0.alt',
    titleKey: 'home.ourServices.services.slides.0.title',
    textKey: 'home.ourServices.services.slides.0.text'
  },
  {
    img: ['/images/services/pig_multisize_1.png'],
    altKey: 'home.ourServices.services.slides.1.alt',
    titleKey: 'home.ourServices.services.slides.1.title',
    textKey: 'home.ourServices.services.slides.1.text'
  },
  {
    img: ['/images/services/pig_espuma_1.png', '/images/services/pig_espuma_2.png', '/images/services/pig_espuma_3.png', '/images/services/pig_espuma_4.png'],
    altKey: 'home.ourServices.services.slides.2.alt',
    titleKey: 'home.ourServices.services.slides.2.title',
    textKey: 'home.ourServices.services.slides.2.text'
  },
  {
    img: ['/images/services/pig_mandril_1.png', '/images/services/pig_mandril_2.png', '/images/services/pig_mandril_3.png', '/images/services/pig_mandril_4.png'],
    altKey: 'home.ourServices.services.slides.3.alt',
    titleKey: 'home.ourServices.services.slides.3.title',
    textKey: 'home.ourServices.services.slides.3.text'
  },
  {
    img: ['/images/services/acc_pigs_1.png', '/images/services/acc_pigs_2.png', '/images/services/acc_pigs_3.png', '/images/services/acc_pigs_4.png'],
    altKey: 'home.ourServices.services.slides.4.alt',
    titleKey: 'home.ourServices.services.slides.4.title',
    textKey: 'home.ourServices.services.slides.4.text'
  },
  {
    img: ['/images/services/pig_Hflex_1.png'],
    altKey: 'home.ourServices.services.slides.5.alt',
    titleKey: 'home.ourServices.services.slides.5.title',
    textKey: 'home.ourServices.services.slides.5.text'
  },
  {
    img: ['/images/services/pig_Discflex_1.png', '/images/services/pig_Discflex_2.png', '/images/services/pig_Discflex_3.png'],
    altKey: 'home.ourServices.services.slides.6.alt',
    titleKey: 'home.ourServices.services.slides.6.title',
    textKey: 'home.ourServices.services.slides.6.text'
  },
  {
    img: ['/images/services/pig_valePig_1.png'],
    altKey: 'home.ourServices.services.slides.7.alt',
    titleKey: 'home.ourServices.services.slides.7.title',
    textKey: 'home.ourServices.services.slides.7.text'
  },
  {
    img: ['/images/services/acc_pigs_5.png', '/images/services/acc_pigs_6.png', '/images/services/acc_pigs_7.png', '/images/services/acc_pigs_8.png'],
    altKey: 'home.ourServices.services.slides.8.alt',
    titleKey: 'home.ourServices.services.slides.8.title',
    textKey: 'home.ourServices.services.slides.8.text'
  },
  {
    img: ['/images/services/pig_PressurePlug_1.png'],
    altKey: 'home.ourServices.services.slides.9.alt',
    titleKey: 'home.ourServices.services.slides.9.title',
    textKey: 'home.ourServices.services.slides.9.text'
  },
  {
    img: ['/images/services/pig_Plug_1.png'],
    altKey: 'home.ourServices.services.slides.10.alt',
    titleKey: 'home.ourServices.services.slides.10.title',
    textKey: 'home.ourServices.services.slides.10.text'
  },
  {
    img: ['/images/services/pig_Bloqueadores_Flujo_Temp._1.png'],
    altKey: 'home.ourServices.services.slides.11.alt',
    titleKey: 'home.ourServices.services.slides.11.title',
    textKey: 'home.ourServices.services.slides.11.text'
  },
  {
    img: ['/images/services/valvula_argus_1.png'],
    altKey: 'home.ourServices.services.slides.12.alt',
    titleKey: 'home.ourServices.services.slides.12.title',
    textKey: 'home.ourServices.services.slides.12.text'
  },
  {
    img: ['/images/services/pig_dataLogger_1.png'],
    altKey: 'home.ourServices.services.slides.13.alt',
    titleKey: 'home.ourServices.services.slides.13.title',
    textKey: 'home.ourServices.services.slides.13.text'
  },
  {
    img: ['/images/services/ILI_1.png'],
    altKey: 'home.ourServices.services.slides.14.alt',
    titleKey: 'home.ourServices.services.slides.14.title',
    textKey: 'home.ourServices.services.slides.14.text'
  },
  {
    img: ['/images/services/acquarius_1.png'],
    altKey: 'home.ourServices.services.slides.15.alt',
    titleKey: 'home.ourServices.services.slides.15.title',
    textKey: 'home.ourServices.services.slides.15.text'
  },
];
const pageContent = computed(() => {
  return pageContentBase.map(item => ({
    ...item,
    alt: t(item.altKey),
    title: t(item.titleKey),
    text: t(item.textKey)
  }));
});
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        cards.value.classList.add('cards-container--visible')
      }
    })
  });

  observer.observe(cards.value);
});

</script>

<style lang="scss" scoped>
.ourservices-img {
  width: 100%;
  height: 100%;
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
    width: 50%;
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

.slider-card {

  &__img.is-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto;
  }
}

.card {
  background-image: url('/public/images/new_design/home/BK4-05-06.webp');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 12px;
  overflow: hidden;
  width: 70%;
  height: 90%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08),
    0 10px 20px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 0 10px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (min-width: 650px) {
    min-width: 300px;
  }

  @media (min-width: 928px) {
    min-width: 320px;
  }

  @media (min-width: 1280px) {
    min-width: 350px;
  }

  @media (min-width: 1366px) {
    min-width: 350px;
  }

  @media (min-width: 1600px) {
    min-width: 400px;
  }

  &__text {
    width: 100%;
    height: 80px;
    box-sizing: border-box;
    padding: 30px 30px;
    background-color: #4e4a9edb;
    color: #fff;
    position: absolute;
    bottom: 0;
    transition: height 0.3s ease-in;
    height: 20%;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media (min-width: 928px) {
      padding: 15px 20px;
    }

    @media (min-width: 1280px) {
      padding: 20px;
    }

    @media (min-width: 1600px) {
    }

    &--title {
      font-size: $extra-small;
      line-height: 18px;

      @media (min-width: 570px) {
        font-size: $body-sm;
      }

      @media (min-width: 928px) {
        font-size: $medium;
        line-height: 22px;
      }

      @media (min-width: 1280px) {
        font-size: $medium;
        line-height: 22px;
      }

      @media (min-width: 1366px) {
        font-size: $body-md;
        line-height: 26px;
      }

      @media (min-width: 1600px) {
        font-size: $extra-small-title;
        line-height: 38px;
      }
    }

    &--divider {
      width: 100%;
      border: 1px solid #fff;
      margin: 10px 0px;
      opacity: 0;
      display: none;
    }

    &--description {
      font-size: $small;
      line-height: normal;
      opacity: 0;
      display: none;
      text-align: justify;

      @media (min-width: 570px) {
        font-size: $extra-small;
      }

      @media (min-width: 928px) {
        font-size: $body-sm;
      }

      @media (min-width: 1280px) {
        font-size: $body;
      }

      @media (min-width: 1366px) {
        font-size: $body-md;
      }

      @media (min-width: 1600px) {
        font-size: $body-lg-2;
      }
    }
  }

  &__image-complement {
    z-index: 2;
    position: absolute;
    bottom: 25%;
    right: 2%;
    width: 20%;
    height: auto;

    transition: bottom 0.2s ease;
  }

  &:hover {
    .card {
      &__image {
        opacity: 0;
      }

      &__text {
        height: 100%;

        &--divider {
          opacity: 1;
          display: block;
        }

        &--description {
          opacity: 1;
          display: block;
        }
      }

      &__image-complement {
        @media (min-width: 928px) {
          /* bottom: 0%; */
        }
      }
    }
  }
}

.slider-card__img:is(.is-grid) .card-image-item {
  width: 200px;
  height: 100px;
}

.slider-card__img:not(.is-grid) .card-image-item {
  width: 400px;
  height: 300px;
}

.slider-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1),
    0 15px 30px rgba(0, 0, 0, 0.08);
}

.card-image {
  display: block;
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}


.ourservices-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-sizing: border-box;
  font-family: $font-family-royalIntegrity;
  color: $primary-color-dark;
  position: relative;
}

.title-container {
  width: 100%;
  text-align: center;
  position: absolute;
  top: 15%;

  &__title {
    font-size: $mobile-title;
    font-weight: 300;
    line-height: normal;

    @media (min-width: 575px) {
      font-size: $mobile-title-md;
    }

    @media (min-width: 928px) {
      font-size: $section-subtitle;
    }

    @media (min-width: 1280px) {
      font-size: $section-title;
    }
  }
}

.divider {
  @include divider-gradient;
  width: 60%;
  margin-top: 10px;
  margin-bottom: 10px;
  position: absolute;
  top: 20%;

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

.cards-container {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 0px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 20px;
  margin-top: 30px;
  position: absolute;
  top: 20%;

  //TRANSITION
  opacity: 0;
  transform: translateY(50px);
  transition: transform 0.8s ease-out, opacity 0.8s ease-out;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 1700px) {
    justify-content: center;
    gap: 30px;
  }

  &--visible {
    opacity: 1;
    transform: translateY(0);
  }
}

.first-title {
  color: $secondary-color;
}

.second-title {
  color: $primary-color-highlight;
}

.three-title {
  color: $quintiary-color;
}

.four-title {
  color: $tertiary-color;
}

.btn-nav {
  background-color: #fff;
  border: 0;
  font-size: $body-lg-2;
  padding: 20px 10px;
  color: $primary-color-dark;
  box-shadow: 0px 10px 15px #0000001A;
  width: 50px;
  height: 50px;
  border-radius: 100%;
}

:deep {
  .text-highlighter-gradient {
    background: linear-gradient(90deg, #4E4A9E, #F6AF33);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 300;

  }

  .responsive-img {
    opacity: 0.3;
  }

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
      display: flex;
      justify-content: center;

      @media (min-width: 370px) and (max-width: 574px) {
        padding: 0px 5px;
      }
    }

    &__button {
      width: 40px;
      border-radius: 10px;
    }

    &__indicators--horizontal {
      width: 100%;
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
