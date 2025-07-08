import { useForm } from '@inertiajs/vue3'

export function useProgramForm() {
  const form = useForm({
    fullName: '',
    phoneNumber: '',
    email: '',
    age: '',
    registrationReasons: [],
    registrationReasonsOther: '',
    commitmentLevel: '',
    commitmentLevelOther: '',
    programInterest: '',
    pahangConnection: '',
    pahangConnectionOther: '',
  })

  const submit = () => {
    form.post(route('program.store'), {
      preserveScroll: true,
      onStart: () => {
        // Form submission started
      },
      onSuccess: () => {
        // Form submission successful
      },
      onError: (errors) => {
        // Handle form submission errors
      },
      onFinish: () => {
        // Form submission finished
      }
    })
  }

  return {
    form,
    processing: form.processing,
    submit
  }
}