import { useForm } from '@inertiajs/vue3'
import { ref } from 'vue'

export function useProgramForm() {
  const registrationReasons = ref([])
  
  const form = useForm({
    fullName: '',
    phoneNumber: '',
    email: '',
    age: '',
    interviewWillingness: '',
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
    
    if (value === 'other' && !checked) {
      form.registrationReasonsOther = ''
    }
  }

  const isReasonSelected = (value) => {
    return registrationReasons.value.includes(value)
  }

  const submit = () => {
    form.transform((data) => ({
      ...data,
      registrationReasons: registrationReasons.value
    })).post(route('program.store'), {
      preserveScroll: true,
      onStart: () => {
      },
      onSuccess: () => {
      },
      onError: (errors) => {
      },
      onFinish: () => {
      }
    })
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