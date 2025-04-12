<template>
  <section class="hero-section">
    <div class="hero-section__content">
      <div class="image-container">
        <ResponsiveImage
          original="/images/new_design/logtech/hero.webp"
          alt="hero"
          loading="lazy"
          width="500"
          height="500"
        />
      </div>

      <div class="title-container">
        <div class="title-container__title">
          <TextHighlighter text="logtech.hero.title.text" keywords="logtech.hero.title.keywords" />
        </div>
        <div class="title-container__text">
          <TextHighlighter text="logtech.hero.text" keywords="logtech.hero.keywords" />
        </div>
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
  background: linear-gradient(0deg, #fff 50%, $logtech-color);
  font-family: $font-family-royalIntegrity;
  color: $primary-color-dark;
  margin-bottom: 60px;

  &__content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 928px) {
      flex-direction: row-reverse;
      align-items: flex-end;
      justify-content: flex-start;
      position: relative;
    }
  }
}

.image-container {
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media (min-width: 928px) {
    width: 60%;
  }

  @media (min-width: 1280px) {
    width: 55%;
  }

  @media (min-width: 1366px) {
    width: 55%;
  }

  @media (min-width: 1600px) {
    width: 50%;
  }

  picture {
    width: 80%;
    height: auto;
    object-fit: contain;

    @media (min-width: 928px) {
      width: 100%;
    }
  }
}

.title-container {
  width: 100%;
  box-sizing: border-box;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (min-width: 928px) {
    width: 55%;
    align-items: flex-start;
    position: absolute;
    bottom: 10%;
    left: 0;
  }

  @media (min-width: 1280px) {
    width: 45%;
    bottom: 15%;
    left: 5%;
  }

  @media (min-width: 1366px) {
    width: 50%;
    left: 4%;
  }

  @media (min-width: 1600px) {
    width: 45%;
  }


  &__title {
    width: 75%;
    font-weight: 300;
    text-align: center;
    font-size: $mobile-title;

    @media (min-width: 570px) {
      font-size: $mobile-title-md;
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
</style>
