<template>
  <section class="hero-section">
    <div class="hero-section__content">
      <div class="title-container">
        <div class="title-container__title">
          <TextHighlighter text="innovationConsulting.hero.title.text"
            keywords="innovationConsulting.hero.title.keywords" />
        </div>
        <div class="title-container__text">
          <TextHighlighter text="innovationConsulting.hero.text" keywords="innovationConsulting.hero.keywords" />
        </div>
      </div>
      <div class="image-container">
        <ResponsiveImage original="/images/new_design/consulting/hero.webp" alt="hero" loading="eager" width="800"
          height="600" />
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
  background-color: #fff;
  background: linear-gradient(0deg, #fff, #009ad6);
  font-family: $font-family-royalIntegrity;
  color: $primary-color-dark;
  margin-bottom: 5%;

  &__content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    box-sizing: border-box;
    padding-top: $navbar-spacing-mobile;
    position: relative;

    @media (min-width: 928px) {
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      /* padding-top: 10%;
      margin-top: ; */
    }
  }
}

.title-container {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 10px 25px;

  @media (min-width: 928px) {
    width: 55%;
    align-items: flex-start;
    position: absolute;
    left: 0;
    top: 30%;
  }

  @media (min-width: 1366px) {
    width: 50%;
    top: 45%;
    left: 3.5%;
    padding: 0;
  }

  @media (min-width: 1450px) {
    width: 40%;
    left: 7%;
  }

  @media (min-width: 1600px) {
    width: 39%;
    top: 40%;
    left: 10%;
  }

  &__title {
    font-weight: 300;
    text-align: center;
    font-size: $mobile-title;

    @media (min-width: 570px) {
      font-size: $mobile-title-md;
    }

    @media (min-width: 600px) {
      font-size: $mobile-title-lg;
    }

    @media (min-width: 928px) {
      text-align: left;
      font-size: $section-title;
    }

    @media (min-width: 1280px) {
      font-size: $small-title;
    }

    @media (min-width: 1366px) {
      font-size: $medium-title;
    }

    @media (min-width: 1600px) {
      font-size: $large-title;
    }
  }

  &__text {
    font-weight: 300;
    text-align: justify;
    font-size: $small;
    line-height: normal;

    @media (min-width: 570px) {
      font-size: $extra-small;
    }

    @media (min-width: 600px) {
      font-size: $body;
    }

    @media (min-width: 928px) {
      font-size: $body;
    }

    @media (min-width: 1280px) {
      font-size: $body-md;
    }

    @media (min-width: 1366px) {
      font-size: $body-md;
    }

    @media (min-width: 1600px) {
      font-size: $body-lg-2;
    }
  }
}

.image-container {
  width: 85%;
  height: auto;

  @media (min-width: 928px) {
    width: 45%;
  }

  @media (min-width: 1600px) {
    width: 40%;
  }

  picture {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
}
</style>
