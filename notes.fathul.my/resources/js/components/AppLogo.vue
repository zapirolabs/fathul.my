<script setup>
import { useAppearance } from '@/resources/js/composables/useAppearance';
import { computed } from 'vue';

const { appearance } = useAppearance();

const logoUrl = computed(() => {
  if (typeof window === 'undefined') {
    return 'https://cdn.fathul.my/assets/logo/fathuldotmy-notes-logo-light.svg';
  }
  const isDark = appearance.value === 'dark' ||
    (appearance.value === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  return isDark
    ? 'https://cdn.fathul.my/assets/logo/fathuldotmy-notes-logo-dark.svg'
    : 'https://cdn.fathul.my/assets/logo/fathuldotmy-notes-logo-light.svg';
});
</script>

<template>
  <img :src="logoUrl" alt="Notes - fathul.my" class="h-10 object-contain" />
</template>
