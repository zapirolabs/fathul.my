<script setup>
import { computed } from 'vue';
import { SidebarInset } from '@/resources/js/components/ui/sidebar';

const props = defineProps({
    variant: {
        type: String,
        default: undefined
    },
    class: {
        type: String,
        default: ''
    }
});

const className = computed(() => props.class);
</script>

<template>
    <SidebarInset v-if="props.variant === 'sidebar'" :class="className">
        <slot />
    </SidebarInset>
    <main v-else class="mx-auto flex h-full w-full max-w-7xl flex-1 flex-col gap-4 rounded-xl" :class="className">
        <slot />
    </main>
</template>
