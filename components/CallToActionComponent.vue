<template>
  <ClientOnly>
    <el-dialog v-model="visible" :show-close="false" lock-scroll :width="screenWidth < 1160 ? '95%' : '55%'" center
      destroy-on-close style="padding: 0px; border-radius: 10px">
      <template #header="{ titleId }">
        <div class="my-header">
          <h4 :id="titleId" class="title">
            {{ $t('quottingModal.title') }}
          </h4>
          <Icon name="mingcute:close-fill" class="close-icon" @click="closeModal" />
        </div>
      </template>
      <section class="modal-body">
        <form action="submit" ref="quoteAppointment" class="modal-body__form">
          <span class="label-container">
            <p class="label-container__is-required">*</p>
            <label class="modal-body__form--label">{{
              $t('quottingModal.labelOne')
            }}</label>
          </span>
          <input v-model="customer.name" name="name" type="text" :placeholder="$t('quottingModal.placeHolderOne')"
            required class="modal-body__form--input" :class="{ 'missing-fields': formErrors.email }" />
          <p v-if="formErrors.name" class="required">
            {{ $t('quottingModal.requiredOne') }}
          </p>

          <span class="label-container">
            <p class="label-container__is-required">*</p>
            <label class="modal-body__form--label">{{
              $t('quottingModal.labelTwo')
            }}</label>
          </span>
          <input v-model="customer.rol" name="rol" type="text" :placeholder="$t('quottingModal.placeHolderTwo')"
            class="modal-body__form--input" :class="{ 'missing-fields': formErrors.rol }" />
          <p v-if="formErrors.rol" class="required">
            {{ $t('quottingModal.requiredOne') }}
          </p>

          <span class="label-container">
            <p class="label-container__is-required">*</p>
            <label class="modal-body__form--label">{{
              $t('quottingModal.labelThree')
            }}</label>
          </span>
          <input v-model="customer.email" name="email" type="email" :placeholder="$t('quottingModal.placeHolderThree')"
            required class="modal-body__form--input" :class="{ 'missing-fields': formErrors.email }" />
          <p v-if="formErrors.email" class="required">
            {{ $t('quottingModal.requiredTwo') }}
          </p>

          <span class="label-container">
            <p class="label-container__is-required">*</p>
            <label class="modal-body__form--label">{{
              $t('quottingModal.labelFour')
            }}</label>
          </span>
          <input v-model="customer.company" name="company" type="text"
            :placeholder="$t('quottingModal.placeHolderFour')" class="modal-body__form--input"
            :class="{ 'missing-fields': formErrors.company }" />
          <p v-if="formErrors.company" class="required">
            {{ $t('quottingModal.requiredOne') }}
          </p>

          <span class="label-container">
            <p class="label-container__is-required">*</p>
            <label class="modal-body__form--label">{{
              $t('quottingModal.labelFive')
            }}</label>
          </span>
          <textarea v-model="customer.requests" name="requests" :autosize="{ minRows: 2, maxRows: 4 }" type="textarea"
            :placeholder="$t('quottingModal.placeHolderFive')" class="modal-body__form--input"
            :class="{ 'missing-fields': formErrors.requests }" />
          <p v-if="formErrors.requests" class="required">
            {{ $t('quottingModal.requiredOne') }}
          </p>
        </form>
        <button type="submit" class="modal-body__button" @click.prevent="submitForm()">
          {{ $t('quottingModal.button') }}
        </button>
      </section>
    </el-dialog>
  </ClientOnly>
</template>

<script setup>
import { ref, reactive, onUnmounted } from 'vue';
import { storeToRefs } from 'pinia';
import { ElNotification } from 'element-plus';

import onResize from '@/Extend/onResize';
import RequestAppointmentFormSchema from '../schemas/RequestAppointmentForm';
import useModalStore from '../stores/toggleModalStore';
import getAppointment from '../services/repositories/scheduleAppointment';

const { screenWidth } = onResize();
const { locale, setLocale } = useI18n();

const actionModal = useModalStore();
const { visible } = storeToRefs(actionModal);

const quoteAppointment = ref(null);
const customer = reactive({
  name: '',
  rol: '',
  email: '',
  company: '',
  requests: '',
});
const initialState = {
  name: '',
  rol: '',
  email: '',
  company: '',
  requests: '',
};
const formErrors = reactive({
  name: false,
  rol: false,
  email: false,
  company: false,
  requests: false,
});

function resetFormErrors() {
  Object.keys(formErrors).forEach((key) => {
    formErrors[key] = false;
  });
}

async function validateForm() {
  try {
    resetFormErrors();
    await RequestAppointmentFormSchema.validate(customer, {
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

const closeModal = () => {
  visible.value = false;
  resetForm();
};

const submitForm = async () => {
  const quoteAppointmentData = await validateForm(quoteAppointment.value);

  if (!quoteAppointmentData) {
    return;
  }

  const body = {
    customer_name: customer.name,
    rol: customer.rol,
    corporate_mail: customer.email,
    company: customer.company,
    requests: customer.requests,
  };

  const setAppointment = await getAppointment.scheduleAppointment(body);

  if (setAppointment.status === 200) {
    closeModal();
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
    return;
  }
  closeModal();
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
  closeModal();
});
</script>

<style lang="scss" scoped>
.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: $primary-color-dark;
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.title {
  font-family: $font-family-royalIntegrity;
  font-size: $small;
  font-weight: 500;
  color: $quartiary-color;
  text-transform: uppercase;
  line-height: normal;
  margin: 0 auto;

  @media (min-width: 1160px) {
    font-size: $body;
  }

  @media (min-width: 1500px) {
    font-size: $medium;
  }
}

.close-icon {
  cursor: pointer;
  font-size: 25px;
  color: $quartiary-color;
  margin-right: 2%;
}

.modal-body {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__form {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 1159px) {
      width: 95%;
    }

    &--label {
      font-family: $font-family-royalIntegrity;
      font-size: $small;
      color: $text-primary-color;
      line-height: normal;
      align-self: flex-start;

      @media (min-width: 1160px) {
        font-size: $body;
      }

      @media (min-width: 1500px) {
        font-size: $medium;
      }
    }

    &--input {
      width: 97%;
      box-shadow: 0px 5px 10px #00000033;
      font-family: $font-family-royalIntegrity;
      font-size: $small;
      color: #7b7b7b;
      line-height: normal;
      border-radius: 10px;
      padding: 5px 10px;
      border: 1px solid #7b7b7b;

      @media (min-width: 1160px) {
        font-size: $body;
      }

      @media (min-width: 1500px) {
        font-size: $medium;
      }
    }
  }

  &__button {
    @include primary-button;
    border-radius: 32px;
    height: 50px;
    background-color: $primary-color-highlight;
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
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  margin: 15px 0 5px 0;

  &__is-required {
    line-height: normal;
    color: red;
  }
}
</style>
