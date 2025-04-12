<template>
  <div class="why-thori-large">
    <img src="/images/new_design/energytech/why_thori.svg" alt="thori" loading="lazy" width="1600" height="550" />
    <div class="why-thori-large__text text_one">
      <TextHighlighter text="energytech.whyThori.textOne.text" keywords="energytech.whyThori.textOne.keywords" />
    </div>
    <div class="why-thori-large__text text_two">
      <TextHighlighter text="energytech.whyThori.textTwo.text" keywords="energytech.whyThori.textTwo.keywords" />
    </div>

    <div class="why-thori-large__statText why-thori-large__statText--one">
      {{ $t('energytech.whyThori.statOne') }}
    </div>
    <div class="why-thori-large__statText why-thori-large__statText--two">
      {{ $t('energytech.whyThori.statTwo') }}
    </div>
    <div class="why-thori-large__statText why-thori-large__statText--three">
      {{ $t('energytech.whyThori.statThree') }}
    </div>
    <div class="why-thori-large__statText why-thori-large__statText--four">
      {{ $t('energytech.whyThori.statFour') }}
    </div>
  </div>
</template>

<script setup lang='ts'>
const TextHighlighter = defineAsyncComponent(() => import('~/components/TextHighlighter.vue'));
</script>

<style lang="scss" scoped>
@import "../scss/why_thori_large.module.scss";
</style>