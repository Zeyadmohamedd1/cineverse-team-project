<template>
  <div class="container py-5">
    <h1>Search</h1>
    <div class="input-group mt-4">
      <input
        v-model="query"
        @keyup.enter="search"
        @input="handleInput"
        type="text"
        class="form-control"
        placeholder="Search for movies or TV shows..."
      />
      <button class="btn btn-danger" @click="search">Search</button>
    </div>
    <!-- Spinner -->

    <div v-if="loading" class="text-center py-5">
      <div class="spinner-border text-danger"></div>
      <p class="mt-2">Searching...</p>
    </div>

    <!-- error -->
    <p v-else-if="error" class="alert alert-danger mt-4">
      {{ error }}
    </p>

    <!--Results -->
    <div v-else-if="query">
      <p class="mt-4">Results: {{ results.length }}</p>

      <p v-if="results.length === 0" class="text-center text-secondary py-5">
        No results found.
      </p>
      <div class="row g-4 mt-2">
        <div
          v-for="item in results"
          :key="item.id"
          class="col-6 col-md-4 col-lg-3"
        >
          <RouterLink
            :to="'/details/' + item.media_type + '/' + item.id"
            class="text-decoration-none"
          >
            <img
              v-if="item.poster_path"
              :src="'https://image.tmdb.org/t/p/w500' + item.poster_path"
              class="img-fluid rounded"
              :alt="item.title || item.name"
            />
            <h5 class="mt-2 text-white">
              {{ item.title || item.name }}
            </h5>
            <p class="text-warning">
              ⭐ {{ item.vote_average?.toFixed(1) }}
              |
              {{ (item.release_date || item.first_air_date)?.slice(0, 4) }}
              <!-- slice cut years -->
            </p>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { searchMedia } from "@/services/tmdb";

export default {
  data() {
    return {
      query: "",
      results: [],
      loading: false,
      searchTimer: null,
      error: "",
    };
  },
  created() {
    this.query = this.$route.query.q || "";

    if (this.query) {
      this.search();
    }
  },
  methods: {
    handleInput() {
      clearTimeout(this.searchTimer);

      this.searchTimer = setTimeout(() => {
        this.search();
      }, 500);
      if (!this.query.trim()) {
        this.results = [];
        return;
      }
    },

    async search() {
      if (!this.query.trim()) return;
      this.error = "";
      this.loading = true;
      try {
        const data = await searchMedia(this.query);
        this.results = data.results.filter(
          (item) => item.media_type !== "person"
        );
      } catch (error) {
        this.error = "Search failed. Please try again.";
      } finally {
        this.loading = false;
      }
      // متعرضش أشخاص
    },
  },
};
</script>