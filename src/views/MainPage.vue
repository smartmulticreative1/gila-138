<template>
  <section class="bg-center bg-no-repeat h-screen bg-[url('../assets/image/bgapp.png')]">
    <div class="flex pt-[20%] flex-col h-full space-y-4 gap-6 px-5 mx-auto">
      <div
        class="bg-black text-white w-full p-5 rounded-full grid grid-cols-2 justify-center items-center"
      >
        <p class="text-xl">Masuk Ke Akun</p>
        <button
          type="button"
          class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-xl p-4 text-center dark:focus:ring-yellow-900"
        >
          Login
        </button>
      </div>
      <div
        class="bg-black text-white w-full p-5 rounded-full grid grid-cols-2 justify-center items-center"
      >
        <p class="text-xl">Daftar Akun</p>
        <button
          type="button"
          class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-xl p-4 text-center dark:focus:ring-yellow-900"
        >
          Daftar
        </button>
      </div>
      <div
        class="bg-black text-white w-full p-5 rounded-3xl grid grid-cols-2 justify-center items-center"
      >
        <p class="text-xl">Status</p>
        <button
          type="button"
          class="text-white bg-lime-400 hover:bg-lime-500 focus:outline-none focus:ring-4 focus:ring-lime-300 font-medium rounded-full text-xl p-4 text-center dark:focus:ring-lime-900"
        >
          Aktif
        </button>
        <div class="col-span-2 grid grid-cols-3 mt-5">
          <div class="col-span-2">
            <h1 class="text-3xl">Akun Gacor</h1>
            <h3 class="text-2xl">Diaktifkan</h3>
          </div>
          <div class="col-span-1">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="rotate-animation"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM10.4367 13.8H11.5C11.7357 13.8 11.8536 13.8 11.9268 13.8732C12 13.9464 12 14.0643 12 14.3V17.1079C12 17.8669 12 18.2465 12.1861 18.2956C12.3723 18.3448 12.5597 18.0148 12.9347 17.3549L12.9347 17.3549L15.3023 13.188C16.0576 11.8587 16.4352 11.194 16.146 10.697C15.8567 10.2 15.0923 10.2 13.5633 10.2H12.5C12.2643 10.2 12.1464 10.2 12.0732 10.1268C12 10.0536 12 9.9357 12 9.7V6.89213C12 6.13307 12 5.75355 11.8139 5.70436C11.6277 5.65517 11.4403 5.98515 11.0653 6.64511L11.0653 6.64512L8.69774 10.812C7.94244 12.1413 7.56479 12.806 7.85403 13.303C8.14327 13.8 8.90773 13.8 10.4367 13.8Z"
                  fill="#ffffff"
                  fill-opacity="0.24"
                ></path>
                <path
                  d="M11.5 13.8H10.4367C8.90773 13.8 8.14327 13.8 7.85403 13.303C7.56479 12.806 7.94244 12.1413 8.69774 10.812L11.0653 6.64512C11.4403 5.98516 11.6277 5.65517 11.8139 5.70436C12 5.75354 12 6.13307 12 6.89213V9.7C12 9.9357 12 10.0536 12.0732 10.1268C12.1464 10.2 12.2643 10.2 12.5 10.2H13.5633C15.0923 10.2 15.8567 10.2 16.146 10.697C16.4352 11.194 16.0576 11.8587 15.3023 13.188L12.9347 17.3549C12.5597 18.0148 12.3723 18.3448 12.1861 18.2956C12 18.2465 12 17.8669 12 17.1079V14.3C12 14.0643 12 13.9464 11.9268 13.8732C11.8536 13.8 11.7357 13.8 11.5 13.8Z"
                  stroke="#ffdd00"
                  stroke-width="1.2"
                ></path>
                <circle cx="12" cy="12" r="9" stroke="#ffdd00" stroke-width="1.2"></circle>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <img src="../assets/image/promo.png" />
    </div>
  </section>
</template>
<script setup></script>
<style>
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.rotate-animation {
  animation: rotate 2s linear infinite;
}
</style>
