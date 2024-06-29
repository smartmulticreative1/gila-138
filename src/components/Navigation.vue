<template>
    <div class="fixed w-full z-20 top-0 start-0">
        <div id="accordion-collapse" data-accordion="collapse" class="bg-black text-white">
            <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
                <div class="p-5 border-none bg-black">
                    <p v-if="isActive">Server Aktif</p>
                    <p v-else>Server Tidak Aktif</p>
                    <br>
                    <label class="inline-flex items-center cursor-pointer">
                        <input type="checkbox" v-model="isActive" @change="emitToggle" class="sr-only peer">
                        <div
                            class="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                        </div>
                    </label>
                </div>
            </div>
            <h2 id="accordion-collapse-heading-1">
                <button type="button" style="background-color: black !important; color: white !important;"
                    class="flex items-center justify-between w-full p-5 font-medium rtl:text-righ text-white border border-none gap-3"
                    data-accordion-target="#accordion-collapse-body-1" aria-expanded="false"
                    aria-controls="accordion-collapse-body-1">
                    <span>Aktifkan VPN</span>
                    <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 5 5 1 1 5" />
                    </svg>
                </button>
            </h2>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

// Definisikan emit menggunakan defineEmits
const emit = defineEmits(['toggle'])

const isActive = ref(false)

const emitToggle = () => {
    emit('toggle', isActive.value)
}
</script>
<style>
.button-text-white[aria-expanded="true"],
.button-text-white[aria-expanded="false"] {
    color: white;
}
</style>