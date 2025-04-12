<template>
  <section class="ourteam-section">
    <div class="title-container">
      <h2 class="title-container__title">
        <TextHighlighter text="about.ourTeam.title.text" keywords="about.ourTeam.title.keywords"
          highlight-class="text-highlighter-gradient" />
      </h2>
    </div>

    <div class="main-container">
      <div class="main-container__photo">
        <ResponsiveImage original="/images/new_design/about_us/our_team.webp" :alt="$t('about.ourTeam.alt')"
          loading="lazy" width="1400" height="550" />
      </div>
      <div class="main-container__information">
        {{ $t('about.ourTeam.textOne') }}
      </div>
      <div class="main-container__information bold">
        {{ $t('about.ourTeam.textThree') }}
      </div>
    </div>
  </section>
</template>

<script setup>
import TextHighlighter from '../TextHighlighter.vue';
import ResponsiveImage from '../ResponsiveImage.vue';
</script>

<style lang="scss" scoped>
.ourteam-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2% 0;
  padding-bottom: 60px;
  font-family: $font-family-royalIntegrity;
  color: $primary-color-dark;
}

.title-container {
  width: 70%;
  display: flex;
  justify-content: center;
  margin-top: 10%;

  @media (max-width: 927px) {
    width: 100%;
  }

  &__title {
    font-size: $large-subtitle;
    font-weight: 300;
    color: $primary-color-dark;
    line-height: normal;

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
      font-size: $medium-subtitle;
    }

    @media (min-width: 1366px) and (max-width: 1600px) {
      font-size: $medium-subtitle;
    }
  }
}

.main-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 927px) {
    gap: 5px;
  }


  &__photo {
    width: 86%;
    height: 550px;
    background-image: url('/images/new_design/about_us/section_3.svg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    @media (max-width: 927px) {
      height: auto;
      width: 100%;

      picture {
        width: 100%;
        height: auto;
      }
    }


    @media (min-width: 928px) and (max-width: 1279px) {
      width: 100%;
      height: 400px;

      picture {
        width: 95%;
      }
    }

    @media (min-width: 1280px) and (max-width: 1365px) {
      width: 100%;
    }

    @media (min-width: 1366px) and (max-width: 1600px) {
      width: 100%;
    }

    img {
      width: 90%;
      height: auto;
    }
  }

  &__information {
    width: 55%;
    font-size: $body-lg;
    text-align: center;
    font-weight: 300;

    @media (max-width: 375px) {
      width: 100%;
      font-size: $small;
      line-height: normal;
      text-align: justify;
      box-sizing: border-box;
      padding: 0px 20px;
    }

    @media (min-width: 376px) and (max-width: 574px) {
      width: 100%;
      font-size: $extra-small;
      line-height: normal;
      text-align: justify;
      box-sizing: border-box;
      padding: 0px 20px;
    }

    @media (min-width: 575px) and (max-width: 927px) {
      width: 100%;
      font-size: $body-sm;
      line-height: normal;
      text-align: justify;
      box-sizing: border-box;
      padding: 0px 20px;
    }

    @media (min-width: 928px) and (max-width: 1279px) {
      font-size: $body;
      width: 80%;
    }

    @media (min-width: 1280px) and (max-width: 1365px) {
      width: 70%;
      font-size: $medium;
    }

    @media (min-width: 1366px) and (max-width: 1600px) {
      font-size: $body-md;
      width: 70%;
    }

    &.bold {
      margin-top: 20px;
      width: 90%;
      font-weight: 600;

      @media (max-width: 375px) {
        width: 100%;
        font-size: $small;
        line-height: normal;
        text-align: justify;
        box-sizing: border-box;
        padding: 0px 20px;
      }

      @media (min-width: 376px) and (max-width: 574px) {
        width: 100%;
        font-size: $extra-small;
        line-height: normal;
        text-align: justify;
        box-sizing: border-box;
        padding: 0px 20px;
      }

      @media (min-width: 575px) and (max-width: 927px) {
        width: 100%;
        font-size: $body-sm;
        line-height: normal;
        text-align: justify;
        box-sizing: border-box;
        padding: 0px 20px;
      }

      @media (min-width: 928px) and (max-width: 1279px) {
        font-size: $body;
        width: 90%;
      }

      @media (min-width: 1280px) and (max-width: 1365px) {
        font-size: $body;
        width: 90%;
      }

      @media (min-width: 1366px) and (max-width: 1600px) {
        width: 90%;
      }
    }
  }
}

.highlight {
  background: $gradient-color;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
}
</style>
