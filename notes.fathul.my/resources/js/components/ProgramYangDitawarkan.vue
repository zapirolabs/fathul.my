<template>
  <div class="bg-white py-16 sm:py-20">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Program Yang Ditawarkan
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Pilih program yang sesuai dengan matlamat kerjaya anda
        </p>
      </div>

      <!-- Programs Grid -->
      <div class="grid gap-12 lg:grid-cols-2">
        <!-- Available Programs -->
        <div>
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-900 mb-2 flex items-center">
              <BookOpen class="w-6 h-6 text-[#941e20] mr-3" />
              Program Tersedia
            </h3>
            <p class="text-gray-600 text-sm">Semua program adalah intensif selama 4 minggu</p>
          </div>

          <div class="space-y-6">
            <!-- Python Program -->
            <div class="group hover:bg-gray-50 transition-colors duration-200 p-6 rounded-lg border border-gray-200">
              <div class="flex items-start">
                <div class="flex-shrink-0 mr-4">
                  <img :src="pythonLogoUrl" alt="Python Logo" class="w-10 h-8" />
                </div>
                <div class="flex-1">
                  <h4 class="text-lg font-semibold text-gray-900 mb-2">Python Basic Programming</h4>
                  <p class="text-gray-600 text-sm mb-3">
                    Pelajari asas pengaturcaraan Python, automasi, dan pembangunan API
                  </p>
                  <div class="flex items-center text-sm text-[#941e20] font-medium">
                    <Calendar class="w-4 h-4 mr-1" />
                    Batch 1, 2, 3 tersedia
                  </div>
                </div>
              </div>
            </div>

            <!-- GenAI Program -->
            <div class="group hover:bg-gray-50 transition-colors duration-200 p-6 rounded-lg border border-gray-200">
              <div class="flex items-start">
                <div class="flex-shrink-0 mr-4">
                  <img :src="chatGptLogoUrl" alt="ChatGPT Logo" class="w-10 h-8" />
                </div>
                <div class="flex-1">
                  <h4 class="text-lg font-semibold text-gray-900 mb-2">GenAI Masterclass</h4>
                  <p class="text-gray-600 text-sm mb-3">
                    Kuasai kemahiran AI automasi, kejuruteraan prompt, dan pengoptimuman aliran kerja
                  </p>
                  <div class="flex items-center text-sm text-[#941e20] font-medium">
                    <Calendar class="w-4 h-4 mr-1" />
                    Batch 2, 3, 4 tersedia
                  </div>
                </div>
              </div>
            </div>

            <!-- AWS Program -->
            <div class="group hover:bg-gray-50 transition-colors duration-200 p-6 rounded-lg border border-gray-200">
              <div class="flex items-start">
                <div class="flex-shrink-0 mr-4">
                  <img :src="awsLogoUrl" alt="AWS Logo" class="w-10 h-8" />
                </div>
                <div class="flex-1">
                  <h4 class="text-lg font-semibold text-gray-900 mb-2">AWS Foundational Certificate</h4>
                  <p class="text-gray-600 text-sm mb-3">
                    Dapatkan kemahiran cloud computing dan pensijilan AWS yang diiktiraf industri
                  </p>
                  <div class="flex items-center text-sm text-[#941e20] font-medium">
                    <Calendar class="w-4 h-4 mr-1" />
                    Batch 1, 2, 3 tersedia
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Important Notice -->
          <div class="mt-8 bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
            <div class="flex items-start">
              <Info class="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p class="text-amber-800 font-medium text-sm">
                  Tarikh mula program akan dimaklumkan selepas proses pemilihan selesai
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Program Structure & Commitment -->
        <div class="space-y-8">
          <!-- Program Structure -->
          <div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <Clock class="w-6 h-6 text-[#941e20] mr-3" />
              Struktur Program
            </h3>

            <div class="bg-[#941e20] text-white p-6 rounded-lg mb-6">
              <div class="text-center">
                <div class="text-3xl font-bold mb-2">4 Minggu</div>
                <div class="text-red-100">Komitmen Penuh Diperlukan</div>
              </div>
            </div>

            <div class="space-y-4">
              <div class="flex items-start p-4 border border-gray-200 rounded-lg">
                <div class="flex-shrink-0 w-8 h-8 bg-[#941e20] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                  1-3
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">Minggu 1–3: Pembelajaran Fizikal</h4>
                  <p class="text-gray-600 text-sm">
                    Kehadiran sepenuh masa di YP Advanced Skills, Kuantan
                  </p>
                </div>
              </div>
              
              <div class="flex items-start p-4 border border-gray-200 rounded-lg">
                <div class="flex-shrink-0 w-8 h-8 bg-[#941e20] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                  4
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">Minggu 4: Pembelajaran Dalam Talian</h4>
                  <p class="text-gray-600 text-sm">
                    Projek capstone dan persediaan kerjaya
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- What's Included -->
          <div>
            <h4 class="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Package class="w-5 h-5 text-[#941e20] mr-2" />
              Apa Yang Disediakan
            </h4>
            
            <ul class="space-y-3">
              <li class="flex items-start">
                <CheckCircle class="w-5 h-5 text-[#941e20] mr-3 mt-0.5 flex-shrink-0" />
                <span class="text-gray-700">Latihan hands-on dengan projek sebenar</span>
              </li>
              <li class="flex items-start">
                <CheckCircle class="w-5 h-5 text-[#941e20] mr-3 mt-0.5 flex-shrink-0" />
                <span class="text-gray-700">Modul pembelajaran dan pensijilan yang diiktiraf</span>
              </li>
              <li class="flex items-start">
                <CheckCircle class="w-5 h-5 text-[#941e20] mr-3 mt-0.5 flex-shrink-0" />
                <span class="text-gray-700">Bimbingan kerjaya dan bantuan penempatan kerja</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { BookOpen, Info, Clock, Calendar, Package, CheckCircle, ArrowRight } from 'lucide-vue-next'
import { useAppearance } from '@/resources/js/composables/useAppearance'

const { awsLogoUrl, chatGptLogoUrl, pythonLogoUrl } = useAppearance()
</script>

<style scoped>
</style> 