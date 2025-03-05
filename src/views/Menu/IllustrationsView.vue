<script setup>
import MenuPages from '@/pages/MenuPages.vue';
import Menu from '@/assets/img/menu.jpg';
import SvgIcon from '@/components/SvgIcon.vue';
import AbstractFlorals from '@/assets/img/imgmenu/Illustrations/AbstractFlorals.avif';
import ColorMeIn from '@/assets/img/imgmenu/Illustrations/ColorMeIn.avif';
import EcommerceIconsByRoundIcons from '@/assets/img/imgmenu/Illustrations/EcommerceIconsByRoundIcons.avif';
import WorkinProgress from '@/assets/img/imgmenu/Illustrations/WorkinProgress.avif';

</script>

<template>
  <MenuPages />
  <!--  -->
  <div class="flex justify-center gap-7">
    <div class="flex font-bold border-1 border-[#C0C0C0] rounded-md mt-[50px] h-[280px] w-[580px]">
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
            query: 'Illustrations',
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
