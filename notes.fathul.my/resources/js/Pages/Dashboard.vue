<script setup>
import { Head } from '@inertiajs/vue3'
import { router } from '@inertiajs/vue3'
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

function handleUpload() {
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

  router.post('/upload', formData, {
    onSuccess: (response) => {
      isUploading.value = false
      toast.dismiss(loadingToastId)
      toastUpload('success')
      
      // Clear the file input
      if (fileElement) {
        fileElement.value = ''
      }
    },
    onError: (errors) => {
      isUploading.value = false
      toast.dismiss(loadingToastId)
      toastUpload('error')
      console.error('Upload error:', errors)
    },
    onFinish: () => {
      isUploading.value = false
    }
  })
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