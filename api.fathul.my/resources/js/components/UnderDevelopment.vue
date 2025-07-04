<script setup lang="js">
import { Code, Wrench } from 'lucide-vue-next'
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900 flex items-center justify-center px-4 py-12">
    <div class="max-w-2xl w-full mx-auto text-center space-y-8">
      <!-- Icon -->
      <div class="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
        <Code class="w-8 h-8 text-primary" />
      </div>
      
      <!-- Heading -->
      <div class="space-y-4">
        <h1 class="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
          Portfolio Under Development
        </h1>
        <p class="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-lg mx-auto">
          I'm currently building my portfolio website. Check back soon to see my work and projects.
        </p>
      </div>
      
      <!-- Status -->
      <div class="flex items-center justify-center gap-3 text-neutral-500 dark:text-neutral-400">
        <Wrench class="w-5 h-5" />
        <span class="text-sm font-medium">Work in Progress</span>
      </div>
    </div>
  </div>
</template> 