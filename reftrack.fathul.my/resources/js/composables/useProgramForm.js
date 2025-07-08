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
    console.log('Submit function called')
    console.log('Form data:', form.data())
    console.log('Registration reasons:', form.registrationReasons)
    console.log('Registration reasons length:', form.registrationReasons.length)
    console.log('Route:', route('program.store'))
    
    // Add alert to see what's being sent
    alert('Registration reasons: ' + JSON.stringify(form.registrationReasons))
    
    form.post(route('program.store'), {
      preserveScroll: true,
      onStart: () => {
        console.log('Form submission started')
      },
      onSuccess: () => {
        console.log('Form submission successful')
      },
      onError: (errors) => {
        console.log('Form submission errors:', errors)
        alert('Errors: ' + JSON.stringify(errors))
      },
      onFinish: () => {
        console.log('Form submission finished')
      }
    })
  }

  return {
    form,
    processing: form.processing,
    submit
  }
} 