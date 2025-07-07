<template>
  <div class="relative overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white">
    <!-- Animated Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0 bg-dot-pattern animate-pulse"></div>
    </div>
    
    <!-- Floating Geometric Shapes -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full animate-float-slow"></div>
      <div class="absolute top-32 right-20 w-16 h-16 bg-white/5 rounded-lg rotate-45 animate-float-medium"></div>
      <div class="absolute bottom-20 left-1/4 w-12 h-12 bg-white/5 rounded-full animate-float-fast"></div>
      <div class="absolute bottom-32 right-1/3 w-8 h-8 bg-white/5 rounded-lg animate-float-slow"></div>
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



        <!-- Call to Action -->
        <div class="animate-fade-in-up animation-delay-400">
          <div class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-red-900 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse-slow">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
            Mulakan Perjalanan Kerjaya Anda
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Wave -->
    <div class="absolute bottom-0 left-0 right-0">
      <svg class="w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
      </svg>
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
@keyframes float-slow {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

@keyframes float-medium {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(90deg); }
}

@keyframes float-fast {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(270deg); }
}

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

.animate-float-slow {
  animation: float-slow 6s ease-in-out infinite;
}

.animate-float-medium {
  animation: float-medium 4s ease-in-out infinite;
}

.animate-float-fast {
  animation: float-fast 3s ease-in-out infinite;
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