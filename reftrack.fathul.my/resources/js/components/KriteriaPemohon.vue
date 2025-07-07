<template>
  <div class="bg-white py-16 sm:py-20">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Kriteria Pemohon
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Untuk memohon, anda perlu memenuhi syarat-syarat berikut:
        </p>
      </div>

      <ul class="space-y-4 max-w-2xl mx-auto text-left">
        <li class="flex items-start">
          <ShieldCheck class="flex-shrink-0 w-6 h-6 text-amber-500 mr-3 mt-0.5" />
          <span class="text-gray-700">Warganegara Malaysia</span>
        </li>
        <li class="flex items-start">
          <MapPin class="flex-shrink-0 w-6 h-6 text-amber-500 mr-3 mt-0.5" />
          <span class="text-gray-700">Anak Pahang / pemastautin di Pahang. Pelajar atau ibu bapa dilahirkan atau sedang menetap di Pahang</span>
        </li>
        <li class="flex items-start">
          <Calendar class="flex-shrink-0 w-6 h-6 text-amber-500 mr-3 mt-0.5" />
          <span class="text-gray-700">Berumur antara 18 hingga 35 tahun</span>
        </li>
        <li class="flex items-start">
          <Users class="flex-shrink-0 w-6 h-6 text-amber-500 mr-3 mt-0.5" />
          <span class="text-gray-700">Terbuka kepada calon lelaki dan perempuan</span>
        </li>
        <li class="flex items-start">
          <GraduationCap class="flex-shrink-0 w-6 h-6 text-amber-500 mr-3 mt-0.5" />
          <span class="text-gray-700">Mempunyai sekurang-kurangnya Diploma dalam mana-mana bidang</span>
        </li>
        <li class="flex items-start">
          <Briefcase class="flex-shrink-0 w-6 h-6 text-amber-500 mr-3 mt-0.5" />
          <span class="text-gray-700">Sedang mencari pekerjaan atau ingin meningkatkan kemahiran</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ShieldCheck, MapPin, Calendar, Users, GraduationCap, Briefcase } from 'lucide-vue-next'
</script>

<style scoped>
</style> 