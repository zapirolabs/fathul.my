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

      <div class="space-y-8 mb-12">
        <div class="bg-red-50 border border-red-200 rounded-lg p-6">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <div class="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center">
                <GraduationCap class="w-6 h-6 text-white" />
              </div>
            </div>
            <div class="ml-4">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                Graduan Baharu
              </h3>
              <p class="text-gray-700 leading-relaxed">
                Graduan baharu yang mencari pekerjaan dalam bidang teknologi/kejuruteraan atau hanya perlu meningkatkan kemahiran mereka
              </p>
            </div>
          </div>
        </div>

        <div class="bg-red-50 border border-red-200 rounded-lg p-6">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <div class="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center">
                <Briefcase class="w-6 h-6 text-white" />
              </div>
            </div>
            <div class="ml-4">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                Graduan Yang Sudah Ada Tawaran Kerja
              </h3>
              <p class="text-gray-700 leading-relaxed">
                Graduan yang sudah mempunyai tawaran kerja tetapi memerlukan sokongan untuk memulakan dengan kukuh melalui 
                <span class="font-semibold text-red-800">Pensijilan Industri dan Kesediaan Kerja</span>
              </p>
            </div>
          </div>
        </div>
      </div>

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