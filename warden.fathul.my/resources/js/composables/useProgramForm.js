import { useForm } from '@inertiajs/vue3'
import { ref } from 'vue'

export function useProgramForm() {
  const registrationReasons = ref([])
  const selectedPrograms = ref([])
  
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
    intakeBatch: '',
    pythonBatch: '',
    genaiBatch: '',
    awsBatch: '',
    referralCode: '',
    pahangConnection: '',
    pahangConnectionOther: '',
    furtherInquiries: '',
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

  const updateSelectedPrograms = (value, checked) => {
    if (checked) {
      if (!selectedPrograms.value.includes(value)) {
        selectedPrograms.value.push(value)
      }
    } else {
      const index = selectedPrograms.value.indexOf(value)
      if (index > -1) {
        selectedPrograms.value.splice(index, 1)
      }
    }
  }

  const handleProgramChange = (value, checked) => {
    updateSelectedPrograms(value, checked)
  }

  const isProgramSelected = (value) => {
    return selectedPrograms.value.includes(value)
  }

  const submitForm = () => {
    form.transform((data) => ({
      ...data,
      registrationReasons: registrationReasons.value,
      selectedPrograms: form.programInterest === 'more-than-one' ? selectedPrograms.value : []
    })).post('/program', {
      preserveScroll: true,
      onSuccess: () => {
        // Success handling is done by the controller redirect
      },
      onError: (errors) => {
        console.log('Form errors:', errors)
      }
    })
  }

  return {
    form,
    registrationReasons,
    selectedPrograms,
    updateRegistrationReasons,
    handleRegistrationReasonChange,
    isReasonSelected,
    updateSelectedPrograms,
    handleProgramChange,
    isProgramSelected,
    processing: form.processing,
    submitForm
  }
}