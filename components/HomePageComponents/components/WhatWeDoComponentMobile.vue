<template>
  <div class="what_we_do_mobile">
    <div class="what_we_do_mobile__image-container">
      <video style="width: 90%; height: 100%; filter: drop-shadow(5px 5px 10px #000);" autoplay loop muted playsinline>
        <source src="/videos/WhatWeDoComponent.mp4" type="video/mp4">
      </video>
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
import TextHighlighter from '~/components/TextHighlighter.vue';
import ResponsiveImage from '~/components/ResponsiveImage.vue';


</script>

<style lang="scss" scoped>
.what_we_do_mobile {
  width: 100%;
  height: 60dvh;
  box-sizing: border-box;
  font-family: $font-family-royalIntegrity;
  color: $primary-color-dark;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  margin-bottom: 5%;

  &__image-container {
    display: flex;
    height: auto;
    position: relative;
    justify-content: center;

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
      bottom: 0%;
    }

    @media (min-width: 570px) {
      bottom: 5%;
    }

    &--title {
      font-size: $mobile-title;
      text-align: center;
      width: 100%;

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
    background: linear-gradient(90deg, #4E4A9E, #F6AF33);
    z-index: -1;
  }
}

.text-highlighter-gradient {
  background: linear-gradient(90deg, #4E4A9E, #F6AF33);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 300;
}
</style>