<script setup>
import HeaderBar from "@/components/HeaderBar.vue";
import { ref, onMounted, watch, watchEffect } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute();
const column1 = ref([]);
const column2 = ref([]);
const column3 = ref([]);
const page = ref(1);
const loading = ref(false);
const observer = ref(null);
const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

// 🖼 Gọi API và chia ảnh vào 3 cột
const fetchImages = async () => {
  if (loading.value || !accessKey) return;
  loading.value = true;

  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: route.query.q || "random", // Lấy từ khóa tìm kiếm từ route
        page: page.value,
        per_page: 15,
        client_id: accessKey,
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

    column1.value = [...column1.value, ...newColumn1];
    column2.value = [...column2.value, ...newColumn2];
    column3.value = [...column3.value, ...newColumn3];

    page.value++;
  } catch (error) {
    console.error("Lỗi khi tải ảnh:", error);
  } finally {
    loading.value = false;
  }
};

// 🖥 Tạo Observer để cuộn xuống thì tải thêm ảnh
const setupObserver = () => {
  if (observer.value) observer.value.disconnect(); // Ngắt Observer cũ nếu có

  observer.value = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      fetchImages();
    }
  }, { rootMargin: "200px" });

  // Đảm bảo DOM đã có `#loadMoreTrigger` trước khi quan sát
  watchEffect(() => {
    const trigger = document.getElementById("loadMoreTrigger");
    if (trigger) observer.value.observe(trigger);
  });
};

// 🔍 Theo dõi thay đổi từ khóa tìm kiếm
watch(() => route.query.q, () => {
  column1.value = [];
  column2.value = [];
  column3.value = [];
  page.value = 1;
  fetchImages();
});

// 🚀 Khi trang tải, gọi API và setup Observer
onMounted(() => {
  fetchImages();
  setupObserver();
});
</script>

<template>
  <HeaderBar />
  <div>
    <div class="flex justify-center gap-6 p-4 mt-[50px]">
      <!-- Cột 1 -->
      <div class="flex flex-col space-y-4">
        <div v-for="image in column1" :key="image.id" class="relative group">
          <a :href="image.links.html" target="_blank" class="block">
            <div class="relative">
              <img :src="image.urls.small" :alt="image.alt_description"
                class="rounded-lg shadow-md transition-all duration-300 group-hover:brightness-50" loading="lazy" />
            </div>

            <!-- Thông tin tác giả -->
            <div
              class="absolute bottom-0 left-0 right-0 text-white p-2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <img :src="image.user.profile_image.medium" alt="Avatar"
                class="w-8 h-8 rounded-full border border-white" />
              <div>
                <p class="text-sm font-semibold">{{ image.user.name }}</p>
                <!-- <p v-if="image.user.for_hire" class="text-xs text-gray-300">Available for hire ✅</p> -->
              </div>
            </div>
          </a>
        </div>
      </div>

      <!-- Cột 2 -->
      <div class="flex flex-col space-y-4">
        <div v-for="image in column2" :key="image.id" class="relative group">
          <a :href="image.links.html" target="_blank">
            <img :src="image.urls.small" :alt="image.alt_description"
              class="rounded-lg shadow-md transition-all duration-300 group-hover:brightness-50" loading="lazy" />

            <!-- Thông tin tác giả -->
            <div
              class="absolute bottom-0 left-0 right-0  text-white p-2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <img :src="image.user.profile_image.medium" alt="Avatar"
                class="w-8 h-8 rounded-full border border-white" />
              <div>
                <p class="text-sm font-semibold">{{ image.user.name }}</p>
              </div>
            </div>
          </a>
        </div>
      </div>

      <!-- Cột 3 -->
      <div class="flex flex-col space-y-4">
        <div v-for="image in column3" :key="image.id" class="relative group">
          <a :href="image.links.html" target="_blank">
            <img :src="image.urls.small" :alt="image.alt_description"
              class="rounded-lg shadow-md transition-all duration-300 group-hover:brightness-50" loading="lazy" />

            <!-- Thông tin tác giả -->
            <div
              class="absolute bottom-0 left-0 right-0 text-white p-2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <img :src="image.user.profile_image.medium" alt="Avatar"
                class="w-8 h-8 rounded-full border border-white" />
              <div>
                <p class="text-sm font-semibold">{{ image.user.name }}</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>

    <!-- Trigger tải thêm ảnh -->
    <div id="loadMoreTrigger" class="h-10"></div>
  </div>
</template>
