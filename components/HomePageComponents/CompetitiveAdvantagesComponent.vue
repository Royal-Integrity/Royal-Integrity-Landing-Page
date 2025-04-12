<template>
  <section id="container" class="advantages-section">
    <div class="title-container">
      <h2 class="title-container__title">
        <TextHighlighter text="home.advantages.title.text" keywords="home.advantages.title.keywords"
          highlightClass="text-highlighter-gradient" />
      </h2>
      <div class="divider" />
    </div>

    <div class="advantages-section__container">
      <div class="advantage" v-for="advantage, index in advantages" :key="index">
        <div class="advantage__image">
          <img :src="advantage.img" :alt="$t(advantage.alt)" :class="advantage.class" loading="lazy" width="300"
            height="300" />
        </div>
        <div class="advantage__text">
          {{ $t(advantage.text) }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import TextHighlighter from '@/components/TextHighlighter.vue';

const advantages = [
  {
    img: '/images/new_design/home/section_five_advantages_01.svg',
    text: 'home.advantages.cardOne',
    alt: 'home.advantages.cardOneAlt',
    class: "image-sm",
  },
  {
    img: '/images/new_design/home/section_five_advantages_02.svg',
    text: 'home.advantages.cardTwo',
    alt: 'home.advantages.cardTwoAlt',
  },
  {
    img: '/images/new_design/home/section_five_advantages_03.svg',
    text: 'home.advantages.cardThree',
    alt: 'home.advantages.cardThreeAlt',
  },
];
</script>

<style lang="scss" scoped>
.advantages-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding-bottom: 5%;
  font-family: $font-family-royalIntegrity;

  &__container {
    height: 100%;
    margin-top: 2%;
    padding: 20px 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 40px;

    @media (max-width: 927px) {
      gap: 30px;
      flex-wrap: wrap;
    }
  }
}

.advantage {
  max-width: 30%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;

  @media (max-width: 375px) {
    max-width: 90%;
  }

  @media (min-width: 376px) and (max-width: 574px) {
    max-width: 90%;
  }

  @media (min-width: 575px) and (max-width: 927px) {
    max-width: 60%;
  }


  &__image {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 80%;
    }

    .image-sm {
      width: 80%;
    }
  }

  &__text {
    font-size: $body-lg;
    font-weight: 300;
    line-height: auto;
    width: 65%;
    text-align: center;

    @media (max-width: 375px) {
      width: 100%;
      font-size: $small;
      line-height: 16px;
    }

    @media (min-width: 376px) and (max-width: 574px) {
      width: 100%;
      font-size: $small;
      line-height: 16px;
    }

    @media (min-width: 575px) and (max-width: 927px) {
      width: 100%;
      font-size: $body-sm;
      line-height: 20px;
    }


    @media (min-width: 928px) and (max-width: 1279px) {
      font-size: $body;
      width: 100%;
    }

    @media (min-width: 1280px) and (max-width: 1365px) {
      width: 90%;
      font-size: $body-md;
    }

    @media (min-width: 1366px) and (max-width: 1600px) {
      width: 90%;
      font-size: $body-md;
    }
  }
}

.title-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  &__title {
    font-size: $section-title;
    font-weight: 300;
    color: $text-tertiary-color;
    line-height: normal;
    text-align: center;

    @media (max-width: 375px) {
      font-size: $mobile-title;
    }

    @media (min-width: 376px) and (max-width: 574px) {
      font-size: $mobile-title;
    }

    @media (min-width: 575px) and (max-width: 927px) {
      font-size: $mobile-title-md;
    }


    @media (min-width: 928px) and (max-width: 1279px) {
      font-size: $section-subtitle;
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

.highlight {
  background: linear-gradient(to right, #6306fc, #24b0b3);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
}
</style>
