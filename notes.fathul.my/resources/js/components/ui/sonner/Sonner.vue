<script setup>
import { Toaster as Sonner } from "vue-sonner";

const props = defineProps({
  invert: { type: Boolean, required: false },
  theme: { type: String, required: false },
  position: { type: String, required: false },
  hotkey: { type: Array, required: false },
  richColors: { type: Boolean, required: false },
  expand: { type: Boolean, required: false },
  duration: { type: Number, required: false },
  gap: { type: Number, required: false },
  visibleToasts: { type: Number, required: false },
  closeButton: { type: Boolean, required: false },
  toastOptions: { type: Object, required: false },
  class: { type: String, required: false },
  style: { type: Object, required: false },
  offset: { type: [Object, String, Number], required: false },
  mobileOffset: { type: [Object, String, Number], required: false },
  dir: { type: String, required: false },
  swipeDirections: { type: Array, required: false },
  icons: { type: Object, required: false },
  containerAriaLabel: { type: String, required: false },
});
</script>

<template>
  <Sonner
    class="toaster group"
    v-bind="props"
    :toastOptions="{
      ...props.toastOptions,
    }"
    :style="{
      '--normal-bg': 'var(--popover)',
      '--normal-text': 'var(--popover-foreground)',
      '--normal-border': 'var(--border)',
      '--success-bg': '#10b981',
      '--success-text': '#ffffff',
      '--success-border': '#059669',
      '--error-bg': '#ef4444',
      '--error-text': '#ffffff',
      '--error-border': '#dc2626',
      '--info-bg': '#3b82f6',
      '--info-text': '#ffffff',
      '--info-border': '#2563eb',
      '--warning-bg': '#f59e0b',
      '--warning-text': '#000000',
      '--warning-border': '#d97706',
    }"
  />
</template>
