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
              Nama Penuh
              <span class="text-destructive">*</span>
            </Label>
            <Input 
              v-model="form.fullName"
              type="text"
              placeholder="Masukkan nama penuh anda"
              class="w-full"
            />
            <p v-if="form.errors.fullName" class="text-sm text-destructive">
              {{ form.errors.fullName }}
            </p>
          </div>

          <div class="space-y-3">
            <Label class="text-sm font-medium text-card-foreground">
              Nombor Telefon
              <span class="text-destructive">*</span>
            </Label>
            <Input 
              v-model="form.phoneNumber"
              type="tel"
              placeholder="Contoh: 012-3456789"
              class="w-full"
            />
            <p v-if="form.errors.phoneNumber" class="text-sm text-destructive">
              {{ form.errors.phoneNumber }}
            </p>
          </div>

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
            <p v-if="form.errors.email" class="text-sm text-destructive">
              {{ form.errors.email }}
            </p>
          </div>

          <div class="space-y-3">
            <Label class="text-sm font-medium text-card-foreground">
              Umur
              <span class="text-destructive">*</span>
            </Label>
            <Input 
              v-model="form.age"
              type="number"
              placeholder="Masukkan umur anda (18-35 tahun)"
              min="18"
              max="35"
              class="w-full"
            />
            <p v-if="form.errors.age" class="text-sm text-destructive">
              {{ form.errors.age }}
            </p>
          </div>

          <div class="space-y-3">
            <Label class="text-sm font-medium text-card-foreground">
              Apakah sebab utama anda mendaftar?
              <span class="text-destructive">*</span>
            </Label>
            <div class="space-y-3">
              <div class="flex items-center space-x-2">
                                  <Checkbox 
                    id="upskill"
                    :checked="isReasonSelected('To upskill and learn something new')"
                    @update:checked="(checked) => handleRegistrationReasonChange('To upskill and learn something new', checked)"
                  />
                  <Label for="upskill" class="text-sm">Untuk meningkatkan kemahiran dan mempelajari sesuatu yang baru</Label>
                </div>
                <div class="flex items-center space-x-2">
                  <Checkbox 
                    id="certificate"
                    :checked="isReasonSelected('To earn a recognised certificate')"
                    @update:checked="(checked) => handleRegistrationReasonChange('To earn a recognised certificate', checked)"
                  />
                  <Label for="certificate" class="text-sm">Untuk mendapatkan sijil yang diiktiraf</Label>
                </div>
                <div class="flex items-center space-x-2">
                  <Checkbox 
                    id="job"
                    :checked="isReasonSelected('To improve my chances of getting a job')"
                    @update:checked="(checked) => handleRegistrationReasonChange('To improve my chances of getting a job', checked)"
                  />
                  <Label for="job" class="text-sm">Untuk meningkatkan peluang mendapat pekerjaan</Label>
                </div>
                <div class="space-y-2">
                  <div class="flex items-center space-x-2">
                    <Checkbox 
                      id="other-reason"
                      :checked="isReasonSelected('Other')"
                      @update:checked="(checked) => handleRegistrationReasonChange('Other', checked)"
                    />
                    <Label for="other-reason" class="text-sm">Lain-lain:</Label>
                </div>
                <Input 
                  v-if="isReasonSelected('Other')"
                  v-model="form.registrationReasonsOther"
                  placeholder="Sila nyatakan..."
                  class="ml-6 max-w-md"
                />
              </div>
              <div v-if="isReasonSelected('Other') && form.errors.registrationReasonsOther" class="ml-6">
                <p class="text-sm text-destructive mt-1">
                  {{ form.errors.registrationReasonsOther }}
                </p>
              </div>
            </div>
            
            <p v-if="form.errors.registrationReasons" class="text-sm text-destructive">
              {{ form.errors.registrationReasons }}
            </p>
            
            <!-- Debug: Show current array state -->
            <div class="mt-2 p-2 bg-gray-100 text-xs">
              <strong>Debug - Current registrationReasons:</strong> 
              {{ JSON.stringify(registrationReasons) }}
              <br>
              <strong>Length:</strong> {{ registrationReasons.length }}
            </div>
          </div>

          <div class="space-y-3">
            <Label class="text-sm font-medium text-card-foreground">
              Adakah anda bersedia untuk komitmen kepada latihan 1 bulan ini?
              <span class="text-destructive">*</span>
            </Label>
            <RadioGroup 
              v-model="form.commitmentLevel"
              class="space-y-2"
            >
              <div class="flex items-center space-x-2">
                <RadioGroupItem id="fully-committed" value="fully-committed" />
                <Label for="fully-committed" class="text-sm">Ya, saya komitmen sepenuhnya</Label>
              </div>
              <div class="flex items-center space-x-2">
                <RadioGroupItem id="need-info" value="need-info" />
                <Label for="need-info" class="text-sm">Saya memerlukan maklumat lanjut sebelum membuat keputusan</Label>
              </div>
              <div class="flex items-center space-x-2">
                <RadioGroupItem id="not-sure" value="not-sure" />
                <Label for="not-sure" class="text-sm">Tidak pasti</Label>
              </div>
              <div class="flex items-center space-x-2">
                <RadioGroupItem id="other-commitment" value="other-commitment" />
                <Label for="other-commitment" class="text-sm">Lain-lain:</Label>
                <Input 
                  v-if="form.commitmentLevel === 'other-commitment'"
                  v-model="form.commitmentLevelOther"
                  placeholder="Sila nyatakan..."
                  class="max-w-md"
                />
              </div>
              <div v-if="form.commitmentLevel === 'other-commitment' && form.errors.commitmentLevelOther" class="ml-6">
                <p class="text-sm text-destructive mt-1">
                  {{ form.errors.commitmentLevelOther }}
                </p>
              </div>
            </RadioGroup>
            
            <p v-if="form.errors.commitmentLevel" class="text-sm text-destructive">
              {{ form.errors.commitmentLevel }}
            </p>
          </div>

          <div class="space-y-3">
            <Label class="text-sm font-medium text-card-foreground">
              Apakah program yang anda minati?
              <span class="text-destructive">*</span>
            </Label>
            <RadioGroup 
              v-model="form.programInterest"
              class="space-y-2"
            >
              <div class="flex items-center space-x-2">
                <RadioGroupItem id="python-basic" value="python-basic" />
                <Label for="python-basic" class="text-sm">Python Basic Programming</Label>
              </div>
              <div class="flex items-center space-x-2">
                <RadioGroupItem id="genai-masterclass" value="genai-masterclass" />
                <Label for="genai-masterclass" class="text-sm">GenAI Masterclass</Label>
              </div>
              <div class="flex items-center space-x-2">
                <RadioGroupItem id="aws-foundational" value="aws-foundational" />
                <Label for="aws-foundational" class="text-sm">AWS Foundational Certificate</Label>
              </div>
              <div class="flex items-center space-x-2">
                <RadioGroupItem id="more-than-one" value="more-than-one" />
                <Label for="more-than-one" class="text-sm">Lebih daripada 1 program</Label>
              </div>
            </RadioGroup>
            
            <p v-if="form.errors.programInterest" class="text-sm text-destructive">
              {{ form.errors.programInterest }}
            </p>
          </div>

          <div class="space-y-5">
            <Label class="text-sm font-medium text-card-foreground">
              Apakah kaitan anda dengan negeri Pahang? 
              <span class="text-destructive">*</span>
            </Label>
            <RadioGroup 
              v-model="form.pahangConnection"
              class="space-y-2"
            >
              <div class="flex items-center space-x-2">
                <RadioGroupItem id="born-pahang" value="born-pahang" />
                <Label for="born-pahang" class="text-sm">Saya dilahirkan di Pahang</Label>
              </div>
              <div class="flex items-center space-x-2">
                <RadioGroupItem id="living-pahang" value="living-pahang" />
                <Label for="living-pahang" class="text-sm">Saya sedang menetap di Pahang</Label>
              </div>
              <div class="flex items-center space-x-2">
                <RadioGroupItem id="parents-pahang" value="parents-pahang" />
                <Label for="parents-pahang" class="text-sm">Kedua-dua ibu bapa saya berasal dari Pahang</Label>
              </div>
              <div class="flex items-center space-x-2">
                <RadioGroupItem id="other-pahang" value="other-pahang" />
                <Label for="other-pahang" class="text-sm">Lain-lain:</Label>
                <Input 
                  v-if="form.pahangConnection === 'other-pahang'"
                  v-model="form.pahangConnectionOther"
                  placeholder="Sila nyatakan..."
                  class="max-w-md"
                />
              </div>
              <div v-if="form.pahangConnection === 'other-pahang' && form.errors.pahangConnectionOther" class="ml-6">
                <p class="text-sm text-destructive mt-1">
                  {{ form.errors.pahangConnectionOther }}
                </p>
              </div>
            </RadioGroup>
            
            <p v-if="form.errors.pahangConnection" class="text-sm text-destructive">
              {{ form.errors.pahangConnection }}
            </p>
          </div>

          <div class="flex justify-end pt-6">
            <Button 
              type="submit" 
              :disabled="processing"
              class="px-8 py-2 cursor-pointer hover:bg-opacity-90 transition-colors"
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
import { Checkbox } from '@/resources/js/components/ui/checkbox'
import { Label } from '@/resources/js/components/ui/label'
import { Input } from '@/resources/js/components/ui/input'
import { Button } from '@/resources/js/components/ui/button'
import { useProgramForm } from '@/resources/js/composables/useProgramForm'
const { form, registrationReasons, handleRegistrationReasonChange, isReasonSelected, processing, submit } = useProgramForm()
</script>

<style scoped>
</style> 