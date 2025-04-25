<template>
  <section ref="whoweareSection" class="whoweare-section">
    <div ref="image" class="whoweare-section__image">
      <video autoplay loop muted playsinline>
        <source src="/videos/logo.mp4" type="video/mp4">
      </video>
    </div>
    <div ref="info" class="whoweare-section__information">
      <div class="whoweare-section__information--progress">
        <el-steps :active="activeStep" direction="vertical" class="stepper" finish-status="success">
          <el-step v-for="step, index in steps" :key="index">
          </el-step>
        </el-steps>
      </div>
      <div class="information-content">
        <div class="information-content__title">
          <TextHighlighter text="home.whoweare.title.text" keywords="home.whoweare.title.keywords"
            highlightClass="text-highlighter-gradient" />
        </div>
        <div class="information-content__description">
          <span :class="{ 'visible': activeStep === 0 }" class="information-content__description--item">
            <TextHighlighter text="home.whoweare.slideOne.text" keywords="home.whoweare.slideOne.keywords" />
          </span>
          <span :class="{ 'visible': activeStep === 1 }" class="information-content__description--item">
            <TextHighlighter text="home.whoweare.slideTwo.text" keywords="home.whoweare.slideTwo.keywords" />
          </span>
          <div :class="{ 'visible': activeStep === 2 }" class="information-content__description--list">
            <TextHighlighter text="home.whoweare.slideThree.text" keywords="home.whoweare.slideThree.keywords" />
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import onResize from '@/Extend/onResize';
import TextHighlighter from '~/components/TextHighlighter.vue';

const { screenWidth } = onResize();
const whoweareSection = ref(null);
const image = ref(null);
const info = ref(null);
const isMobile = ref(false);

const activeStep = ref(0);
const steps = ref([
  { title: 'Paso 1' },
  { title: 'Paso 2' },
  { title: 'Paso 3' },
]);

let scrollDelta = 0;
const scrollThreshold = 150;
const lockScroll = () => document.body.style.overflow = 'hidden';
const unlockScroll = () => document.body.style.overflow = '';

const handleScroll = (event) => {
  scrollDelta += event.deltaY;

  if (scrollDelta >= scrollThreshold && activeStep.value < steps.value.length - 1) {
    activeStep.value += 1;
    scrollDelta = 0;
  }

  else if (scrollDelta <= 0 && activeStep.value > 0) {
    activeStep.value -= 1;
    scrollDelta = 0;
  }

  else if (scrollDelta < 0 && activeStep.value === 0) {
    scrollDelta = 0;
    unlockScroll();
    window.removeEventListener('wheel', handleScroll);
  }

  if (activeStep.value === steps.value.length - 1) {
    unlockScroll();
    window.removeEventListener('wheel', handleScroll);
  }
};

const changeItem = () => {
  activeStep.value = (activeStep.value + 1) % steps.value.length;
}

const getIsMobile = () => {
  if (screenWidth.value < 928) {
    isMobile.value = true;
  } else {
    isMobile.value = false;
  }
}

onMounted(() => {
  getIsMobile();
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
        whoweareSection.value.classList.add('whoweare-section--visible');
        image.value.classList.add('whoweare-section__image--visible');
        info.value.classList.add('whoweare-section__information--visible');
      }

      if (entry.isIntersecting && entry.intersectionRatio >= 0.95) {
        if (isMobile.value === false) {
          lockScroll();
          window.addEventListener('wheel', handleScroll);
        }
      }
    });
  }, { threshold: [0.2, 0.95] });

  observer.observe(whoweareSection.value);

  if (screenWidth.value <= 650) {
    const interval = setInterval(changeItem, 5000);
    return () => clearInterval(interval);
  }
});

onBeforeUnmount(() => {
  unlockScroll();
  window.removeEventListener('wheel', handleScroll);
});

</script>

<style lang="scss" scoped>
.whoweare-section {
  width: 100%;
  /* height: 100%; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 10px;
  font-family: $font-family-royalIntegrity;
  background-image: url('/public/images/new_design/home/BK4-05-06.webp');
  background-repeat: no-repeat;
  background-size: cover;
  // TRANSITION
  opacity: 0;
  transform: translateY(0px);
  transition: transform 0.8s ease-out, opacity 0.8s ease-out;

  @media (max-width: 650) {
    align-items: flex-start;
  }

  &--visible {
    opacity: 1;
    transform: translateY(0);
  }

  &__image {
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: transform 0.8s ease-out, opacity 0.8s ease-out;
    transform: translateX(-50px);

    &--visible {
      transform: translateX(0);
      opacity: 1;
    }

    video {
      width: 90%;
      height: 90%;
      border-radius: 100%;
    }

    @media (min-width: 650px) and (max-width: 927px) {
      width: 45%;
    }
  }

  &__information {
    opacity: 0;
    transition: transform 0.8s ease-out, opacity 0.8s ease-out;
    transform: translateX(50px);
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 40px;

    @media (min-width: 650px) and (max-width: 927px) {
      gap: 10px;
    }

    @media (max-width: 369px) {
      gap: 0px;
    }

    @media (min-width: 370px) and (max-width: 574px) {
      gap: 0px;
    }

    &--visible {
      transform: translate(0);
      opacity: 1;
    }

    &--progress {
      height: 300px;
      position: relative;

      @media (max-width: 369px) {
        height: 150px;
      }

      @media (min-width: 370px) and (max-width: 574px) {
        height: 150px;
      }

      @media (min-width: 650px) and (max-width: 927px) {
        height: 200px;
      }
    }
  }
}

.information-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 40px;
  width: 100%;


  @media (max-width: 369px) {
    gap: 10px;
  }

  @media (min-width: 370px) and (max-width: 574px) {
    gap: 10px;
  }

  &__title {
    font-size: $large-title;
    font-weight: 300;

    @media (min-width: 650px) and (max-width: 927px) {
      font-size: $extra-small-title;
    }

    @media (min-width: 928px) and (max-width: 1279px) {
      font-size: $section-subtitle;
    }

    @media (min-width: 1280px) and (max-width: 1365px) {
      font-size: $small-title;
    }

    @media (min-width: 1366px) and (max-width: 1600px) {
      font-size: $medium-title;
    }

  }

  &__description {
    width: 90%;
    font-size: $body-lg-2;
    line-height: normal;
    font-weight: 300;
    position: relative;

    @media (min-width: 650px) and (max-width: 927px) {
      font-size: $extra-small;
      line-height: 18px;
    }

    @media (min-width: 928px) and (max-width: 1279px) {
      font-size: $body-sm;
      line-height: 24px;
    }

    @media (min-width: 1280px) and (max-width: 1365px) {
      font-size: $body;
      line-height: 28px;
    }

    @media (min-width: 1366px) and (max-width: 1600px) {
      font-size: $body-md;
      line-height: 32px;
    }


    &--item {
      position: absolute;
      width: 100%;
      opacity: 0;
      transition: opacity 0.2s ease-in, display 0.2s ease-in;

      &.visible {
        opacity: 1;
      }
    }

    &--list {
      position: absolute;
      font-size: $body-lg-2;
      opacity: 0;
      transition: opacity 0.2s ease-in, display 0.2s ease-in;

      @media (min-width: 650px) and (max-width: 927px) {
        font-size: $extra-small;
        line-height: 18px;
      }

      @media (min-width: 928px) and (max-width: 1279px) {
        font-size: $body;
        line-height: 24px;
      }

      @media (min-width: 1280px) and (max-width: 1365px) {
        font-size: $body;
        line-height: 28px;
      }

      @media (min-width: 1366px) and (max-width: 1600px) {
        font-size: $body-md;
        line-height: 32px;
      }

      &.visible {
        opacity: 1;
      }

      ul {
        list-style: inside;
        margin-top: 10px;
      }

      li {
        font-size: $body-lg;

        @media (max-width: 369px) {
          font-size: 8px;
        }

        @media (min-width: 370px) and (max-width: 574px) {
          font-size: 8px;
        }

        @media (min-width: 575px) and (max-width: 927px) {
          font-size: $small;
        }

        @media (min-width: 928px) and (max-width: 1279px) {
          font-size: $body-sm;
          line-height: 24px;
        }

        @media (min-width: 1280px) and (max-width: 1365px) {
          font-size: $body;
          line-height: 28px;
        }

        @media (min-width: 1366px) and (max-width: 1600px) {
          font-size: 20px;
        }


      }
    }
  }
}

:deep() {
  .stepper {
    &.el-steps--vertical {
      & .el-step__head {
        &.is-success {
          border-color: #F6AF33;

          & .el-step__icon {
            background-color: #F6AF33;
            color: transparent;
            border: 0;
            width: 20px;
            height: 20px;

            @media (max-width: 369px) {
              width: 10px;
              height: 10px;
            }

            @media (min-width: 370px) and (max-width: 574px) {
              width: 10px;
              height: 10px;
            }
          }

          & .el-step__line {
            background: linear-gradient(90deg, #4E4A9E, #F6AF33);
            left: 10px;

            @media (max-width: 369px) {
              left: 4px;
              top: 2px;
              bottom: -4px;
            }

            @media (min-width: 370px) and (max-width: 574px) {
              left: 4px;
              top: 2px;
              bottom: -4px;
            }
          }
        }

        &.is-process {
          & .el-step__icon {
            color: transparent;
            background-color: #4E4A9E;
            border: 0;
            width: 20px;
            height: 20px;

            @media (max-width: 369px) {
              width: 10px;
              height: 10px;
            }

            @media (min-width: 370px) and (max-width: 574px) {
              width: 10px;
              height: 10px;
            }
          }

          & .el-step__line {
            left: 10px;
            background-color: #dcdcdc;

            @media (max-width: 369px) {
              left: 5px;
            }

            @media (min-width: 370px) and (max-width: 574px) {
              left: 5px;
            }
          }
        }

        &.is-wait {
          & .el-step__icon {
            color: transparent;
            background-color: $primary-color-dark;
            border: 4px solid #dcdcdc;
            width: 20px;
            height: 20px;

            @media (max-width: 369px) {
              border: 1px solid #dcdcdc;
              width: 10px;
              height: 10px;
            }

            @media (min-width: 370px) and (max-width: 574px) {
              border: 1px solid #dcdcdc;
              width: 10px;
              height: 10px;
            }
          }

          & .el-step__line {
            background-color: #dcdcdc;
            left: 10px;

            @media (max-width: 369px) {
              left: 5px;
            }

            @media (min-width: 370px) and (max-width: 574px) {
              left: 5px;
            }
          }
        }
      }
    }
  }

  .text-highlighter-gradient {
    background: linear-gradient(90deg, #4E4A9E, #F6AF33);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 300;
  }
}
</style>
