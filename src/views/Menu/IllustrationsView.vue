<script setup>
import HeaderBar from '@/components/HeaderBar.vue';
import Menu from '@/assets/img/menu.jpg';
import SvgIcon from '@/components/SvgIcon.vue';
import AbstractFlorals from '@/assets/img/imgmenu/Illustrations/AbstractFlorals.avif';
import ColorMeIn from '@/assets/img/imgmenu/Illustrations/ColorMeIn.avif';
import EcommerceIconsByRoundIcons from '@/assets/img/imgmenu/Illustrations/EcommerceIconsByRoundIcons.avif';
import WorkinProgress from '@/assets/img/imgmenu/Illustrations/WorkinProgress.avif';

</script>

<template>
  <HeaderBar />
  <MenuPages />
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
    <div class="border-1 border-[#C0C0C0] rounded-md h-[280px] w-[300px] mt-[50px]">
      <div class="flex justify-center gap-30 mt-[10px]">
        <p class="font-bold">Collections</p>
        <button class="underline text-gray-400 hover:text-black">
          See all
        </button>
      </div>

      <!-- Tác giả nổi bật -->
     <div class="space-y-5 mt-[10px] ml-[27px] text-[15px]  ">
        <!--  -->
        <a href="https://unsplash.com/collections/gcFAv2pJFgY/color-me-in" target="_blank" class="block">
          <div class="flex w-[270px] -ml-2 border-0 rounded-md hover:bg-gray-100 transition">
            <img :src="ColorMeIn" alt="ColorMeIn" class="w-9 h-9 object-cover rounded-lg ml-2">
            <div>
              <p class="ml-[6px] font-bold">Color Me In</p>
              <p class="ml-[6px] text-[10px] text-gray-400">60 images</p>
            </div>
          </div>
        </a>
        <!--  -->
        <a href="https://unsplash.com/collections/tPmpeOl08C4/abstract-florals" target="_blank" class="block">
          <div class="flex w-[270px] -ml-2 border-0 rounded-md hover:bg-gray-100 transition">
            <img :src="AbstractFlorals" alt="AbstractFlorals" class="w-9 h-9 object-cover rounded-lg ml-2">
            <div>
              <p class="ml-[6px] font-bold">AbstractFlorals</p>
              <p class="ml-[6px] text-[10px] text-gray-400">45 images</p>
            </div>
          </div>
        </a>
        <!--  -->
        <a href="https://unsplash.com/collections/xPjvVlcqD1I/ecommerce-icons-by-round-icons" target="_blank" class="block">
          <div class="flex w-[270px] -ml-2 border-0 rounded-md hover:bg-gray-100 transition">
            <img :src="EcommerceIconsByRoundIcons" alt="EcommerceIconsByRoundIcons" class="w-9 h-9 object-cover rounded-lg ml-2">
            <div>
              <p class="ml-[6px] font-bold">Ecommerce Icons By Round...</p>
              <p class="ml-[6px] text-[10px] text-gray-400">20 images</p>
            </div>
          </div>
        </a>
        <!--  -->
        <a href="https://unsplash.com/collections/7IjgN-EkMA4/work-in-progress" target="_blank" class="block">
          <div class="flex w-[270px] -ml-2 border-0 rounded-md hover:bg-gray-100 transition">
            <img :src="WorkinProgress" alt="WorkinProgresss" class="w-9 h-9 object-cover rounded-lg ml-2">
            <div>
              <p class="ml-[6px] font-bold">Work in Progress</p>
              <p class="ml-[6px] text-[10px] text-gray-400">20 images</p>
            </div>
          </div>
        </a>
        <!--  -->
      </div>
    </div>
    <!--  -->
    <div class="border-1 border-[#C0C0C0] rounded-md h-[280px] w-[300px] mt-[50px]">
      <div class="flex mt-[220px] ml-[15px]">
        <SvgIcon name="muitenlen" class="h-5 w-10" />
        <button class="underline text-black hover:text-gray-400">
          See trending searches
        </button>
      </div>
    </div>
  </div>

  <!-- Hiển thị ảnh -->

</template>

