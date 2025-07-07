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
          <h2 class="text-sm font-bold text-card-foreground mb-4">
            Borang Permohonan
          </h2>
          <p class="text-sm text-muted-foreground max-w-2xl mx-auto">
            Sila lengkapkan maklumat berikut untuk memohon program ini
          </p>
        </div>

        <form @submit.prevent="submit" class="space-y-6">
          <div class="space-y-3">
            <Label class="text-sm font-medium text-card-foreground">
              Alamat Emel
              <span class="text-destructive">*</span>
            </Label>
            <Input 
              v-model="form.email"
              type="email"
              placeholder="contoh@email.com"
              class="w-full"
            />
            <p v-if="errors.email" class="text-sm text-destructive">
              {{ errors.email }}
            </p>
          </div>

          <div class="space-y-3">
            <Label class="text-sm font-medium text-card-foreground">
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
                <Label for="other-pahang">Lain-lain:</Label>
                <Input 
                  v-if="form.pahangConnection === 'other-pahang'"
                  v-model="form.pahangConnectionOther"
                  placeholder="Sila nyatakan..."
                  class="max-w-md"
                />
              </div>
              <div v-if="form.pahangConnection === 'other-pahang' && errors.pahangConnectionOther" class="ml-6">
                <p class="text-sm text-destructive mt-1">
                  {{ errors.pahangConnectionOther }}
                </p>
              </div>
            </RadioGroup>
            
            <p v-if="errors.pahangConnection" class="text-sm text-destructive">
              {{ errors.pahangConnection }}
            </p>
          </div>

          <div class="flex justify-end pt-6">
            <Button 
              type="submit" 
              :disabled="processing"
              class="px-8 py-2"
            >
              {{ processing ? 'Menghantar...' : 'Hantar Permohonan' }}
            </Button>
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
import { Input } from '@/resources/js/components/ui/input'
import { Button } from '@/resources/js/components/ui/button'
import { useProgramForm } from '@/resources/js/composables/useProgramForm'

const { form, errors, processing, submit } = useProgramForm()
</script>

<style scoped>
</style> 