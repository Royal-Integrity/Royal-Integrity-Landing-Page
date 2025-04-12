<template>
  <section class="contact-section" :class="content.class">

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
        <NuxtLink to="https://calendar.app.google/f1JUpjECTEy8nt4X9" target="_blank" class="link">
          {{ $t(content.button) }}
        </NuxtLink>
      </button>
    </div>

  </section>
</template>
<script setup>
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
.contact-section {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
  padding: 10% 0;
  background-color: white;
  background-image: url('/images/new_design/home/section_8.svg');
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: $font-family-royalIntegrity;
  box-sizing: border-box;

  @media (max-width: 375px) {
    gap: 20px;
    background-size: 160%;
    background-position: bottom;
    padding-bottom: 70%;
  }

  @media (min-width: 376px) and (max-width: 574px) {
    gap: 20px;
    background-size: 160%;
    background-position: bottom;
    padding-bottom: 70%
  }

  @media (min-width: 575px) and (max-width: 927px) {
    gap: 20px;
    background-size: 100%;
    background-position: bottom;
    padding-bottom: 70%
  }


  &__content-text {
    color: $primary-color-dark;
    width: 30%;
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
  color: #fff;

  &__alt {
    @include link-decoration;
    color: #fff;
  }
}
</style>
