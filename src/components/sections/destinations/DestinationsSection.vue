<script setup lang="ts">
  import { topDestinationItems } from '@/utils/destinations'
  import { ArrowRight } from 'lucide-vue-next'
  import Button from '../../ui/Button.vue'
  import DestinationsCard from './DestinationsCard.vue'
</script>

<template>
  <section class="py-20">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex flex-col space-y-8">
        <div class="flex justify-between items-center">
          <div class="text-left space-y-1">
            <h2 class="text-secondary-foreground text-4xl font-medium tracking-wide">
              Destinos em destaque
            </h2>

            <p class="text-muted-foreground text-lg font-normal tracking-normal">
              Descubra lugares únicos pelo Mundo
            </p>
          </div>

          <Button variant="primary">
            Ver mais
            <ArrowRight class="size-5 ml-1"/>
          </Button>
        </div>

        <div class="grid grid-cols-4 gap-4">
          <DestinationsCard
            v-for="destination in topDestinationItems"
            :key="destination.id"
            :item="destination"
          />
        </div>
      </div>
    </div>
  </section>
</template>