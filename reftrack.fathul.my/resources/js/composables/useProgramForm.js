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
        
        // Scroll to first error after a short delay to ensure DOM is updated
        setTimeout(() => {
          const firstError = document.querySelector('.text-destructive')
          if (firstError) {
            firstError.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'center' 
            })
          }
        }, 100)
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