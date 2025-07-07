import { useForm } from '@inertiajs/vue3'

export function useProgramForm() {
  const form = useForm({
    email: '',
    pahangConnection: '',
    pahangConnectionOther: '',
  })

  const submit = () => {
    form.post(route('program.store'))
  }

  return {
    form,
    errors: form.errors,
    processing: form.processing,
    submit
  }
} 