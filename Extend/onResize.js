import { ref, onMounted } from 'vue';

export default function useScreenWidth() {
  const screenWidth = ref(0);

  onMounted(() => {
    if (process.client) {
      screenWidth.value = window.innerWidth;
      window.addEventListener('resize', () => {
        screenWidth.value = window.innerWidth;
      });
    }
  });

  return { screenWidth };
}
