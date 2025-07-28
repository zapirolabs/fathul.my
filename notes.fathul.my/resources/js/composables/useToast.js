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
  return {
    toastSuccess,
    toastError,
    toastInfo,
    toastWarning,
    toastGeneric,
  }
} 