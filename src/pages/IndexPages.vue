<script setup>
import MenuPages from './MenuPages.vue';
import HeaderBar from '@/components/HeaderBar.vue';
import Menu from '@/assets/img/menu.jpg';
import Candlelit from '@/assets/img/imgmenu/Photo/Candlelit.avif';
import Spring from '@/assets/img/imgmenu/Photo/Spring.avif';
import Yellow from '@/assets/img/imgmenu/Photo/Yellow.avif';
import Textures from '@/assets/img/imgmenu/Photo/Textures.avif';
import SvgIcon from '@/components/SvgIcon.vue';
</script>

<template>
    <HeaderBar/>
    <MenuPages />
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
        <p class="font-bold">
          Collections
        </p>
        <a href="https://unsplash.com/collections" target="_blank" class="block">
          <button class="underline text-gray-400 hover:text-black">
            See all
          </button>
        </a>
      </div>
      <!-- ======== -->
      <div class="space-y-5 mt-[10px] ml-[27px] text-[15px]  ">
        <!--  -->
        <a href="https://unsplash.com/collections/s_fNSqdrFDo/candlelit" target="_blank" class="block">
          <div class="flex w-[270px] -ml-2 border-0 rounded-md hover:bg-gray-100 transition">
            <img :src="Candlelit" alt="Candlelit" class="w-9 h-9 object-cover rounded-lg ml-2">
            <div>
              <p class="ml-[6px] font-bold">Candlelit</p>
              <p class="ml-[6px] text-[10px] text-gray-400">45 images</p>
            </div>
          </div>
        </a>
        <!--  -->
        <a href="https://unsplash.com/collections/96884739/spring" target="_blank" class="block">
          <div class="flex w-[270px] -ml-2 border-0 rounded-md hover:bg-gray-100 transition">
            <img :src="Spring" alt="Spring" class="w-9 h-9 object-cover rounded-lg ml-2">
            <div>
              <p class="ml-[6px] font-bold">Spring</p>
              <p class="ml-[6px] text-[10px] text-gray-400">203 images</p>
            </div>
          </div>
        </a>
        <!--  -->
        <a href="https://unsplash.com/collections/1490295/yellow" target="_blank" class="block">
          <div class="flex w-[270px] -ml-2 border-0 rounded-md hover:bg-gray-100 transition">
            <img :src="Yellow" alt="Yellow" class="w-9 h-9 object-cover rounded-lg ml-2">
            <div>
              <p class="ml-[6px] font-bold">Yellow</p>
              <p class="ml-[6px] text-[10px] text-gray-400">325 images</p>
            </div>
          </div>
        </a>
        <!--  -->
        <a href="https://unsplash.com/collections/1913171/textures" target="_blank" class="block">
          <div class="flex w-[270px] -ml-2 border-0 rounded-md hover:bg-gray-100 transition">
            <img :src="Textures" alt="Textures" class="w-9 h-9 object-cover rounded-lg ml-2">
            <div>
              <p class="ml-[6px] font-bold">Textures</p>
              <p class="ml-[6px] text-[10px] text-gray-400">911 images</p>
            </div>
          </div>
        </a>
        <!--  -->
      </div>
    </div>
    <div class="border-1 border-[#C0C0C0] rounded-md h-[263px] w-[300px] mt-[50px]">
      <div class="flex mt-[220px] ml-[15px]">
        <SvgIcon name="muitenlen" class="h-5 w-10" />
        <a href="https://unsplash.com/trends" target="_blank" class="block">
          <button class="underline text-black hover:text-gray-400">
            See trending searches
          </button>
        </a>
      </div>
    </div>
  </div>
</template>
