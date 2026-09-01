<template>
  <div class="container mt-5">
    <h1>My Favorites ❤️</h1>
    <p>عدد المفضلة: {{ favoritesStore.favorites.length }}</p>
    <p v-if="favoritesStore.favorites.length === 0">No favorites yet.</p>
    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5">
      <div
        class="col mb-4"
        v-for="item in favoritesStore.favorites"
        :key="item.id"
      >
        <MediaCardComponent :item="item" />
      </div>
    </div>
  </div>
</template>


<script>
import { useFavoritesStore } from "../stores/favorites.js";
import MediaCardComponent from "../components/MediaCardComponent.vue";
export default {
  components: {
    MediaCardComponent,
  },
  setup() {
    const favoritesStore = useFavoritesStore();

    return {
      favoritesStore,
    };
  },
};
</script>