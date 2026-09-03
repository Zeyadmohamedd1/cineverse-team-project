
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MoviesView from '../views/MoviesView.vue'
import TVShowsView from '@/views/TVShowsView.vue'
import AnimeView from '@/views/AnimeView.vue'
import DetailsView from '@/views/DetailsView.vue'
import SearchView from '@/views/SearchView.vue'
import FavoritesView from '@/views/FavoritesView.vue'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    component: HomeView,

  },
  {
    path: '/movies',
    component: MoviesView
  },
  {
    path: '/tv',
    component: TVShowsView
  },
  {
    path: '/anime',
    component: AnimeView
  },
  {
    path: '/details/:type/:id',
    component: DetailsView
  },
  {
    path: '/search',
    component: SearchView
  },
   {
    path: '/favorites',
    component: FavoritesView
  }
  ],
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
    
     // لو مكانك القديم محفوظ، ارجع له لو مش محفوظ، افتح الصفحة من فوق
  }
 
})

export default router
