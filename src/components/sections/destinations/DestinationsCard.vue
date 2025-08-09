<script setup lang="ts">
  import type { DestinationItem } from '@/types'

  const props = defineProps<{
    item: DestinationItem
  }>()
</script>

<template>
  <div class="cursor-pointer relative rounded-2xl overflow-hidden">
    <img 
      class="w-[300px] h-[200px]"
      :src="props.item.image" 
      :alt="props.item.title"
    />

    <div class="absolute bottom-0 left-0 right-0 py-3 px-4 z-10">
      <div class="space-y-0.5">
        <h3 class="text-primary-foreground text-lg font-medium tracking-wide">
          {{ props.item.title }}
        </h3>

        <span class="text-popover/80 text-base font-normal tracking-normal">
          {{ props.item.options }}
        </span>
      </div>
    </div>

    <div class="absolute bottom-0 left-0 right-0 bg-secondary-foreground/35 h-full z-[5px]"></div>
  </div>
</template>