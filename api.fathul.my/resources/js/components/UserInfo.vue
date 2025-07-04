<script setup>
import { computed } from 'vue';
import { useInitials } from '@/resources/js/composables/useInitials';
import { Avatar, AvatarFallback, AvatarImage } from '@/resources/js/components/ui/avatar';

const props = defineProps({
    user: {
        type: Object,
        required: false,
        default: undefined
    },
    showEmail: {
        type: Boolean,
        default: false
    }
});

const fakeUser = {
    name: 'John Doe',
    email: 'john@example.com',
    avatar: '',
};

const user = computed(() => props.user || fakeUser);
const { getInitials } = useInitials();

// Compute whether we should show the avatar image
const showAvatar = computed(() => user.value.avatar && user.value.avatar !== '');
</script>

<template>
    <Avatar class="h-8 w-8 overflow-hidden rounded-lg">
        <AvatarImage v-if="showAvatar" :src="user.avatar" :alt="user.name" />
        <AvatarFallback class="rounded-lg text-black dark:text-white">
            {{ getInitials(user.name) }}
        </AvatarFallback>
    </Avatar>

    <div class="grid flex-1 text-left text-sm leading-tight">
        <span class="truncate font-medium">{{ user.name }}</span>
        <span v-if="showEmail" class="truncate text-xs text-muted-foreground">{{ user.email }}</span>
    </div>
</template>
