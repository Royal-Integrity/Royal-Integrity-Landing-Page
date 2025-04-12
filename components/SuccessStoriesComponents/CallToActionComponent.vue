<template>
  <section class="action-section">
    <ResponsiveImage original="/images/new_design/stories/section_9.webp" alt="footer_section" loading="lazy"
      width="500" height="500" class="footer-img" />
    <div class="action-section__content">
      <div class="action-section__content--title">
        <TextHighlighter text="successStories.callToAction.title.text"
          keywords="successStories.callToAction.title.keywords" />
      </div>
      <div class="action-section__content--button">
        <button class="button-action">
          <NuxtLink to="https://calendar.app.google/f1JUpjECTEy8nt4X9" target="_blank" class="link">
            {{ $t('successStories.callToAction.button') }}
          </NuxtLink>
        </button>
      </div>
      <div class="action-section__content--text">
        <TextHighlighter text="successStories.callToAction.text" keywords="successStories.callToAction.keywords" />
      </div>
    </div>
  </section>
</template>

<script setup>
const TextHighlighter = defineAsyncComponent(() => import('../TextHighlighter.vue'));
const ResponsiveImage = defineAsyncComponent(() => import('../ResponsiveImage.vue'));
</script>

<style lang="scss" scoped>
.action-section {
  width: 100%;
  height: auto;
  position: relative;
  color: $primary-color-dark;
  font-family: $font-family-royalIntegrity;
  margin-top: 5%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  padding-top: 40px;

  @media (max-width: 927px) {
    flex-direction: column-reverse;
    padding-top: 0;
  }

  @media (min-width: 928px) and (max-width: 1600px) {
    padding-top: 10%;
  }

  &__content {
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;

    @media (max-width: 375px) {
      position: static;
    }

    @media (min-width: 376px) and (max-width: 574px) {
      position: static;
    }

    @media (min-width: 575px) and (max-width: 927px) {
      position: static;
    }

    @media (min-width: 928px) and (max-width: 1279px) {
      gap: 0px;
    }

    @media (min-width: 1280px) and (max-width: 1365px) {
      gap: 10px;
    }

    @media (min-width: 1366px) and (max-width: 1600px) {
      gap: 10px;
    }

    &--title {
      font-size: $medium-title;
      line-height: 65px;
      width: 50%;
      text-align: center;

      @media (max-width: 375px) {
        width: 90%;
        font-size: $mobile-title;
        line-height: normal;
      }

      @media (min-width: 376px) and (max-width: 574px) {
        width: 90%;
        font-size: $mobile-title;
        line-height: normal;
      }

      @media (min-width: 575px) and (max-width: 927px) {
        width: 80%;
        font-size: $mobile-title-lg;
        line-height: normal;
      }

      @media (min-width: 928px) and (max-width: 1279px) {
        font-size: $small-title;
        line-height: 50px;
        width: 90%;
      }

      @media (min-width: 1280px) and (max-width: 1365px) {
        width: 65%;
      }

      @media (min-width: 1366px) and (max-width: 1600px) {
        width: 65%;
      }
    }

    &--text {
      font-size: $extra-small-title;
      text-align: center;
      width: 50%;
      text-align: center;

      @media (max-width: 375px) {
        width: 90%;
        font-size: $small;
      }

      @media (min-width: 376px) and (max-width: 574px) {
        width: 90%;
        font-size: $body-sm;
      }

      @media (min-width: 575px) and (max-width: 927px) {
        width: 90%;
        font-size: $body;
      }

      @media (min-width: 928px) and (max-width: 1279px) {
        font-size: $medium;
      }
    }

    &--button {
      & .button-action {
        @include button-gradient;

        @media (max-width: 369px) {
          font-size: $small;
          height: 50px;
          margin: 10px;
          padding: 0px 15px;
        }

        @media (min-width: 370px) and (max-width: 574px) {
          font-size: $small;
          height: 50px;
          margin: 10px;
          padding: 0px 15px;
        }

        @media (min-width: 928px) and (max-width: 1279px) {
          font-size: $body;
          height: 50px;
        }
      }
    }
  }
}

.footer-img {
  width: 100%;
  height: auto;

  img {
    width: 100%;
    height: auto;
  }
}

.link {
  @include link-decoration;
  background: $gradient-color;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  &__alt {
    @include link-decoration;
    color: #fff;
  }
}
</style>
