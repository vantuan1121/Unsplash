<template>
  <div class="grid grid-cols-3 gap-4 p-4">
    <a v-for="image in images" :key="image.id" :href="image.links.html" target="_blank">
      <img :src="image.urls.small" :alt="image.alt_description" class="rounded-lg shadow-md hover:opacity-80" />
    </a>
  </div>
  <div ref="loadMoreTrigger" class="h-10"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const images = ref([]);
const page = ref(1);
const accessKey = "A1UJotyoLfr-ymnVj3Dg2EWgw-9Fce6mDaBedZH-sWQ";
const loadMoreTrigger = ref(null);

const fetchImages = async () => {
  try {
    const response = await axios.get(`https://api.unsplash.com/photos`, {
      params: { page: page.value, per_page: 9, client_id: accessKey },
    });
    images.value.push(...response.data);
    page.value++;
  } catch (error) {
    console.error('Error fetching images:', error);
  }
};

onMounted(() => {
  fetchImages();
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        fetchImages();
      }
    },
    { threshold: 1.0 }
  );
  if (loadMoreTrigger.value) observer.observe(loadMoreTrigger.value);
});
</script>

<script>
export default {
  name: "UnsplashAPI"
};
</script>
