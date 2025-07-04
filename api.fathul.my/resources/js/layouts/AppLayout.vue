<script setup lang="js">
import AppLayout from '@/resources/js/layouts/app/AppHeaderLayout.vue';

const props = defineProps({
  breadcrumbs: {
    type: Array, 
    default: () => []
  }
});
</script>

<template>
    <AppLayout :breadcrumbs="breadcrumbs">
        <slot />
    </AppLayout>
</template>
