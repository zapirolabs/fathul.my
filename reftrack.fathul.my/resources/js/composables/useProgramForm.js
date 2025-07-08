import { useForm } from '@inertiajs/vue3'

export function useProgramForm() {
  const form = useForm({
    fullName: '',
    phoneNumber: '',
    email: '',
    age: '',
    pahangConnection: '',
    pahangConnectionOther: '',
  })

  const submit = () => {
    console.log('Submit function called')
    console.log('Form data:', form.data())
    console.log('Route:', route('program.store'))
    
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