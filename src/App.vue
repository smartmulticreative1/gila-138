<script setup>
import { ref, provide } from 'vue'
import Navigation from './components/Navigation.vue'
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
onMounted(() => {
  document.addEventListener('DOMContentLoaded', () => {
    initFlowbite();
  });
})
const isImgColored = ref(false)

const handleToggle = (status) => {
  isImgColored.value = status
}

provide('isImgColored', isImgColored)
</script>

<template>
  <Navigation @toggle="handleToggle" />
  <RouterView />
</template>
