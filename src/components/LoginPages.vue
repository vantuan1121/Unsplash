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
      <div class="absolute inset-0 flex flex-col items-center justify-center">
        <p class="flex justify-center text-white text-3xl font-bold">Đăng Nhập</p>
        <div class="space-y-5 mt-[30px]">
          <div class="flex justify-center text-white border-b-2 w-fit mx-auto">
            <img :src="m" alt="m" class="h-[30px]">
            <input type="text" placeholder="Tên tài khoản" class="rounded p-2 w-64 focus:outline-none">
          </div>
          <div class="flex justify-center text-white border-b-2 w-fit mx-auto">
            <img :src="k" alt="k" class="h-[30px]">
            <input type="password" placeholder="Nhập mật khẩu" class="rounded p-2 w-64 focus:outline-none">
          </div>
        </div>
        <div class="flex justify-center mt-[30px] text-white gap-[120px]">
          <div class="flex gap-2">
            <input type="checkbox">
            <P>Lưu</P>
          </div>
          <a href="" class="hover:text-red-400">Quên mật khẩu?</a>
        </div>
        <div
          class="flex justify-center mt-[30px] text-white font-bold bg-[#ff3366] hover:bg-[#ff3366]/80 w-[7cm] h-[1cm] rounded-xl mx-auto">
          <button>Đăng Nhập</button>
        </div>
        <div class="flex justify-center mx-auto mt-[20px] text-white font-bold text-[20px]">
          or
        </div>
        <div class="flex items-center justify-center mx-auto gap-3 text-white font-bold mt-[20px] hover:text-[#ff3366]">
          <div class="w-16 border-t-2 border-gray-500"></div>
          <router-link to="/SignUp">Đăng Ký</router-link>
          <div class="w-16 border-t-2 border-gray-500"></div>
        </div>
      </div>
  </div>
</template>
