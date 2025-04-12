<template>
    <section class="products-section-mobile">
      <div class="products-section-mobile__content">
        <div v-for="product, index in products" :key="index" class="product-container"
        :class="['product', { 
          'product-right': index % 2 !== 0,
          'product-left': index % 2 === 0
        }, product.class]">
          <div class="product-container__information">
            <TextHighlighter :text="product.title.text" :keywords="product.title.keywords" />
          </div>
          <div class="product-container__image">
            <img :src="product.img" :alt="$t(product.alt)" loading="eager" priority width="1080" height="800"/>
          </div>
        </div>
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
.products-section-mobile {
  width: 100%;
  box-sizing: border-box;
  font-family: $font-family-royalIntegrity;
  color: $primary-color-dark;

  &__content {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
}

.product-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  &__information {
    text-align: left;
    font-size: $body;
    line-height: normal;
    width: 75%;
    margin: 0px 5%;

    @media (min-width: 570px) {
      font-size: $medium;
    }

    @media (min-width: 650px) {
      font-size: $body-lg;
    }
  }

  &__image {
    width: 100%;

    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }
}

.product-right {
  width: 100%;

  &.product-container {
    align-items: flex-end;
    & .product-container__information {
      text-align: right;
    }
  }
}
</style>