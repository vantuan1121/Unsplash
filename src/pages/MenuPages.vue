<script setup>
import { ref } from 'vue';
import SvgIcon from '@/components/SvgIcon.vue';

const menuContainer = ref(null);

const scrollMenu = (offset) => {
  if (menuContainer.value) {
    menuContainer.value.scrollBy({ left: offset, behavior: 'smooth' });
  }
};
</script>

<template>
  <div class="flex justify-center ">
    <ul class="flex gap-5 items-center font-medium ">
      <li>
        <router-link to="/PhotosView" class="text-gray-500 hover:text-black">Photos</router-link>
      </li>
      <li>
        <router-link to="/IllustrationsView" class="text-gray-500 hover:text-black">Illustrations</router-link>
      </li>
      <li>
        <router-link to="/UnsplashView" class="text-gray-500 hover:text-black">Unsplash+</router-link>
      </li>

      <!-- Nút cuộn trái -->
      <button @click="scrollMenu(-200)">
        <SvgIcon name="bentrai" width="25px" height="25px" />
      </button>

      <!-- Menu cuộn ngang -->
      <div ref="menuContainer"
        class="w-[28cm] flex gap-5 whitespace-nowrap overflow-x-hidden scroll-smooth font-medium">

        <li>
         <router-link to="/WallpapersView" class="text-gray-500 hover:text-black">Wallpapers</router-link>

      </li>
        <li class="text-gray-500 hover:text-black">Nature</li>
        <li class="text-gray-500 hover:text-black">3D Renders</li>
        <li class="text-gray-500 hover:text-black">Textures</li>
        <li class="text-gray-500 hover:text-black">Architecture & Interiors</li>
        <li class="text-gray-500 hover:text-black">Travel</li>
        <li class="text-gray-500 hover:text-black">Film</li>
        <li class="text-gray-500 hover:text-black">Street Photography</li>
        <li class="text-gray-500 hover:text-black">People</li>
        <li class="text-gray-500 hover:text-black">Animals</li>
        <li class="text-gray-500 hover:text-black">Experimental</li>
        <li class="text-gray-500 hover:text-black">Fashion & Beauty</li>
        <li class="text-gray-500 hover:text-black">Food & Drink</li>
        <li class="text-gray-500 hover:text-black">Sports</li>
        <li class="text-gray-500 hover:text-black">Health & Wellness</li>
      </div>

      <!-- Nút cuộn phải -->
      <button @click="scrollMenu(200)">
        <SvgIcon name="benphai" width="25px" height="25px" />
      </button>
    </ul>
  </div>
</template>
