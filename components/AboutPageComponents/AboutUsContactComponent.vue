<template>
  <div class="contact-section">
    <div class="contact-section__information">
      <div class="information-text">
        <TextHighlighter :text="contactUsContent.title.text" :keywords="contactUsContent.title.keywords" />
      </div>
      <div class="button-container">
        <button class="button-container__button">
          <NuxtLink to="https://calendar.app.google/f1JUpjECTEy8nt4X9" target="_blank" class="link">
            {{ $t(contactUsContent.button) }}
          </NuxtLink>
        </button>
      </div>
    </div>
    <div class="contact-section__image">
      <img src="/images/new_design/about_us/section_55.png" alt="image" loading="lazy" width="500" height="500" />
    </div>
  </div>
</template>

<script setup>
const TextHighlighter = defineAsyncComponent(() => import('@/components/TextHighlighter.vue'));

const contactUsContent = {
  title: {
    text: 'about.contactUs.title.text',
    keywords: 'about.contactUs.title.keywords',
  },
  button: 'about.contactUs.button',
};
</script>

<style lang="scss" scoped>
.contact-section {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-family: $font-family-royalIntegrity;
  padding: 0px 5%;
  box-sizing: border-box;

  @media (max-width: 927px) {
    flex-direction: column-reverse;
  }

  @media (min-width: 928px) and (max-width: 1279px) {
    position: relative;
    justify-content: flex-end;
    padding: 0;
  }

  &__information {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

    @media (max-width: 375px) {
      width: 100%;
      align-items: center;
    }

    @media (min-width: 376px) and (max-width: 574px) {
      width: 100%;
      align-items: center;
    }

    @media (min-width: 575px) and (max-width: 927px) {
      width: 100%;
      align-items: center;
    }

    @media (min-width: 928px) and (max-width: 1279px) {
      position: absolute;
      top: 35%;
      left: 3%;
      width: 50%;
    }

    @media (min-width: 1280px) and (max-width: 1365px) {
      width: 50%;
    }

    @media (min-width: 1366px) and (max-width: 1600px) {
      width: 50%;
    }
  }

  &__image {
    width: 60%;

    @media (max-width: 927px) {
      width: 130%;
    }

    @media (min-width: 928px) and (max-width: 1279px) {
      width: 55%;
    }

    @media (min-width: 1280px) and (max-width: 1365px) {
      width: 50%;
    }

    @media (min-width: 1366px) and (max-width: 1600px) {
      width: 50%;
    }

    img {
      max-width: 100%;
      height: auto;
      width: 100%;
      mask-image: linear-gradient(to right,
          transparent 0%,
          black 10%,
          black 100%),
        linear-gradient(to top,
          transparent 0%,
          black 10%,
          black 100%);
      mask-composite: intersect;
    }
  }
}

.information-text {
  width: 100%;
  font-weight: 300;
  font-size: $medium-title;
  color: $primary-color-dark;
  line-height: 64px;

  @media (max-width: 375px) {
    font-size: $mobile-title;
    line-height: normal;
    text-align: center;
  }

  @media (min-width: 376px) and (max-width: 574px) {
    font-size: $mobile-title;
    line-height: normal;
    text-align: center;
  }

  @media (min-width: 575px) and (max-width: 927px) {
    font-size: $mobile-title-lg;
    line-height: normal;
    text-align: center;
  }

  @media (min-width: 928px) and (max-width: 1279px) {
    font-size: $large-sm;
    line-height: 40px;
  }

  @media (min-width: 1280px) and (max-width: 1365px) {
    font-size: $extra-small-title;
    line-height: 40px;
  }

  @media (min-width: 1366px) and (max-width: 1600px) {
    font-size: $small-title;
    line-height: auto;
  }
}

.button-container {
  &__button {
    @include button-gradient;

    @media (max-width: 375px) {
      font-size: $extra-small;
      height: 50px;
    }

    @media (min-width: 376px) and (max-width: 574px) {
      font-size: $extra-small;
      height: 50px;
    }

    @media (min-width: 575px) and (max-width: 927px) {
      font-size: $extra-small;
      height: 50px;
    }

    @media (min-width: 928px) and (max-width: 1279px) {
      font-size: $body;
      height: 50px;
    }

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
:deep .text-highlighter-bold {
        background: linear-gradient(90deg, #4E4A9E, #F6AF33);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 600;
      }
</style>