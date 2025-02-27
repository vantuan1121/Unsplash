import { createRouter, createWebHistory } from 'vue-router'
import IndexPages from '@/pages/IndexPages.vue'
import GetUnsplash from '@/views/GetUnsplash.vue'
import PhotosView from '@/views/Menu/PhotosView.vue'
import IllustrationsView from '@/views/Menu/IllustrationsView.vue'
import UnsplashView from '@/views/Menu/UnsplashView.vue'
import WallpapersView from '@/views/Menu/WallpapersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: IndexPages,
    },

    {
      path: '/GetUnsplash',
      name: 'GetUnsplash',
      component: GetUnsplash,
    },
    {
      path: '/PhotosView',
      name: 'PhotosView',
      component: PhotosView,
    },
    {
      path: '/IllustrationsView',
      name: 'IllustrationsView',
      component: IllustrationsView,
    },
    {
      path: '/UnsplashView',
      name: 'UnsplashView',
      component: UnsplashView,
    },
    {
      path: '/WallpapersView',
      name: 'WallpapersView',
      component: WallpapersView,
    },
  ],
})

export default router
