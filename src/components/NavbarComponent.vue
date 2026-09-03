<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div class="container">
      <RouterLink class="navbar-brand" to="/"> CineVerse </RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mainNavbar">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/"> Home</router-link>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/movies"> Movies </RouterLink>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/tv"> TV </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/anime">Anime </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/favorites">
              Favorites ({{ favoritesStore.favorites.length }})
            </router-link>
          </li>
        </ul>
        <NavbarSearchComponent v-if="$route.path !== '/search'" />
      </div>
    </div>
  </nav>
</template>

<script>
import NavbarSearchComponent from "./NavbarSearchComponent.vue";
import { useFavoritesStore } from "../stores/favorites.js";
export default {
  setup() {
    const favoritesStore = useFavoritesStore();

    return {
      favoritesStore,
    };
  },
  components: {
    NavbarSearchComponent,
  },
};
</script>