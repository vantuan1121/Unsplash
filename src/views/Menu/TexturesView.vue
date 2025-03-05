<script setup>
import MenuPages from '@/pages/MenuPages.vue';
import PawelCzerwinski from '@/assets/img/imgmenu/Textures/PawelCzerwinski.avif';
import EugeneGolovesov from '@/assets/img/imgmenu/Textures/EugeneGolovesov.avif';
import SolenFeyissa from '@/assets/img/imgmenu/Textures/SolenFeyissa.avif';
import MarekPiwnicki from '@/assets/img/imgmenu/Textures/MarekPiwnicki.avif';
</script>

<template>
  <MenuPages />
  <!--  -->
  <div class="flex justify-center gap-7">
    <!-- Cột bên trái -->
    <div class="mt-[50px] border-0 w-[15cm]">
      <div class="text-[40px] font-bold mt-[40px]">
        Textures
      </div>
      <div class="text-gray-400">
        Curated by Unsplash
      </div>
      <div class="mt-[25px]">
        Whether you’re looking for stunning macro-photography or shots of complex<br>
        architectural shapes — you’ve come to the right place.
      </div>
    </div>

    <!-- Cột giữa -->
    <div class="border-1 border-[#C0C0C0] rounded-md h-[280px] w-[300px] mt-[50px]">
      <div class="mt-[15px] ml-[25px]">
        <p class="font-bold">Top contributors</p>
      </div>

      <!-- Tác giả nổi bật -->
     <div class="space-y-5 mt-[10px] ml-[27px] text-[15px]  ">
        <!--  -->
        <a href="https://unsplash.com/@pawel_czerwinski" target="_blank" class="block">
          <div class="flex w-[270px] -ml-2 border-0 rounded-md hover:bg-gray-100 transition">
            <img :src="PawelCzerwinski" alt="PawelCzerwinski" class="w-9 h-9 object-cover rounded-full ml-2">
            <div>
              <p class="ml-[6px] font-bold">Pawel Czerwinski</p>
              <p class="ml-[6px] text-[10px] text-gray-400">pawel_czerwinski</p>
            </div>
          </div>
        </a>
        <!--  -->
        <a href="https://unsplash.com/@eugene_golovesov" target="_blank" class="block">
          <div class="flex w-[270px] -ml-2 border-0 rounded-md hover:bg-gray-100 transition">
            <img :src="EugeneGolovesov" alt="EugeneGolovesov" class="w-9 h-9 object-cover rounded-full ml-2">
            <div>
              <p class="ml-[6px] font-bold">Eugene Golovesov</p>
              <p class="ml-[6px] text-[10px] text-gray-400">eugene_golovesov</p>
            </div>
          </div>
        </a>
        <!--  -->
        <a href="https://unsplash.com/@solenfeyissa" target="_blank" class="block">
          <div class="flex w-[270px] -ml-2 border-0 rounded-md hover:bg-gray-100 transition">
            <img :src="SolenFeyissa" alt="SolenFeyissa" class="w-9 h-9 object-cover rounded-full ml-2">
            <div>
              <p class="ml-[6px] font-bold">Solen Feyissa</p>
              <p class="ml-[6px] text-[10px] text-gray-400">solen_feyissa</p>
            </div>
          </div>
        </a>
        <!--  -->
        <a href="https://unsplash.com/@marekpiwnicki" target="_blank" class="block">
          <div class="flex w-[270px] -ml-2 border-0 rounded-md hover:bg-gray-100 transition">
            <img :src="MarekPiwnicki" alt="MarekPiwnicki" class="w-9 h-9 object-cover rounded-full ml-2">
            <div>
              <p class="ml-[6px] font-bold">Marek Piwnicki</p>
              <p class="ml-[6px] text-[10px] text-gray-400">marek_piwnicki</p>
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

  <!-- hiển thị ảnh -->
  <div class="flex justify-center gap-6 p-4 mt-[50px]">
    <!-- Cột 1 -->
    <div class="flex flex-col space-y-4">
      <div v-for="image in column1" :key="image.id" class="relative group">
        <a :href="image.links.html" target="_blank" class="block">
          <!-- Ảnh -->
          <div class="relative">
            <img :src="image.urls.small" :alt="image.alt_description"
              class="rounded-lg shadow-md transition-all duration-300" loading="lazy" />

            <!-- Nền đen mờ khi hover -->
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 rounded-lg"></div>
          </div>

          <!-- Thông tin tác giả -->
          <div class="absolute bottom-0 left-0 right-0 text-white p-2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <img :src="image.user.profile_image.medium" alt="Avatar"
              class="w-8 h-8 rounded-full border border-white" />
            <div>
              <p class="text-sm font-semibold">{{ image.user.name }}</p>
              <p v-if="image.user.for_hire" class="text-xs text-gray-300">Available for hire ✅</p>
            </div>
          </div>
        </a>
      </div>
    </div>

    <!-- Cột 2 -->
    <div class="flex flex-col space-y-4">
      <div v-for="image in column2" :key="image.id" class="relative group">
        <a :href="image.links.html" target="_blank" class="block">
          <div class="relative">
            <img :src="image.urls.small" :alt="image.alt_description"
              class="rounded-lg shadow-md transition-all duration-300" loading="lazy" />
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 rounded-lg"></div>
          </div>
          <div class="absolute bottom-0 left-0 right-0 text-white p-2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <img :src="image.user.profile_image.medium" alt="Avatar"
              class="w-8 h-8 rounded-full border border-white" />
            <div>
              <p class="text-sm font-semibold">{{ image.user.name }}</p>
              <p v-if="image.user.for_hire" class="text-xs text-gray-300">Available for hire ✅</p>
            </div>
          </div>
        </a>
      </div>
    </div>

    <!-- Cột 3 -->
    <div class="flex flex-col space-y-4">
      <div v-for="image in column3" :key="image.id" class="relative group">
        <a :href="image.links.html" target="_blank" class="block">
          <div class="relative">
            <img :src="image.urls.small" :alt="image.alt_description"
              class="rounded-lg shadow-md transition-all duration-300" loading="lazy" />
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 rounded-lg"></div>
          </div>
          <div class="absolute bottom-0 left-0 right-0 text-white p-2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <img :src="image.user.profile_image.medium" alt="Avatar"
              class="w-8 h-8 rounded-full border border-white" />
            <div>
              <p class="text-sm font-semibold">{{ image.user.name }}</p>
              <p v-if="image.user.for_hire" class="text-xs text-gray-300">Available for hire ✅</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>

  <!-- Trigger tải thêm ảnh -->
  <div ref="loadMoreTrigger" class="h-10"></div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      column1: [],
      column2: [],
      column3: [],
      page: 1,
      accessKey: import.meta.env.VITE_UNSPLASH_ACCESS_KEY,
      observer: null,
      loading: false,
    };
  },
  methods: {
    async fetchImages() {
      if (this.loading || !this.accessKey) return;
      this.loading = true;

      try {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
          params: {
            query: 'Textures',
            page: this.page,
            per_page: 15,
            client_id: this.accessKey
          },
        });

        const newColumn1 = [];
        const newColumn2 = [];
        const newColumn3 = [];

        response.data.results.forEach((image, index) => {
          if (index % 3 === 0) newColumn1.push(image);
          else if (index % 3 === 1) newColumn2.push(image);
          else newColumn3.push(image);
        });

        this.column1 = [...this.column1, ...newColumn1];
        this.column2 = [...this.column2, ...newColumn2];
        this.column3 = [...this.column3, ...newColumn3];

        this.page++;
      } catch (error) {
        if (error.response?.status === 403 || error.response?.status === 429) {
          console.error("Quota exceeded! Try again later.");
        } else {
          console.error("Error fetching images:", error);
        }
      } finally {
        this.loading = false;
      }
    },
    setupObserver() {
      if (this.observer) return;

      this.observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            this.fetchImages();
          }
        },
        { rootMargin: '200px' }
      );

      this.$nextTick(() => {
        const trigger = this.$refs.loadMoreTrigger;
        if (trigger) {
          this.observer.observe(trigger);
        }
      });
    }
  },
  mounted() {
    if (!this.accessKey) {
      console.error("Unsplash API key is missing! Please set VITE_UNSPLASH_ACCESS_KEY in .env file.");
      return;
    }
    this.fetchImages();
    this.setupObserver();
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
};
</script>
