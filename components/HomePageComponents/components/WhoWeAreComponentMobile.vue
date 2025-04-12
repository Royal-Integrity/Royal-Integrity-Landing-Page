<template>
  <div class="whoweare-mobile">
    <div class="whoweare-mobile__video">
      <video autoplay loop muted playsinline>
        <source src="/videos/planet.webm" type="video/webm">
      </video>
    </div>
    <div class="whoweare-mobile__content">
      <div class="whoweare-mobile__content--title">
        <TextHighlighter text="home.whoweare.title.text" keywords="home.whoweare.title.keywords"
          highlightClass="text-highlighter-gradient" />
      </div>
      <div class="whoweare-mobile__content--description">

        <span :class="{ 'visible': activeStep === 0 }" class="whoweare-mobile__content--description--item">
          <TextHighlighter text="home.whoweare.slideOne.text" keywords="home.whoweare.slideOne.keywords" />
        </span>

        <span :class="{ 'visible': activeStep === 1 }" class="whoweare-mobile__content--description--item">
          <TextHighlighter text="home.whoweare.slideTwo.text" keywords="home.whoweare.slideTwo.keywords" />
        </span>

        <div :class="{ 'visible': activeStep === 2 }" class="whoweare-mobile__content--description--list">
          <TextHighlighter text="home.whoweare.slideThree.text" keywords="home.whoweare.slideThree.keywords" />
          <ul>
            <li>{{ $t('home.whoweare.slideThree.itemOne') }}</li>
            <li>{{ $t('home.whoweare.slideThree.itemTwo') }}</li>
            <li>{{ $t('home.whoweare.slideThree.itemThree') }}</li>
          </ul>
        </div>

      </div>
      <div class="whoweare-mobile__content--progress">

        <el-steps :active="activeStep" class="stepper" finish-status="success">
          <el-step v-for="step, index in steps" :key="index">
          </el-step>
        </el-steps>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

import TextHighlighter from '~/components/TextHighlighter.vue';

const activeStep = ref(0);
const steps = ref([
  { title: 'Paso 1' },
  { title: 'Paso 2' },
  { title: 'Paso 3' },
]);

const changeItem = () => {
  activeStep.value = (activeStep.value + 1) % steps.value.length;
}

onMounted(() => {
  const interval = setInterval(changeItem, 5000);
  return () => clearInterval(interval);
})
</script>

<style lang="scss" scoped>
.whoweare-mobile {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-family: $font-family-royalIntegrity;
  color: $primary-color-dark;
  margin-bottom: 10%;

  &__video {
    width: 100%;
    height: auto;

    video {
      width: 100%;
      height: auto;
    }
  }

  &__content {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 10px 20px 15px 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;

    @media (min-width: 390px) {
      width: 95%;
    }

    @media (min-width: 570px) {
      width: 90%;
    }

    &--title {
      font-size: $mobile-title;

      @media (min-width: 575px) {
        font-size: $mobile-title-md;
      }

      @media (min-width: 650px) {
        font-size: $mobile-title-lg;
      }
    }

    &--description {
      font-size: $small;
      line-height: 16px;
      position: relative;
      width: 100%;
      min-height: 90px;

      @media (min-width: 575px) {
        font-size: $extra-small;
      }

      @media (min-width: 650px) {
        font-size: $body-sm;
      }

      &--item {
        width: 100%;
        position: absolute;
        opacity: 0;
        transition: opacity 0.2s ease-in, display 0.2s ease-in;
        text-align: justify;
        line-height: 20px;

        &.visible {
          opacity: 1;
        }
      }

      &--list {
        width: 100%;
        position: absolute;
        opacity: 0;
        transition: opacity 0.2s ease-in, display 0.2s ease-in;

        &.visible {
          opacity: 1;
        }

        ul {
          list-style: inside;
          margin-top: 10px;
        }

        li {
          font-size: $small;
        }
      }
    }

    &--progress {
      width: 100%;
      height: 25px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

  }
}

:deep() {
  .stepper {
    &.el-steps--horizontal {
      & .el-step__head {
        &.is-success {
          border-color: #6306fc;

          & .el-step__icon {
            background-color: #6306fc;
            color: transparent;
            border: 0;
            width: 12px;
            height: 12px;
          }

          & .el-step__line {
            background: linear-gradient(to right, #6306fc 10%, #24b0b3);
            top: 5px
          }
        }

        &.is-process {
          & .el-step__icon {
            color: transparent;
            background-color: #24b0b3;
            border: 0;
            width: 12px;
            height: 12px;
          }

          & .el-step__line {
            background-color: #dcdcdc;
            top: 5px
          }
        }

        &.is-wait {
          & .el-step__icon {
            color: transparent;
            background-color: $primary-color-dark;
            border: 3px solid #dcdcdc;
            width: 12px;
            height: 12px;
          }

          & .el-step__line {
            background-color: #dcdcdc;
            top: 5px
          }
        }
      }
    }
  }
}
</style>