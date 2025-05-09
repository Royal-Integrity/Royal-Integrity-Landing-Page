<template>
  <section class="section-two">
    <div class="section-two__text-container">
      <h2 class="section-two__text-container--title">
        <TextHighlighter text="home.whatwedo.title.text" keywords="home.whatwedo.title.keywords"
          highlightClass="text-highlighter-gradient" />
      </h2>
      <div class="divider" />
      <div class="section-two__text-container--description">
        <TextHighlighter text="home.whatwedo.description" keywords="home.whatwedo.keywords" />
      </div>
    </div>
    <div class="section-two__image-container">
      <ResponsiveImage original="/images/new_design/home/LUN-CC2-DG2-ELP.png" alt="royalIntegrity" loading="lazy"
        width="500" height="500" />
    </div>
  </section>
</template>

<script setup>
import TextHighlighter from '~/components/TextHighlighter.vue';
import ResponsiveImage from '~/components/ResponsiveImage.vue';

</script>

<style lang="scss" scoped>
.section-two {
  width: 100%;
  height: auto;
  font-family: $font-family-royalIntegrity;
  color: $primary-color-dark;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  background-image: url('/public/images/new_design/home/BK4-05-06.webp');
  background-repeat: no-repeat;
  background-size: cover;
  mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black 8%,
    black 80%,
    transparent 100%
  );

  @media (max-width: 927px) {}

  @media (min-width: 928px) and (max-width: 1279px) {}

  &__image-container {
    width: 40%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: auto;
      display: block;
    }

    &--texts {
      box-sizing: border-box;
      padding: 2px;
      position: absolute;
      top: 20%;
      left: 5%;
      width: 180px;
      height: 120px;


      @media (min-width: 650px) and (max-width: 927px) {
        width: 65px;
        height: 50px;
      }

      @media (min-width: 928px) and (max-width: 1050px) {
        width: 90px;
        height: 70px;
      }

      @media (min-width: 1051px) and (max-width: 1180px) {
        width: 100px;
        height: 75px;
      }

      @media (min-width: 1181px) and (max-width: 1279px) {
        width: 115px;
        height: 80px;
      }

      @media (min-width: 1280px) and (max-width: 1365px) {
        width: 125px;
        height: 80px;
      }

      @media (min-width: 1366px) and (max-width: 1500px) {
        width: 135px;
        height: 100px;
      }

      @media (min-width: 1501px) and (max-width: 1600px) {
        width: 145px;
        height: 100px;
      }

      @media (min-width: 1601px) and (max-width: 1785px) {
        width: 165px;
        height: 120px;
      }
    }
  }

  &__text-container {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;
    margin-top: 3%;

    @media (min-width: 650px) and (max-width: 927px) {
      width: 55%;
    }

    @media (min-width: 928px) and (max-width: 1279px) {
      width: 55%;
    }

    @media (min-width: 1280px) and (max-width: 1365px) {
      width: 55%;
    }

    @media (min-width: 1366px) and (max-width: 1600px) {
      width: 55%;
    }

    &--title {
      width: 70%;
      font-size: $large-title;
      line-height: auto;
      font-weight: 300;

      @media (min-width: 650px) and (max-width: 927px) {
        font-size: $extra-small-title;
        width: 100%;
      }

      @media (min-width: 928px) and (max-width: 1279px) {
        font-size: $section-subtitle;
        line-height: 40px;
        width: 80%;
      }

      @media (min-width: 1280px) and (max-width: 1365px) {
        font-size: $small-title;
        width: 85%;
      }

      @media (min-width: 1366px) and (max-width: 1600px) {
        font-size: $medium-title;
        width: 85%;
      }
    }

    &--description {
      font-size: $body-lg;
      line-height: 38px;
      font-weight: 300;
      width: 90%;
      text-align: justify;

      @media (min-width: 650px) and (max-width: 927px) {
        font-size: $body-sm;
        line-height: 24px;
        width: 100%;
      }

      @media (min-width: 928px) and (max-width: 1279px) {
        font-size: $body;
        line-height: 28px;
      }

      @media (min-width: 1280px) and (max-width: 1365px) {
        font-size: $body;
        line-height: 28px;
      }

      @media (min-width: 1366px) and (max-width: 1600px) {
        font-size: $body-md;
      }
    }
  }
}

.image-text {
  position: relative;
  height: 100%;
  text-align: center;
  line-height: auto;
  box-sizing: border-box;

  &__item {
    position: absolute;
    opacity: 0;
    transition: opacity 0.1s ease-in-out, transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    height: max-content;

    &.short {
      font-size: $large-extra-title;

      @media (min-width: 650px) and (max-width: 927px) {
        font-size: $extra-small-title;
        transform: translateY(15%) !important;
      }

      @media (min-width: 928px) and (max-width: 1279px) {
        font-size: $small-title;
        transform: translateY(7%) !important;
      }

      @media (min-width: 1280px) and (max-width: 1365px) {
        font-size: $section-title-md;
      }

      @media (min-width: 1366px) and (max-width: 1600px) {
        font-size: $section-title-lg;
      }
    }

    &.short_lg {
      @media (min-width: 650px) and (max-width: 927px) {
        font-size: $body-lg-2;
      }

      @media (min-width: 928px) and (max-width: 1279px) {
        font-size: $large;
        transform: translateY(20%) !important;
      }
    }

    &.medium {
      font-size: $section-subtitle;
      line-height: 45px;

      @media (min-width: 650px) and (max-width: 927px) {
        font-size: $extra-small;
        line-height: 18px;
      }

      @media (min-width: 928px) and (max-width: 1279px) {
        font-size: $body;
        line-height: 22px;
      }

      @media (min-width: 1280px) and (max-width: 1365px) {
        font-size: $body-md;
        line-height: 28px;
      }

      @media (min-width: 1366px) and (max-width: 1600px) {
        font-size: $body-lg-2;
        line-height: 32px;
      }
    }

    &.large {
      font-size: $body-lg;
      line-height: 34px;

      @media (min-width: 650px) and (max-width: 927px) {
        font-size: 9px;
        line-height: 16px;
      }

      @media (min-width: 928px) and (max-width: 1279px) {
        font-size: $extra-small;
        line-height: 18px;
      }

      @media (min-width: 1280px) and (max-width: 1365px) {
        font-size: $body-sm;
        line-height: 22px;
      }

      @media (min-width: 1366px) and (max-width: 1600px) {
        font-size: $body;
        line-height: 24px;
      }

      @media (min-width: 1601px) and (max-width: 1785px) {
        font-size: $medium;
        line-height: auto;
      }
    }

    &.visible {
      opacity: 1;
      position: static;
    }

    @media (min-width: 928px) and (max-width: 1279px) {}

    @media (min-width: 1280px) and (max-width: 1365px) {}

    @media (min-width: 1366px) and (max-width: 1600px) {}
  }
}


.divider {

  width: 50%;
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

:deep .text-highlighter-gradient {
  background: linear-gradient(90deg, #4E4A9E, #F6AF33);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 300;
}
</style>
