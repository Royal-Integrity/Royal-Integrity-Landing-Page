<template>
    <section class="why-thori-mobile">
        <div class="why-thori-mobile__information">
            <TextHighlighter text="energytech.whyThori.textMobile.text" keywords="energytech.whyThori.textMobile.keywords" />
        </div>
        <div class="why-thori-mobile__image">
            <img src="/images/new_design/energytech/res_mobile/why_energytech.svg" alt="thori" loading="lazy" width="300" height="300"/>
        </div>
        <div class="why-thori-mobile__stats">
            <div class="why-thori-mobile__stats--stat stat">
                <span class="stat__number">95%</span>
                <span class="stat__text">
                    {{ $t('energytech.whyThori.statOne') }}
                </span>
            </div>
            <div class="why-thori-mobile__stats--stat stat">
                <span class="stat__number">20%</span>
                <span class="stat__text">
                    {{ $t('energytech.whyThori.statTwo') }}
                </span>
            </div>
            <div class="why-thori-mobile__stats--stat stat">
                <span class="stat__number">5+</span>
                <span class="stat__text">
                    {{ $t('energytech.whyThori.statThree') }}
                </span>
            </div>
            <div class="why-thori-mobile__stats--stat stat">
                <span class="stat__number">20+</span>
                <span class="stat__text">
                    {{ $t('energytech.whyThori.statFour') }}
                </span>
            </div>
        </div>
    </section>
</template>
  
<script setup>
import TextHighlighter from '~/components/TextHighlighter.vue';
</script>
  
<style lang="scss" scoped>
@import '../scss/why_thori_mobile.module.scss';
</style>