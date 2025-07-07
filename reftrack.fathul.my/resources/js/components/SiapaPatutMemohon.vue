<template>
  <div class="bg-white py-16 sm:py-20">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Siapa Patut Memohon?
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Program ini direka khas untuk
        </p>
      </div>

      <ul class="space-y-6 max-w-2xl mx-auto text-left mb-12">
        <li class="flex items-start">
          <GraduationCap class="flex-shrink-0 w-6 h-6 text-amber-500 mr-3 mt-0.5" />
          <div>
            <h3 class="text-lg font-semibold text-gray-900 mb-1">
              Graduan Baharu
            </h3>
            <p class="text-gray-700">
              Graduan baharu yang mencari pekerjaan dalam bidang teknologi/kejuruteraan atau hanya perlu meningkatkan kemahiran mereka
            </p>
          </div>
        </li>
        <li class="flex items-start">
          <Briefcase class="flex-shrink-0 w-6 h-6 text-amber-500 mr-3 mt-0.5" />
          <div>
            <h3 class="text-lg font-semibold text-gray-900 mb-1">
              Graduan Yang Sudah Ada Tawaran Kerja
            </h3>
            <p class="text-gray-700">
              Graduan yang sudah mempunyai tawaran kerja tetapi memerlukan sokongan untuk memulakan dengan kukuh melalui 
              <span class="font-semibold text-red-800">Pensijilan Industri dan Kesediaan Kerja</span>
            </p>
          </div>
        </li>
      </ul>

      <div class="bg-red-50 border-l-4 border-red-800 p-6 rounded-r-lg">
        <div class="flex items-start">
          <AlertTriangle class="w-6 h-6 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
          <div>
            <h4 class="text-lg font-semibold text-red-800 mb-2">
              Penyertaan Terhad!
            </h4>
            <p class="text-red-700">
              Jangan lepaskan peluang emas ini untuk menempah tempat anda dan dijemput ke taklimat program serta pemilihan calon kami.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { GraduationCap, Briefcase, AlertTriangle } from 'lucide-vue-next'
</script>

<style scoped>
</style> 