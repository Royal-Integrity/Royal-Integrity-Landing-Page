<template>
    <div class="why-legal-large">
        <img src="/images/new_design/logtech/why_logtech.svg" alt="logtech" loading="lazy" width="1600" height="550"/>
      <div class="why-legal-large__text text_one">
        <TextHighlighter text="logtech.whyLogtech.textOne.text" keywords="logtech.whyLogtech.textOne.keywords" />
      </div>
      <div class="why-legal-large__text text_two">
        <TextHighlighter text="logtech.whyLogtech.textTwo.text" keywords="logtech.whyLogtech.textTwo.keywords" />
      </div>
      <div class="why-legal-large__statText why-legal-large__statText--one">
        {{ $t('logtech.whyLogtech.statOne') }}
      </div>
      <div class="why-legal-large__statText why-legal-large__statText--two">
        {{ $t('logtech.whyLogtech.statTwo') }}
      </div>
      <div class="why-legal-large__statText why-legal-large__statText--three">
        {{ $t('logtech.whyLogtech.statThree') }}
      </div>
      <div class="why-legal-large__statText why-legal-large__statText--four">
        {{ $t('logtech.whyLogtech.statFour') }}
      </div>
    </div>
</template>
  
<script setup lang='ts'>
  const TextHighlighter = defineAsyncComponent(() => import('~/components/TextHighlighter.vue'));
</script>
  
<style lang="scss" scoped>
@import "../scss/why_logtech_large.module.scss";
</style>