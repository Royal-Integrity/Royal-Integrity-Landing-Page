<template>
  <section class="ourpath-section">
    <div class="title-container">
      <h2 class="title-container__title">
        <TextHighlighter text="about.ourPath.title.text" keywords="about.ourPath.title.keywords"
          highlight-class="text-highlighter-gradient" />
      </h2>
    </div>

    <div class="main-container">
      <section class="info-container">
        <div class="info-container__countries">
          <div class="info-container__countries--bar" />
          <div class="info-container__countries--stats">
            <div class="info-container__description">
              <p class="info-container__description--text">
                <TextHighlighter text="about.ourPath.text" keywords="about.ourPath.keywords"
                  highlight-class="text-highlighter-bold-alt" />
              </p>
            </div>
          </div>
        </div>
      </section>

      <div class="image-container">
        <img src="/images/new_design/about_us/section_4.png" alt="world" loading="lazy" width="100" height="600" />
      </div>
    </div>
  </section>
</template>

<script setup>
import TextHighlighter from "@/components/TextHighlighter.vue";
</script>

<style lang="scss" scoped>
.ourpath-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  font-family: $font-family-royalIntegrity;
  color: $primary-color-dark;
}


.title-container {
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-top: 10%;

  @media (min-width: 1160px) {
    margin-top: 4%;
  }

  &__title {
    font-size: $large-subtitle;
    font-weight: 300;
    color: $primary-color-dark;
    line-height: normal;
    text-align: center;

    @media (max-width: 375px) {
      font-size: $mobile-title;
    }

    @media (min-width: 376px) and (max-width: 574px) {
      font-size: $mobile-title-md;
    }

    @media (min-width: 575px) and (max-width: 927px) {
      font-size: $mobile-title-lg;
    }


    @media (min-width: 928px) and (max-width: 1279px) {
      font-size: $section-subtitle;
    }

    @media (min-width: 1280px) and (max-width: 1365px) {
      font-size: $medium-subtitle;
    }

    @media (min-width: 1366px) and (max-width: 1600px) {
      font-size: $medium-subtitle;
    }
  }
}

.main-container {
  width: 100%;
  box-sizing: border-box;
  padding: 1%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 50px;

  @media (max-width: 927px) {
    flex-direction: column-reverse;
  }

  @media (min-width: 928px) and (max-width: 1279px) {
    position: relative;
  }

  @media (min-width: 1280px) and (max-width: 1365px) {
    position: relative;
  }

  @media (min-width: 1366px) and (max-width: 1600px) {
    position: relative;
  }
}

.image-container {
  text-align: center;
  width: 40%;

  img {
    width: 100%;
    height: auto;
    border-radius: 50px;
    mask-image: linear-gradient(to bottom,
        transparent 0%,
        black 0%,
        black 90%,
        transparent 100%);
  }

  @media (max-width: 375px) {
    width: 100%;
  }

  @media (min-width: 376px) and (max-width: 574px) {
    width: 100%;
  }

  @media (min-width: 575px) and (max-width: 927px) {
    width: 100%;
  }

}

.info-container {
  width: 36%;
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 30px;
  box-sizing: border-box;

  @media (max-width: 375px) {
    width: 100%;
    gap: 20px;
    padding: 0px 25px;
  }

  @media (min-width: 376px) and (max-width: 574px) {
    width: 100%;
    gap: 20px;
    padding: 0px 25px;
  }

  @media (min-width: 575px) and (max-width: 927px) {
    width: 100%;
    gap: 20px;
    padding: 0px 25px;
  }

  @media (min-width: 928px) and (max-width: 1279px) {
    top: 20%;
    left: 5%;
    width: 47%;
    gap: 10px;
  }

  @media (min-width: 1280px) and (max-width: 1365px) {
    margin-bottom: 0;
    bottom: 5%;
    left: 5%;
    width: 50%;
  }

  @media (min-width: 1366px) and (max-width: 1600px) {
    margin-bottom: 0;
    bottom: 5%;
    left: 5%;
    width: 50%;
  }

  &__countries {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;

    &--bar {
      height: 150px;
      border-right: 0.1rem solid $primary-color;

      @media (max-width: 927px) {
        height: 100px;
        border-width: 0.2rem;
      }

      @media (min-width: 928px) and (max-width: 1279px) {
        height: 100px;
      }

    }

    &--stats {
      width: auto;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }
  }

  &__description {

    &--text {
      align-self: center;
      line-height: normal;
      font-size: $body-lg;
      font-weight: 300;
      text-align: justify;

      @media (max-width: 375px) {
        font-size: $small;
        text-align: justify;
      }

      @media (min-width: 376px) and (max-width: 574px) {
        font-size: $extra-small;
        text-align: justify;
      }

      @media (min-width: 575px) and (max-width: 927px) {
        font-size: $body-sm;
        text-align: justify;
      }

      @media (min-width: 928px) and (max-width: 1279px) {
        font-size: $body;
        text-align: justify;
      }

      @media (min-width: 1280px) and (max-width: 1365px) {
        font-size: $body-md;
      }

      @media (min-width: 1366px) and (max-width: 1600px) {
        font-size: $body-md;
      }
    }
  }

}

.span {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;

  &__numbers {

    font-size: 28px;
    font-family: $font-family-royalIntegrity;
    text-align: left;
    font-weight: 600;
    margin: 10px 0;

    &.dark {
      color: $primary-color-dark;
    }

    &.light {
      color: $text-secondary-color;
    }

    @media (max-width: 375px) {
      font-size: $body-md;
    }

    @media (min-width: 376px) and (max-width: 574px) {
      font-size: $body-md;
    }

    @media (min-width: 575px) and (max-width: 927px) {
      font-size: $body-lg;
    }

    @media (min-width: 1160px) {
      font-size: 30px;
    }

    @media (min-width: 1800px) {
      font-size: $large;
    }
  }

  &__names {
    color: $primary-color-dark;
    font-size: 24px;
    font-family: $font-family-royalIntegrity;
    text-align: left;
    font-weight: 300;
    margin: 10px 0;

    @media (max-width: 375px) {
      font-size: $body-md;
    }

    @media (min-width: 376px) and (max-width: 574px) {
      font-size: $body-md;
    }

    @media (min-width: 575px) and (max-width: 927px) {
      font-size: $body-lg;
    }

    @media (min-width: 1160px) {
      font-size: 30px;
    }

    @media (min-width: 1800px) {
      font-size: $large;
    }
  }
}

.highlight {
  background: $gradient-color;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
}
</style>
