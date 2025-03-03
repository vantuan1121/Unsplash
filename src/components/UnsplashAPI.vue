<template>
  <div class="flex justify-center gap-6 p-4">
    <!-- Cột 1 -->
    <div class="flex flex-col gap-4">
      <a v-for="image in column1" :key="image.id" :href="image.links.html" target="_blank">
        <img :src="image.urls.small" :alt="image.alt_description" class="rounded-lg shadow-md hover:opacity-80 mx-auto"/>
      </a>
    </div>

    <!-- Cột 2 -->
    <div class="flex flex-col gap-4">
      <a v-for="image in column2" :key="image.id" :href="image.links.html" target="_blank">
        <img :src="image.urls.small" :alt="image.alt_description" class="rounded-lg shadow-md hover:opacity-80 mx-auto"/>
      </a>
    </div>

    <!-- Cột 3 -->
    <div class="flex flex-col gap-4">
      <a v-for="image in column3" :key="image.id" :href="image.links.html" target="_blank">
        <img :src="image.urls.small" :alt="image.alt_description" class="rounded-lg shadow-md hover:opacity-80 mx-auto"/>
      </a>
    </div>
  </div>
  <div ref="loadMoreTrigger" class="h-10"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import axios from 'axios';

const column1 = ref([]);
const column2 = ref([]);
const column3 = ref([]);
const page = ref(1);
const loadMoreTrigger = ref(null);
const observer = ref(null);

const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

const fetchImages = async () => {
  try {
    const response = await axios.get('https://api.unsplash.com/photos', {
      params: { page: page.value, per_page: 9, client_id: accessKey },
    });

    // Chia ảnh thành 3 cột
    response.data.forEach((image, index) => {
      if (index % 3 === 0) {
        column1.value.push(image);
      } else if (index % 3 === 1) {
        column2.value.push(image);
      } else {
        column3.value.push(image);
      }
    });

    page.value++;
  } catch (error) {
    console.error('Error fetching images:', error);
  }
};

onMounted(() => {
  fetchImages();
  if (loadMoreTrigger.value) {
    observer.value = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchImages();
        }
      },
      { threshold: 1.0 }
    );
    observer.value.observe(loadMoreTrigger.value);
  }
});

onUnmounted(() => {
  if (observer.value) observer.value.disconnect();
});
</script>
