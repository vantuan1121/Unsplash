<script setup>
import HeaderBar from '@/components/HeaderBar.vue';
import Menu from '@/assets/img/menu.jpg';
import SvgIcon from '@/components/SvgIcon.vue';
import Candlelit from '@/assets/img/imgmenu/Unsplash/Candlelit.avif';
import FloralWallpapers from '@/assets/img/imgmenu/Unsplash/FloralWallpapers.avif';
import ItsGettingDark from '@/assets/img/imgmenu/Unsplash/ItsGettingDark.avif';
import SimpleWatchWallpapers from '@/assets/img/imgmenu/Unsplash/SimpleWatchWallpapers.avif';
</script>

<template>
  <HeaderBar />
  <!--  -->
  <div class="flex justify-center gap-7">
    <div class="flex font-bold border-1 border-[#C0C0C0] rounded-md mt-[50px] h-[263px] w-[580px]">
      <div class="ml-[20px]">
        <router-link to="/GetUnsplash" class="mt-[70px] block text-left">
          Unlock everything <br>
          Unsplash+ has to offer.<br>
          <p class="text-gray-400">Cancel anytime.</p>
        </router-link>
        <!--  -->
        <router-link to="/GetUnsplash"
          class="h-[1cm] w-[5cm] mt-[60px] border-2 bg-black text-white rounded-[10px] hover:bg-black/80 transition duration-300 flex items-center justify-center">
          Upgrade to Unsplash+
        </router-link>
      </div>
      <!--  -->
      <div class="w-[350px] ml-[19.5px]">
        <img :src="Menu" alt="menu">
      </div>
    </div>
    <!-- ========== -->
    <div class="border-1 border-[#C0C0C0] rounded-md h-[263px] w-[300px] mt-[50px]">
      <div class="flex justify-center gap-30 mt-[10px]">
        <p class="font-bold">Collections</p>
        <button class="underline text-gray-400 hover:text-black">
          See all
        </button>
      </div>

      <!-- Tác giả nổi bật -->
     <div class="space-y-5 mt-[10px] ml-[27px] text-[15px]  ">
        <!--  -->
        <a href="https://unsplash.com/collections/reJgOX5fvpU/floral-wallpapers" target="_blank" class="block">
          <div class="flex w-[270px] -ml-2 border-0 rounded-md hover:bg-gray-100 transition">
            <img :src="FloralWallpapers" alt="FloralWallpapers" class="w-9 h-9 object-cover rounded-lg ml-2">
            <div>
              <p class="ml-[6px] font-bold">Floral Wallpapers</p>
              <p class="ml-[6px] text-[10px] text-gray-400">55 images</p>
            </div>
          </div>
        </a>
        <!--  -->
        <a href="https://unsplash.com/collections/nh-E_d2HF_o/simple-watch-wallpapers" target="_blank" class="block">
          <div class="flex w-[270px] -ml-2 border-0 rounded-md hover:bg-gray-100 transition">
            <img :src="SimpleWatchWallpapers" alt="SimpleWatchWallpapers" class="w-9 h-9 object-cover rounded-lg ml-2">
            <div>
              <p class="ml-[6px] font-bold">Simple Watch Wallpapers</p>
              <p class="ml-[6px] text-[10px] text-gray-400">45 images</p>
            </div>
          </div>
        </a>
        <!--  -->
        <a href="https://unsplash.com/collections/s_fNSqdrFDo/candlelit" target="_blank" class="block">
          <div class="flex w-[270px] -ml-2 border-0 rounded-md hover:bg-gray-100 transition">
            <img :src="Candlelit" alt="Candlelit" class="w-9 h-9 object-cover rounded-lg ml-2">
            <div>
              <p class="ml-[6px] font-bold">Candlelit</p>
              <p class="ml-[6px] text-[10px] text-gray-400">20 images</p>
            </div>
          </div>
        </a>
        <!--  -->
        <a href="https://unsplash.com/collections/QZU1xPqbVYM/it's-getting-dark" target="_blank" class="block">
          <div class="flex w-[270px] -ml-2 border-0 rounded-md hover:bg-gray-100 transition">
            <img :src="ItsGettingDark" alt="ItsGettingDark" class="w-9 h-9 object-cover rounded-lg ml-2">
            <div>
              <p class="ml-[6px] font-bold">It's Getting Dark</p>
              <p class="ml-[6px] text-[10px] text-gray-400">20 images</p>
            </div>
          </div>
        </a>
        <!--  -->
      </div>
    </div>
    <!--  -->
    <div class="border-1 border-[#C0C0C0] rounded-md h-[263px] w-[300px] mt-[50px]">
      <div class="flex mt-[220px] ml-[15px]">
        <SvgIcon name="muitenlen" class="h-5 w-10" />
        <button class="underline text-black hover:text-gray-400">
          See trending searches
        </button>
      </div>
    </div>
  </div>
</template>
