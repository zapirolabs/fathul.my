<script setup>
import { Link } from '@inertiajs/vue3';
import AppLogo from '@/resources/js/components/AppLogo.vue';
import NavMain from '@/resources/js/components/NavMain.vue';
import NavUser from '@/resources/js/components/NavUser.vue';
import NavFooter from '@/resources/js/components/NavFooter.vue';
import { useExternalNavItems } from '@/resources/js/composables/useExternalNavItems';
import { useMainNavItems } from '@/resources/js/composables/useMainNavItems';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from '@/resources/js/components/ui/sidebar';

const mainNavItems = useMainNavItems();
const footerNavItems = useExternalNavItems();

</script>

<template>
    <Sidebar collapsible="icon" variant="inset">
        <SidebarHeader>
            <Link :href="route('dashboard')">
                <AppLogo />
            </Link>
        </SidebarHeader>

        <SidebarContent>
            <NavMain :items="mainNavItems" />
        </SidebarContent>

        <SidebarFooter>
            <NavFooter :items="footerNavItems" />
            <NavUser />
        </SidebarFooter>
    </Sidebar>
    <slot />
</template>
