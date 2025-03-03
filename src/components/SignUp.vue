<script setup>
import banner from '@/assets/img/login/banner1.jpg';
import m from '@/assets/img/login/m.png';
import k from '@/assets/img/login/k.png';

</script>

<template>
  <!-- Banner -->
  <div class="relative h-[19.3cm]">
    <img :src="banner" alt="banner" class="w-full h-full object-cover">

    <!-- form đăng Nhập -->
    <div class="absolute inset-0 flex flex-col items-center justify-center ">
      <p class="flex justify-center text-white text-3xl font-bold">Đăng Ký</p>
      <div class="space-y-5 mt-[30px]">
        <div class="flex justify-center text-white border-b-2 w-fit mx-auto">
          <img :src="m" alt="m" class="h-[30px]">
          <input type="text" placeholder="Tên tài khoản" class="rounded p-2 w-64 focus:outline-none">
        </div>
        <div class="flex justify-center text-white border-b-2 w-fit mx-auto">
          <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-[30px]">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75">
            </path>
          </svg>
          <input type="text" placeholder="Email" class="rounded p-2 w-64 focus:outline-none">
        </div>
        <div class="flex justify-center text-white border-b-2 w-fit mx-auto">
          <img :src="k" alt="k" class="h-[30px]">
          <input type="password" placeholder="Nhập mật khẩu" class="rounded p-2 w-64 focus:outline-none">
        </div>
        <div class="flex justify-center text-white border-b-2 w-fit mx-auto">
          <img :src="k" alt="k" class="h-[30px]">
          <input type="password" placeholder="Nhập lại mật khẩu" class="rounded p-2 w-64 focus:outline-none">
        </div>
      </div>
      <div
        class="flex justify-center mt-[30px] text-white font-bold bg-[#ff3366] hover:bg-[#ff3366]/80 w-[7cm] h-[1cm] rounded-xl mx-auto">
        <button>Đăng Ký</button>
      </div>
    </div>
  </div>
</template>
