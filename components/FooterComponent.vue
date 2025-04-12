<script setup>
</script>

<template>
  <div class="footer-container">

    <div class="footer-container__logo">
      <img src="/images/new_design/logo_metalizado_slogan.png" alt="royalIntegrity Logo" width="420" height="160" loading="lazy" />
    </div>

    <div class="footer-container__contact-information">
      <div class="footer-container__contact-information--title">
        {{ $t('footer.contactUs') }}
      </div>
      <div class="footer-container__contact-information--text">
        contact@royalIntegrity.com.co
      </div>
      <div class="footer-container__contact-information--text">
        <span class="disable-number">+57 3155675665</span>
      </div>
      <div class="footer-container__contact-information--text link">
        <NuxtLink to="https://issuu.com/royalIntegrity.ai/docs/4._amd-po01_anexo_nro._4_-_pol_tica_de_tratamient?fr=sZjk5NzgwMTE2NDY" target="_blank" aria-label="personal_data_policy">
          <span>{{ $t('footer.policy')}}</span>
        </NuxtLink>
      </div>
    </div>

    <div class="divider"></div>

    <div class="footer-container__social-media">
      <div class="footer-container__social-media--title">
        {{ $t('footer.followUs') }}
      </div>
      <div class="footer-container__social-media--networks">

        <div class="footer-container__social-media--network-item">
          <NuxtLink to="https://co.linkedin.com/company/guaneai" target="_blank" aria-label="linkedin">
            <Icon name="ion:logo-linkedin" class="icon" />
          </NuxtLink>
        </div>
        <div class="footer-container__social-media--network-item">
          <NuxtLink to="https://x.com/guaneAI" target="_blank" aria-label="twitter_x">
            <Icon name="ri:twitter-x-fill" class="icon" />
          </NuxtLink>
        </div>
        <div class="footer-container__social-media--network-item">
          <NuxtLink to="https://www.facebook.com/guaneEnterprises" target="_blank" aria-label="facebook">
            <Icon name="ion:social-facebook" class="icon" />
          </NuxtLink>
        </div>
        <div class="footer-container__social-media--network-item">
          <NuxtLink to="https://www.instagram.com/guaneai/" target="_blank" aria-label="instagram">
            <Icon name="ion:logo-instagram" class="icon" />
          </NuxtLink>
        </div>

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer-container {
  width: 100%;
  height: fit-content;
  padding: 40px 30px;
  box-sizing: border-box;
  background: linear-gradient(60deg, #4c62ac, #1f2846);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  font-family: $font-family-royalIntegrity;
  color: $text-light-color;

  @media (min-width: 928px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 40px;
  }

  &__logo {
    width: 100%;
    display: flex;
    justify-content: center;

    @media (min-width: 928px) {
      width: 50%;
    }

    @media (min-width: 1366px) {
      width: 30%;
    }

    img {
      width: 80%;
      height: auto;
      object-fit: contain;
    }
  }

  &__contact-information {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 7px;

    @media (min-width: 928px) {
      width: 40%;
      justify-content: flex-start;
    }

    @media (min-width: 1366px) {
      width: 30%;
      justify-content: center;
    }


    &--title {
      width: 100%;
      font-size: $body;
      margin-bottom: 10px;
      text-align: center;

      @media (min-width: 928px) {
        text-align: left;
        font-size: $body-md;
      }

      @media (min-width: 1366px) {
        text-align: center;
        font-size: $footer-title-md;
      }

      @media (min-width: 1600px) {
        font-size: $footer-title;
      }
    }

    &--text {
      width: 100%;
      font-weight: 300;
      font-size: $extra-small;
      text-align: center;

      &.link {
        margin-top: 10px;
        a {
          color: #fff;
        }
      }

      @media (min-width: 928px) {
        font-size: $body;
        text-align: left;
      }

      @media (min-width: 1366px) {
        text-align: center;
        font-size: $medium;
      }

      @media (min-width: 1600px) {
        font-size: $body-md;
      }
    }
  }

  &__social-media {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 1366px) {
      width: 25%;
    }

    &--title {
      font-size: $extra-small;
      text-align: center;
      line-height: normal;
      font-weight: 300;

      @media (min-width: 928px) {
        font-size: $body;
      }

      @media (min-width: 1366px) {
        font-size: $medium;
        text-wrap: balance;
      }

      @media (min-width: 1600px) {
        font-size: $body-md;
      }
    }

    &--networks {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 30px;
      margin-top: 10px;
    }

    &--network-item {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 35px;
      width: 35px;
      border-radius: 50%;
      background-color: $primary-color-dark;
      cursor: pointer;

      @media (min-width: 928px) {
        height: 45px;
        width: 45px;
      }

      @media (min-width: 1600px) {
        height: 50px;
        width: 50px;
      }
    }
  }
}

.icon {
  color: #fff;
  font-size: $medium;

  @media (min-width: 928px) {
    font-size: $body-lg;
  }

  @media (min-width: 1366px) {
    font-size: $body-extra-lg;
  }

  @media (min-width: 1600px) {
    font-size: $large-sm;
  }
}


.divider {
  @include divider;
  width: 100%;
  box-sizing: border-box;
  border-color: #fff;
  margin-bottom: 5px;
  margin-top: 5px;
  border-width: 1px;

  @media (min-width: 1366px) {
    display: none;
  }
}

.disable-number {
  pointer-events: none;
  text-decoration: none;
  color: inherit;
}
</style>
