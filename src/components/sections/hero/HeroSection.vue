<script setup lang="ts">
  import heroBackground from '@/assets/videos/hero-background.mp4'
</script>

<template>
  <section class="relative w-full h-screen overflow-hidden">
    <video
      class="absolute top-0 left-0 size-full object-cover"
      preload="auto"
      autoplay
      muted
      loop
      playsinline
    >
      <source 
        type="video/mp4"
        :src="heroBackground" 
      />
    </video>

    <div class="relative flex flex-col justify-center items-center max-w-5xl mx-auto h-full px-4 space-y-8 z-10">
      <div class="text-center space-y-3">
        <h1 class="text-primary-foreground text-6xl font-medium tracking-wide">
          Qual será o seu próximo destino?
        </h1>

        <p class="text-secondary text-xl font-normal max-w-[700px] mx-auto tracking-wide">
          Explore destinos únicos, viva experiências transformadoras e colecione memórias que marcarão sua vida para sempre
        </p>
      </div>
    </div>

    <div class="absolute top-0 left-0 size-full bg-secondary-foreground/45 z-[5]"></div>
  </section>
</template>