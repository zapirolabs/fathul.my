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
        <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
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

        <div class="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <Briefcase class="w-6 h-6 text-white" />
              </div>
            </div>
            <div class="ml-4">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                Graduan Yang Sudah Ada Tawaran Kerja
              </h3>
              <p class="text-gray-700 leading-relaxed">
                Graduan yang sudah mempunyai tawaran kerja tetapi memerlukan sokongan untuk memulakan dengan kukuh melalui 
                <span class="font-semibold text-green-700">Pensijilan Industri dan Kesediaan Kerja</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
        <div class="flex items-start">
          <AlertTriangle class="w-6 h-6 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
          <div>
            <h4 class="text-lg font-semibold text-amber-800 mb-2">
              Tempat Terhad Sahaja!
            </h4>
            <p class="text-amber-700 mb-4">
              Hanya tempat terhad sahaja tersedia. Mohon sekarang untuk menempah tempat anda dan dijemput ke taklimat program dan pemilihan calon kami.
            </p>
            <div class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-red-900 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <Send class="w-5 h-5 mr-2" />
              Mohon Sekarang
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { GraduationCap, Briefcase, AlertTriangle, Send } from 'lucide-vue-next'
</script>

<style scoped>
</style> 