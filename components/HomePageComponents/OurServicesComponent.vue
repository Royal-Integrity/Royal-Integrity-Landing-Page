<template>
  <section class="ourservices-section">
    <div class="title-container">
      <h2 class="title-container__title">
        <TextHighlighter text="home.ourServices.title.text" keywords="home.ourServices.title.keywords"
          highlightClass="text-highlighter-gradient" />
      </h2>
    </div>

    <div class="divider" />

    <div ref="cards" class="cards-container">

      <div class="cards-container__card" :class="cardBackground">
        <div class="cards-container__card--icon">
          <img src="/images/new_design/home/section_four_energy.svg" alt="energy" loading="lazy" width="120"
            height="120" />
        </div>
        <div class="cards-container__card--title first-title">
          {{ $t('home.ourServices.services.energytech.title') }}
        </div>
        <div class="cards-container__card--description">
          {{ $t('home.ourServices.services.energytech.text') }}
        </div>
      </div>

      <div class="cards-container__card" :class="cardBackground">
        <div class="cards-container__card--icon">
          <img src="/images/new_design/home/section_four_log.svg" alt="logtech" loading="lazy" width="120"
            height="120" />
        </div>
        <div class="cards-container__card--title second-title">
          {{ $t('home.ourServices.services.logtech.title') }}
        </div>
        <div class="cards-container__card--description">
          {{ $t('home.ourServices.services.logtech.text') }}
        </div>
      </div>

      <div class="cards-container__card" :class="cardBackground">
        <div class="cards-container__card--icon">
          <img src="/images/new_design/home/section_four_legal.svg" alt="legaltech" loading="lazy" width="120"
            height="120" />
        </div>
        <div class="cards-container__card--title three-title">
          {{ $t('home.ourServices.services.legaltech.title') }}
        </div>
        <div class="cards-container__card--description">
          {{ $t('home.ourServices.services.legaltech.text') }}
        </div>
      </div>

      <div class="cards-container__card" :class="cardBackground">
        <div class="cards-container__card--icon icon-lg">
          <img src="/images/new_design/home/section_four_dev.svg" alt="dev" loading="lazy" width="120" height="120" />
        </div>
        <div class="cards-container__card--title four-title">
          {{ $t('home.ourServices.services.customService.title') }}
        </div>
        <div class="cards-container__card--description">
          {{ $t('home.ourServices.services.customService.textOne') }}
        </div>
        <div class="cards-container__card--description">
          {{ $t('home.ourServices.services.customService.textTwo') }}
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import TextHighlighter from '../TextHighlighter.vue';
import onResize from '@/Extend/onResize';

const { screenWidth } = onResize();

const cards = ref(null);

const cardBackground = computed(() => {
  if (screenWidth.value < 928) {
    return "background-mobile";
  }
  return "background-large";
});

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        cards.value.classList.add('cards-container--visible')
      }
    })
  });

  observer.observe(cards.value);
});

</script>

<style lang="scss" scoped>
.ourservices-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-sizing: border-box;
  font-family: $font-family-royalIntegrity;
  color: $primary-color-dark;
  margin: 5% 0;
}

.title-container {
  width: 100%;
  text-align: center;

  &__title {
    font-size: $mobile-title;
    font-weight: 300;
    line-height: normal;

    @media (min-width: 575px) {
      font-size: $mobile-title-md;
    }

    @media (min-width: 928px) {
      font-size: $section-subtitle;
    }

    @media (min-width: 1280px) {
      font-size: $section-title;
    }
  }
}

.divider {
  @include divider-gradient;
  width: 60%;
  margin-top: 10px;
  margin-bottom: 10px;

  @media (min-width: 575px) {
    width: 50%;
  }

  @media (min-width: 650px) {
    width: 40%;
  }

  @media (min-width: 928px) {
    width: 30%;
  }

  @media (min-width: 1366px) {
    width: 20%;
  }
}

.cards-container {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 0px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 20px;
  margin-top: 30px;

  //TRANSITION
  opacity: 0;
  transform: translateY(50px);
  transition: transform 0.8s ease-out, opacity 0.8s ease-out;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 1700px) {
    justify-content: center;
    gap: 30px;
  }

  &--visible {
    opacity: 1;
    transform: translateY(0);
  }

  &__card {
    min-width: 280px;
    height: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    text-align: center;
    box-sizing: border-box;
    position: relative;
    padding-top: 7%;
    padding-right: 2%;

    @media (min-width: 450px) {
      padding-top: 5%;
    }

    @media (min-width: 650px) {
      padding-top: 3%;
      min-width: 320px;
      height: 370px;
      gap: 20px;
    }

    @media (min-width: 928px) {
      padding-right: 1%;
      min-width: 360px;
      height: 540px;
      gap: 25px;
    }

    @media (min-width: 1500px) {
      min-width: 400px;
      padding-right: 1%;
      height: 600px;
      max-width: 420px;
    }

    @media (min-width: 1700px) {
      height: 600px;
      min-width: 400px;
      max-width: 400px;
    }

    &.background-large {
      background-image: url('/images/new_design/home/section_four_card.svg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: initial;
    }

    &.background-mobile {
      background-image: url('/images/new_design/home/res_mobile/section_four_card.svg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: initial;
    }

    &--icon {
      z-index: 1;
      width: 100%;
      height: auto;

      img {
        width: 20%;
        height: auto;
        object-fit: contain;
      }

      &.icon-lg {
        img {
          width: 16%;
        }
      }
    }

    &--title {
      z-index: 1;
      font-weight: 600;
      font-size: $body-lg;
      text-wrap: balance;
      width: 80%;

      @media (min-width: 928px) {
        font-size: $extra-small-title;
      }
    }

    &--description {
      z-index: 1;
      width: 80%;
      font-size: $small;
      line-height: normal;
      text-align: center;
      text-wrap: balance;

      @media (min-width: 928px) {
        font-size: $body;
      }
    }
  }
}

.first-title {
  color: $secondary-color;
}

.second-title {
  color: $primary-color-highlight;
}

.three-title {
  color: $quintiary-color;
}

.four-title {
  color: $tertiary-color;
}
</style>
