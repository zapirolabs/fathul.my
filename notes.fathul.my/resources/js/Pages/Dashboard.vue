<script setup>
import { Head } from '@inertiajs/vue3'
import AppLayout from '@/resources/js/layouts/AppLayout.vue'
import { useBreadcrumbs } from '@/resources/js/composables/useBreadcrumbs'
import { Input } from '@/resources/js/components/ui/input'
import { Button } from '@/resources/js/components/ui/button'

const breadcrumbs = useBreadcrumbs('dashboard')
</script>

<template>
  <Head title="Notes - fathul.my"></Head>
  <AppLayout :breadcrumbs="breadcrumbs">
    <div class="flex items-center gap-2 mt-4">
      <Input type="file" />
      <Button>Upload</Button>
    </div>
  </AppLayout>
</template>