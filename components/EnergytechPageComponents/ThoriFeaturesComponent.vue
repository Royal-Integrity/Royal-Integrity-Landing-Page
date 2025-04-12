<template>
  <section class="features-section">
    <div class="title-container">
      <h2 class="title-container__title">
        <TextHighlighter text="energytech.features.title.text" keywords="energytech.features.title.keywords" />
      </h2>
      <div class="title-container__text">
        <TextHighlighter text="energytech.features.text" keywords="energytech.features.keywords" />
      </div>
    </div>

    <div class="image-container" ref="image">
      <ResponsiveImage original="/images/new_design/energytech/our_platform.webp" alt="our_platform" loading="lazy"
        width="1600" height="700" />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import TextHighlighter from '../TextHighlighter.vue';
import ResponsiveImage from '../ResponsiveImage.vue';

const image = ref(null);
let observer = null;

const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      image.value.classList.add('image-container__visible');
    }
  })
};

onMounted(() => {
  observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5,
  });
  if (image.value) {
    observer.observe(image.value);
  }
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }
})
</script>

<style lang="scss" scoped>
.features-section {
  width: 100%;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  background-color: #fff;
  padding: 2% 0;
  box-sizing: border-box;
  font-family: $font-family-royalIntegrity;
  color: $primary-color-dark;
  position: relative;
}

.title-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  gap: 20px;
  padding: 0px 20px;

  position: absolute;
  bottom: 18%;

  @media(min-width: 651px) {
    width: 55%;
    right: 0;
    bottom: 35%;
    padding: 0;
    padding-right: 20px;
  }

  @media (min-width: 1366px) {
    width: 40%;
    right: 12%;
  }

  @media (min-width: 1600px) {
    width: 45%;
    right: 5%;
  }


  &__title {
    font-size: $mobile-title;
    text-align: center;

    @media (min-width: 570px) {
      font-size: $mobile-title-md;
    }

    @media(min-width: 651px) {
      font-size: $mobile-title-md;
      text-align: left;
    }

    @media (min-width: 928px) {
      font-size: $mobile-title-lg;
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
    font-size: $small;
    line-height: normal;
    text-align: justify;

    @media (min-width: 570px) {
      font-size: $extra-small;
    }

    @media(min-width: 651px) {
      font-size: $body-sm;
    }

    @media (min-width: 928px) {
      font-size: $body;
    }

    @media (min-width: 1280px) {
      font-size: $medium;
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
  width: 100%;
  height: auto;
  opacity: 0;

  &__visible {
    opacity: 1;
    animation: slideInBounce 1s ease-out;
  }

  picture {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
}

.slide-bounce-enter-active {
  animation: slideInBounce 1s ease-out;
}

@keyframes slideInBounce {
  0% {
    transform: translateY(100%);
  }

  70% {
    transform: translateY(-10%);
  }

  90% {
    transform: translateY(5%);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
