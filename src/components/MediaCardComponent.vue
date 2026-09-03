<template>
  <div
    class="card h-100 bg-dark text-white border-0 shadow rounded-4 overflow-hidden"
  >
    <RouterLink
      :to="'/details/' + (item.title ? 'movie' : 'tv') + '/' + item.id"
      class="text-decoration-none text-white"
    >
      <div>
        <img
          class="card-img-top"
          style="height: 350px; object-fit: cover"
          :src="'https://image.tmdb.org/t/p/w500' + item.poster_path"
        />
        <p class="card-text p-3 mb-0 fw-semibold media-title">
          {{ item.title || item.name }}
        </p>

        <div class="px-3 mb-3 d-flex justify-content-between">
          <span class="text-warning fw-semibold">
            ⭐ {{ item.vote_average?.toFixed(1) }}
          </span>

          <span class="text-secondary">
            {{ (item.release_date || item.first_air_date)?.slice(0, 4) }}
          </span>
        </div>
      </div>
    </RouterLink>
    <button
      class="btn btn-outline-danger mx-3 mb-3 mt-auto"
      @click="
        favoritesStore.isFavorite(item.id)
          ? favoritesStore.removeFavorite(item.id)
          : favoritesStore.addFavorite(item)
      "
    >
      {{
        favoritesStore.isFavorite(item.id) ? "Remove" : "❤️ Add to Favorites"
      }}
    </button>
  </div>
</template>



<script>
import { useFavoritesStore } from "../stores/favorites.js";

export default {
  setup() {
    const favoritesStore = useFavoritesStore();

    return {
      favoritesStore,
    };
  },

  props: ["item"],
};
</script>