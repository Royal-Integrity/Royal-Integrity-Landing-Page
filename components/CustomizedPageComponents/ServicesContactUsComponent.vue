<template>
  <section class="contact-section" :class="content.class">

    <div class="contact-section__image">
      <img src="/images/new_design/customized/demostration.svg" alt="demostration" loading="lazy" width="900"
        height="700" />
    </div>

    <div class="contact-section__text">
      <h2 class="contact-section__text--title">
        <TextHighlighter :text="content.title.text" :keywords="content.title.keywords" />
      </h2>

      <h2 class="contact-section__text--information">
        <TextHighlighter :text="content.subtitle.text" :keywords="content.subtitle.keywords" />
      </h2>

      <button class="contact-section__text--button">
        <NuxtLink to="https://calendar.app.google/f1JUpjECTEy8nt4X9" target="_blank" class="link">
          {{ $t(content.button) }}
        </NuxtLink>
      </button>
    </div>

  </section>
</template>

<script setup>
const TextHighlighter = defineAsyncComponent(() => import('../TextHighlighter.vue'));

const content = {
  title: {
    text: 'customizedDevelopment.servicesAction.title.text',
    keywords: 'customizedDevelopment.servicesAction.title.keywords',
  },
  subtitle: {
    text: 'customizedDevelopment.servicesAction.subtitle.text',
    keywords: 'customizedDevelopment.servicesAction.subtitle.keywords',
  },
  button: 'customizedDevelopment.servicesAction.button',
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
  gap: 20px;

  font-family: $font-family-royalIntegrity;
  color: $primary-color-dark;

  margin-top: 5%;
  margin-bottom: 5%;

  @media (min-width: 928px) {
    flex-direction: row-reverse;
    justify-content: flex-start;
    position: relative;
  }

  &__image {
    width: 100%;
    height: auto;

    @media (min-width: 750px) {
      width: 80%;
    }

    @media (min-width: 928px) {
      width: 50%;
    }


    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }

  &__text {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media (min-width: 750px) {
      width: 60%;
    }

    @media (min-width: 928px) {
      width: 60%;
      align-items: flex-start;
      position: absolute;
      bottom: 30%;
      left: 3%;
    }

    &--title {
      width: 100%;
      font-size: $mobile-title;
      text-align: center;
      line-height: normal;

      @media (min-width: 570px) {
        font-size: $mobile-title-md;
      }

      @media (min-width: 928px) {
        font-size: $mobile-title-lg;
        text-align: left;
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

    &--information {
      width: 100%;
      font-size: $small;
      text-align: center;

      @media (min-width: 570px) {
        font-size: $body-sm;
      }

      @media (min-width: 928px) {
        font-size: $body;
        text-align: left;
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

    &--button {
      @include button-gradient;
      font-size: $extra-small;
      height: 50px;
      margin: 0;

      @media (min-width: 928px) {
        font-size: $body-sm;
      }

      @media (min-width: 1366px) {
        font-size: $medium;
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
