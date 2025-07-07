import { ref } from 'vue'
import { router } from '@inertiajs/vue3'

export function useProgramForm() {
  const form = ref({
    email: '',
    pahangConnection: '',
    pahangConnectionOther: '',
  })

  const errors = ref({})
  const processing = ref(false)

  const submit = () => {
    processing.value = true
    errors.value = {}

    router.post(route('program.store'), form.value, {
      onError: (err) => {
        errors.value = err
        processing.value = false
      },
      onSuccess: () => {
        processing.value = false
      },
      onFinish: () => {
        processing.value = false
      }
    })
  }

  return {
    form,
    errors,
    processing,
    submit
  }
} 