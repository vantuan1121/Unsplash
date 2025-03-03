<script setup>
import HeaderBar from '@/components/HeaderBar.vue';
import MarekPiwnicki from '@/assets/img/imgmenu/Wallpapers/MarekPiwnicki.avif';
import WolfgangHasselmann from '@/assets/img/imgmenu/Wallpapers/WolfgangHasselmann.avif';
import AnnieSpratt from '@/assets/img/imgmenu/Wallpapers/AnnieSpratt.avif'
import EugeneGolovesov from '@/assets/img/imgmenu/Wallpapers/EugeneGolovesov.avif';
// import { ref } from "vue";

// // Biến để kiểm soát hiển thị nút Upload
// const showUploadButton = ref(false);

// const toggleUploadButton = () => {
//   showUploadButton.value = !showUploadButton.value;
// };
</script>

<template>
  <HeaderBar />
  <MenuPages />
  <!--  -->
  <div class="flex justify-center gap-7">
    <!-- Cột bên trái -->
    <div class="mt-[50px] border-0 w-[15cm]">
      <div class="text-[40px] font-bold mt-[40px]">
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
      <!-- <div class="mt-[25px]">
        <button @click="toggleUploadButton"
          class="h-[50px] w-[6cm] border-2 bg-black text-white rounded-[10px] hover:bg-black/80 transition duration-300 font-bold">
          Submit to Wallpapers
        </button>
      </div> -->

      <!-- Nút Upload (Hiển thị khi click) -->
      <!-- <div v-if="showUploadButton" class="mt-3">
        <button class="h-[50px] w-[7cm] bg-black text-white rounded-[10px] flex items-center gap-2">
          <div class="ml-[30px]">
            <span class="text-xl">+</span> Upload a new photo
          </div>
        </button>
      </div> -->
    </div>

    <!-- Cột giữa -->
    <div class="border-1 border-[#C0C0C0] rounded-md h-[280px] w-[300px] mt-[50px]">
      <div class="mt-[15px] ml-[25px]">
        <p class="font-bold">Top contributors</p>
      </div>

      <!-- Tác giả nổi bật -->
     <div class="space-y-5 mt-[10px] ml-[27px] text-[15px]  ">
        <!--  -->
        <a href="https://unsplash.com/collections/gcFAv2pJFgY/color-me-in" target="_blank" class="block">
          <div class="flex w-[270px] -ml-2 border-0 rounded-md hover:bg-gray-100 transition">
            <img :src="MarekPiwnicki" alt="MarekPiwnicki" class="w-9 h-9 object-cover rounded-full ml-2">
            <div>
              <p class="ml-[6px] font-bold">Marek Piwnicki</p>
              <p class="ml-[6px] text-[10px] text-gray-400">marekpiwnicki</p>
            </div>
          </div>
        </a>
        <!--  -->
        <a href="https://unsplash.com/collections/tPmpeOl08C4/abstract-florals" target="_blank" class="block">
          <div class="flex w-[270px] -ml-2 border-0 rounded-md hover:bg-gray-100 transition">
            <img :src="WolfgangHasselmann" alt="WolfgangHasselmann" class="w-9 h-9 object-cover rounded-full ml-2">
            <div>
              <p class="ml-[6px] font-bold">Wolfgang Hasselmann</p>
              <p class="ml-[6px] text-[10px] text-gray-400">wolfgang_hasselmann</p>
            </div>
          </div>
        </a>
        <!--  -->
        <a href="https://unsplash.com/collections/7IjgN-EkMA4/work-in-progress" target="_blank" class="block">
          <div class="flex w-[270px] -ml-2 border-0 rounded-md hover:bg-gray-100 transition">
            <img :src="EugeneGolovesov" alt="EugeneGolovesov" class="w-9 h-9 object-cover rounded-full ml-2">
            <div>
              <p class="ml-[6px] font-bold">Eugene Golovesov</p>
              <p class="ml-[6px] text-[10px] text-gray-400">eugene_Golovesov</p>
            </div>
          </div>
        </a>
        <!--  -->
        <a href="https://unsplash.com/collections/xPjvVlcqD1I/ecommerce-icons-by-round-icons" target="_blank" class="block">
          <div class="flex w-[270px] -ml-2 border-0 rounded-md hover:bg-gray-100 transition">
            <img :src="AnnieSpratt" alt="AnnieSpratt" class="w-9 h-9 object-cover rounded-full ml-2">
            <div>
              <p class="ml-[6px] font-bold">Annie Spratt</p>
              <p class="ml-[6px] text-[10px] text-gray-400">anniespratt</p>
            </div>
          </div>
        </a>
        <!--  -->
      </div>
      <!--  -->
    </div>

    <!-- Cột bên phải -->
    <div class="border-1 border-[#C0C0C0] rounded-md h-[280px] w-[300px] mt-[50px]">
      <div class="flex mt-[220px] ml-[15px]">
      </div>
    </div>
  </div>
</template>
