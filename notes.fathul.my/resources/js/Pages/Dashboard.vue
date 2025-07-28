<script setup>
import { Head } from '@inertiajs/vue3'
import AppLayout from '@/resources/js/layouts/AppLayout.vue'
import { useBreadcrumbs } from '@/resources/js/composables/useBreadcrumbs'
import { Input } from '@/resources/js/components/ui/input'
import { Button } from '@/resources/js/components/ui/button'
import { Toaster } from '@/resources/js/components/ui/sonner'
import { useToast } from '@/resources/js/composables/useToast'

const breadcrumbs = useBreadcrumbs('dashboard')
const { toastSuccess } = useToast()
</script>

<template>
  <Head title="Notes - fathul.my"></Head>
  <AppLayout :breadcrumbs="breadcrumbs">
    <Toaster />
    <div class="flex items-center gap-2 mt-4">
      <Input type="file" />
      <Button @click="() => toastSuccess('File uploaded successfully!', { description: 'Your file has been uploaded.' })">Upload</Button>
    </div>
  </AppLayout>
</template>