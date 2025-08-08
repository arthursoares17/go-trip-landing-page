<script setup lang="ts">
  import { onMounted, onUnmounted, ref } from 'vue'
  import { RouterLink, useRoute } from 'vue-router'
  import { AlignJustify, CircleQuestionMark, Handshake } from 'lucide-vue-next'
  import Logo from './Logo.vue'

  const navbarLinks = [
    { 
      label: 'Início', 
      redirect: '/' 
    },
    { 
      label: 'Destinos', 
      redirect: '#' 
    },
    { 
      label: 'Experiências', 
      redirect: '#' 
    },
    { 
      label: 'Promoções', 
      redirect: '#' 
    },
    { 
      label: 'Sobre nós', 
      redirect: '#' 
    }
  ] 

  const menuLinks = [
    { 
      icon: CircleQuestionMark, 
      label: 'Central de ajuda', 
      redirect: '#' 
    },
    { 
      icon: Handshake, 
      label: 'Indicar amigo', 
      redirect: '#', 
      isActive: true 
    },
    { 
      label: 'Entrar', 
      redirect: '#' 
    },
    { 
      label: 'Inscrever-se', 
      redirect: '#' 
    }
  ]

  const route = useRoute()

  const isOpen = ref<boolean>(false)
  const menuRef = ref<HTMLDivElement|null>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if(menuRef.value && !menuRef.value.contains(event.target as Node)) {
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
  <header class="fixed top-5 left-0 right-0 z-30">
    <div class="bg-background border border-secondary py-3 px-4 max-w-7xl mx-auto shadow-sm rounded-full">
      <nav class="flex justify-between items-center">
        <Logo/>

        <ul class="flex items-center space-x-7">
          <li 
            class="text-base font-normal tracking-normal"
            v-for="(link, index) in navbarLinks"
            :key="index"
          >
            <RouterLink 
              :to="link.redirect"
              :class="[
                route.path === link.redirect
                ? 'text-secondary-foreground'
                : 'text-accent-foreground transition duration-200 hover:text-secondary-foreground'
              ]"
            >
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>

        <div 
          class="relative" 
          ref="menuRef"
        >
          <button 
            class="cursor-pointer flex justify-center items-center bg-secondary/70 size-9 rounded-full hover:bg-secondary"
            @click="isOpen = !isOpen"
          >
            <AlignJustify class="text-muted-foreground size-4"/>
          </button>

          <div 
            class="absolute top-13 -right-4 bg-background border border-secondary w-52 shadow-md overflow-hidden rounded-2xl"
            v-if="isOpen"  
          >
            <ul class="flex flex-col p-2 space-y-1">
              <li 
                class="cursor-pointer text-sm font-normal tracking-normal border-b last:border-b-0 border-secondary p-3"
                v-for="(link, index) in menuLinks" 
                :key="index"
                :class="[
                  link.isActive
                  ? 'text-primary transition duration-200 hover:text-primary-hover'
                  : 'text-muted-foreground transition duration-200 hover:text-secondary-foreground'
                ]"
              >
                <RouterLink 
                  v-if="link.icon"
                  :to="link.redirect"
                >
                  <div class="flex items-center gap-2">
                    <component 
                      class="size-5"
                      :is="link.icon"
                    />

                    {{ link.label }}
                  </div>
                </RouterLink>

                <RouterLink 
                  v-else 
                  :to="link.redirect"
                >
                  {{ link.label }}
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>