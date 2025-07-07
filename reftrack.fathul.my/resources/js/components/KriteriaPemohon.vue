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

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <!-- Warganegara Malaysia -->
        <div class="bg-gray-50 rounded-lg p-6 border-l-4 border-amber-500 hover:shadow-md transition-shadow duration-300">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Warganegara Malaysia</h3>
              <p class="text-gray-600">Mesti merupakan warganegara Malaysia yang sah</p>
            </div>
          </div>
        </div>

        <!-- Berdomisil di Pahang -->
        <div class="bg-gray-50 rounded-lg p-6 border-l-4 border-amber-500 hover:shadow-md transition-shadow duration-300">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Berdomisil di Pahang</h3>
              <p class="text-gray-600">Sama ada pelajar atau ibu bapa dilahirkan atau kini menetap di Pahang</p>
            </div>
          </div>
        </div>

        <!-- Umur 18-35 tahun -->
        <div class="bg-gray-50 rounded-lg p-6 border-l-4 border-amber-500 hover:shadow-md transition-shadow duration-300">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Umur 18-35 Tahun</h3>
              <p class="text-gray-600">Berumur antara 18 hingga 35 tahun</p>
            </div>
          </div>
        </div>

        <!-- Lelaki dan Perempuan -->
        <div class="bg-gray-50 rounded-lg p-6 border-l-4 border-amber-500 hover:shadow-md transition-shadow duration-300">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Lelaki dan Perempuan</h3>
              <p class="text-gray-600">Terbuka kepada calon lelaki dan perempuan</p>
            </div>
          </div>
        </div>

        <!-- Diploma -->
        <div class="bg-gray-50 rounded-lg p-6 border-l-4 border-amber-500 hover:shadow-md transition-shadow duration-300">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Kelayakan Diploma</h3>
              <p class="text-gray-600">Mempunyai sekurang-kurangnya Diploma dalam mana-mana bidang</p>
            </div>
          </div>
        </div>

        <!-- Mencari Pekerjaan -->
        <div class="bg-gray-50 rounded-lg p-6 border-l-4 border-amber-500 hover:shadow-md transition-shadow duration-300">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2h2a2 2 0 002-2V8a2 2 0 00-2-2h-2zm-8-2v2H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-2V6"></path>
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Mencari Pekerjaan</h3>
              <p class="text-gray-600">Sedang mencari pekerjaan atau ingin meningkatkan kemahiran</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-12">
        <div class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-red-900 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
          </svg>
          Mulakan Perjalanan Kerjaya Anda
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No props needed for this component
</script>

<style scoped>
/* Additional styles if needed */
</style> 