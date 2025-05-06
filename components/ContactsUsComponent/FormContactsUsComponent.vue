<template>
  <section class="form-section">
    <div class="form-section__content">
      <article class="form-section__content--form">
        <div class="form-container">
          <h2 class="form-container__title">
            <TextHighlighter text="formFieldContactsUs.title.text" keywords="formFieldContactsUs.title.keywords" />
          </h2>
          <p class="form-container__text">
            {{ $t('formFieldContactsUs.text.partOne') }}
            <span>{{ emailSales($t('formFieldContactsUs.text.partTwo')) }}</span>
          </p>
        </div>
        <div class="form-contact">
          <form action="submit" ref="quoteAppointment" class="form-contact__form">
            <span class="label-container">
              <p class="label-container__is-required">*</p>
              <label class="form-contact__form--label">{{
              $t('formFieldContactsUs.labelOne')
            }}</label>
            </span>
            <input v-model="customer.name" name="name" type="text"
              :placeholder="$t('formFieldContactsUs.placeHolderOne')" required class="form-contact__form--input"
              :class="{ 'missing-fields': formErrors.name }" />
            <p v-if="formErrors.name" class="required">
              {{ $t('formFieldContactsUs.requiredOne') }}
            </p>

            <span class="label-container">
              <p class="label-container__is-required">*</p>
              <label class="form-contact__form--label">{{
              $t('formFieldContactsUs.labelTwo')
            }}</label>
            </span>
            <input v-model="customer.email" name="email" type="email"
              :placeholder="$t('formFieldContactsUs.placeHolderTwo')" required class="form-contact__form--input"
              :class="{ 'missing-fields': formErrors.email }" />
            <p v-if="formErrors.email" class="required">
              {{ $t('formFieldContactsUs.requiredTwo') }}
            </p>

            <span class="label-container">
              <label class="form-contact__form--label">{{
              $t('formFieldContactsUs.labelFive')
            }}</label>
            </span>
            <textarea v-model="customer.requests" name="requests" :autosize="{ minRows: 2, maxRows: 4 }" type="textarea"
              :placeholder="$t('formFieldContactsUs.placeHolderFive')" class="form-contact__form--textarea"
              :class="{ 'missing-fields': formErrors.requests }" />
            <p v-if="formErrors.requests" class="required">
              {{ $t('formFieldContactsUs.requiredOne') }}
            </p>


            <span class="label-container">
              <label class="form-contact__form--label">{{
              $t('formFieldContactsUs.labelSix')
            }}</label>
            </span>
            <span class="label-information-container">
              <label class="form-contact__form--label">{{
                $t('formFieldContactsUs.policyDescription')
              }}</label>
            </span>
            <div :class="{ 'missing-fields': formErrors.accept_policy }">
              <el-radio-group v-model="customer.accept_policy" class="radio-group">
                <el-radio :value="true">{{ $t('formFieldContactsUs.policyOptionOne') }}</el-radio>
                <el-radio :value="false">{{ $t('formFieldContactsUs.policyOptionTwo') }}</el-radio>
              </el-radio-group>
            </div>

            <p v-if="formErrors.accept_policy" class="required">
              {{ $t('formFieldContactsUs.requiredOne') }}
            </p>

          </form>
          <vue-recaptcha ref="recaptchaInstance" :sitekey="key" @verify="onVerify" @expired="onExpired"
            :load-recaptcha-script="true" size="invisible" />
          <button type="submit" class="form-contact__button" @click.prevent="onEvent()">
            {{ $t('formFieldContactsUs.button') }}
          </button>
        </div>
      </article>
      <div class="divider"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onUnmounted, computed } from 'vue';
import { ElNotification } from 'element-plus';
import TextHighlighter from '../TextHighlighter.vue';
import onResize from '@/Extend/onResize';
import RequestFormContacts from '../schemas/RequestFormContacts';
import getAppointment from '../services/repositories/contactUs';
import getRecaptcha from '../services/repositories/auth';
import { VueRecaptcha } from 'vue-recaptcha';

const { locale } = useI18n();
const { screenWidth } = onResize();
const quoteAppointment = ref(null);
const customer = reactive({
  name: '',
  email: '',
  company: '',
  comment: '',
  requests: '',
  accept_policy: null,
});
const options = computed(() => optionsTranslations[locale.value]);
const emailSales = (text) => text.replaceAll('_at_', "@");

const initialState = {
  name: '',
  email: '',
  comment: '',
  requests: '',
};
const formErrors = reactive({
  name: false,
  email: false,
  comment: false,
  requests: false,
  accept_policy: false,
});

const key = ref('6LcH0VQqAAAAADKdvzesc8PlkI7rvmNluGc2aGlO');
const recaptchaInstance = ref(null);

const onVerify = async (token) => {
  if (token) {
    const response = await getRecaptcha.reCaptcha({ token: token })
    if (response.status == 200) {
      submitForm()
    }
  }
}

function onExpired() {
  recaptchaInstance.value?.reset();
}

function onEvent() {
  recaptchaInstance.value?.execute();
}
function resetFormErrors() {
  Object.keys(formErrors).forEach((key) => {
    formErrors[key] = false;
  });
}
async function validateForm() {
  try {
    resetFormErrors();
    await RequestFormContacts.validate(customer, {
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
  const quoteAppointmentData = await validateForm(quoteAppointment.value);
  if (!quoteAppointmentData) {
    return;
  }
  const body = {
    customer_name: customer.name,
    corporate_mail: customer.email,
    comment: customer.comment,
    requests: customer.requests,
  };
  const setAppointment = await getAppointment.contactUs(body);
  if (setAppointment.status === 201) {
    if (locale === 'es') {
      ElNotification({
        title: '¡Solicitud exitosa!',
        message: 'Pronto te contactaremos.',
        type: 'success',
      });
    } else {
      ElNotification({
        title: 'Successful request!',
        message: 'We will contact you soon',
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
};

onUnmounted(() => {
  resetForm();
});
</script>

<style lang="scss" scoped>
.form-section {
  width: 100%;
  background-color: #fff;
  background: linear-gradient(0deg, #fff 70%, $quintiary-color);
  font-family: $font-family-royalIntegrity;

  &__content {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    margin-top: $navbar-spacing;
    padding-left: 5%;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    position: relative;
    z-index: 1;

    @media (max-width: 927px) {
      padding: 0px 20px;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url('/images/new_design/contact/contact.png');
      background-repeat: no-repeat;
      background-position-x: right;
      background-size: contain;
      opacity: 0.6;
      z-index: -1;

      @media (max-width: 927px) {
        opacity: 0.2;
      }

      @media (min-width: 928px) and (max-width: 1279px) {
        opacity: 0.3;
      }
    }

    &--form {
      width: 60%;
      display: flex;
      flex-direction: column;
      margin-bottom: 5%;

      @media (max-width: 927px) {
        width: 100%;
      }

      @media (min-width: 928px) and (max-width: 1279px) {
        width: 95%;
      }
    }
  }
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: $primary-color-dark;

  &__title {
    font-size: $mobile-title;

    @media (min-width: 570px) {
      font-size: $mobile-title-lg;
    }

    @media (min-width: 928px) {
      font-size: $small-title;
    }

    @media (min-width: 1280px) {
      font-size: $section-title-md;
    }

    @media (min-width: 1366px) {
      font-size: $medium-title;
    }

    @media (min-width: 1600px) {
      font-size: $section-title-lg;
    }
  }

  &__text {
    font-size: $small;
    line-height: normal;
    width: 100%;

    span {
      text-decoration: underline;
      font-weight: 600;
    }

    @media (min-width: 570px) {
      font-size: $body-sm;
    }

    @media (min-width: 928px) {
      font-size: $body;
      width: 60%;
    }

    @media (min-width: 1280px) {
      font-size: $medium;
    }

    @media (min-width: 1366px) {
      font-size: $body-md;
      width: 65%;
    }

    @media (min-width: 1600px) {
      font-size: $body-lg-2;
    }
  }
}

.form-contact {
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-top: 25px;

  @media (max-width: 369px) {
    margin-top: 10px;
    width: 100%;
    gap: 5px;
  }

  @media (min-width: 370px) and (max-width: 574px) {
    margin-top: 10px;
    width: 100%;
    gap: 5px;
  }

  @media (min-width: 575px) and (max-width: 1600px) {
    width: 100%;
  }

  &__form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    &--label {
      font-size: $small;
      color: $text-primary-color;
      line-height: normal;
      align-self: flex-start;
      font-weight: 300;
      margin-bottom: 10px;

      @media (min-width: 570px) {
        font-size: $body-sm;
      }

      @media (min-width: 928px) {
        font-size: $body;
      }

      @media (min-width: 1366px) {
        font-size: $medium;
      }
    }

    &--input {
      font-family: $font-family-royalIntegrity;
      width: 100%;
      height: 40px;
      font-size: $small;
      color: #7b7b7b;
      line-height: normal;
      border-radius: 10px;
      border: 0.1rem solid #acb0b6;
      padding: 5px 20px;
      box-sizing: border-box;
      font-weight: 300;
      margin-bottom: 5px;

      @media (min-width: 570px) {
        font-size: $body-sm;
      }

      @media (min-width: 928px) {
        font-size: $body;
        height: 45px
      }

      @media (min-width: 1366px) {
        font-size: $medium;
        height: 55px;
      }
    }

    &--textarea {
      font-family: $font-family-royalIntegrity;
      width: 100%;
      max-width: 100%;
      min-width: 100%;
      min-height: 120px;
      font-size: $small;
      color: #7b7b7b;
      line-height: normal;
      border-radius: 10px;
      padding: 5px 20px;
      border: 0.1rem solid #acb0b6;
      box-sizing: border-box;

      @media (min-width: 570px) {
        font-size: $body-sm;
      }

      @media (min-width: 928px) {
        font-size: $body;
      }

      @media (min-width: 1366px) {
        font-size: $medium;
      }
    }

    &--option {
      font-family: $font-family-royalIntegrity;
      width: 100%;
      font-size: $small;
      color: #7b7b7b;
      line-height: normal;
      padding: 5px 20px;

      @media (min-width: 570px) {
        font-size: $body-sm;
      }

      @media (min-width: 928px) {
        font-size: $body;
      }

      @media (min-width: 1366px) {
        font-size: $medium;
      }
    }
  }

  &__button {
    @include button-gradient;
    width: 30%;
    font-size: $medium;

    @media (max-width: 369px) {
      height: 50px;
      font-size: $small;
      margin: 0px;
    }

    @media (min-width: 370px) and (max-width: 574px) {
      height: 50px;
      font-size: $small;
      margin: 0px;
    }

    @media (min-width: 575px) and (max-width: 928px) {
      width: 22%;
      height: 50px;
    }
  }
}

.label-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  margin: 15px 0 5px 0;

  &__is-required {
    line-height: normal;
    color: red;
  }
}

.label-information-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  margin: 5px 0 5px 0;
}

.required {
  color: red;
  align-self: flex-start;
  margin: 5px 0;
}

.divider {
  width: 10px;
  height: 50vh;
  background: linear-gradient(45deg, transparent 4px, #4E4A9E 4px, #4E4A9E 6px, transparent 6px),
    linear-gradient(-45deg, transparent 4px, #4E4A9E 4px, #4E4A9E 6px, transparent 6px);
  background-size: 10px 10px;
  background-repeat: repeat-y;
  background-position: center;
  background-color: rgba(171, 167, 245, 0.513);
  box-shadow: 4px 0px 8px -2px rgba(78, 74, 158, 0.6);
}

.missing-fields {
  border: 2px solid red;
  border-radius: 10px;
}

.radio-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: 20px;

  @media (max-width: 369px) {
    font-size: 10px;
  }

  @media (min-width: 370px) and (max-width: 574px) {
    font-size: 10px;
  }
}

:deep() {
  .el-select--large .el-select__wrapper {
    width: 100%;
    height: 40px;
    font-family: $font-family-royalIntegrity;
    font-size: $small;
    color: #7b7b7b;
    line-height: normal;
    border-radius: 10px;
    padding: 5px 20px;
    border: 0.1rem solid #acb0b6;
    box-shadow: none;

    @media (min-width: 570px) {
      font-size: $body-sm;
    }

    @media (min-width: 928px) {
      font-size: $body;
      height: 45px;
    }

    @media (min-width: 1366px) {
      font-size: $medium;
      height: 55px;
    }
  }

  font-weight: 300;

  .el-select__placeholder.is-transparent {
    font-size: $small;
    color: #7b7b7b;

    @media (min-width: 570px) {
      font-size: $body-sm;
    }

    @media (min-width: 928px) {
      font-size: $body;
    }

    @media (min-width: 1366px) {
      font-size: $medium;
    }
  }

  .el-icon svg {
    font-size: 20px;
  }

  .el-icon {
    width: 2em;
    height: 2em;
  }

  .el-radio {

    @media (max-width: 369px) {
      height: 30px;
    }

    @media (min-width: 370px) and (max-width: 574px) {
      height: 30px;
    }
  }

  .el-radio__label {
    font-size: $small;
    color: $text-primary-color;

    @media (min-width: 570px) {
      font-size: $body-sm;
    }

    @media (min-width: 928px) {
      font-size: $body;
    }

    @media (min-width: 1366px) {
      font-size: $medium;
    }
  }

  .el-radio.is-checked {
    font-weight: 600;

    & .el-radio__input.is-checked {
      & .el-radio__inner {
        background-color: $primary-color-highlight;
        border-color: $primary-color-highlight;
      }
    }

    & .el-radio__label {
      color: $primary-color-highlight;
    }
  }
}
</style>
