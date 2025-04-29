<template>
  <section class="contact-section" :class="content.class">
    <ResponsiveImage original="/images/new_design/home/preview (2).svg" alt="footerImg" loading="lazy" width="1280"
      height="500" class="contact-section-img" />
    <div class="section-container">
      <div class="title-container">
        <h2 class="title-container__title">
          <TextHighlighter :text="content.title.text" :keywords="content.title.keywords" />
        </h2>
      </div>

      <div class="contact-section__content-text">
        <TextHighlighter :text="content.text" :keywords="content.keywords" />
      </div>

      <div class="button-container">
        <button class="button-container__button">
          <NuxtLink to="https://calendar.app.google/ZNoeLdnSzxFSthCLA" target="_blank" class="link">
            {{ $t(content.button) }}
          </NuxtLink>
        </button>
      </div>
    </div>

  </section>
</template>
<script setup>
import ResponsiveImage from '~/components/ResponsiveImage.vue';
const TextHighlighter = defineAsyncComponent(() => import('./TextHighlighter.vue'));
const content = {
  title: {
    text: 'home.contactUsHome.title.text',
    keywords: 'home.contactUsHome.title.keywords'
  },
  text: 'home.contactUsHome.text',
  keywords: "home.contactUsHome.keywords",
  button: 'home.contactUsHome.button',
};
</script>

<style lang="scss" scoped>
.section-container {
  width: 100%;
  height: 70%;
  text-align: center;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 320px) {
    height: 100%;
padding: 20px
  }
}

.contact-section-img {
  width: 100%;
  height: 100%;
  opacity: 0.3;
}

.contact-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  color: #1f2846;
  position: relative;


  @media (max-width: 375px) {
    gap: 20px;
    background-position: bottom;

  }

  @media (min-width: 376px) and (max-width: 574px) {
    gap: 20px;
    background-position: bottom;

  }

  @media (min-width: 575px) and (max-width: 927px) {
    gap: 20px;
    background-position: bottom;

  }


  &__content-text {
    color: $primary-color-dark;
    width: 50%;
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 33px;
    line-height: 35px;
    font-weight: 300;

    @media (max-width: 375px) {
      font-size: $small;
      line-height: 16px;
      width: 80%;
    }

    @media (min-width: 376px) and (max-width: 574px) {
      font-size: $extra-small;
      line-height: 18px;
      width: 80%;
    }

    @media (min-width: 575px) and (max-width: 927px) {
      font-size: $body-sm;
      line-height: 20px;
      width: 80%;
    }

    @media (min-width: 928px) and (max-width: 1279px) {
      font-size: $medium;
      line-height: 24px;
      width: 50%;
    }

    @media (min-width: 1280px) and (max-width: 1365px) {
      font-size: $body-lg;
      width: 35%;
      line-height: auto;
    }

    @media (min-width: 1366px) and (max-width: 1600px) {
      font-size: $body-lg-2;
      width: 35%;
    }
  }
}

.title-container {
  width: 65%;
  display: flex;
  justify-content: center;

  @media (max-width: 375px) {
    width: 100%;
  }

  @media (min-width: 376px) and (max-width: 574px) {
    width: 100%;
  }

  @media (min-width: 575px) and (max-width: 927px) {
    width: 95%;
  }

  @media (min-width: 928px) and (max-width: 1279px) {
    width: 90%;
  }

  @media (min-width: 1280px) and (max-width: 1365px) {
    width: 80%;
  }

  @media (min-width: 1366px) and (max-width: 1600px) {
    width: 80%;
  }

  &__title {
    font-size: $large-title;
    font-weight: 300;
    color: $primary-color-dark;
    line-height: 74px;
    text-align: center;

    span {
      font-weight: bold;
    }

    @media (max-width: 375px) {
      font-size: $mobile-title;
      line-height: 30px;
    }

    @media (min-width: 376px) and (max-width: 574px) {
      font-size: $mobile-title-md;
      line-height: 36px;
    }

    @media (min-width: 575px) and (max-width: 927px) {
      font-size: $mobile-title-lg;
      line-height: 40px;
    }

    @media (min-width: 928px) and (max-width: 1279px) {
      font-size: $small-title;
      line-height: 55px;
    }

    @media (min-width: 1280px) and (max-width: 1365px) {
      font-size: $medium-title;
    }

    @media (min-width: 1366px) and (max-width: 1600px) {
      font-size: $medium-title;
      line-height: auto;
    }
  }
}


.button-container {
  &__button {
    @include primary-button-transparent;

    @media (max-width: 369px) {
      font-size: $small;
      height: 50px;
    }

    @media (min-width: 370px) and (max-width: 927px) {
      font-size: $small;
      height: 50px;
    }

    @media (min-width: 928px) and (max-width: 1279px) {
      height: 50px;
      font-size: $body;
    }
  }
}

.link {
  @include link-decoration;
  color: #4E4A9E;

  &__alt {
    @include link-decoration;
    color: #4E4A9E;
  }
}
</style>
