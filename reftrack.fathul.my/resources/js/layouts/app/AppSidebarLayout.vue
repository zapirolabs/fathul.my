<script setup>
import AppShell from '@/resources/js/components/AppShell.vue';
import AppContent from '@/resources/js/components/AppContent.vue';
import AppSidebar from '@/resources/js/components/AppSidebar.vue';
import AppSidebarHeader from '@/resources/js/components/AppSidebarHeader.vue';

const props = defineProps({
    breadcrumbs: {
        type: Array,
        default: () => []
    }
});
</script>

<template>
    <AppShell variant="sidebar">
        <AppSidebar />
        <AppContent variant="sidebar">
            <AppSidebarHeader :breadcrumbs="breadcrumbs" />
            <slot />
        </AppContent>
    </AppShell>
</template>
