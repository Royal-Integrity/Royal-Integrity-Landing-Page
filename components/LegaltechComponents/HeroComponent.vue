<template>
  <section class="hero-section">
    <div class="hero-section__content">
      <div class="title-container">
        <div class="title-container__title">
          <TextHighlighter text="legaltech.hero.title.text" keywords="legaltech.hero.title.keywords" />
        </div>
        <div class="title-container__text">
          <TextHighlighter text="legaltech.hero.text" keywords="legaltech.hero.keywords" />
        </div>
      </div>
      <div class="image-container">
        <ResponsiveImage
          original="/images/new_design/legaltech/hero.webp"
          alt="hero"
          loading="eager"
          :large-range="true"
          width="500"
          height="400"
        />
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
  background: linear-gradient(0deg, #fff 75%, $legaltech-color);
  font-family: $font-family-royalIntegrity;
  color: $primary-color-dark;

  @media (min-width: 600px) {
    background: linear-gradient(0deg, #fff 80%, $legaltech-color);
  }

  @media (min-width: 928px) {
    background: linear-gradient(0deg, #fff 50%, $legaltech-color);
  }

  &__content {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    position: relative;
    margin-top: $navbar-spacing-mobile;

    @media (min-width: 600px) {
      margin-top: calc($navbar-spacing-mobile + 5%);
    }

    @media (min-width: 928px) {
      flex-direction: row;
      margin-top: 0;
      justify-content: flex-end;
    }

    @media (min-width: 1280px) {}

    @media (min-width: 1366px) {}

    @media (min-width: 1600px) {}
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

  position: absolute;
  top: 0;

  @media (min-width: 600px) {
    padding: 10px 40px;
  }

  @media (min-width: 928px) {
    width: 60%;
    align-items: flex-start;
    justify-content: flex-start;
    top: 35%;
    left: 0;
  }

  @media (min-width: 1280px) {
    width: 55%;
  }

  @media (min-width: 1600px) {
    width: 50%;
    top: 40%;
    left: 5%;
  }

  &__title {
    font-weight: 300;
    text-align: center;
    font-size: $mobile-title;

    @media (min-width: 570px) {
      font-size: $mobile-title-md;
    }

    @media (min-width: 600px) {
      width: 80%;
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
      width: 95%;
      font-size: $body;
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

.image-container {
  width: 85%;
  height: 100%;
  margin-top: 10%;

  @media (min-width: 600px) {
    width: 75%;
  }

  @media (min-width: 750px) {
    width: 65%;
  }

  @media (min-width: 928px) {
    width: 48%;
    margin-top: 0;
  }

  @media (min-width: 1600px) {
    width: 45%;
  }

  picture {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
}
</style>
