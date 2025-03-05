<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import banner from '@/assets/img/login/banner1.jpg';
import m from '@/assets/img/login/m.png';
import k from '@/assets/img/login/k.png';

// Khai báo router
const router = useRouter();

// Biến lưu trữ dữ liệu nhập vào
const username = ref('');
const password = ref('');
const errorMessage = ref('');

// Hàm xử lý đăng nhập
const login = () => {
  if (username.value === 'user' && password.value === '12345678' || username.value === 'user1' && password.value === '112345678') {
    router.push('/IndexPages'); // Điều hướng user
  } else if (username.value === 'admin' && password.value === '87654321') {
    router.push('/AdManage'); // Điều hướng admin
  } else {
    errorMessage.value = 'Sai tài khoản hoặc mật khẩu!';
  }
};
</script>

<template>
  <div class="relative h-[19.3cm]">
    <img :src="banner" alt="banner" class="w-full h-full object-cover">

    <div class="absolute inset-0 flex flex-col items-center justify-center">
      <p class="flex justify-center text-white text-3xl font-bold">Đăng Nhập</p>

      <!-- Hiển thị lỗi nếu có -->
      <p v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</p>

      <div class="space-y-5 mt-8">
        <div class="flex justify-center text-white border-b-2 w-fit mx-auto">
          <img :src="m" alt="m" class="h-[30px]">
          <input v-model="username" type="text" placeholder="Tên tài khoản"
            class="rounded p-2 w-64 focus:outline-none">
        </div>

        <div class="flex justify-center text-white border-b-2 w-fit mx-auto">
          <img :src="k" alt="k" class="h-[30px]">
          <input v-model="password" type="password" placeholder="Nhập mật khẩu"
            class="rounded p-2 w-64 focus:outline-none">
        </div>
      </div>

      <div class="flex justify-center mt-8 text-white gap-[120px]">
        <label class="flex gap-2 cursor-pointer">
          <input type="checkbox" class="accent-[#ff3366]">
          <span>Lưu</span>
        </label>
        <a href="#" class="hover:text-red-400">Quên mật khẩu?</a>
      </div>

      <!-- Nút đăng nhập -->
      <div class="flex justify-center mt-8">
        <button @click="login"
          class="text-white font-bold bg-[#ff3366] hover:bg-[#ff3366]/80 w-[7cm] h-[1cm] rounded-xl active:scale-95 transition-all">
          Đăng Nhập
        </button>
      </div>

      <div class="flex justify-center mx-auto mt-5 text-white font-bold text-[20px]">
        or
      </div>

      <div class="flex items-center justify-center mx-auto gap-3 text-white font-bold mt-5 hover:text-[#ff3366]">
        <div class="w-16 border-t-2 border-gray-500"></div>
        <router-link to="/SignUp">Đăng Ký</router-link>
        <div class="w-16 border-t-2 border-gray-500"></div>
      </div>
    </div>
  </div>
</template>
