<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import Header from '@/components/globals/Header.vue'
</script>

<template>
  <div class="relative">
    <Header/>
    
    <main class="size-full">
      <RouterView/>
    </main>
  </div>
</template>