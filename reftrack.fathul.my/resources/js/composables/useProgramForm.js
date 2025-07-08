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
    // Debug: Log the actual form data being sent
    console.log('=== FORM SUBMISSION DEBUG ===')
    console.log('registrationReasons array:', form.registrationReasons)
    console.log('registrationReasons length:', form.registrationReasons.length)
    console.log('registrationReasons type:', typeof form.registrationReasons)
    console.log('Full form data:', form.data())
    console.log('=== END DEBUG ===')
    
    form.post(route('program.store'), {
      preserveScroll: true,
      onStart: () => {
        // Form submission started
      },
      onSuccess: () => {
        // Form submission successful
      },
      onError: (errors) => {
        console.log('=== VALIDATION ERRORS ===')
        console.log('Errors received:', errors)
        console.log('=== END ERRORS ===')
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