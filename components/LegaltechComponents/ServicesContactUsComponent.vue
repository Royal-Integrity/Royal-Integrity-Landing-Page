<template>
  <section class="contact-section" :class="content.class">

    <div class="contact-section__image">
      <img src="/images/new_design/legaltech/demostration.svg" alt="demostration" loading="lazy" width="900"
        height="700" />
    </div>

    <div class="contact-section__text">
      <h2 class="contact-section__text--title">
        <TextHighlighter :text="content.title.text" :keywords="content.title.keywords" />
      </h2>

      <button class="contact-section__text--button">
        <NuxtLink to="https://calendar.app.google/f1JUpjECTEy8nt4X9" target="_blank" class="link">
          {{ $t(content.button) }}
        </NuxtLink>
      </button>

      <h2 class="contact-section__text--information">
        <TextHighlighter :text="content.subtitle.text" :keywords="content.subtitle.keywords" />
      </h2>
    </div>
  </section>
</template>

<script setup>
const TextHighlighter = defineAsyncComponent(() => import('../TextHighlighter.vue'));

const content = {
  title: {
    text: 'servicesAction.title.text',
    keywords: 'servicesAction.title.keywords',
  },
  subtitle: {
    text: 'servicesAction.subtitle.text',
    keywords: 'servicesAction.subtitle.keywords',
  },
  button: 'servicesAction.button',
  class: ['background-gray', 'normal-padding'],
};
</script>

<style lang="scss" scoped>
.contact-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: $font-family-royalIntegrity;
  color: $primary-color-dark;
  box-sizing: border-box;
  margin: 10% 0px;

  @media (min-width: 570px) {}

  @media (min-width: 928px) {
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 0;
    position: relative;
  }

  @media (min-width: 1280px) {}

  @media (min-width: 1366px) {}

  @media (min-width: 1600px) {}

  &__image {
    width: 100%;
    height: 100%;

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

    img {
      width: 100%;
      height: auto;
    }
  }

  &__text {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 5%;

    @media (min-width: 928px) {
      width: 60%;
      position: absolute;
      top: 10%;
      right: 0;
    }

    &--title {
      width: 100%;
      font-size: $mobile-title;
      text-align: center;

      @media (min-width: 570px) {
        font-size: $mobile-title-md;
      }

      @media (min-width: 928px) {
        font-size: $mobile-title-lg;
      }

      @media (min-width: 1280px) {
        font-size: $section-title;
      }

      @media (min-width: 1366px) {
        font-size: $small-title;
      }

      @media (min-width: 1600px) {
        font-size: $section-title-lg;
      }
    }

    &--button {
      @include button-gradient;
      font-size: $extra-small;
      height: 50px;
      margin: 0;
    }

    &--information {
      width: 100%;
      font-size: $small;
      text-align: center;

      @media (min-width: 570px) {
        font-size: $body-sm;
      }

      @media (min-width: 928px) {
        font-size: $body;
      }

      @media (min-width: 1280px) {
        font-size: $extra-small-title;
      }

      @media (min-width: 1366px) {
        font-size: $section-subtitle;
      }

      @media (min-width: 1600px) {
        font-size: $section-subtitle;
      }
    }
  }
}

.link {
  @include link-decoration;
  background: $gradient-color;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
