<script setup>
import HeaderBar from '@/components/HeaderBar.vue';
import MarekPiwnicki from '@/assets/img/imgmenu/Nature/MarekPiwnicki.avif';
import WolfgangHasselmann from '@/assets/img/imgmenu/Nature/WolfgangHasselmann.avif';
import AnnieSpratt from '@/assets/img/imgmenu/Nature/AnnieSpratt.avif'
import FrancescoUngaro from '@/assets/img/imgmenu/Nature/FrancescoUngaro.avif';
</script>

<template>
  <HeaderBar />
  <!--  -->
  <div class="flex justify-center gap-7">
    <!-- Cột bên trái -->
    <div class="mt-[50px] border-0 w-[15cm]">
      <div class="text-[40px] font-bold mt-[40px]">
        Nature
      </div>
      <div class="text-gray-400">
        Curated by Unsplash
      </div>
      <div class="mt-[25px]">
        This category showcases nature’s beauty, from vast landscapes to macro details, <br>
        transporting viewers into the outdoors.
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
        <a href="https://unsplash.com/@marekpiwnicki" target="_blank" class="block">
          <div class="flex w-[270px] -ml-2 border-0 rounded-md hover:bg-gray-100 transition">
            <img :src="MarekPiwnicki" alt="MarekPiwnicki" class="w-9 h-9 object-cover rounded-full ml-2">
            <div>
              <p class="ml-[6px] font-bold">Marek Piwnicki</p>
              <p class="ml-[6px] text-[10px] text-gray-400">marekpiwnicki</p>
            </div>
          </div>
        </a>
        <!--  -->
        <a href="https://unsplash.com/@wolfgang_hasselmann" target="_blank" class="block">
          <div class="flex w-[270px] -ml-2 border-0 rounded-md hover:bg-gray-100 transition">
            <img :src="WolfgangHasselmann" alt="WolfgangHasselmann" class="w-9 h-9 object-cover rounded-full ml-2">
            <div>
              <p class="ml-[6px] font-bold">Wolfgang Hasselmann</p>
              <p class="ml-[6px] text-[10px] text-gray-400">wolfgang_hasselmann</p>
            </div>
          </div>
        </a>
        <!--  -->
        <a href="https://unsplash.com/@anniespratt" target="_blank" class="block">
          <div class="flex w-[270px] -ml-2 border-0 rounded-md hover:bg-gray-100 transition">
            <img :src="AnnieSpratt" alt="AnnieSpratt" class="w-9 h-9 object-cover rounded-full ml-2">
            <div>
              <p class="ml-[6px] font-bold">Annie Spratt</p>
              <p class="ml-[6px] text-[10px] text-gray-400">anniespratt</p>
            </div>
          </div>
        </a>
        <!--  -->
        <a href="https://unsplash.com/@francesco_ungaro" target="_blank" class="block">
          <div class="flex w-[270px] -ml-2 border-0 rounded-md hover:bg-gray-100 transition">
            <img :src="FrancescoUngaro" alt="FrancescoUngaro" class="w-9 h-9 object-cover rounded-full ml-2">
            <div>
              <p class="ml-[6px] font-bold">Francesco Ungaro</p>
              <p class="ml-[6px] text-[10px] text-gray-400">francesco_ungaro</p>
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
      <a v-for="image in column1" :key="image.id" :href="image.links.html" target="_blank">
        <img :src="image.urls.small" :alt="image.alt_description" class="rounded-lg shadow-md hover:opacity-80" />
      </a>
    </div>

    <!-- Cột 2 -->
    <div class="flex flex-col space-y-4">
      <a v-for="image in column2" :key="image.id" :href="image.links.html" target="_blank">
        <img :src="image.urls.small" :alt="image.alt_description" class="rounded-lg shadow-md hover:opacity-80" />
      </a>
    </div>

    <!-- Cột 3 -->
    <div class="flex flex-col space-y-4">
      <a v-for="image in column3" :key="image.id" :href="image.links.html" target="_blank">
        <img :src="image.urls.small" :alt="image.alt_description" class="rounded-lg shadow-md hover:opacity-80" />
      </a>
    </div>
  </div>
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
            query: 'Nature',
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
