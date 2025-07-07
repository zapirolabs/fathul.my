<template>
  <div class="min-h-screen bg-background">
    <ProgramHeader />
    <KriteriaPemohon />
    <ApaYangAndaPerolehi />
    <ProgramYangDitawarkan />
    <SiapaPatutMemohon />
    
    <!-- Form Section -->
    <div class="bg-card py-16 sm:py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold text-card-foreground mb-4">
            Borang Permohonan
          </h2>
          <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sila lengkapkan maklumat berikut untuk memohon program ini
          </p>
        </div>

        <form @submit.prevent="submit" class="space-y-6">
          <div class="space-y-3">
            <Label class="text-base font-medium text-card-foreground">
              Apakah kaitan anda dengan negeri Pahang? 
              <span class="text-destructive">*</span>
            </Label>
            <RadioGroup 
              :default-value="form.pahangConnection" 
              @update:model-value="(value) => form.pahangConnection = value"
              class="space-y-2"
            >
              <div class="flex items-center space-x-2">
                <RadioGroupItem id="born-pahang" value="born-pahang" />
                <Label for="born-pahang">Saya dilahirkan di Pahang</Label>
              </div>
              <div class="flex items-center space-x-2">
                <RadioGroupItem id="living-pahang" value="living-pahang" />
                <Label for="living-pahang">Saya sedang menetap di Pahang</Label>
              </div>
              <div class="flex items-center space-x-2">
                <RadioGroupItem id="parents-pahang" value="parents-pahang" />
                <Label for="parents-pahang">Kedua-dua ibu bapa saya berasal dari Pahang</Label>
              </div>
              <div class="flex items-center space-x-2">
                <RadioGroupItem id="other-pahang" value="other-pahang" />
                <Label for="other-pahang">Lain-lain kaitan dengan Pahang</Label>
              </div>
            </RadioGroup>
            <p v-if="errors.pahangConnection" class="text-sm text-destructive">
              {{ errors.pahangConnection }}
            </p>
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
import { Label } from '@/resources/js/components/ui/label'
import { useProgramForm } from '@/resources/js/composables/useProgramForm'

const { form, errors, processing, submit } = useProgramForm()
</script>

<style scoped>
</style> 