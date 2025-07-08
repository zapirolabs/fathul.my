import { useForm } from '@inertiajs/vue3'
import { ref } from 'vue'

export function useProgramForm() {
  const registrationReasons = ref([])
  
  const form = useForm({
    fullName: '',
    phoneNumber: '',
    email: '',
    age: '',
    registrationReasonsOther: '',
    commitmentLevel: '',
    commitmentLevelOther: '',
    programInterest: '',
    pahangConnection: '',
    pahangConnectionOther: '',
  })

  const updateRegistrationReasons = (value, checked) => {
    if (checked) {
      if (!registrationReasons.value.includes(value)) {
        registrationReasons.value.push(value)
      }
    } else {
      const index = registrationReasons.value.indexOf(value)
      if (index > -1) {
        registrationReasons.value.splice(index, 1)
      }
    }
  }

  const handleRegistrationReasonChange = (value, checked) => {
    updateRegistrationReasons(value, checked)
    
    if (value === 'Other' && !checked) {
      form.registrationReasonsOther = ''
    }
  }

  const isReasonSelected = (value) => {
    return registrationReasons.value.includes(value)
  }

  const submit = () => {
    try {
      form.transform((data) => ({
        ...data,
        registrationReasons: registrationReasons.value
      })).post(route('program.store'), {
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
    } catch (error) {
      console.error('Submit error:', error)
    }
  }

  return {
    form,
    registrationReasons,
    updateRegistrationReasons,
    handleRegistrationReasonChange,
    isReasonSelected,
    processing: form.processing,
    submit
  }
}