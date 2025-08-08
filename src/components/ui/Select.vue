<script setup lang="ts">
  import type { Component } from 'vue'
  import { onMounted, onUnmounted, ref } from 'vue'
  import { ChevronDown, ChevronUp } from 'lucide-vue-next'

  interface Props {
    icon?: Component
    label: string
    options: string[]
    modelValue: string
  }

  interface Emits {
    (e: 'update:modelValue', value: string):void
  }

  const props = defineProps<Props>()
  const emit = defineEmits<Emits>()

  const isOpen = ref<boolean>(false)
  const selectRef = ref<HTMLElement | null>(null)

  const selectOption = (option: string) => {
    emit('update:modelValue', option)
    isOpen.value = false
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (selectRef.value && !selectRef.value.contains(event.target as Node)) {
      isOpen.value = false
    }
  }

  onMounted(() => {
    document.addEventListener('click', handleClickOutside)
  })

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })
</script>

<template>
  <div class="flex flex-col space-y-2">
    <div class="flex flex-row items-center space-x-2">
      <component
        class="text-primary size-5"
        :is="props.icon"
      />

      <label class="text-secondary-foreground text-base font-medium">
        {{ props.label }}
      </label>
    </div>

    <div 
      class="relative" 
      ref="selectRef"
    >
      <button
        class="flex justify-between items-center bg-background text-input border border-border 
        text-left w-full py-3 px-4 rounded-xl"
        @click="isOpen = !isOpen"
      >
        <span class="text-sm font-normal">
          {{ props.modelValue || 'Selecione uma opção' }}
        </span>

        <ChevronUp 
          class="size-4" 
          v-if="isOpen"
        />

        <ChevronDown 
          class="size-4" 
          v-else
        />
      </button>

      <ul 
        class="absolute bg-background border border-border w-full mt-2 shadow-lg rounded-xl 
        z-10 overflow-hidden"
        v-if="isOpen"
      >
        <li
          class="cursor-pointer text-secondary-foreground text-sm font-normal text-left py-2 px-4 hover:bg-secondary"
          v-for="option in props.options"
          :key="option"
          @click="selectOption(option)"
        >
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>