<template>
  <div class="relative overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white">
    <!-- Animated Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0 bg-dot-pattern animate-pulse"></div>
    </div>
    


    <!-- Main Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div class="text-center">
        <!-- Organization Logo -->
        <div class="mb-8 animate-fade-in-up">
          <img 
            src="https://cdn.fathul.my/assets/logo/ypadvancedskills-logo-whiteondark.svg" 
            alt="YPAdvancedSkills Logo" 
            class="h-16 mx-auto"
          />
        </div>

        <!-- Main Title -->
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up animation-delay-200">
          <span class="block text-white">Program</span>
          <span class="block bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-300 bg-clip-text text-transparent animate-gradient-x">
            Jaminan Kerjaya
          </span>
          <span class="block text-white">2025</span>
        </h1>

        <!-- Collaboration Description -->
        <div class="animate-fade-in-up animation-delay-400">
          <p class="text-lg text-white/90 flex items-center justify-center space-x-2">
            <span>A collaboration and education product of  </span>
            <img 
              src="https://cdn.fathul.my/assets/logo/nematix-logo-fullcolor.svg" 
              alt="Nematix Logo" 
              class="h-6 mb-2 ml-1"
            />
          </p>
        </div>




      </div>
    </div>


  </div>
</template>

<script setup>

</script>

<style scoped>
/* Background dot pattern */
.bg-dot-pattern {
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
}

/* Custom animations */

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes gradient-x {
  0%, 100% {
    background-size: 200% 200%;
    background-position: left center;
  }
  50% {
    background-size: 200% 200%;
    background-position: right center;
  }
}

@keyframes pulse-slow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}



.animate-fade-in-up {
  animation: fade-in-up 1s ease-out forwards;
}

.animate-gradient-x {
  animation: gradient-x 3s ease infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 2s ease-in-out infinite;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}

.animation-delay-800 {
  animation-delay: 0.8s;
}

/* Ensure elements start invisible for fade-in animation */
.animate-fade-in-up {
  opacity: 0;
}
</style> 