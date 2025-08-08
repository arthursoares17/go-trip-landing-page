<script setup lang="ts">
  import { RouterLink } from 'vue-router'
  import logoImage from '@/assets/images/logo-image.webp'
</script>

<template>
  <RouterLink to="/">
    <div class="flex items-center space-x-2">
      <img  
        class="size-full"
        :src="logoImage" 
        alt="GoTrip logo"
      />

      <span class="text-base font-medium">
        GoTrip
      </span>
    </div>
  </RouterLink>
</template>