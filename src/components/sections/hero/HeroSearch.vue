<script setup lang="ts">
  import { ref } from 'vue'
  import { MapPinned, CalendarDays, UsersRound, Search } from 'lucide-vue-next'
  import Input from '../../ui/Input.vue'
  import Select from '../../ui/Select.vue'
  import Button from '../../ui/Button.vue'

  const selectedDaysOption = ref('')
  const selectedPersonsOption = ref('')

  const dateItems = [
    '1 semana (7 dias)', 
    '2 semanas (14 dias)', 
    '3 semanas (21 dias)', 
    '4 semanas (28 dias)'
  ]

  const personsItems = [
    '1 adulto', 
    '2 adultos', 
    '2 adultos + 1 criança', 
    'Família (4 pessoas)', 
    'Família (5 pessoas)',
    'Grupo (5+ pessoas)'
  ]
</script>

<template>
  <div class="bg-background py-8 px-6 max-w-5xl mx-auto shadow-2xl rounded-[20px]">
    <div class="grid grid-cols-4 gap-4 items-end">
      <Input
        :icon="MapPinned"
        label="Para onde?"
        type="text"
        placeholder="Pesquise destinos..."
      />

      <Select
        :icon="CalendarDays"
        label="Quando?"
        :options="dateItems"
        v-model="selectedDaysOption"
      />

      <Select
        :icon="UsersRound"
        label="Pessoas"
        :options="personsItems"
        v-model="selectedPersonsOption"
      />

      <Button 
        variant="primary"
        class="w-full h-[46px]"
      >
        <Search class="size-5 mr-2"/>
        Buscar destinos
      </Button>
    </div>
  </div>
</template>