<template>
  <picture ref="picture">
    <!-- Imagen para dispositivos inferiores a 927px o 650px -->
    <source :srcset="getResponsiveSrc('res_mobile')" :media="`(max-width: ${largeRange ? '927px' : '650px'})`" />
    <!-- Imagen para dispositivos entre 928px y 1365px -->
    <source :srcset="getResponsiveSrc('res_928')"
      :media="`(min-width: ${largeRange ? '928px' : '650px'}) and (max-width: 1365px)`" />
    <!-- Imagen para dispositivos entre 1366px y 1600px -->
    <source :srcset="getResponsiveSrc('res_1366')" media="(min-width: 1366px) and (max-width: 1600px)" />
    <!-- Imagen para dispositivos mayores a 1601px -->
    <source :srcset="getResponsiveSrc('')" media="(min-width: 1601px)" />
    <!-- Imagen original como fallback -->
    <img :src="original" :alt="alt" :loading="loading" :width="width" :height="height" class="responsive-img" />
  </picture>
</template>

<script setup>
import { ref/* , onMounted */ } from 'vue';

const props = defineProps({
  original: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '',
  },
  height: {
    type: String,
    default: '',
  },
  loading: {
    type: String,
    default: 'eager'
  },
  largeRange: {
    type: Boolean,
    default: false,
  }
});

const picture = ref(null);

const getResponsiveSrc = (folder) => {
  const parts = props.original.split('/');
  const fileName = parts.pop();
  const path = parts.join('/');

  const folderPath = folder ? `${path}/${folder}` : path;

  return `${folderPath}/${fileName}`;
}

</script>

<style scoped>
.responsive-img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black 20%,
    black 80%,
    transparent 100%
  );
  filter: drop-shadow(5px 5px 10px #000);
}
</style>