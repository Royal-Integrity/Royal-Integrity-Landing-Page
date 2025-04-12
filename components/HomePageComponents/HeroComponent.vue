<template>
  <section class="hero-section">
    <ResponsiveImage original="/images/new_design/home/BK4-05-06.webp" alt="hero" loading="eager" width="1920"
      height="1080" class="hero-img" />
    <div class="hero-section__content">
      <div class="hero-section__content__container">
        <div class="hero-section__content__container--left">
          <img class="hero-section__image" src="/public/images/new_design/home/CIRCULOS-3DD.png"
            alt="royalIntegrity Logo" loading="lazy" />
        </div>
        <div class="hero-section__content__container--right">
          <div class="hero-section__content--title">
            <TextHighlighter text="home.hero.title.text" keywords="home.hero.title.keywords" />
          </div>
          <div class="hero-section__content--text">
            <TextHighlighter text="home.hero.text" keywords="home.hero.keywords" />
          </div>
        </div>
      </div>
      <div class="button-container">
        <NuxtLink to="https://www.youtube.com/watch?v=RkhM7PvkZto" target="_blank" class="link">
          <button class="button-container__button">
            {{ $t('home.hero.button') }}
          </button>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import TextHighlighter from '../TextHighlighter.vue';
import ResponsiveImage from '../ResponsiveImage.vue';
</script>

<style lang="scss" scoped>
.hero-section {
  width: 100%;
  box-sizing: border-box;
  font-family: $font-family-royalIntegrity;
  color: $text-light-color;
  background-color: white;
  position: relative;
  box-shadow: 0 20px 60px 0 rgba(0, 0, 0, 0.12);

  &__image {
    width: 400px;
    height: 400px;

    @media (max-width: 369px) {
      visibility: hidden;
    }

    @media (min-width: 370px) and (max-width: 574px) {
      visibility: hidden;
    }

    @media (min-width: 575px) and (max-width: 927px) {
      width: 250px;
      height: 250px;
    }

    @media (min-width: 928px) and (max-width: 1279px) {
      width: 400px;
      height: 400px;
    }
  }

  &__content {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    position: absolute;
    top: 20%;

    @media (max-width: 369px) {
      gap: 0rem;
    }

    @media (min-width: 370px) and (max-width: 574px) {
      gap: 0rem;
    }

    @media (min-width: 575px) and (max-width: 927px) {
      gap: 3rem;
    }

    @media (min-width: 928px) and (max-width: 1279px) {
      gap: 4rem;
    }

    &__container {
      padding: 0 4rem 0 4rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: 369px) {
        width: auto;
      }

      @media (min-width: 370px) and (max-width: 574px) {
        width: auto;
        height: 300px;
      }

      &--left {
        display: flex;
        width: 40%;
        justify-content: flex-end;
        align-items: center;

        @media (max-width: 369px) {
          width: 0%;
          visibility: hidden;
          height: 0px;
        }

        @media (min-width: 370px) and (max-width: 574px) {
          width: 0%;
          visibility: hidden;
        }
      }

      &--right {
        display: flex;
        width: 60%;
        align-items: center;
        flex-direction: column;
        gap: 2rem;

        @media (max-width: 369px) {
          gap: 0rem;
        }

        @media (min-width: 370px) and (max-width: 574px) {
          gap: 0rem;
        }
      }
    }

    &--title {
      width: 100%;
      font-size: $mobile-title;
      text-align: center;
      font-weight: 300;
      line-height: normal;
      text-wrap: balance;
      color: black;

      @media (min-width: 570px) {
        font-size: $mobile-title-lg;
      }

      @media (min-width: 928px) {
        font-size: $medium-title;
        width: 85%;
      }

      @media (min-width: 1280px) {
        font-size: $medium-title;
        width: 70%;
      }

      @media (min-width: 1366px) {
        font-size: $medium-title;
        width: 70%;
      }

      @media (min-width: 1600px) {
        width: 70%;
      }

      :deep .text-highlighter-bold {
        background: linear-gradient(90deg, #4E4A9E, #F6AF33);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 600;
      }
    }

    &--text {
      width: 90%;
      font-size: $small;
      text-align: center;
      font-weight: 300;
      line-height: normal;
      color: #4E4A9E;
      text-align: justify;


      @media (min-width: 570px) {
        font-size: $extra-small;
        width: 85%;
      }

      @media (min-width: 928px) {
        font-size: $body;
        width: 70%;
      }

      @media (min-width: 1280px) {
        font-size: $body;
        width: 70%;
      }

      @media (min-width: 1366px) {
        font-size: $body;
        width: 70%;
      }

      @media (min-width: 1600px) {
        font-size: $body-lg;
        width: 70%;
      }
    }
  }
}

.hero-img {
  width: 100%;
  height: 100%;

  picture {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
}

.button-container {
  &__button {
    @include primary-button-transparent;

    @media (max-width: 369px) {
      height: 50px;
      font-size: $extra-small;
      margin: 0px 0px;
    }

    @media (min-width: 370px) and (max-width: 574px) {
      height: 50px;
      font-size: $extra-small;
      margin: 0px 0px;
    }

    @media (min-width: 575px) and (max-width: 927px) {
      height: 50px;
      font-size: $small;
      margin: 0px 0px;
    }

    @media (min-width: 928px) and (max-width: 1279px) {
      font-size: $body;
      height: 45px;
    }

    @media (min-width: 1280px) and (max-width: 1365px) {}

    @media (min-width: 1366px) and (max-width: 1600px) {}
  }
}

.link {
  text-decoration: none;
  color: $text-quartiary-color;
}
</style>
