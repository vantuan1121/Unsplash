<script setup>
import MenuPages from '@/pages/MenuPages.vue';
import HeaderBar from '@/components/HeaderBar.vue';
import { ref } from "vue";

// Biến để kiểm soát hiển thị nút Upload
const showUploadButton = ref(false);

const toggleUploadButton = () => {
  showUploadButton.value = !showUploadButton.value;
};
</script>

<template>
  <HeaderBar />
  <MenuPages />
  <!--  -->
  <div class="flex justify-center gap-7">
    <!-- Cột bên trái -->
    <div class="mt-[50px]">
      <div class="text-[40px] font-bold mt-[30px]">
        Wallpapers
      </div>
      <div class="text-gray-400">
        Curated by Unsplash
      </div>
      <div class="mt-[25px]">
        From epic drone shots to inspiring moments in nature — submit your best <br>
        desktop and mobile backgrounds.
      </div>

      <!-- Nút Submit -->
      <div class="mt-[25px]">
        <button @click="toggleUploadButton"
          class="h-[50px] w-[6cm] border-2 bg-black text-white rounded-[10px] hover:bg-black/80 transition duration-300 font-bold">
          Submit to Wallpapers
        </button>
      </div>

      <!-- Nút Upload (Hiển thị khi click) -->
      <div v-if="showUploadButton" class="mt-3">
        <button class="h-[50px] w-[7cm] bg-black text-white rounded-[10px] flex items-center gap-2">
          <div class="ml-[30px]">
            <span class="text-xl">+</span> Upload a new photo
          </div>
        </button>
      </div>
    </div>

    <!-- Cột giữa -->
    <div class="border-1 border-[#C0C0C0] rounded-md h-[263px] w-[300px] mt-[50px]">
      <div class="mt-[15px] ml-[10px]">
        <p class="font-bold">Top contributors</p>
      </div>
    </div>

    <!-- Cột bên phải -->
    <div class="border-1 border-[#C0C0C0] rounded-md h-[263px] w-[300px] mt-[50px]">
      <div class="flex mt-[220px] ml-[15px]">
      </div>
    </div>
  </div>
</template>
