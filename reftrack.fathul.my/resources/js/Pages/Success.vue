<template>
  <div class="min-h-screen bg-background flex items-center justify-center">
    <div class="max-w-md w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <!-- Success Icon -->
        <div class="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
          <svg class="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>

        <!-- Success Message -->
        <h1 class="text-3xl font-bold text-card-foreground mb-4">
          Permohonan Berjaya Dihantar!
        </h1>
        
        <p class="text-lg text-muted-foreground mb-4">
          Terima kasih {{ userName }} kerana memohon Program Jaminan Kerjaya 2025. Maklumat anda telah berjaya direkodkan dan pasukan kami akan menghubungi anda tidak lama lagi.
        </p>

        <!-- Referral Codes Section -->
        <div v-if="referralCodes.length > 0" class="bg-card border border-border rounded-lg p-6 mb-8">
          <h2 class="text-xl font-semibold text-card-foreground mb-4">Kod Rujukan Anda</h2>
          <p class="text-sm text-muted-foreground mb-4">
            Simpan kod rujukan ini untuk rujukan masa hadapan:
          </p>
          <div class="space-y-3">
            <div v-for="referral in referralCodes" :key="referral.code" 
                 class="flex items-center justify-between bg-muted p-3 rounded-lg">
              <div class="text-left">
                <p class="font-medium text-card-foreground">{{ referral.program }}</p>
                <p class="text-sm text-muted-foreground">Kod Rujukan</p>
              </div>
              <div class="text-right">
                <p class="font-mono text-lg font-bold text-[#941e20]">{{ referral.code }}</p>
                <button @click="copyToClipboard(referral.code)" 
                        class="text-xs text-muted-foreground hover:text-card-foreground">
                  Salin
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- What's Next Section -->
        <div class="bg-card border border-border rounded-lg p-6 mb-8 text-left">
          <h2 class="text-xl font-semibold text-card-foreground mb-4">Apa yang akan berlaku seterusnya?</h2>
          <ul class="space-y-3 text-muted-foreground">
            <li class="flex items-start">
              <span class="flex-shrink-0 w-2 h-2 bg-[#941e20] rounded-full mt-2 mr-3"></span>
              <span>Pasukan kami akan meneliti permohonan anda dalam tempoh 3-5 hari bekerja</span>
            </li>
            <li class="flex items-start">
              <span class="flex-shrink-0 w-2 h-2 bg-[#941e20] rounded-full mt-2 mr-3"></span>
              <span>Anda akan dihubungi melalui telefon atau email untuk pengesahan</span>
            </li>
            <li class="flex items-start">
              <span class="flex-shrink-0 w-2 h-2 bg-[#941e20] rounded-full mt-2 mr-3"></span>
              <span>Maklumat lengkap mengenai tarikh mula program akan dimaklumkan</span>
            </li>
          </ul>
        </div>

        <!-- Action Buttons -->
        <div class="space-y-4">
          <Button 
            @click="$inertia.visit('/')" 
            class="w-full bg-[#941e20] hover:bg-[#7a1a1c] text-white"
          >
            Kembali ke Borang
          </Button>
          
          <p class="text-sm text-muted-foreground">
            Sebarang pertanyaan? Hubungi kami di 
            <a href="mailto:info@ypadvancedskills.com" class="text-[#941e20] hover:underline">
              info@ypadvancedskills.com
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Head } from '@inertiajs/vue3'
import { Button } from '@/resources/js/components/ui/button'

// Define props
const props = defineProps({
  referralCodes: {
    type: Array,
    default: () => []
  },
  userName: {
    type: String,
    default: ''
  }
})

// Copy to clipboard function
const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    // You could add a toast notification here
  } catch (err) {
    console.error('Failed to copy text: ', err)
  }
}
</script> 