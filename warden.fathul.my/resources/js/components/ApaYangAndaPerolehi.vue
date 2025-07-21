<template>
  <div class="bg-white py-16 sm:py-20">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Apa Yang Anda Perolehi?
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Program ini menawarkan pelbagai faedah untuk memastikan kejayaan anda
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-3">
        <div class="text-center p-6 rounded-lg bg-gray-50 hover:shadow-md transition-shadow duration-300">
          <div class="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Home class="w-8 h-8 text-white" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">
            Penginapan & Pengangkutan
          </h3>
          <p class="text-gray-600 leading-relaxed">
            Setiap perantis akan disediakan kemudahan pengangkutan dan penginapan secara percuma sepanjang tempoh latihan.
          </p>
        </div>

        <div class="text-center p-6 rounded-lg bg-gray-50 hover:shadow-md transition-shadow duration-300">
          <div class="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Banknote class="w-8 h-8 text-white" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">
            Pemberian Elaun
          </h3>
          <p class="text-gray-600 leading-relaxed">
            Setiap perantis yang menyertai kursus akan diberikan elaun Latihan sepanjang kursus.
          </p>
        </div>

        <div class="text-center p-6 rounded-lg bg-gray-50 hover:shadow-md transition-shadow duration-300">
          <div class="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Building2 class="w-8 h-8 text-white" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">
            Penempatan Kerja
          </h3>
          <p class="text-gray-600 leading-relaxed">
            Setelah selesai menamatkan kursus, perantis akan ditawarkan tempat kerja mengikut posisi yang bersesuaian.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Home, Banknote, Building2 } from 'lucide-vue-next'
</script>

<style scoped>
</style> 