<script setup>
import { Head } from '@inertiajs/vue3'
import AppLayout from '@/resources/js/layouts/AppLayout.vue'
import { useBreadcrumbs } from '@/resources/js/composables/useBreadcrumbs'

const breadcrumbs = useBreadcrumbs('dashboard')

</script>

<template>
  <Head title="Dashboard - Zakat2U"></Head>
  <AppLayout :breadcrumbs="breadcrumbs">
  </AppLayout>
</template>