<template>
  <div v-html="highlightedText"></div>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale, messages } = useI18n();

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  keywords: {
    type: String,
    required: true,
  },
  allowMultiple: {
    type: Boolean,
    default: false,
  },
  highlightClass: {
    type: String,
    default: "text-highlighter-bold",
    validator(value) {
      const validOptions = ["text-highlighter-bold", "text-highlighter-gradient", "text-highlighter-bold-alt"];
      if (!validOptions.includes(value)) {
        return false;
      }
      return true;
    }
  }
});

const text = computed(() => t(props.text));
const keywords = computed(() => {
  const resolvedKeywords = getValueByPath(props.keywords, messages.value[locale.value]);
  if (!Array.isArray(resolvedKeywords)) return [];
  return resolvedKeywords.map((item) => {
    return item?.body?.static ?? item?.b?.s ?? '';
  });
});


const getValueByPath = (path, obj) => {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

const highlightedText = computed(() => {
  let textContent = text.value;
  if (props.allowMultiple) {
    keywords.value.forEach((keyword) => {
      const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escapamos los caracteres especiales
      const regex = new RegExp(`(${escapedKeyword})`, 'gi');
      textContent = textContent.replace(regex, `<span class="${props.highlightClass}">$1</span>`);
    });
  } else {
    const highlightedSet = new Set();
    keywords.value.forEach((keyword) => {
      const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escapamos los caracteres especiales
      const regex = new RegExp(`(${escapedKeyword})`, 'i');
      if (!highlightedSet.has(keyword)) {
        textContent = textContent.replace(regex, (match) => {
          highlightedSet.add(keyword);
          return `<span class="${props.highlightClass}">${match}</span>`;
        });
      }
    });

  }
  return textContent;
});


</script>

<style lang="scss">
.text-highlighter-bold {
  font-weight: 600;
}

.text-highlighter-gradient {
  background: linear-gradient(90deg, #6306fc, #24b0b3);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
}

.text-highlighter-bold-alt {
  color: $text-secondary-color;
  font-weight: 600;
}
</style>