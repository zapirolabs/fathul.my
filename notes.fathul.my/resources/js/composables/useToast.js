import { toast } from 'vue-sonner'

export function useToast() {
  function toastSuccess(message, options = {}) {
    toast.success(message, options)
  }
  function toastError(message, options = {}) {
    toast.error(message, options)
  }
  function toastInfo(message, options = {}) {
    toast.info(message, options)
  }
  function toastWarning(message, options = {}) {
    toast.warning(message, options)
  }
  function toastGeneric(message, options = {}) {
    toast(message, options)
  }

  function toastUpload(variant = 'success') {
    switch (variant) {
      case 'success':
        toast.success('File uploaded successfully!', {
          description: 'Your file has been uploaded.'
        })
        break
      case 'error':
        toast.error('Upload failed!', {
          description: 'There was an error uploading your file. Please try again.'
        })
        break
      case 'loading':
        return toast.loading('Uploading file...', {
          description: 'Please wait while your file is being uploaded.'
        })
      default:
        toast.success('File uploaded successfully!', {
          description: 'Your file has been uploaded.'
        })
    }
  }

  return {
    toastSuccess,
    toastError,
    toastInfo,
    toastWarning,
    toastGeneric,
    toastUpload,
  }
} 