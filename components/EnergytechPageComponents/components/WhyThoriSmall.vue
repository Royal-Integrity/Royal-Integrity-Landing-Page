<template>
    <div class="why-thori-small">
        <div class="why-thori-small__information">
            <TextHighlighter text="energytech.whyThori.textOne.text" keywords="energytech.whyThori.textOne.keywords" />
            <TextHighlighter text="energytech.whyThori.textTwo.text" keywords="energytech.whyThori.textTwo.keywords" />
        </div>
        <div class="why-thori-small__image">
            <img src="/images/new_design/energytech/res_928/why_energytech.svg" alt="thori" loading="lazy" width="1280" height="550"/>

            <div class="graph-stat graph-stat__one">95%</div>
            <div class="graph-stat graph-stat__two">20%</div>
            <div class="graph-stat graph-stat__three">5+</div>
            <div class="graph-stat graph-stat__four">20+</div>

            <div class="why-thori-small__statText why-thori-small__statText--one">
                {{ $t('energytech.whyThori.statOne') }}
            </div>
            <div class="why-thori-small__statText why-thori-small__statText--two">
                {{ $t('energytech.whyThori.statTwo') }}
            </div>
            <div class="why-thori-small__statText why-thori-small__statText--three">
                {{ $t('energytech.whyThori.statThree') }}
            </div>
            <div class="why-thori-small__statText why-thori-small__statText--four">
                {{ $t('energytech.whyThori.statFour') }}
            </div>

        </div>
    </div>
</template>
  
<script setup lang='ts'>
const TextHighlighter = defineAsyncComponent(() => import('~/components/TextHighlighter.vue'));
</script>
  
<style lang="scss" scoped>
@import "../scss/why_thori_small.module.scss";
</style>