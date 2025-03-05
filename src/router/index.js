import { createRouter, createWebHistory } from 'vue-router'
import MenuPages from '@/pages/MenuPages.vue'
import IndexPages from '@/pages/IndexPages.vue'
import GetUnsplash from '@/views/GetUnsplash.vue'
import PhotosView from '@/views/Menu/PhotosView.vue'
import IllustrationsView from '@/views/Menu/IllustrationsView.vue'
import UnsplashView from '@/views/Menu/UnsplashView.vue'
import WallpapersView from '@/views/Menu/WallpapersView.vue'
import NatureView from '@/views/Menu/NatureView.vue'
//
import RendersView from '@/views/Menu/RendersView.vue'
import TexturesView from '@/views/Menu/TexturesView.vue'
import ArchitectureView from '@/views/Menu/ArchitectureView.vue'
import TravelView from '@/views/Menu/TravelView.vue'
import FilmView from '@/views/Menu/FilmView.vue'
import StreetPhotographyView from '@/views/Menu/StreetPhotographyView.vue'
import PeopleView from '@/views/Menu/PeopleView.vue'
import AnimalsView from '@/views/Menu/AnimalsView.vue'
import ExperimentalView from '@/views/Menu/ExperimentalView.vue'
import FashionView from '@/views/Menu/FashionView.vue'
import FoodView from '@/views/Menu/FoodView.vue'
import SportsView from '@/views/Menu/SportsView.vue'
import HealthView from '@/views/Menu/HealthView.vue'
//
import ImageSearch from "@/views/ImageSearch.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/ImageSearch',
      name: 'ImageSearch',
      component: ImageSearch,
    },
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
      path: '/MenuPages',
      name: 'MenuPages',
      component: MenuPages,
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
    //
    {
      path: '/NatureView',
      name: 'NatureView',
      component: NatureView,
    },
    {
      path: '/RendersView',
      name: 'RendersView',
      component: RendersView,
    },
    {
      path: '/TexturesView',
      name: 'TexturesView',
      component: TexturesView,
    },
    {
      path: '/ArchitectureView',
      name: 'ArchitectureView',
      component: ArchitectureView,
    },
    {
      path: '/TravelView',
      name: 'TravelView',
      component: TravelView,
    },
    {
      path: '/FilmView',
      name: 'FilmView',
      component: FilmView,
    },
    {
      path: '/StreetPhotographyView',
      name: 'StreetPhotographyView',
      component: StreetPhotographyView,
    },
    {
      path: '/PeopleView',
      name: 'PeopleView',
      component: PeopleView,
    },
    {
      path: '/AnimalsView',
      name: 'AnimalsView',
      component: AnimalsView,
    },
    {
      path: '/ExperimentalView',
      name: 'ExperimentalView',
      component: ExperimentalView,
    },
    {
      path: '/FashionView',
      name: 'FashionView',
      component: FashionView,
    },
    {
      path: '/FoodView',
      name: 'FoodView',
      component: FoodView,
    },
    {
      path: '/SportsView',
      name: 'SportsView',
      component: SportsView,
    },
    {
      path: '/HealthView',
      name: 'HealthView',
      component: HealthView,
    },
  ],
})

export default router
