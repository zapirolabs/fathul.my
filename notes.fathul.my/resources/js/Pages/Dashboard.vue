<script setup>
import { Head } from '@inertiajs/vue3'
import { ref } from 'vue'
import AppLayout from '@/resources/js/layouts/AppLayout.vue'
import { useBreadcrumbs } from '@/resources/js/composables/useBreadcrumbs'
import { Input } from '@/resources/js/components/ui/input'
import { Button } from '@/resources/js/components/ui/button'
import { Toaster } from '@/resources/js/components/ui/sonner'
import { useToast } from '@/resources/js/composables/useToast'
import { toast } from 'vue-sonner'

const breadcrumbs = useBreadcrumbs('dashboard')
const { toastUpload } = useToast()

const fileInput = ref(null)
const isUploading = ref(false)

async function handleUpload() {
  const fileElement = document.querySelector('input[type="file"]')
  const file = fileElement?.files[0]

  if (!file) {
    toast.error('Please select a file first', {
      description: 'Choose a file to upload.'
    })
    return
  }

  isUploading.value = true
  const loadingToastId = toastUpload('loading')

  const formData = new FormData()
  formData.append('file', file)

  try {
    const response = await fetch('/upload', {
      method: 'POST',
      body: formData,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json'
      }
    })
    const data = await response.json()
    isUploading.value = false
    toast.dismiss(loadingToastId)
    if (data.success) {
      toastUpload('success')
      fileElement.value = ''
    } else {
      toastUpload('error')
      console.error('Upload error:', data)
    }
  } catch (error) {
    isUploading.value = false
    toast.dismiss(loadingToastId)
    toastUpload('error')
    console.error('Upload error:', error)
  }
}
</script>

<template>
  <Head title="Notes - fathul.my"></Head>
  <AppLayout :breadcrumbs="breadcrumbs">
    <Toaster />
    <div class="flex items-center gap-2 mt-4">
      <Input 
        ref="fileInput"
        type="file" 
        :disabled="isUploading"
      />
      <Button 
        @click="handleUpload"
        :disabled="isUploading"
      >
        {{ isUploading ? 'Uploading...' : 'Upload' }}
      </Button>
    </div>
  </AppLayout>
</template>