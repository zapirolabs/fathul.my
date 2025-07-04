<script setup>
import AppContent from '@/resources/js/components/AppContent.vue';
import AppHeader from '@/resources/js/components/AppHeader.vue';
import AppShell from '@/resources/js/components/AppShell.vue';

const props = defineProps({
    breadcrumbs: {
        type: Array,
        default: () => []
    }
});
</script>

<template>
    <AppShell class="flex-col">
        <AppHeader :breadcrumbs="breadcrumbs" />
        <AppContent>
            <slot />
        </AppContent>
    </AppShell>
</template>
