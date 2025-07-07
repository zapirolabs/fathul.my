<template>
  <div class="min-h-screen bg-gray-50">
    <ProgramHeader />
    <KriteriaPemohon />
    <ApaYangAndaPerolehi />
    <ProgramYangDitawarkan />
    <SiapaPatutMemohon />
    
    <!-- Form Section -->
    <div class="bg-white py-16 sm:py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Borang Permohonan
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Sila lengkapkan maklumat berikut untuk memohon program ini
          </p>
        </div>

        <form @submit.prevent="submit" class="space-y-6">
          <div class="space-y-3">
            <FormLabel class="text-lg font-semibold text-gray-900">
              Apakah kaitan anda dengan negeri Pahang? <span class="text-red-600">*</span>
            </FormLabel>
            <RadioGroup 
              :default-value="form.pahangConnection" 
              @update:model-value="form.pahangConnection = $event"
              class="space-y-2"
            >
              <div class="flex items-center space-x-2">
                <RadioGroupItem id="born" value="born" />
                <FormLabel for="born">Saya dilahirkan di Pahang</FormLabel>
              </div>
              <div class="flex items-center space-x-2">
                <RadioGroupItem id="residing" value="residing" />
                <FormLabel for="residing">Saya sedang menetap di Pahang</FormLabel>
              </div>
              <div class="flex items-center space-x-2">
                <RadioGroupItem id="parents" value="parents" />
                <FormLabel for="parents">Kedua-dua ibu bapa saya berasal dari Pahang</FormLabel>
              </div>
              <div class="flex items-center space-x-2">
                <RadioGroupItem id="other" value="other" />
                <FormLabel for="other">Lain-lain</FormLabel>
              </div>
            </RadioGroup>
            <div v-if="errors.pahangConnection" class="text-red-600 text-sm">
              {{ errors.pahangConnection }}
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProgramHeader from './ProgramHeader.vue'
import KriteriaPemohon from './KriteriaPemohon.vue'
import ApaYangAndaPerolehi from './ApaYangAndaPerolehi.vue'
import ProgramYangDitawarkan from './ProgramYangDitawarkan.vue'
import SiapaPatutMemohon from './SiapaPatutMemohon.vue'
import { RadioGroup, RadioGroupItem } from '@/resources/js/components/ui/radio-group'
import { FormLabel } from '@/resources/js/components/ui/form'
import { useProgramForm } from '@/resources/js/composables/useProgramForm'

const { form, errors, processing, submit } = useProgramForm()
</script>

<style scoped>
</style> 