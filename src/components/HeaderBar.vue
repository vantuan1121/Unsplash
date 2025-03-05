<script setup>
import logo from '@/assets/img/logo.jpg';
import SvgIcon from '@/components/SvgIcon.vue';
import wallpaperImg from '@/assets/img/imgmenu/Wallpapers/info.avif';
import FashionBeauty from '@/assets/img/imgmenu/Fashion_Beauty/info.avif'
import FoodDrink from '@/assets/img/imgmenu/Food_Drink/info.avif';
import Renders from '@/assets/img/imgmenu/3DRenders/info.avif';
import Sports from '@/assets/img/imgmenu/Sports/info.avif';
//
import { ref, onMounted, onUnmounted, computed,watch } from "vue";
import { useRouter, useRoute } from "vue-router";

const searchQuery = ref("");
const router = useRouter();
const route = useRoute();

// Gán lại từ khóa từ URL khi component được mount
onMounted(() => {
  searchQuery.value = route.query.q || "";
});

// Cập nhật thanh tìm kiếm khi query trên URL thay đổi
const currentQuery = computed(() => route.query.q || "");
searchQuery.value = currentQuery.value;

const searchPhotos = () => {
  const query = searchQuery.value.trim();
  if (query) {
    router.push({ name: "ImageSearch", query: { q: query } });
  }
};

// Trạng thái hiển thị trending
const showTrending = ref(false);
const trendingSearches = ["robot", "wallpaper", "moon", "Peacock feather", "sick"];
const trendingTopics = [
  { name: "Fashion & Beauty", image: FashionBeauty },
  { name: "Food & Drink", image: FoodDrink },
  { name: "3D Renders", image: Renders },
  { name: "Sports", image: Sports },
  { name: "Wallpapers", image: wallpaperImg },
];
const trendingCollections = ["Slow Travel", "Nature Desktop Wallpapers", "Traveling", "Grounded", "Creative"];

const setSearchQuery = (query) => {
  searchQuery.value = query;
  searchPhotos();
};

// Ánh xạ topic đến route Vue
const topicRoutes = {
  "Fashion & Beauty": "FashionView",
  "Food & Drink": "FoodView",
  "3D Renders": "RendersView",
  "Sports": "SportsView",
  "Wallpapers": "WallpapersView",
};

const goToTopicPage = (topicName) => {
  const routeName = topicRoutes[topicName];
  if (routeName) {
    router.push({ name: routeName });
  } else {
    console.error("Không tìm thấy route cho:", topicName);
  }
};

// Ẩn trending khi mất focus
const hideTrending = (event) => {
  setTimeout(() => {
    if (!event.relatedTarget?.closest(".trending-container")) {
      showTrending.value = false;
    }
  }, 200);
};

// Xử lý dropdown
const isOpen = ref(false);
const dropdownRef = ref(null);
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false;
  }
};

// Chỉ gắn event listener khi dropdown mở
const manageDropdownEvent = () => {
  if (isOpen.value) {
    window.addEventListener("click", handleClickOutside);
  } else {
    window.removeEventListener("click", handleClickOutside);
  }
};

// Theo dõi sự thay đổi của dropdown để thêm/xóa event listener
watch(isOpen, manageDropdownEvent);

// Gỡ sự kiện khi component bị hủy
onUnmounted(() => {
  window.removeEventListener("click", handleClickOutside);
});
</script>


<template>
  <div class="sticky z-50 top-0 pt-4 bg-white">
    <!--  -->
    <div class="flex ml-[10px]">
      <!--  -->
      <div class="h-5 w-10">
        <router-link to="/" >
        <img :src="logo" alt="Logo">
      </router-link>
      </div>

      <!-- Thanh tìm kiếm  -->
      <div class="relative ml-5">
        <input v-model="searchQuery" @focus="showTrending = true" @blur="hideTrending" @keyup.enter="searchPhotos"
          class="w-[980px] h-[40px] rounded-full bg-gray-200 pl-5  hover:bg-gray-300 focus:outline-none"
          placeholder="Search photo and illustrations" />

        <!-- Bảng gợi ý -->
        <div v-if="showTrending" class="absolute w-[980px] bg-white shadow-lg rounded-lg mt-2 p-4">
          <!-- Trending Searches -->
          <div>
            <h3 class="text-gray-700 font-semibold">Trending Searches</h3>
            <div class="flex gap-2 mt-2">
              <button v-for="search in trendingSearches" :key="search" @click="setSearchQuery(search)"
                class="px-3 py-1 border border-[#CCCCCC] rounded-lg text-gray-600 hover:bg-gray-200">
                🔥 {{ search }}
              </button>
            </div>
          </div>

          <!-- Trending Topics -->
          <div class="mt-4">
            <h3 class="text-gray-700 font-semibold">Trending Topics</h3>
            <div class="flex gap-5 mt-2">
              <button v-for="topic in trendingTopics" :key="topic.name" @click="goToTopicPage(topic.name)"
                class="flex items-center gap-3 border border-[#CCCCCC] rounded-lg text-gray-600 hover:bg-gray-200">
                <img :src="topic.image" class="w-10 h-10 rounded-l-lg" />
                {{ topic.name }}
              </button>
            </div>
          </div>

          <!-- Trending Collections -->
          <div class="mt-4">
            <h3 class="text-gray-700 font-semibold">Trending Collections</h3>
            <div class="flex gap-2 mt-2">
              <button v-for="collection in trendingCollections" :key="collection" @click="setSearchQuery(collection)"
                class="px-3 py-1 border border-[#CCCCCC] rounded-lg text-gray-600 hover:bg-gray-200">
                {{ collection }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--  -->
      <div class="ml-5 flex gap-7 ">
        <div class="ml-5 mt-3 h-10 w-20">
          <router-link to="/GetUnsplash"
            class="whitespace-nowrap text-[14px] text-black transition active:scale-90 font-bold">
            Get Unsplash+
          </router-link>

          <GetUnsplash v-if="showComponent" />
        </div>
        <!--  -->
        <div class="ml-5 mt-2 h-10 w-20 ">
          <button
            class=" h-[30px] w-[120px] whitespace-nowrap rounded-md border-2 text-[14px] text-[#767676] hover:border-black hover:text-black transition active:scale-90">
            Submit in image
          </button>
        </div>
      </div>
      <!--  -->
      <div class="mb-[3px] ml-[80px] flex gap-5  ">
        <!-- ============ -->

        <div ref="dropdownRef" class="relative">
          <!-- Nút chuông -->
          <button class="mt-[9px] transition active:scale-90" @click="toggleDropdown">
            <SvgIcon name="chuong" width="32px" height="32px" />
          </button>

          <!-- Hiệu ứng -->
          <Transition enter-active-class="transition duration-300 ease-out transform"
            enter-from-class="scale-95 opacity-0" enter-to-class="scale-100 opacity-100"
            leave-active-class="transition duration-200 ease-in transform" leave-from-class="scale-100 opacity-100"
            leave-to-class="scale-95 opacity-0">
            <!-- Dropdown thông báo -->
            <div v-if="isOpen" class="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg z-50">
              <!-- Tabs: Activity & Highlights -->
              <div class="flex border-b">
                <button @click="activeTab = 'activity'"
                  :class="['w-1/2 py-2 text-center', activeTab === 'activity' ? 'border-b-2 border-black' : 'text-gray-500 hover:text-black']">
                  Activity
                </button>
                <button @click="activeTab = 'highlights'"
                  :class="['w-1/2 py-2 text-center', activeTab === 'highlights' ? 'border-b-2 border-black' : 'text-gray-500 hover:text-black']">
                  Highlights
                </button>
              </div>

              <!-- Nội dung thông báo -->
              <div class="p-4 text-gray-600">
                <template v-if="activeTab === 'activity'">
                  <div class="text-center text-sm">
                    Activity associated with your
                    account will appear here.
                  </div>
                </template>
                <template v-else>
                  <div class="text-center text-sm">
                    Important news, product updates,
                    and milestones associated with your
                    account will appear here.
                  </div>
                </template>
              </div>
            </div>
          </Transition>
        </div>

        <!-- Nút avatar -->
        <button class="transition active:scale-90" @click="handleClick">
          <SvgIcon name="use" width="32px" height="32px" />
        </button>


            <!-- Menu 3 dấu gạch -->
        <button class="transition active:scale-90" @click="handleClick">
          <SvgIcon name="3ngach" width="32px" height="32px" />
        </button>
      </div>
    </div>

    <!--  -->
  </div>
</template>
