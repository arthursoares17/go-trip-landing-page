<script setup lang="ts">
  import { computed } from 'vue'

  interface Props {
    variant: keyof typeof buttonVariants
  }

  const props = defineProps<Props>()

  const buttonVariants = {
    primary: 'bg-primary text-primary-foreground py-3 px-4 rounded-xl hover:bg-primary-hover'
  } as const

  const buttonClass = computed(() => {
    return buttonVariants[props.variant]
  })
</script>

<template>
  <button
    class="cursor-pointer flex justify-center items-center text-sm font-medium transition duration-200"
    :class="buttonClass"
  >
    <slot/>
  </button>
</template>