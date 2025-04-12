<template>
  <section class="ourclusters-section">
    <div class="title-container">
      <h2 class="title-container__title">
        {{ $t('about.clusters.title.partOne') }}
        <span>{{ $t('about.clusters.title.partTwo') }}</span>
      </h2>
    </div>

    <div class="divider" />

    <section v-if="screenWidth < 1160" class="mobile-grid">
      <div class="mobile-grid__gcp">
        <div class="card main-card">
          <div class="card__image-container">
            <img src="/images/GCP.svg" :alt="$t('about.clusters.itemOne')" loading="lazy" />
          </div>
          <article class="card__text-container">
            <h3 class="card__text-container--text">
              {{ $t('about.clusters.itemTwo') }}
            </h3>
          </article>
        </div>
      </div>
      <div class="mobile-grid__azure">
        <div class="card special-card">
          <div class="card__image-container">
            <img src="/images/Azure.svg" :alt="$t('about.clusters.itemOne')" loading="lazy" />
          </div>
          <article class="card__text-container">
            <h3 class="card__text-container--text">
              {{ $t('about.clusters.itemOne') }}
            </h3>
          </article>
        </div>
      </div>
      <div class="mobile-grid__aws">
        <div class="card special-card">
          <div class="card__image-container">
            <img src="/images/AWS.svg" :alt="$t('about.clusters.itemThree')" loading="lazy" />
          </div>
          <article class="card__text-container">
            <h3 class="card__text-container--text">
              {{ $t('about.clusters.itemThree') }}
            </h3>
          </article>
        </div>
      </div>
    </section>

    <section v-if="screenWidth >= 1160" class="desktop-grid">
      <div class="desktop-grid__gcp">
        <div class="card main-card">
          <div class="card__image-container">
            <img src="/images/GCP.svg" :alt="$t('about.clusters.itemTwo')" loading="lazy" />
          </div>
          <article class="card__text-container">
            <h3 class="card__text-container--text">
              {{ $t('about.clusters.itemTwo') }}
            </h3>
          </article>
        </div>
      </div>
      <div class="desktop-grid__azure">
        <div class="card special-card">
          <div class="card__image-container">
            <img src="/images/Azure.svg" :alt="$t('about.clusters.itemOne')" loading="lazy" />
          </div>
          <article class="card__text-container">
            <h3 class="card__text-container--text">
              {{ $t('about.clusters.itemOne') }}
            </h3>
          </article>
        </div>
      </div>
      <div class="desktop-grid__aws">
        <div class="card special-card">
          <div class="card__image-container">
            <img src="/images/AWS.svg" :alt="$t('about.clusters.itemThree')" loading="lazy" />
          </div>
          <article class="card__text-container">
            <h3 class="card__text-container--text">
              {{ $t('about.clusters.itemThree') }}
            </h3>
          </article>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import onResize from '@/Extend/onResize';

const { screenWidth } = onResize();
</script>

<style lang="scss" scoped>
.ourclusters-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: $sixtiary-color;
  padding: 2% 0;
  padding-bottom: 60px;
}

.divider {
  @include divider;
  width: 45%;

  @media (min-width: 768px) {
    width: 47%;
  }

  @media (min-width: 1024px) {
    width: 55%;
  }

  @media (min-width: 1160px) {
    width: 48%;
  }

  @media (min-width: 1280px) {
    width: 44%;
  }

  @media (min-width: 1365px) {
    width: 40%;
  }

  @media (min-width: 1500px) {
    width: 37%;
  }

  @media (min-width: 1800px) {
    width: 30%;
  }
}

.title-container {
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-top: 10%;

  @media (min-width: 1160px) {
    margin-top: 4%;
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

.mobile-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  gap: 25px 15px;
  grid-auto-flow: row;
  grid-template-areas: 'one main two';
  margin-top: 60px;

  &__gcp {
    grid-area: main;
    margin: auto;
  }

  &__azure {
    grid-area: one;
    margin: auto;
  }

  &__aws {
    grid-area: two;
    margin: auto;
  }
}

.desktop-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  gap: 25px 15px;
  grid-auto-flow: row;
  grid-template-areas: 'one main two';
  margin: 70px 0;

  &__gcp {
    grid-area: main;
    margin: auto;
  }

  &__azure {
    grid-area: one;
    margin: auto;
  }

  &__aws {
    grid-area: two;
    margin: auto;
  }
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: $quartiary-color;
  border-radius: 10px;
  box-shadow: 0px 5px 10px #00000033;

  @media (min-width: 1160px) {
    width: 130px;
    height: 210px;
  }

  @media (min-width: 1365px) {
    width: 150px;
    height: 225px;
  }

  &__image-container {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 70%;
      height: auto;
      margin: auto;

      @media (min-width: 500px) {
        width: 55%;
      }

      @media (min-width: 1160px) {
        width: 65%;
      }

      @media (min-width: 1800px) {
        width: 70%;
      }
    }
  }

  &__text-container {
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 5px;

    @media (max-width: 1159px) {
      margin-left: auto;
    }

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

      @media (min-width: 1024px) {
        font-size: $medium;
      }

      @media (min-width: 1160px) {
        font-size: $small;
      }

      @media (min-width: 1365px) {
        font-size: $body;
      }
    }
  }
}

.main-card {
  width: 120px;
  height: 190px;

  @media (min-width: 768px) {
    width: 200px;
    height: 280px;
  }

  @media (min-width: 1024px) {
    width: 250px;
    height: 350px;
  }

  @media (min-width: 1160px) {
    width: 280px;
    height: 360px;
  }

  @media (min-width: 1800px) {
    width: 310px;
    height: 390px;
  }
}

.special-card {
  width: 100px;
  height: 170px;

  @media (min-width: 768px) {
    width: 173px;
    height: 230px;
  }

  @media (min-width: 1024px) {
    width: 250px;
    height: 320px;
  }

  @media (min-width: 1160px) {
    width: 253px;
    height: 310px;
  }

  @media (min-width: 1800px) {
    width: 283px;
    height: 340px;
  }
}
</style>
