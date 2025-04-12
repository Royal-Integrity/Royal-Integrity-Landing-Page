<template>
  <section class="products-section">
    <div class="products-section__content">
      <div v-for="product, index in products" :key="index" class="product-container"
        :class="['product', { 
          'product-right': index % 2 !== 0,
          'product-left': index % 2 === 0
        }, product.class]">
        <div class="product-container__information">
          <div class="product-container__information--title">
            <TextHighlighter :text="product.title.text" :keywords="product.title.keywords" />
          </div>
          <div class="divider"></div>
          <div class="product-container__information--text">
            {{ $t(product.text) }}
          </div>
        </div>
        <div class="product-container__image">
          <img :src="product.img" :alt="$t(product.alt)" loading="eager" priority width="1080" height="800"/>
        </div>
      </div>
      <img src="/images/new_design/stories/section_2_1.svg" alt="connection" class="connection_img between_one_two" loading="eager" priority />
      <img src="/images/new_design/stories/section_3_1.svg" alt="connection" class="connection_img between_two_three" loading="eager" priority />
      <img src="/images/new_design/stories/section_4_1.svg" alt="connection" class="connection_img between_three_four" loading="eager" priority />
      <img src="/images/new_design/stories/section_5_1.svg" alt="connection" class="connection_img between_four_five" loading="eager" priority />
      <img src="/images/new_design/stories/section_6_1.svg" alt="connection" class="connection_img between_five_six" loading="eager" priority />
      <img src="/images/new_design/stories/section_7_1.svg" alt="connection" class="connection_img between_six_seven" loading="eager" priority />
    </div>
  </section>
</template>

<script setup>
import TextHighlighter from '~/components/TextHighlighter.vue';

const products = [
  {
    img: '/images/new_design/stories/section_2.svg',
    alt: 'successStories.ourProducts.itemOne.alt',
    text: 'successStories.ourProducts.itemOne.text',
    title: {
      text: 'successStories.ourProducts.itemOne.title.text',
      keywords: 'successStories.ourProducts.itemOne.title.keywords',
    },
    class: "section_one",
  },
  {
    img: '/images/new_design/stories/section_3.svg',
    alt: 'successStories.ourProducts.itemTwo.alt',
    text: 'successStories.ourProducts.itemTwo.text',
    title: {
      text: 'successStories.ourProducts.itemTwo.title.text',
      keywords: 'successStories.ourProducts.itemTwo.title.keywords',
    },
    class: "section_two",
  },
  {
    img: '/images/new_design/stories/section_4.svg',
    alt: 'successStories.ourProducts.itemThree.alt',
    text: 'successStories.ourProducts.itemThree.text',
    title: {
      text: 'successStories.ourProducts.itemThree.title.text',
      keywords: 'successStories.ourProducts.itemThree.title.keywords',
    },
    class: "section_three",
  },
  {
    img: '/images/new_design/stories/section_5.svg',
    alt: 'successStories.ourProducts.itemFour.alt',
    text: 'successStories.ourProducts.itemFour.text',
    title: {
      text: 'successStories.ourProducts.itemFour.title.text',
      keywords: 'successStories.ourProducts.itemFour.title.keywords',
    },
    class: "section_four",
  },
  {
    img: '/images/new_design/stories/section_6.svg',
    alt: 'successStories.ourProducts.itemFive.alt',
    text: 'successStories.ourProducts.itemFive.text',
    title: {
      text: 'successStories.ourProducts.itemFive.title.text',
      keywords: 'successStories.ourProducts.itemFive.title.keywords',
    },
    class: "section_five",
  },
  {
    img: '/images/new_design/stories/section_7.svg',
    alt: 'successStories.ourProducts.itemSix.alt',
    text: 'successStories.ourProducts.itemSix.text',
    title: {
      text: 'successStories.ourProducts.itemSix.title.text',
      keywords: 'successStories.ourProducts.itemSix.title.keywords',
    },
    class: "section_six",
  },
  {
    img: '/images/new_design/stories/section_8.svg',
    alt: 'successStories.ourProducts.itemSeven.alt',
    text: 'successStories.ourProducts.itemSeven.text',
    title: {
      text: 'successStories.ourProducts.itemSeven.title.text',
      keywords: 'successStories.ourProducts.itemSeven.title.keywords',
    },
    class: "section_seven",
  },
];
</script>

<style lang="scss" scoped>
.products-section {
  width: 100%;
  box-sizing: border-box;
  font-family: $font-family-royalIntegrity;
  color: $primary-color-dark;

  &__content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap: 20px;
    position: relative;
  }
}

.product-container {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  @media (min-width: 928px) and (max-width: 1279px) {
    position: relative;
  }

  &__information {
    width: 36%;
    font-weight: 300;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 5px;

    @media (max-width: 369px) {
      width: 40%;
      margin-left: 5px;
    }

    @media (min-width: 370px) and (max-width: 574px) {
      width: 40%;
      margin-left: 5px;
    }

    @media (min-width: 928px) and (max-width: 1279px) {}

    @media (min-width: 1280px) and (max-width: 1365px) {}

    @media (min-width: 1366px) and (max-width: 1600px) {}

    &--title {
      width: 100%;
      font-size: $large;
      line-height: 50px;

      @media (max-width: 369px) {
        font-size: 8px;
        line-height: normal;
      }

      @media (min-width: 370px) and (max-width: 574px) {
        font-size: 8px;
        line-height: normal;
      }

      @media (min-width: 575px) and (max-width: 927px) {
        font-size: $medium;
        line-height: normal;
      }

      @media (min-width: 928px) and (max-width: 1279px) {
        font-size: $body-lg;
        line-height: calc($body-lg + 5px);
      }

      @media (min-width: 1280px) and (max-width: 1365px) {
        font-size: $body-extra-lg;
        line-height: calc($body-extra-lg + 5px);
      }

      @media (min-width: 1366px) and (max-width: 1600px) {
        font-size: $large-sm;
        line-height: calc($large-sm + 5px);
      }
    }

    &--text {
      width: 100%;
      font-size: $body-lg;
      line-height: 34px;
      text-align: justify;

      @media (max-width: 369px) {
        font-size: 6px;
        line-height: normal;
      }

      @media (min-width: 370px) and (max-width: 574px) {
        font-size: 6px;
        line-height: normal;
      }

      @media (min-width: 575px) and (max-width: 927px) {
        font-size: $small;
        line-height: 24px;
      }

      @media (min-width: 928px) and (max-width: 1279px) {
        font-size: $extra-small;
        line-height: calc($extra-small + 5px);
      }

      @media (min-width: 1280px) and (max-width: 1365px) {
        font-size: $body;
        line-height: calc($body + 5px);
      }

      @media (min-width: 1366px) and (max-width: 1600px) {
        font-size: $medium;
        line-height: calc($medium + 5px);
      }
    }
  }

  &__image {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: 369px) {
      width: 57%;
    }

    @media (min-width: 370px) and (max-width: 574px) {
      width: 57%;
    }

    img {
      width: 100%;
      height: auto;
      z-index: 5;
    }
  }
}

.product-left {
  & .product-container {
    &__information {
      @media (min-width: 928px) and (max-width: 1279px) {
        width: 50%;
        position: absolute;
        top: 25%;
        left: 3%;
        z-index: 90;
      }
    }
  }
}

.product-right {
  width: 100%;
  flex-direction: row-reverse;

  & .product-container {
    &__information {
      align-items: flex-end;

      @media (max-width: 369px) {
        margin-right: 5px;
      }

      @media (min-width: 370px) and (max-width: 574px) {
        margin-right: 5px;
      }

      @media (min-width: 928px) and (max-width: 1279px) {
        width: 40%;
        position: absolute;
        top: 20%;
        right: 3%;
        z-index: 90;
      }


      &--title {
        text-align: right;
      }
    }
  }
}

.divider {
  @include divider;
  margin-bottom: 10px;
  margin-top: 10px;
  width: 30%;
  border-width: 1px;

  @media (max-width: 369px) {
    width: 40%;
    margin-bottom: 0px;
    margin-top: 0px;
  }

  @media (min-width: 370px) and (max-width: 574px) {
    width: 40%;
    margin-bottom: 0px;
    margin-top: 0px;
  }
}

.connection_img {
  position: absolute;
  z-index: 1;
  width: 68.4%;


  &.between_one_two {
    top: 5%;
    left: 23.5%;
  }

  &.between_two_three {
    top: 17%;
    left: 19.5%;
    width: 73%;
  }

  &.between_three_four {
    top: 31%;
    left: 17%;
    transform: rotate(-8deg);
    width: 62%;

    @media (max-width: 369px) {
      width: 64.5%
    }

    @media (min-width: 370px) and (max-width: 574px) {
      width: 64.5%
    }
  }

  &.between_four_five {
    top: 46%;
    left: 17%;
  }

  &.between_five_six {
    top: 60.1%;
    left: 14.5%;
    width: 72%;
  }

  &.between_six_seven {
    top: 75%;
    left: 10%;
    width: 92%;
    transform: rotate(5deg);
  }
}

.section_one {
  z-index: 0;
}

.section_two {
  z-index: 2;

  & .product-container__information {
    @media (min-width: 928px) and (max-width: 1279px) {
      width: 50%;
      top: 10%;
    }

    &--title {
      @media (min-width: 928px) and (max-width: 1279px) {
        width: 90%;
      }
    }
  }
}

.section_three {
  z-index: 2;
  & .product-container__information {
    @media (min-width: 928px) and (max-width: 1279px) {
      width: 41%;
    }
  }
}

.section_four {
  z-index: 2;

  & .product-container {
    &__information {
      &--title {
        font-weight: 600;

        span {
          font-weight: 300;
        }
      }
    }
  }
}

.section_five {
  z-index: 2;

  & .product-container__information {
    @media (min-width: 928px) and (max-width: 1279px) {
      width: 41%;
    }
  }
}

.section_six {
  z-index: 2;

  &.product-right {
    & .product-container__information {
    @media (min-width: 928px) and (max-width: 1279px) {
        width: 50%;
      }
    }
  }
}

.section_seven {
  z-index: 2;

  & .product-container__information {
    @media (min-width: 928px) and (max-width: 1279px) {
      width: 45%;
      top: 50%;
    }

    &--title {
      @media (min-width: 928px) and (max-width: 1279px) {
        width: 60%;
      }
    }
  }
}
</style>
