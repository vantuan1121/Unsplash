<script setup>
import HeaderBar from '@/components/HeaderBar.vue';
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
  <div class="sticky z-50 top-0 bg-white">
    <HeaderBar />
    <!--  -->
    <div class="flex justify-center border-b-2 border-[#c1baba] p-8">
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
          <li>
            <router-link to="/NatureView" class="text-gray-500 hover:text-black">Nature</router-link>
          </li>
          <!--  -->
          <li>
            <router-link to="/RendersView" class="text-gray-500 hover:text-black">3D Renders</router-link>
          </li>
          <li>
            <router-link to="/TexturesView" class="text-gray-500 hover:text-black">Textures</router-link>
          </li>
          <li>
            <router-link to="/ArchitectureView" class="text-gray-500 hover:text-black">Architecture &
              Interiors</router-link>
          </li>
          <li>
            <router-link to="/TravelView" class="text-gray-500 hover:text-black">Travel</router-link>
          </li>
          <li>
            <router-link to="/FilmView" class="text-gray-500 hover:text-black">Film</router-link>
          </li>
          <li>
            <router-link to="/StreetPhotographyView" class="text-gray-500 hover:text-black">Street
              Photography</router-link>
          </li>
          <li>
            <router-link to="/PeopleView" class="text-gray-500 hover:text-black">People</router-link>
          </li>
          <li>
            <router-link to="/AnimalsView" class="text-gray-500 hover:text-black">Animals</router-link>
          </li>
          <li>
            <router-link to="/ExperimentalView" class="text-gray-500 hover:text-black">Experimental</router-link>
          </li>
          <li>
            <router-link to="/FashionView" class="text-gray-500 hover:text-black">Fashion & Beauty</router-link>
          </li>
          <li>
            <router-link to="/FoodView" class="text-gray-500 hover:text-black">Food & Drink</router-link>
          </li>
          <li>
            <router-link to="/SportsView" class="text-gray-500 hover:text-black">Sports</router-link>
          </li>
          <li>
            <router-link to="/HealthView" class="text-gray-500 hover:text-black">Health & Wellness</router-link>
          </li>
        </div>

        <!-- Nút cuộn phải -->
        <button @click="scrollMenu(200)">
          <SvgIcon name="benphai" width="25px" height="25px" />
        </button>
      </ul>
    </div>
  </div>
</template>
