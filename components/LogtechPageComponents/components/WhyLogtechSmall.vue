<template>
    <div class="why-legal-small">
      <div class="why-legal-small__information">
        <TextHighlighter text="logtech.whyLogtech.textOne.text" keywords="logtech.whyLogtech.textOne.keywords" />
        <TextHighlighter text="logtech.whyLogtech.textTwo.text" keywords="logtech.whyLogtech.textTwo.keywords" />
      </div>

      <div class="why-legal-small__image">
        <img src="/images/new_design/logtech/res_928/why_logtech.svg" alt="logtech" loading="lazy" width="1600" height="550"/>

        <div class="graph-stat graph-stat__one">100%</div>
        <div class="graph-stat graph-stat__two">25%</div>
        <div class="graph-stat graph-stat__three">600+</div>
        <div class="graph-stat graph-stat__four">1M+</div>

        <div class="why-legal-small__statText why-legal-small__statText--one">
          {{ $t('logtech.whyLogtech.statOne') }}
        </div>
        <div class="why-legal-small__statText why-legal-small__statText--two">
          {{ $t('logtech.whyLogtech.statTwo') }}
        </div>
        <div class="why-legal-small__statText why-legal-small__statText--three">
          {{ $t('logtech.whyLogtech.statThree') }}
        </div>
        <div class="why-legal-small__statText why-legal-small__statText--four">
          {{ $t('logtech.whyLogtech.statFour') }}
        </div>
      </div>
    </div>
</template>
  
<script setup lang='ts'>
const TextHighlighter = defineAsyncComponent(() => import('~/components/TextHighlighter.vue'));
</script>
  
<style lang="scss" scoped>
  @import "../scss/why_logtech_small.module.scss";
</style>