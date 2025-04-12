<template>
  <section class="clients-section">
    <div class="title-container">
      <h2 class="title-container__title">
        <TextHighlighter text="energytech.thoriClients.title.text" keywords="energytech.thoriClients.title.keywords"
          highlight-class="text-highlighter-gradient" />
      </h2>
    </div>

    <div class="cards-container">
      <div v-for="(client, i) in thoriClients" :key="i" class="card">
        <div class="card__image-container">
          <img :src="client.img" :alt="$t(client.alt)" :class="client.class_img" loading="lazy" width="170"
            height="140" />
        </div>
        <div class="card__text-container">
          <p class="card__text-container--text">{{ $t(client.text) }}</p>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import TextHighlighter from '../TextHighlighter.vue';
const thoriClients = [
  {
    img: '/images/new_design/energytech/generation_companies.svg',
    text: 'energytech.thoriClients.itemOne',
    alt: 'energytech.thoriClients.altOne',
    class_img: "image-md"
  },
  {
    img: '/images/new_design/energytech/commercialization.svg',
    text: 'energytech.thoriClients.itemTwo',
    alt: 'energytech.thoriClients.altTwo',
    class_img: "image-md"
  },
  {
    img: '/images/new_design/energytech/transmission.svg',
    text: 'energytech.thoriClients.itemThree',
    alt: 'energytech.thoriClients.altThree',

  },
  {
    img: '/images/new_design/energytech/distribution.svg',
    text: 'energytech.thoriClients.itemFour',
    alt: 'energytech.thoriClients.altFour',

  },
  {
    img: '/images/new_design/energytech/energy_consumer.svg',
    text: 'energytech.thoriClients.itemFive',
    alt: 'energytech.thoriClients.altFive',
    class_img: "image-md"
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
  box-sizing: border-box;
  padding: 0px 20px;
  background-color: #fff;
  background: linear-gradient(0deg, #f2f2f2 0%, #fff 100%);
  font-family: $font-family-royalIntegrity;
  color: $primary-color-dark;
}

.title-container {
  width: 100%;
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
  padding: 10px;

  @media (min-width: 1500px) {
    justify-content: center;
  }


  & .card {
    height: 200px;
    min-width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-radius: 10px;
    box-shadow: 0px 5px 10px #00000033;

    @media (min-width: 928px) {
      min-width: 200px;
      max-width: 200px;
      height: 260px;
    }

    @media (min-width: 1280px) {
      min-width: 250px;
      max-width: 250px;
      height: 290px;
    }

    @media (min-width: 1600px) {
      min-width: 260px;
      max-width: 260px;
      height: 250px;
    }

    &__image-container {
      width: 100%;
      height: 80%;
      box-sizing: border-box;
      padding: 10%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;

        &.image-md {
          height: 90%;
        }
      }

      @media (min-width: 1280px) {
        height: 70%;

        img {
          width: 75%;

          &.image-md {
            height: 85%;
          }
        }
      }

      @media (min-width: 1600px) {
        padding: 0;

        img {
          width: 55%;

          &.image-md {
            height: 70%;
          }
        }
      }
    }

    &__text-container {
      width: 100%;
      height: 20%;
      box-sizing: border-box;
      padding: 0px 20px;
      margin-bottom: 10px;

      @media (min-width: 1600px) {
        height: 30%;
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
          font-size: $body-md;
        }

        @media (min-width: 1600px) {
          font-size: $body-lg-2;
        }
      }
    }
  }
}
</style>
