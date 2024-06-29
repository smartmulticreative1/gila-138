<template>
  <section class="bg-center bg-no-repeat h-screen bg-[url('../assets/image/bgapp.png')]">
    <div class="flex pt-[30%] flex-col h-full space-y-4 gap-6 mx-auto">
      <img src="../assets/image/logo.png" alt="Image 1" class="px-10" style="object-fit: contain" />
      <a href="/menu" class="text-center text-5xl px-5 font-bold"
        >SILAHKAN DAFTAR ATAU MASUK UNTUK BERMAIN</a
      >
      <div class="bg-black p-5 w-full h-full mx-auto">
        <div class="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            class="px-4 py-2 text-sm font-medium text-white bg-transparent border-t border-yellow-500"
          >
            Lorem Ipsum
          </button>
          <button
            type="button"
            class="px-4 py-2 text-sm font-medium text-white bg-transparent border-t border-s border-e border-yellow-500"
          >
            Lorem Ipsum
          </button>
          <button
            type="button"
            class="px-4 py-2 text-sm font-medium text-white bg-transparent border-t border-yellow-500"
          >
            Lorem Ipsum
          </button>
        </div>
        <RouterLink to="/mainpage"
          ><img
            :class="{ grayscale: !isImgColored, color: isImgColored }"
            src="../assets/image/apply.png"
            alt=""
        /></RouterLink>
      </div>
    </div>
  </section>
</template>
<script setup>
import { inject } from 'vue'
import { RouterLink } from 'vue-router'

const isImgColored = inject('isImgColored')
</script>
<style>
.grayscale {
  filter: grayscale(100%);
}

.color {
  filter: none;
}
</style>
