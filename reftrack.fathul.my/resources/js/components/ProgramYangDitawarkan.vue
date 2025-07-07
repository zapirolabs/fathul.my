<template>
  <div class="bg-white py-16 sm:py-20">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Program Yang Ditawarkan & Tempoh Program
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Kami kini menawarkan program-program berikut
        </p>
      </div>

      <div class="grid gap-8 lg:grid-cols-2">
        <div class="space-y-8">
          <div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <BookOpen class="w-6 h-6 text-amber-500 mr-3" />
              Program Yang Tersedia
            </h3>
            <div class="space-y-4">
              <div class="flex items-start p-4 bg-gray-50 rounded-lg">
                <Code class="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                <span class="text-gray-700 font-medium">Python Basic Programming</span>
              </div>
              <div class="flex items-start p-4 bg-gray-50 rounded-lg">
                <Brain class="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                <span class="text-gray-700 font-medium">GenAI Masterclass</span>
              </div>
              <div class="flex items-start p-4 bg-gray-50 rounded-lg">
                <Cloud class="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                <span class="text-gray-700 font-medium">AWS Foundational Certificate</span>
              </div>
            </div>
            <div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
              <div class="flex items-center">
                <Info class="w-5 h-5 text-blue-600 mr-2" />
                <p class="text-blue-800 font-medium">
                  Kami akan mengumumkan tarikh yang disahkan dalam masa terdekat
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-8">
          <div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <Clock class="w-6 h-6 text-amber-500 mr-3" />
              Komitmen Yang Diperlukan
            </h3>
            <div class="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg mb-6">
              <div class="flex items-center mb-2">
                <Calendar class="w-5 h-5 text-amber-600 mr-2" />
                <span class="text-amber-800 font-semibold text-lg">1 Bulan</span>
              </div>
            </div>

            <div class="space-y-4">
              <div class="border border-gray-200 rounded-lg p-4">
                <div class="flex items-center mb-2">
                  <MapPin class="w-5 h-5 text-green-600 mr-2" />
                  <span class="font-semibold text-gray-900">Minggu 1–3: Kelas Fizikal</span>
                </div>
                <p class="text-gray-600 text-sm ml-7">Kehadiran sepenuh masa diperlukan</p>
              </div>
              
              <div class="border border-gray-200 rounded-lg p-4">
                <div class="flex items-center mb-2">
                  <Monitor class="w-5 h-5 text-blue-600 mr-2" />
                  <span class="font-semibold text-gray-900">Minggu 4: Kelas Dalam Talian</span>
                </div>
                <p class="text-gray-600 text-sm ml-7">Kehadiran sepenuh masa diperlukan</p>
              </div>
            </div>
          </div>

          <div>
            <h4 class="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Package class="w-5 h-5 text-amber-500 mr-2" />
              Program Termasuk
            </h4>
            <ul class="space-y-3">
              <li class="flex items-start">
                <CheckCircle class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span class="text-gray-700">Latihan fizikal di YP Advanced Skills, Kuantan</span>
              </li>
              <li class="flex items-start">
                <CheckCircle class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span class="text-gray-700">Modul pembelajaran dalam talian dan pensijilan</span>
              </li>
              <li class="flex items-start">
                <CheckCircle class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span class="text-gray-700">Penilaian akhir, bimbingan, dan proses penempatan kerja</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { BookOpen, Code, Brain, Cloud, Info, Clock, Calendar, MapPin, Monitor, Package, CheckCircle } from 'lucide-vue-next'
</script>

<style scoped>
</style> 