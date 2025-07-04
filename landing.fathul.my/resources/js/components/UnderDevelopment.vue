<script setup lang="js">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Button } from '@/resources/js/components/ui/button'
import { Input } from '@/resources/js/components/ui/input'
import { Rocket, Mail, Clock, CheckCircle } from 'lucide-vue-next'

// Email subscription form
const email = ref('')
const isSubscribed = ref(false)
const isSubmitting = ref(false)
const emailError = ref('')

// Countdown timer
const targetDate = new Date('2025-03-01T00:00:00')
const currentTime = ref(new Date())
let timer = null

const timeRemaining = computed(() => {
  const diff = targetDate - currentTime.value
  
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }
  
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000)
  }
})

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

const handleSubscribe = async () => {
  emailError.value = ''
  
  if (!email.value) {
    emailError.value = 'Please enter your email address'
    return
  }
  
  if (!validateEmail(email.value)) {
    emailError.value = 'Please enter a valid email address'
    return
  }
  
  isSubmitting.value = true
  
  // Simulate API call
  setTimeout(() => {
    isSubscribed.value = true
    isSubmitting.value = false
    email.value = ''
  }, 1500)
}

onMounted(() => {
  timer = setInterval(() => {
    currentTime.value = new Date()
  }, 1000)
})

onUnmounted(() => {
  if (timer) {
    clearInterval(timer)
  }
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900 flex items-center justify-center px-4 py-12">
    <div class="max-w-4xl w-full mx-auto">
      <!-- Main Content Container -->
      <div class="text-center space-y-8">
        <!-- Icon -->
        <div class="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4">
          <Rocket class="w-10 h-10 text-primary" />
        </div>
        
        <!-- Heading -->
        <div class="space-y-4">
          <h1 class="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
            Something Amazing is Coming
          </h1>
          <p class="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            We're working hard to bring you an exceptional experience. Our new website is currently under development and will be launching soon.
          </p>
        </div>
        
        <!-- Countdown Timer -->
        <div class="flex justify-center gap-4 md:gap-8 py-8">
          <div v-for="(value, key) in timeRemaining" :key="key" class="text-center">
            <div class="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-4 md:p-6 min-w-[80px] md:min-w-[120px]">
              <div class="text-2xl md:text-4xl font-bold text-primary">
                {{ value.toString().padStart(2, '0') }}
              </div>
              <div class="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 mt-1 capitalize">
                {{ key }}
              </div>
            </div>
          </div>
        </div>
        
        <!-- Email Subscription -->
        <div class="max-w-md mx-auto space-y-4">
          <div class="flex items-center gap-2 justify-center text-neutral-600 dark:text-neutral-400">
            <Mail class="w-5 h-5" />
            <h2 class="text-lg font-semibold">Get Notified When We Launch</h2>
          </div>
          
          <div v-if="!isSubscribed" class="space-y-3">
            <div class="flex flex-col sm:flex-row gap-3">
              <Input
                v-model="email"
                type="email"
                placeholder="Enter your email address"
                class="flex-1"
                :disabled="isSubmitting"
                @keyup.enter="handleSubscribe"
              />
              <Button 
                @click="handleSubscribe" 
                :disabled="isSubmitting"
                class="w-full sm:w-auto"
              >
                {{ isSubmitting ? 'Subscribing...' : 'Notify Me' }}
              </Button>
            </div>
            <p v-if="emailError" class="text-sm text-red-500">
              {{ emailError }}
            </p>
            <p class="text-xs text-neutral-500 dark:text-neutral-400">
              We'll only send you one email when we launch. No spam, we promise!
            </p>
          </div>
          
          <!-- Success Message -->
          <div v-else class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <div class="flex items-center gap-3">
              <CheckCircle class="w-5 h-5 text-green-600 dark:text-green-400" />
              <div class="text-left">
                <h3 class="font-semibold text-green-800 dark:text-green-300">
                  You're on the list!
                </h3>
                <p class="text-sm text-green-700 dark:text-green-400">
                  We'll notify you as soon as we launch.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Additional Info -->
        <div class="pt-8 space-y-4">
          <div class="flex items-center justify-center gap-2 text-neutral-500 dark:text-neutral-400">
            <Clock class="w-4 h-4" />
            <p class="text-sm">
              Expected Launch: March 2025
            </p>
          </div>
          
          <!-- Social Links (Optional) -->
          <div class="flex items-center justify-center gap-4">
            <a href="#" class="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">
              <span class="sr-only">Twitter</span>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a href="#" class="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">
              <span class="sr-only">GitHub</span>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 