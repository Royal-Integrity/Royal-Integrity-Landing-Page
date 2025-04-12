<template>
  <section class="clients-section">
    <div class="title-container">
      <h2 class="title-container__title">
        {{ $t('legaltech.whoUseOurServices.title.partOne') }}
        <span>{{ $t('legaltech.whoUseOurServices.title.partTwo') }}</span>
      </h2>
    </div>

    <div class="divider" />

    <div class="cards-container">
      <div v-for="(client, i) in clients" :key="i" class="card">
        <div class="card__image-container">
          <img :src="client.img" :alt="$t(client.alt)" loading="lazy" />
        </div>
        <div class="card__text-container">
          <p class="card__text-container--text">{{ $t(client.text) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const clients = [
  {
    img: '/images/Sector-Publico.svg',
    text: 'legaltech.whoUseOurServices.itemOne.title',
    alt: 'legaltech.whoUseOurServices.itemOne.alt',
  },
  {
    img: '/images/Seguros.svg',
    text: 'legaltech.whoUseOurServices.itemTwo.title',
    alt: 'legaltech.whoUseOurServices.itemTwo.alt',
  },
  {
    img: '/images/Navieras.svg',
    text: 'legaltech.whoUseOurServices.itemThree.title',
    alt: 'legaltech.whoUseOurServices.itemThree.alt',
  },
  {
    img: '/images/BPO.svg',
    text: 'legaltech.whoUseOurServices.itemFour.title',
    alt: 'legaltech.whoUseOurServices.itemFour.alt',
  },
  {
    img: '/images/Departamentos-Legales.svg',
    text: 'legaltech.whoUseOurServices.itemFive.title',
    alt: 'legaltech.whoUseOurServices.itemFive.alt',
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
  background-color: $sixtiary-color;
  padding: 60px 0;
}

.divider {
  @include divider;
  width: 57%;

  @media (min-width: 768px) {
    width: 65%;
  }

  @media (min-width: 1024px) {
    width: 70%;
  }

  @media (min-width: 1160px) {
    width: 62%;
  }

  @media (min-width: 1280px) {
    width: 68%;
  }

  @media (min-width: 1500px) {
    width: 50%;
  }

  @media (min-width: 1800px) {
    width: 48%;
  }
}

.title-container {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-top: 5%;

  @media (min-width: 1160px) {
    margin-top: 0;
  }

  &__title {
    font-family: $font-family-royalIntegrity;
    font-size: $medium;
    font-weight: bold;
    color: $text-tertiary-color;
    line-height: normal;
    text-align: center;

    span {
      color: $text-secondary-color;
    }

    @media (min-width: 768px) {
      font-size: $large;
    }
  }
}

.cards-container {
  width: 95%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 50px 0;
  gap: 20px;

  @media (min-width: 768px) {
    gap: 50px;
  }

  @media (min-width: 768px) {
    gap: 80px;
  }

  @media (min-width: 1280px) {
    gap: 20px;
  }

  @media (min-width: 1800px) {
    gap: 40px;
  }
}

.card {
  width: 150px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px;
  box-shadow: 0px 5px 10px #00000033;
  background-color: $quartiary-color;
  padding: 5px;

  @media (min-width: 768px) {
    width: 200px;
    height: 240px;
  }

  @media (min-width: 1160px) {
    width: 210px;
    height: 270px;
  }

  @media (min-width: 1500px) {
    width: 250px;
    height: 300px;
  }

  &__image-container {
    width: 90%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 65%;
      height: auto;
      margin: auto;

      @media (min-width: 1800px) {
        width: 60%;
      }
    }
  }

  &__text-container {
    width: 95%;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 5px;

    @media (min-width: 1160px) {
      width: 95%;
      margin: 0 auto;
    }

    &--text {
      font-family: $font-family-royalIntegrity;
      font-size: $small;
      font-weight: 400;
      color: $text-primary-color;
      line-height: normal;
      text-align: center;

      @media (min-width: 768px) {
        font-size: $body;
      }

      @media (min-width: 1024px) {
        font-size: $medium;
      }
    }
  }
}
</style>
