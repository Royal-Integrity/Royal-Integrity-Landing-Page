<template>
  <section class="works-section-mobile">
    <div class="works-section-mobile__title-container">
      <TextHighlighter text="innovationConsulting.howItWorks.title.text"
        keywords="innovationConsulting.howItWorks.title.keywords" />
    </div>
    <div class="path-items">
      <div class="path-items__item" v-for="item, index in consultingItems" :key="index" :class="`${item.item_class} ${index % 2 === 0 ? 'path-items__item--to-right' : ''}`
        ">
        <div class="path-items__item--text-container">
          <div class="path-items__item--number" :class="item.number_color">
            {{ index + 1 }}
          </div>
          <div class="path-items__item--text">
            <TextHighlighter :text="item.text" :keywords="item.keywords" />
          </div>
        </div>
        <div class="path-items__item--image" :class="item.image_class">
          <img v-if="item.image !== null" :src="item.image" :alt="`path_${index + 1}`" loading="lazy" width="200"
            height="200" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import TextHighlighter from '~/components/TextHighlighter.vue';

const consultingItems = [
  {
    image: "/images/new_design/consulting/path_one.svg",
    image_class: 'image-md--small',
    text: "innovationConsulting.howItWorks.itemOne.text",
    keywords: "innovationConsulting.howItWorks.itemOne.keywords",
    item_class: '',
    number_color: "alt_one",
  },
  {
    image: "/images/new_design/consulting/path_two.svg",
    image_class: "image-lg",
    text: "innovationConsulting.howItWorks.itemTwo.text",
    keywords: "innovationConsulting.howItWorks.itemTwo.keywords",
    item_class: '',
    number_color: "alt_two",
  },
  {
    image: "/images/new_design/consulting/path_three.svg",
    image_class: "image-md",
    text: "innovationConsulting.howItWorks.itemThree.text",
    keywords: "innovationConsulting.howItWorks.itemThree.keywords",
    item_class: '',
    number_color: "alt_three",
  },
  {
    image: "/images/new_design/consulting/path_four.svg",
    image_class: "image-md",
    text: "innovationConsulting.howItWorks.itemFour.text",
    keywords: "innovationConsulting.howItWorks.itemFour.keywords",
    item_class: '',
    number_color: "alt_four",
  },
  {
    image: "/images/new_design/consulting/path_five.svg",
    image_class: "image-lg",
    text: "innovationConsulting.howItWorks.itemFive.text",
    keywords: "innovationConsulting.howItWorks.itemFive.keywords",
    item_class: 'image-left',
    number_color: "alt_five",
  },
  {
    image: null,
    image_class: '',
    text: "innovationConsulting.howItWorks.itemSix.text",
    keywords: "innovationConsulting.howItWorks.itemSix.keywords",
    item_class: '',
    number_color: "alt_six",
  },
]
</script>

<style lang="scss" scoped>
.works-section-mobile {
  width: 100%;
  min-height: 100vh;
  background-color: #fff;

  font-family: $font-family-royalIntegrity;
  color: $primary-color-dark;

  box-sizing: border-box;
  margin: 5% 0px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__title-container {
    height: auto;
    min-width: 300px;
    text-align: center;
    box-sizing: border-box;
    padding: 20px 10px;
    border-radius: 160px;
    background-color: $primary-color-dark;
    color: #fff;

    font-size: $mobile-title;
    font-weight: 300;

    @media (min-width: 400px) {
      font-size: $mobile-title-md;
      padding: 20px 20px;
    }

    @media (min-width: 450px) {
      font-size: $mobile-title-md;
      padding: 20px 30px;
    }

    @media (min-width: 575px) {
      font-size: $mobile-title-lg;
      padding: 20px 50px;
    }

    @media (min-width: 650px) {
      font-size: $section-title;
      padding: 20px 50px;
    }
  }
}

.path-items {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0px 20px;
  padding-top: 15%;

  background-image: url('/images/new_design/customized/res_mobile/path.svg');
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;

  &__item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 30px;
    gap: 10px;




    &--to-right {
      align-items: flex-end;

      & .path-items__item--text-container {
        flex-direction: row;
      }
    }

    &--text-container {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: flex-start;
      gap: 10px;
    }

    &--image {
      width: 50%;
      height: 50%;

      &.image-sm {
        width: 25%;
      }

      &.image-md {
        width: 70%;

        &--small {
          width: 55%;
        }
      }

      &.image-lg {
        width: 80%;
      }

      &.invert {
        transform: scaleX(-1);
      }

      img {
        width: 100%;
        height: auto;
        object-fit: contain;
      }

    }

    &--number {
      font-size: $body-sm;
      width: 10%;
      height: 100%;
      box-sizing: border-box;
      padding: 12px 18px;
      display: flex;
      justify-content: center;
      border-radius: 100%;
      color: #fff;

      @media (min-width: 450px) {
        font-size: $body;
      }

      @media (min-width: 575px) {
        padding: 15px 20px;
        font-size: $medium;
      }

      @media (min-width: 650px) {
        padding: 20px 20px;
        font-size: $body-md;
      }

      @media (min-width: 750px) {
        padding: 25px 20px;
      }
    }

    &--text {
      width: 90%;
      background-color: #fff;
      font-size: $small;
      text-align: justify;
      line-height: normal;

      @media (min-width: 450px) {
        font-size: $extra-small;
      }

      @media (min-width: 575px) {
        font-size: $body-sm;
      }

      @media (min-width: 650px) {
        font-size: $body;
      }
    }
  }
}

.image-center {
  align-items: center;
}

.image-left {
  align-items: flex-start;
}

.item-to-right {
  align-items: flex-end;
}

.last-item {
  & .path-items__item {
    &--number {
      @media (min-width: 650px) {
        padding: 15px 20px;
      }

      @media (min-width: 750px) {
        padding: 15px 20px;
      }
    }
  }
}

.alt_one {
  background-color: $primary-color-dark;
}

.alt_two {
  background-color: $primary-color-highlight;
}

.alt_three {
  background-color: #3590A7;
}

.alt_four {
  background-color: $secondary-color;
}

.alt_five {
  background-color: #1cabbc;
}

.alt_six {
  background-color: #0da2ca;
}
</style>