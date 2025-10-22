<template>
  <TransitionRoot as="template" :show="isOpen">
    <Dialog class="relative z-50" @close="emit('close')">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-900/80 backdrop-blur-sm transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel class="relative transform overflow-hidden rounded-2xl bg-white/95 backdrop-blur-md px-4 pt-5 pb-4 text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 border border-white/20">
              <div>
                <!-- Icône Info -->
                <div class="mx-auto flex size-12 items-center justify-center rounded-full bg-primary-100">
                  <svg class="size-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                  </svg>
                </div>
                
                <!-- Titre -->
                <div class="mt-3 text-center sm:mt-5">
                  <DialogTitle as="h3" class="text-xl font-bold text-gray-900">
                    {{ title }}
                  </DialogTitle>
                  
                  <!-- Contenu -->
                  <div class="mt-4 space-y-3">
                    <div 
                      v-for="(item, index) in items" 
                      :key="index"
                      class="text-left"
                    >
                      <h4 class="font-semibold text-gray-800 mb-1">{{ item.term }}</h4>
                      <p class="text-sm text-gray-600">{{ item.definition }}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Bouton de fermeture -->
              <div class="mt-6 sm:mt-8">
                <button
                  type="button"
                  class="inline-flex w-full justify-center rounded-xl bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors"
                  @click="emit('close')"
                >
                  Compris !
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import type { InfoItem } from '~/types/experience'

/**
 * Composant modal d'information pour afficher des définitions
 */

interface Props {
  isOpen: boolean
  title: string
  items: InfoItem[]
}

defineProps<Props>()

const emit = defineEmits<{
  close: []
}>()
</script>
