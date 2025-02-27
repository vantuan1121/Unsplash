<script setup>
import MenuPages from '@/pages/MenuPages.vue';
import HeaderBar from '@/components/HeaderBar.vue';
import Menu from '@/assets/img/menu.jpg';
import SvgIcon from '@/components/SvgIcon.vue';
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
    <div class="border-1 border-[#C0C0C0] rounded-md h-[263px] w-[300px] mt-[50px]">
      <div class="flex justify-center gap-30 mt-[10px]">
        <p class="font-bold">Collections</p>
        <button class="underline text-gray-400 hover:text-black">
          See all
        </button>
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
