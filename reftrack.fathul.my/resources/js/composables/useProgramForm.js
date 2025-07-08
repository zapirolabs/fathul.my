import { useForm } from '@inertiajs/vue3'
import { ref } from 'vue'

export function useProgramForm() {
  // Separate reactive state for arrays that have issues with Inertia
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

  // Helper function to update registration reasons
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
    console.log('Updated registrationReasons:', registrationReasons.value)
  }

  // Handle checkbox changes
  const handleRegistrationReasonChange = (value, checked) => {
    updateRegistrationReasons(value, checked)
    
    // Clear the "other" field if "Other" is unchecked
    if (value === 'Other' && !checked) {
      form.registrationReasonsOther = ''
    }
  }

  // Check if a reason is selected
  const isReasonSelected = (value) => {
    return registrationReasons.value.includes(value)
  }

  const submit = () => {
    // Debug: Log the actual form data being sent
    console.log('=== FORM SUBMISSION DEBUG ===')
    console.log('registrationReasons array:', registrationReasons.value)
    console.log('registrationReasons length:', registrationReasons.value.length)
    console.log('Full form data:', form.data())
    console.log('=== END DEBUG ===')
    
    // Use transform to add the array data that Inertia can't track properly
    form.transform((data) => ({
      ...data,
      registrationReasons: registrationReasons.value
    })).post(route('program.store'), {
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
    registrationReasons,
    updateRegistrationReasons,
    handleRegistrationReasonChange,
    isReasonSelected,
    processing: form.processing,
    submit
  }
}