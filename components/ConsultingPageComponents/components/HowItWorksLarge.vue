<template>
  <section class="works-section">
    <div class="works-section__title-container">
      <div class="works-section__title-container--text">
        <TextHighlighter text="innovationConsulting.howItWorks.title.text"
        keywords="innovationConsulting.howItWorks.title.keywords" />
      </div>
    </div>

    <div class="works-section__path">
      <img src="/images/new_design/consulting/path.svg" alt="path" loading="lazy" width="1200" height="1400" />
    </div>

    <div class="works-section__path-image-items">
      <img src="/images/new_design/consulting/path_one.svg" alt="path_one" class="path path-image__one" loading="lazy"
      width="150" height="450" />

      <img src="/images/new_design/consulting/path_two.svg" alt="path_two" class="path path-image__two" loading="lazy"
      width="450" height="450" />

      <img src="/images/new_design/consulting/path_three.svg" alt="path_three" class="path path-image__three" loading="lazy"
      width="450" height="450" />

      <img src="/images/new_design/consulting/path_four.svg" alt="path_four" class="path path-image__four" loading="lazy"
      width="450" height="450" />

      <img src="/images/new_design/consulting/path_five.svg" alt="path_five" class="path path-image__five" loading="lazy"
      width="550" height="550" />
    </div>

    <div class="works-section__path-text-items">

      <div class="path-item path-item-text__one">
        <TextHighlighter text="innovationConsulting.howItWorks.itemOne.text"
          keywords="innovationConsulting.howItWorks.itemOne.keywords" class="path-item__text" />
        <div class="path-item__number alt_one">
          <div class="number">1</div>
        </div>
      </div>

      <div class="path-item path-item-text__two path-item--reverse">
        <TextHighlighter text="innovationConsulting.howItWorks.itemTwo.text"
          keywords="innovationConsulting.howItWorks.itemTwo.keywords" class="path-item__text" />
        <div class="path-item__number alt_two">
          <div class="number">2</div>
        </div>
      </div>

      <div class="path-item path-item-text__three">
        <TextHighlighter text="innovationConsulting.howItWorks.itemThree.text"
          keywords="innovationConsulting.howItWorks.itemThree.keywords" class="path-item__text" />
        <div class="path-item__number alt_three">
          <div class="number">3</div>
        </div>
      </div>

      <div class="path-item path-item-text__four path-item--wrap path-item--reverse">
        <TextHighlighter text="innovationConsulting.howItWorks.itemFour.text"
          keywords="innovationConsulting.howItWorks.itemFour.keywords" class="path-item__text" />
        <div class="path-item__number alt_four">
          <div class="number">4</div>
        </div>
      </div>

      <div class="path-item path-item-text__five">
        <TextHighlighter text="innovationConsulting.howItWorks.itemFive.text"
          keywords="innovationConsulting.howItWorks.itemFive.keywords" class="path-item__text" />
        <div class="path-item__number alt_five">
          <div class="number">5</div>
        </div>
      </div>

      <div class="path-item path-item-text__six path-item--reverse">
        <TextHighlighter text="innovationConsulting.howItWorks.itemSix.text"
          keywords="innovationConsulting.howItWorks.itemSix.keywords" class="path-item__text" />
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
      left: 25%;
      top: 2%;
    }

    @media (min-width: 1280px) and (max-width: 1365px) {
      width: 450px;
    }

    @media (min-width: 1366px) and (max-width: 1600px) {
      width: 500px;
    }

    &--text {
      color: #fff;
      font-weight: 300;
      font-size: $small-title;

      @media (min-width: 928px) and (max-width: 1279px) {
        font-size: $section-subtitle;
      }

      @media (min-width: 1280px) and (max-width: 1365px) {
        font-size: $section-subtitle;
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
      left: 14%;
      top: 18%;
      width: 30%;
      height: 30%;
    }

    & .path-image__three {
      position: absolute;
      right: 2.5%;
      top: 40%;
      width: auto;
      height: 15%;
    }

    & .path-image__four {
      position: absolute;
      left: 53%;
      bottom: 35%;
      width: auto;
      height: 18%;
    }

    & .path-image__five {
      position: absolute;
      right: 20%;
      bottom: 12%;
      width: auto;
      height: 20%;
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
      top: 13%;
      left: 20%;
      width: 32%;

      @media (min-width: 928px) and (max-width: 1279px) {
        width: 40%;
        left: 10%;
      }

      @media (min-width: 1280px) and (max-width: 1365px) {}
    }

    & .path-item-text__two {
      position: absolute;
      top: 30%;
      right: 5%;
      width: 45%;

      @media (min-width: 928px) and (max-width: 1279px) {
        width: 50%;
        right: 3%;
      }
    }

    & .path-item-text__three {
      position: absolute;
      top: 50%;
      left: 12%;
      width: 35%;

      @media (min-width: 928px) and (max-width: 1279px) {
        width: 45%;
        left: 5%;
      }
    }

    & .path-item-text__four {
      position: absolute;
      top: 65%;
      right: 3%;
      width: 28%;

      @media (max-width: 1600px) {
        top: 60%;
        right: 1%;
        width: 30%;
      }
    }

    & .path-item-text__five {
      position: absolute;
      bottom: 30%;
      left: 15%;
      width: 38%;

      @media (min-width: 928px) and (max-width: 1279px) {
        width: 55%;
        left: 3%;
        bottom: 32.5%;
      }

      @media (min-width: 1280px) and (max-width: 1365px) {
        width: 36%;
      }

    }

    & .path-item-text__six {
      position: absolute;
      bottom: 13%;
      left: 22%;
      width: 32%;

      @media (min-width: 928px) and (max-width: 1279px) {
        width: 35%;
      }

      @media (min-width: 1280px) and (max-width: 1365px) {}
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

  &--wrap {
    @media (max-width: 1600px) {
      flex-direction: column-reverse;
      gap: 5px;
    }
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
    justify-content :center;
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
