<script setup lang="ts">
  import type { Component } from 'vue'

  interface Props {
    icon?: Component
    label: string
    type: string
    placeholder: string
  }

  const props = defineProps<Props>()
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

    <input 
      class="text-input text-sm font-normal border border-border py-3 px-4 rounded-xl placeholder:text-input focus:outline-none"
      :type="props.type"
      :placeholder="props.placeholder"
    />
  </div>
</template>