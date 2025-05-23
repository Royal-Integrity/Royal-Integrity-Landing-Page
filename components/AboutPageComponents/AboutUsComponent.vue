<template>
  <section class="aboutUs-section" ref="aboutUsSection">
    <div class="aboutUs-section__content">
      <div class="aboutUs-section__text">
        <div class="title-container">
          <h2 class="title-container__title">
            <TextHighlighter text="about.aboutUs.title.text" keywords="about.aboutUs.title.keywords"
              highlightClass="text-highlighter-gradient" />
          </h2>
        </div>
        <div class="divider" />
        <div class="description-container">
          <TextHighlighter :text="images[currentIndex].text" :keywords="images[currentIndex].keywords" />
        </div>
      </div>
      <div class="aboutUs-section__images">
        <div class="aboutUs-section__images--image">
          <img v-for="image, index in images" :key="index" :class="{ 'visible': index === currentIndex }"
            :src="image.image" :alt="$t('about.aboutUs.alt')" loading="lazy" />
        </div>
        <div class="aboutUs-section__images--controller">
          <div class="indicator">{{ currentIndex + 1 }}/6</div>
          <div class="button-container">
            <button class="button-container__btn-back" @click="backImage">
              <Icon name="majesticons:arrow-left" class="btn-icon" />
            </button>
            <button class="button-container__btn-next" @click="nextImage">
              <Icon name="majesticons:arrow-right" class="btn-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import TextHighlighter from '../TextHighlighter.vue';
const currentIndex = ref(0);

const images = [
  {
    image: '/images/new_design/about_us/section_2.webp',
    text: 'about.aboutUs.imageText.imageOne.text',
    keywords: 'about.aboutUs.imageText.imageOne.keywords',
  },
  {
    image: '/images/new_design/about_us/section_2_1.webp',
    text: 'about.aboutUs.imageText.imageTwo.text',
    keywords: 'about.aboutUs.imageText.imageTwo.keywords',
  },
  {
    image: '/images/new_design/about_us/section_2_2.webp',
    text: 'about.aboutUs.imageText.imageThree.text',
    keywords: 'about.aboutUs.imageText.imageThree.keywords',
  },
  {
    image: '/images/new_design/about_us/section_2_3.webp',
    text: 'about.aboutUs.imageText.imageFour.text',
    keywords: 'about.aboutUs.imageText.imageFour.keywords',
  },
  {
    image: '/images/new_design/about_us/section_2_4.webp',
    text: 'about.aboutUs.imageText.imageFive.text',
    keywords: 'about.aboutUs.imageText.imageFive.keywords',
  },
  {
    image: '/images/new_design/about_us/section_2_5.webp',
    text: 'about.aboutUs.imageText.imageSix.text',
    keywords: 'about.aboutUs.imageText.imageSix.keywords',
  },
]
const aboutUsSection = ref(null);
let interval = null;

const nextImage = () => {
  if (currentIndex.value + 1 === images.length) {
    currentIndex.value = 0;
  } else {
    currentIndex.value = currentIndex.value + 1;
  }
}

const backImage = () => {
  if (currentIndex.value > 0) {
    currentIndex.value = currentIndex.value - 1;
  }
}

const autoAdvance = () => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length;
  }, 10000)
}

onMounted(() => {
  autoAdvance();
});

onBeforeUnmount(() => {
  clearInterval(interval)
});
</script>

<style lang="scss" scoped>
.aboutUs-section {
  width: 80%;
  height: 400px;
  font-family: $font-family-royalIntegrity;
  color: $primary-color-dark;
  margin-bottom: 20px;

  @media (max-width: 375px) {
    width: 90%;
    margin-top: 10%;
  }

  @media (min-width: 376px) and (max-width: 574px) {
    width: 90%;
    margin-top: 10%;
  }

  @media (min-width: 575px) and (max-width: 927px) {
    width: 90%;
    height: 450px;
    margin-top: 10%;
  }

  @media (min-width: 928px) and (max-width: 1279px) {
    width: 90%;
    height: 280px;
  }

  @media (min-width: 1280px) and (max-width: 1365px) {
    height: 380px;
  }

  @media (min-width: 1366px) and (max-width: 1600px) {
    height: 380px;
  }

  &__content {
    width: 100%;
    height: 120%;
    border-radius: 30px;
    box-shadow: 0px 4px 14px #00000033;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;


    @media (max-width: 375px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 16px;
      height: 100%;
    }

    @media (min-width: 376px) and (max-width: 574px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 16px;
      height: 100%;
    }

    @media (min-width: 575px) and (max-width: 927px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 16px;
      height: 100%;
    }
  }

  &__text {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: 50px;
    box-sizing: border-box;

    @media (max-width: 375px) {
      align-items: center;
      height: auto;
      padding: 20px;
    }

    @media (min-width: 376px) and (max-width: 574px) {
      align-items: center;
      height: auto;
      padding: 20px;
    }

    @media (min-width: 575px) and (max-width: 927px) {
      align-items: center;
      height: auto;
      padding: 20px;
    }

    @media (min-width: 928px) and (max-width: 1279px) {
      width: 80%;
    }
  }

  &__images {
    width: 100%;
    height: 100%;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    box-shadow: -5px 6px 10px #00000033;
    position: relative;

    @media (max-width: 375px) {
      border-radius: 0;
      box-shadow: none;
      box-shadow: 0px 4px 14.6px rgba(0, 0, 0, 0.05);

    }

    @media (min-width: 376px) and (max-width: 574px) {
      border-radius: 0;
      box-shadow: none;
      box-shadow: 0px 4px 14.6px rgba(0, 0, 0, 0.05);

    }

    @media (min-width: 575px) and (max-width: 927px) {
      border-radius: 0;
      box-shadow: none;
      box-shadow: 0px 4px 14.6px rgba(0, 0, 0, 0.05);
    }


    &--controller {
      width: 100%;
      height: auto;
      display: flex;
      gap: 10px;
      justify-content: center;
      align-items: center;
      margin-top: 15px;
    }

    &--image {
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 0;


      img {
        width: auto;
        height: 100%;
        opacity: 0;
        transition: opacity 0.2s ease-in;
        position: absolute;
        object-fit: contain;
        border-radius: 20px;

        &.visible {
          opacity: 1;
        }
      }

      @media (max-width: 375px) {
        img {
          width: 70%;
          height: auto;
          object-fit: contain;
        }
      }

      @media (min-width: 376px) and (max-width: 574px) {
        img {
          width: 60%;
          height: auto;
          object-fit: contain;
        }
      }

      @media (min-width: 575px) and (max-width: 927px) {
        img {
          width: 40%;
          height: auto;
          object-fit: contain;
        }
      }

      @media (min-width: 928px) and (max-width: 1279px) {
        img {
          width: 90%;
          height: 90%;
        }
      }

      @media (min-width: 1280px) and (max-width: 1365px) {
        img {
          width: 90%;
          height: 90%;
        }
      }

      @media (min-width: 1366px) and (max-width: 1600px) {
        img {
          width: 90%;
          height: 90%;
        }
      }

    }
  }
}

.title-container {
  font-weight: 300;
  line-height: normal;

  &__title {
    font-size: $large-title;

    @media (max-width: 375px) {
      font-size: $mobile-title;
    }

    @media (min-width: 376px) and (max-width: 574px) {
      font-size: $mobile-title-md;
    }

    @media (min-width: 575px) and (max-width: 927px) {
      font-size: $mobile-title-lg;
    }

    @media (min-width: 928px) and (max-width: 1279px) {
      font-size: $section-subtitle;
    }

    @media (min-width: 1280px) and (max-width: 1365px) {
      font-size: $small-title;
    }

    @media (min-width: 1366px) and (max-width: 1600px) {
      font-size: $medium-title;
    }
  }
}

.description-container {
  margin-top: 20px;
  font-size: $body-lg-2;
  line-height: 30px;
  font-weight: 300;
  width: 65%;
  height: auto;

  @media (max-width: 375px) {
    font-size: $small;
    line-height: 16px;
    width: 100%;
    text-align: center;
  }

  @media (min-width: 376px) and (max-width: 574px) {
    font-size: $extra-small;
    line-height: 18px;
    width: 100%;
    text-align: center;
  }

  @media (min-width: 575px) and (max-width: 927px) {
    font-size: $body-sm;
    line-height: 20px;
    width: 100%;
    text-align: center;
  }

  @media (min-width: 928px) and (max-width: 1279px) {
    font-size: $body;
    width: 90%;
  }

  @media (min-width: 1280px) and (max-width: 1365px) {
    font-size: $medium;
    width: 90%;
  }

  @media (min-width: 1366px) and (max-width: 1600px) {
    font-size: $body-md;
    width: 90%;
  }
}

.highlight {
  background: $gradient-color;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
}

.divider {
  @include divider;
  width: 25%;
  border-image: linear-gradient(to right, #4E4A9E 0%, #F6AF33 100%) 1;

  @media (max-width: 375px) {
    width: 65%;
    margin: 0;
  }

  @media (min-width: 376px) and (max-width: 574px) {
    width: 65%;
    margin: 0;
  }

  @media (min-width: 575px) and (max-width: 927px) {
    width: 65%;
    margin: 0;
  }


  @media (min-width: 928px) and (max-width: 1279px) {
    width: 50%;
  }

  @media (min-width: 1280px) and (max-width: 1600px) {
    width: 60%;
  }
}

.button-container {
  display: flex;
  flex-direction: row;
  gap: 10px;

  &__btn-back {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    color: #fff;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: 0px;
    background-color: #6449ac;
    font-size: 26px;

    @media (max-width: 320px) {
      width: 30px;
      height: 30px;
    }

    @media (min-width: 375px) and (max-width: 574px) {
      width: 40px;
      height: 40px;
    }

    @media (min-width: 575px) and (max-width: 927px) {
      width: 50px;
      height: 50px;
    }
  }

  &__btn-next {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    color: #fff;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: 0px;
    background-color: #6449ac;
    font-size: 26px;

    @media (max-width: 320px) {
      width: 30px;
      height: 30px;
    }

    @media (min-width: 375px) and (max-width: 574px) {
      width: 40px;
      height: 40px;
    }

    @media (min-width: 575px) and (max-width: 927px) {
      width: 50px;
      height: 50px;
    }
  }
}

.indicator {
  font-size: $body;

  @media (max-width: 375px) {
    font-size: 10px;
  }

  @media (min-width: 376px) and (max-width: 574px) {
    font-size: 11px;
  }

  @media (min-width: 575px) and (max-width: 927px) {
    font-size: 12px;
  }


  @media (min-width: 575px) and (max-width: 928px) {
    font-size: $extra-small;
  }
}
</style>
