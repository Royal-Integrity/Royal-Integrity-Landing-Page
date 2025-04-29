<template>
  <ClientOnly>
    <section class="error-section">
      <div class="error-section__image">
        <img src="/images/new_design/404.svg" alt="error_404" width="1000" height="800" v-show="largeScreen === true">
        <img src="/images/new_design/mobile/404.svg" alt="error_404" width="1000" height="800"
          v-show="mobileScreen === true">
        <div class="error-section__image--text">
          <div class="error__title">
            <span class="highlight">{{ $t('404.title') }}</span>
          </div>
          <div class="error__subtitle">{{ $t('404.text') }}</div>
        </div>
      </div>
      <div class="error-section__information">
        <p class="error-section__information--text">{{ $t('blog.error404.textOne') }}</p>
        <p class="error-section__information--text bold">{{ $t('blog.error404.textTwo') }}</p>
        <form action="submit" ref="quoteNewsletter" class="info-container__form">
          <span class="label-container">
            <p class="label-container__is-required">*</p>
            <label class="info-container__form--label">
              {{ $t('blog.error404.form.label') }}
            </label>
          </span>
          <input v-model="customer.email" name="email" type="email" :placeholder="$t('quottingModal.placeHolderThree')"
            required class="info-container__form--input" :class="{ 'missing-fields': formErrors.email }" />
          <p v-if="formErrors.email" class="required">
            {{ $t('blog.error404.form.required') }}
          </p>
        </form>
        <button type="submit" class="info-container__button" @click.prevent="submitForm()">
          {{ $t('blog.error404.form.button') }}
        </button>
      </div>
    </section>
  </ClientOnly>
</template>

<script setup>
import { computed } from 'vue';
import { ElNotification } from 'element-plus';
import onResize from '@/Extend/onResize';

import RequestNewsletterFormSchema from '../schemas/RequestNewsletterForm';
import getNewsletter from '../services/repositories/subscribe';

const { locale, setLocale } = useI18n();
const { screenWidth } = onResize();

const largeScreen = computed(() => screenWidth.value > 0 && screenWidth.value > 650);
const mobileScreen = computed(() => screenWidth.value > 0 && screenWidth.value <= 650);

const quoteNewsletter = ref(null);
const customer = reactive({
  email: '',
});
const initialState = {
  email: '',
};
const formErrors = reactive({
  email: false,
});

function resetFormErrors() {
  Object.keys(formErrors).forEach((key) => {
    formErrors[key] = false;
  });
}

async function validateForm() {
  try {
    resetFormErrors();
    await RequestNewsletterFormSchema.validate(customer, {
      abortEarly: false,
    });
    return customer;
  } catch (error) {
    error.inner.forEach((element) => {
      formErrors[element.path] = true;
    });
  }
  return false;
}

const resetForm = () => {
  Object.assign(customer, initialState);
};

const submitForm = async () => {
  const quoteNewsletterData = await validateForm(quoteNewsletter.value);

  if (!quoteNewsletterData) {
    return;
  }

  const setNewsletter = await getNewsletter.subscribe(customer.email);

  if (setNewsletter.status === 200) {
    if (locale === 'es') {
      ElNotification({
        title: '¡Solicitud exitosa!',
        message: 'Pronto recibirás noticias de nosotros.',
        type: 'success',
      });
    } else {
      ElNotification({
        title: 'Successful request!',
        message: 'You will soon receive news from us.',
        type: 'success',
      });
    }
    resetForm();
    return;
  }
  if (locale === 'es') {
    ElNotification({
      title: 'Ocurrió un error.',
      message: 'Vuelve a intentarlo.',
      type: 'warning',
    });
  } else {
    ElNotification({
      title: 'An error occurred!.',
      message: 'Please try again later.',
      type: 'warning',
    });
  }
  resetForm();
};

onUnmounted(() => {
  resetForm();
});
</script>

<style lang="scss" scoped>
.error-section {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #fff;
  background: linear-gradient(0deg, #fff 70%, $secondary-color);


  font-family: $font-family-font-family-royalIntegrity;
  color: $primary-color-dark;
  box-sizing: border-box;
  padding-top: calc($navbar-height-mobile + 5%);

  gap: 60px;

  &__image {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    &--text {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 60%;
      box-sizing: border-box;
      padding: 0px 10px;

      @media (min-width: 570px) {
        width: 55%;
      }

      @media (min-width: 928px) {
        width: 50%;
      }

      @media (min-width: 1280px) {
        width: 45%;
      }

      @media (min-width: 1366px) {
        width: 40%;
      }

      @media (min-width: 1600px) {
        width: 40%;
      }
    }

    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }

  &__information {
    width: 100%;
    box-sizing: border-box;
    padding: 30px 30px 0px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    @media (min-width: 570px) {
      width: 90%;
    }

    &--text {
      font-size: $small;
      line-height: normal;
      text-align: center;

      @media (min-width: 570px) {
        font-size: $body-sm;
      }

      @media (min-width: 928px) {
        font-size: $body-md;
      }

      @media (min-width: 1280px) {
        font-size: $body-lg;
      }

      @media (min-width: 1366px) {
        font-size: $body-lg-2;
      }

      @media (min-width: 1600px) {
        font-size: $body-extra-lg;
      }

      &.bold {
        font-weight: 600;
      }
    }
  }
}

.info-container {
  &__form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 570px) {
      width: 90%;
    }

    @media (min-width: 928px) {
      width: 70%;
    }

    @media (min-width: 1280px) {
      width: 60%;
    }

    @media (min-width: 1366px) {
      width: 50%;
    }

    @media (min-width: 1600px) {
      width: 40%;
    }

    &--label {
      font-size: $small;
      line-height: normal;
      font-weight: 300;

      @media (min-width: 570px) {
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

    &--input {
      width: 100%;
      box-shadow: 0px 5px 10px #00000033;
      font-family: $font-family-royalIntegrity;
      font-size: $small;
      color: #7b7b7b;
      line-height: normal;
      border-radius: 10px;
      padding: 10px 10px;
      border: none;
      font-weight: 300;
      box-sizing: border-box;

      @media (min-width: 570px) {
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

  &__button {
    @include button-gradient;
    height: 50px;
    font-size: $extra-small;

    @media (min-width: 570px) {
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

.missing-fields {
  background-color: rgb(255, 199, 199);
}

.required {
  color: red;
  align-self: flex-start;
  margin: 5px 0;
}

.label-container {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  margin: 15px 0 5px 0;

  &__is-required {
    line-height: normal;
    color: red;
  }
}

.error {

  &__title {
    font-size: $mobile-title;
    width: 100%;


    @media (min-width: 570px) {
      font-size: $mobile-title-md;
    }

    @media (min-width: 928px) {
      font-size: $mobile-title-lg;
    }

    @media (min-width: 1280px) {
      font-size: $section-title;
    }

    @media (min-width: 1366px) {
      font-size: $section-title-md;
    }

    @media (min-width: 1600px) {
      font-size: $section-title-lg
    }
  }

  &__subtitle {
    font-size: $small;
    line-height: normal;
    font-weight: 300;
    width: 100%;

    @media (min-width: 570px) {
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

.highlight {
  background: linear-gradient(90deg, #4E4A9E, #F6AF33);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
}
</style>
