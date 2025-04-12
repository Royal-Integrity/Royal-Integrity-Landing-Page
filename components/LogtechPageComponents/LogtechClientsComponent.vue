<template>
  <section class="clients-section">
    <div class="title-container">
      <h2 class="title-container__title">
        <TextHighlighter text="logtech.whoUseOurServices.title.text" keywords="logtech.whoUseOurServices.title.keywords"
          highlight-class="text-highlighter-gradient" />
      </h2>
    </div>

    <div class="cards-container">
      <div v-for="(client, i) in clients" :key="i" class="card">
        <div class="card__image-container">
          <img :src="client.img" :alt="$t(client.alt)" :class="client.class" loading="lazy" width="170" height="140" />
        </div>
        <div class="card__text-container">
          <p class="card__text-container--text">
            <TextHighlighter :text="client.text" :keywords="client.keywords" />
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import TextHighlighter from '../TextHighlighter.vue';
const clients = [
  {
    img: '/images/new_design/logtech/service_one.svg',
    text: 'logtech.whoUseOurServices.itemOne.title',
    keywords: 'logtech.whoUseOurServices.itemOne.keywords',
    alt: 'logtech.whoUseOurServices.itemOne.alt',
  },
  {
    img: '/images/new_design/logtech/service_two.svg',
    text: 'logtech.whoUseOurServices.itemTwo.title',
    keywords: 'logtech.whoUseOurServices.itemTwo.keywords',
    alt: 'logtech.whoUseOurServices.itemTwo.alt',
    class: "image-lg",
  },
  {
    img: '/images/new_design/logtech/service_three.svg',
    text: 'logtech.whoUseOurServices.itemThree.title',
    keywords: 'logtech.whoUseOurServices.itemThree.keywords',
    alt: 'logtech.whoUseOurServices.itemThree.alt',
    class: "image-lg",
  },
  {
    img: '/images/new_design/logtech/service_four.svg',
    text: 'logtech.whoUseOurServices.itemFour.title',
    keywords: 'logtech.whoUseOurServices.itemFour.keywords',
    alt: 'logtech.whoUseOurServices.itemFour.alt',
    class: "image-lg",
  },
  {
    img: '/images/new_design/logtech/service_five.svg',
    text: 'logtech.whoUseOurServices.itemFive.title',
    keywords: 'logtech.whoUseOurServices.itemFive.keywords',
    alt: 'logtech.whoUseOurServices.itemFive.alt',
    class: "image-lg",
  },
  {
    img: '/images/new_design/logtech/service_six.svg',
    text: 'logtech.whoUseOurServices.itemSix.title',
    keywords: 'logtech.whoUseOurServices.itemSix.keywords',
    alt: 'logtech.whoUseOurServices.itemSix.alt',
  },
];
</script>

<style lang="scss" scoped>
.clients-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;

  background-color: #fff;
  background: linear-gradient(0deg, #f2f2f2 0%, #fff 100%);

  font-family: $font-family-royalIntegrity;
  color: $primary-color-dark;
  box-sizing: border-box;
  margin-top: 40px;
  padding: 0px 20px;
}

.title-container {
  text-align: center;
  font-weight: 300;

  &__title {
    font-size: $mobile-title;
    text-align: center;
    line-height: normal;

    @media (min-width: 570px) {
      font-size: $mobile-title-md;
    }

    @media (min-width: 928px) {
      font-size: $mobile-title-lg;
    }

    @media (min-width: 1280px) {
      font-size: $section-title;
    }
  }
}

.cards-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 40px;
  overflow-x: auto;
  margin-bottom: 40px;
  box-sizing: border-box;
  padding: 10px 10px 40px 10px;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 1600px) {
    justify-content: center;
  }

  & .card {
    height: 170px;
    min-width: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-radius: 10px;
    box-shadow: 0px 5px 10px #00000033;

    @media (min-width: 570px) {
      height: 190px;
      min-width: 150px;
    }

    @media (min-width: 928px) {
      height: 220px;
      min-width: 180px;
    }

    @media (min-width: 1280px) {
      height: 240px;
      min-width: 200px;
    }

    @media (min-width: 1366px) {
      height: 260px;
      min-width: 220px;
    }

    @media (min-width: 1600px) {
      height: 300px;
      min-width: 220px;
      max-width: 240px;
    }

    &__image-container {
      width: 100%;
      height: 60%;
      box-sizing: border-box;
      padding: 10%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    &__text-container {
      width: 100%;
      height: 40%;
      box-sizing: border-box;
      padding: 0px 20px;
      display: flex;
      align-items: center;

      @media (min-width: 1600px) {
        padding-bottom: 20px;
      }

      &--text {
        font-size: $small;
        font-weight: 300;
        line-height: normal;
        text-align: center;

        @media (min-width: 570px) {
          font-size: $extra-small;
        }

        @media (min-width: 928px) {
          font-size: $body;
        }

        @media (min-width: 1280px) {
          font-size: $medium;
        }

        @media (min-width: 1366px) {
          font-size: $medium;
        }

        @media (min-width: 1600px) {
          font-size: $body-lg-2;
        }
      }
    }
  }
}
</style>
