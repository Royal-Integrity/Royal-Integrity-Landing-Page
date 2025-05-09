<script setup>
</script>

<template>
  <div class="footer-container">
    <div class="divider"></div>
    <div class="footer-container__logo">
      <img src="/images/new_design/logo_metalizado_slogan.png" alt="royalIntegrity Logo" width="420" height="160"
        loading="lazy" />
    </div>

    <div class="footer-container__contact-information">
      <div class="footer-container__contact-information--title">
        {{ $t('footer.contactUs') }}
      </div>

      <div class="footer-container__contact-information--text">
        <Icon name="ion:mail-outline" class="icon contact-icon" />
        info@royalintegrity.com.co
      </div>
      <div class="footer-container__contact-information--text">
        <Icon name="ion:call-outline" class="icon contact-icon" />
        <span class="disable-number">+57 3180778244</span>
      </div>

      <div class="footer-container__social-media">
        <div class="footer-container__social-media--title">
          {{ $t('footer.followUs') }}
        </div>
        <div class="footer-container__social-media--networks">

          <div class="footer-container__social-media--network-item">
            <NuxtLink to="https://www.linkedin.com/company/royal-integrity-sas/posts/?feedView=all" target="_blank"
              aria-label="linkedin">
              <Icon name="ion:logo-linkedin" class="icon" />
            </NuxtLink>
          </div>
          <div class="footer-container__social-media--network-item">
            <NuxtLink to="https://www.youtube.com/@RoyalIntegritysas" target="_blank" aria-label="youtube">
              <Icon name="ion:logo-youtube" class="icon" />
            </NuxtLink>
          </div>
          <div class="footer-container__social-media--network-item">
            <NuxtLink to="mailto:info@royalintegrity.com.co" target="_blank" aria-label="gmail">
              <Icon name="mdi:gmail" class="icon" />
            </NuxtLink>
          </div>
          <div class="footer-container__social-media--network-item">
            <NuxtLink to="https://wa.me/573180778244" target="_blank" aria-label="whatsapp">
              <Icon name="ion:logo-whatsapp" class="icon" />
            </NuxtLink>
          </div>

        </div>
      </div>
    </div>

    <div class="privacy-policy">
      <div class="privacy-policy--text link">
        <NuxtLink to="https://" target="_blank" aria-label="personal_data_policy">
          <span>2025 Royal Integrity. All Rights Reserved.</span>
        </NuxtLink>
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
  background: linear-gradient(45deg, $secondary-color, $primary-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  font-family: $font-family-royalIntegrity;
  color: $text-light-color;
  box-shadow: inset 0px 20px 10px 0 rgba(0, 0, 0, 0.2);

  @media (min-width: 928px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px;
  }

  &__logo {
    width: 100%;
    display: flex;
    justify-content: center;

    @media (min-width: 928px) {
      width: 30%;
    }

    @media (min-width: 768px) {
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

    @media (min-width: 320px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 7px;
    }

    @media (min-width: 928px) {
      width: 50%;
      justify-content: flex-start;
    }

    @media (min-width: 1366px) {
      width: 50%;
      justify-content: center;
    }

    @media (min-width: 1660px) {
      width: 50%;
    }

    &--title {
      width: 100%;
      font-size: $body;
      margin-bottom: 10px;
      text-align: center;

      @media (min-width: 928px) {
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
      display: flex;
      align-items: center;
      justify-content: center;

      &.link {
        font-size: 15px;

        a {
          color: white;
        }
      }
    }
  }

  &__social-media {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

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

  &:hover {
    transform: scale(1.1);
  }

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

.contact-icon {
  color: #F6AF33;
  margin-right: 10px;
}


.divider {
  @include divider;
  width: 80%;
  box-sizing: border-box;
  border-color: #F6AF33;
  margin-bottom: 5px;
  margin-top: 5px;
  border-width: 1px;
}

.disable-number {
  pointer-events: none;
  text-decoration: none;
  color: inherit;
}

.privacy-policy {
  width: 80%;
  height: 30px;
  border: 1px solid #F6AF33;
  border-radius: 10px;
  display: flex;
  align-items: center;

  &--text {
    width: 100%;
    font-weight: 300;
    font-size: $small;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      color: white;
      text-decoration: none;
    }
  }
}
</style>
