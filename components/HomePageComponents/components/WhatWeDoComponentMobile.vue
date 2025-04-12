<template>
  <div class="what_we_do_mobile">
    <div class="what_we_do_mobile__image-container">
      <ResponsiveImage original="/images/new_design/home/section_2.webp" alt="what_we_do" width="250" height="250"
        loading="lazy" />

      <div class="what_we_do_mobile__image-container--texts">
        <div class="image-text">
          <div v-for="text, index in texts" :key="index" class="image-text__item text-highlighter-gradient" :class="{
            visible: index === currentIndex,
            short: text.split(' ').length === 1,
            short_lg: text.split(' ').length === 1 && text.split('').length > 2,
            medium: text.split(' ').length > 1 && text.split(' ').length <= 2,
            large: text.split(' ').length > 2,
          }">
            {{ text }}
          </div>
        </div>
      </div>
    </div>
    <div class="what_we_do_mobile__text-container">
      <div class="what_we_do_mobile__text-container--title">
        <TextHighlighter text="home.whatwedo.title.text" keywords="home.whatwedo.title.keywords"
          highlightClass="text-highlighter-gradient" />
      </div>
      <div class="divider"></div>
      <div class="what_we_do_mobile__text-container--description">
        <TextHighlighter text="home.whatwedo.description" keywords="home.whatwedo.keywords" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import TextHighlighter from '~/components/TextHighlighter.vue';
import ResponsiveImage from '~/components/ResponsiveImage.vue';

const { locale } = useI18n();

const texts_ = {
  es: [
    "IA",
    "Machine Learning",
    "Deep Learning",
    "OCR",
    "NLP",
    "Visión por computadora",
    "Ciencia y análisis de datos",
    "RPA"
  ],
  en: [
    "IA",
    "Machine Learning",
    "Deep Learning",
    "OCR",
    "NLP",
    "Computer Vision",
    "Data science and analysis",
    "RPA"
  ]
};
const texts = ref([]);
const currentIndex = ref(0);

const changeText = () => {
  currentIndex.value = (currentIndex.value + 1) % texts.value.length;
}

const calculatePositionY = (text) => {
  if (text.split(' ').length === 1) {
    return 25;
  } else if (text.split(' ').length > 2 && text.split(' ').length <= 3) {
    return 26;
  } else if (text.split(' ').length > 3) {
    return 0;
  }
  return 10;
}

onMounted(() => {
  texts.value = locale.value === 'es' ? texts_.es : texts_.en;

  const interval = setInterval(changeText, 2000);
  return () => clearInterval(interval);
})

</script>

<style lang="scss" scoped>
.what_we_do_mobile {
  width: 100%;
  height: 60vh;
  box-sizing: border-box;
  font-family: $font-family-royalIntegrity;
  color: $primary-color-dark;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  position: relative;
  margin-bottom: 5%;

  &__image-container {
    width: 80%;
    height: auto;
    position: relative;

    picture {
      width: 100%;
      height: auto;
      object-fit: contain;
    }

    &--texts {
      box-sizing: border-box;
      padding: 2px;
      position: absolute;
      top: 18%;
      left: 3.5%;

      width: 85px;
      height: 60px;

      @media (min-width: 395px) {
        left: 5%;
        height: 70px;
      }

      @media (min-width: 570px) {
        left: 5%;
        height: 90px;
        width: 115px;
      }
    }
  }

  &__text-container {
    width: 100%;
    height: auto;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    position: absolute;
    bottom: 0;

    @media (min-width: 390px) {
      bottom: 20%;
    }

    @media (min-width: 570px) {
      bottom: 10%;
    }

    &--title {
      font-size: $mobile-title;
      text-align: center;
      width: 90%;

      @media (min-width: 430px) {
        width: 70%;
      }
    }

    &--description {
      font-size: $small;
      line-height: 18px;
      text-align: justify;
      width: 90%;
    }
  }
}


.image-text {
  height: 100%;
  text-align: center;
  line-height: auto;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__item {
    position: absolute;
    opacity: 0;
    transition: opacity 0.1s ease-in-out, transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    height: max-content;

    &.short {
      font-size: $section-title;

      @media (min-width: 570px) {
        font-size: $medium-title;
      }
    }

    &.short_lg {
      font-size: $extra-small-title;

      @media (min-width: 570px) {
        font-size: $small-title;
      }
    }

    &.medium {
      font-size: $extra-small;
      line-height: 18px;

      @media (min-width: 570px) {
        font-size: $body;
        line-height: 24px;
      }
    }

    &.large {
      font-size: 10px;
      line-height: 14px;

      @media (min-width: 570px) {
        font-size: $extra-small;
        line-height: 18px;
      }
    }

    &.visible {
      opacity: 1;
      position: static;
    }
  }
}

.divider {
  width: 70%;
  position: relative;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    top: 80;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #6306fc, #24b0b3);
    z-index: -1;
  }
}

.text-highlighter-gradient {
  background: linear-gradient(90deg, #6306fc, #24b0b3);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 300;
}
</style>