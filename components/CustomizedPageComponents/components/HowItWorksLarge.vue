<template>
  <section class="works-section">
    <div class="works-section__title-container">
      <div class="works-section__title-container--text">
        <TextHighlighter text="customizedDevelopment.howItWorks.title.text"
          keywords="customizedDevelopment.howItWorks.title.keywords" />
      </div>
    </div>

    <div class="works-section__path">
      <img src="/images/new_design/customized/path.svg" alt="path" loading="lazy" width="1200" height="1400" />
    </div>

    <div class="works-section__path-image-items">
      <img src="/images/new_design/customized/path_one.svg" alt="path_one" class="path path-image__one" loading="lazy"
        width="450" height="450" />

      <img src="/images/new_design/customized/path_two.svg" alt="path_two" class="path path-image__two" loading="lazy"
        width="450" height="450" />

      <img src="/images/new_design/customized/path_three.svg" alt="path_three" class="path path-image__three"
        loading="lazy" width="450" height="450" />

      <img src="/images/new_design/customized/path_four.svg" alt="path_four" class="path path-image__four"
        loading="lazy" width="450" height="450" />

      <img src="/images/new_design/customized/path_five.svg" alt="path_five" class="path path-image__five"
        loading="lazy" width="550" height="550" />
    </div>

    <div class="works-section__path-text-items">

      <div class="path-item path-item-text__one">
        <TextHighlighter text="customizedDevelopment.howItWorks.itemOne.text"
          keywords="customizedDevelopment.howItWorks.itemOne.keywords" class="path-item__text" />
        <div class="path-item__number alt_one">
          <div class="number">1</div>
        </div>
      </div>

      <div class="path-item path-item-text__two path-item--reverse">
        <TextHighlighter text="customizedDevelopment.howItWorks.itemTwo.text"
          keywords="customizedDevelopment.howItWorks.itemTwo.keywords" class="path-item__text" />
        <div class="path-item__number alt_two">
          <div class="number">2</div>
        </div>
      </div>

      <div class="path-item path-item-text__three">
        <TextHighlighter text="customizedDevelopment.howItWorks.itemThree.text"
          keywords="customizedDevelopment.howItWorks.itemThree.keywords" class="path-item__text" />
        <div class="path-item__number alt_three">
          <div class="number">3</div>
        </div>
      </div>

      <div class="path-item-wrap path-item-text__four">
        <div class="path-item path-item--reverse">
          <TextHighlighter text="customizedDevelopment.howItWorks.itemFour.text_one"
            keywords="customizedDevelopment.howItWorks.itemFour.keywords" class="path-item__text" />
          <div class="path-item__number alt_four">
            <div class="number">4</div>
          </div>
        </div>
        <div class="path-item-complement">
          <TextHighlighter text="customizedDevelopment.howItWorks.itemFour.text_two"
            keywords="customizedDevelopment.howItWorks.itemFour.keywords"
            class="path-item__text path-item-complement__text" />
        </div>
      </div>

      <div class="path-item path-item-text__five">
        <TextHighlighter text="customizedDevelopment.howItWorks.itemFive.text"
          keywords="customizedDevelopment.howItWorks.itemFive.keywords" class="path-item__text" />
        <div class="path-item__number alt_five">
          <div class="number">5</div>
        </div>
      </div>

      <div class="path-item path-item-text__six path-item--reverse">
        <TextHighlighter text="customizedDevelopment.howItWorks.itemSix.text"
          keywords="customizedDevelopment.howItWorks.itemSix.keywords" class="path-item__text" />
        <div class="path-item__number alt_six">
          <div class="number">6</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import TextHighlighter from '~/components/TextHighlighter.vue';
</script>

<style lang="scss" scoped>
.works-section {
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  font-family: $font-family-royalIntegrity;
  color: $primary-color-dark;
  position: relative;
  box-sizing: border-box;
  padding-top: 5%;

  &__title-container {
    background-color: $primary-color-dark;
    box-sizing: border-box;
    height: auto;
    width: 550px;
    padding: 20px 50px;
    border-radius: 160px;
    text-align: center;

    position: absolute;
    left: 38%;
    top: 2.5%;

    @media (min-width: 928px) and (max-width: 1279px) {
      width: 450px;
      left: 28%;
      top: 2%;
    }

    @media (min-width: 1280px) and (max-width: 1365px) {
      width: 500px;
      left: 35%;
    }

    @media (min-width: 1366px) and (max-width: 1600px) {
      width: 500px;
    }

    &--text {
      color: #fff;
      font-weight: 300;
      font-size: $small-title;

      @media (min-width: 928px) and (max-width: 1279px) {
        font-size: $large-sm;
      }

      @media (min-width: 1280px) and (max-width: 1365px) {
        font-size: $section-title;
      }

      @media (min-width: 1366px) and (max-width: 1600px) {
        font-size: $section-title;
      }
    }
  }

  &__path {
    width: 100%;
    height: 100%;

    img {
      max-width: 90%;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &__path-image-items {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    & .path-image__one {
      position: absolute;
      right: 10%;
      top: 5%;
      height: 20%;
      width: auto;
    }

    & .path-image__two {
      position: absolute;
      left: 0%;
      top: 15%;
      width: 50%;
      height: 30%;
    }

    & .path-image__three {
      position: absolute;
      right: 0%;
      top: 40%;
      width: auto;
      height: 20%;
    }

    & .path-image__four {
      position: absolute;
      left: 48%;
      bottom: 31.5%;
      width: auto;
      height: 20%;

      @media (min-width: 928px) and (max-width: 1279px) {
        bottom: 33%;
        left: 50%;
      }

      @media (min-width: 1280px) and (max-width: 1500px) {
        left: 46%;
        bottom: 31%;
      }
    }

    & .path-image__five {
      position: absolute;
      right: 20%;
      bottom: 10%;
      width: auto;
      height: 20%;

      @media (min-width: 928px) and (max-width: 1279px) {
        bottom: 5%;
        right: 26%;
      }

      @media (min-width: 1366px) and (max-width: 1600px) {
        bottom: 8%;
        right: 26%;
      }
    }
  }

  &__path-text-items {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    & .path-item-text__one {
      position: absolute;
      top: 13.5%;
      left: 25%;
      width: 27%;

      @media (min-width: 928px) and (max-width: 1279px) {
        width: 42%;
        left: 10%;
      }

      @media (min-width: 1280px) and (max-width: 1365px) {
        width: 30%;
      }

      @media (min-width: 1366px) and (max-width: 1500px) {
        width: 30%;
        left: 20%;
      }


    }

    & .path-item-text__two {
      position: absolute;
      top: 32%;
      right: 10%;
      width: 37%;

      @media (min-width: 928px) and (max-width: 1279px) {
        width: 60%;
        right: 3%;
        top: 34%;
      }

      @media (min-width: 1280px) and (max-width: 1365px) {
        width: 45%;
      }

    }

    & .path-item-text__three {
      position: absolute;
      top: 50%;
      left: 5%;
      width: 40%;

      @media (min-width: 928px) and (max-width: 1279px) {
        width: 45%;
        left: 3%;
      }
    }

    & .path-item-text__four {
      position: absolute;
      bottom: 26.5%;
      right: 2%;
      width: 26%;


      @media (min-width: 928px) and (max-width: 1279px) {
        bottom: 20%;
        text-wrap: balance;
        width: 34%;
      }

      @media (min-width: 1366px) and (max-width: 1600px) {
        bottom: 22.5%;
        width: 30%;
      }
    }

    & .path-item-text__five {
      position: absolute;
      bottom: 30%;
      left: 5%;
      width: 40%;

      @media (min-width: 928px) and (max-width: 1279px) {
        width: 45%;
        left: 4%;
      }

      @media (min-width: 1280px) and (max-width: 1365px) {
        width: 40%;
      }

      @media (min-width: 1366px) and (max-width: 1600px) {
        width: 40%;
        bottom: 27%;
      }

    }

    & .path-item-text__six {
      position: absolute;
      bottom: 15%;
      left: 22%;
      width: 30%;

      @media (min-width: 928px) and (max-width: 1279px) {
        left: 5%;
        bottom: 10%;
        width: 40%;
      }

      @media (min-width: 1366px) and (max-width: 1600px) {
        left: 10%;
        bottom: 10%;
        width: 40%;
      }
    }
  }
}

.path-item {
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;

  &--reverse {
    flex-direction: row-reverse;
  }

  &__text {
    font-size: $body-lg;
    text-align: justify;
    font-weight: 300;
    line-height: calc($body-lg + 10px);
    width: 90%;

    @media (min-width: 928px) and (max-width: 1279px) {
      font-size: $body-sm;
      line-height: calc($body-sm + 5px);
    }

    @media (min-width: 1280px) and (max-width: 1365px) {
      font-size: $body;
      line-height: calc($body + 5px);
    }

    @media (min-width: 1366px) and (max-width: 1600px) {
      font-size: $medium;
      line-height: calc($medium + 10px);
    }

    @media (min-width: 1601px) and (max-width: 1800px) {
      font-size: $body-md;
      line-height: calc($body-md + 10px);
    }
  }

  &__number {
    font-size: $section-title;
    width: 10%;
    height: 100%;
    box-sizing: border-box;
    padding: 20px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    color: #fff;

    @media (min-width: 928px) and (max-width: 1279px) {
      font-size: $body-lg;
      padding: 15px 28px;
    }

    @media (min-width: 1280px) and (max-width: 1365px) {
      font-size: $body-extra-lg;
      padding: 20px 35px;
    }

    @media (min-width: 1366px) and (max-width: 1600px) {
      font-size: $body-extra-lg;
      padding: 20px 35px;
    }

    @media (min-width: 1601px) and (max-width: 1800px) {
      font-size: $extra-small-title;
      padding: 20px 35px;
    }

  }
}

.path-item-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  & .path-item {
    height: 100%;
    align-items: flex-end;
  }

  & .path-item__text {
    height: 100%;
    margin-bottom: 5px;
  }
}

.path-item-complement {
  width: 100%;

  &__text {
    width: 100%;
    height: 100%;
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
