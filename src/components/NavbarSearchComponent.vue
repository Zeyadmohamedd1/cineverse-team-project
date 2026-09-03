<template>
  <div class="position-relative ms-lg-3">
    <input
      v-model="query"
      @input="handleInput"
      @keyup.enter="goToSearch"
      type="search"
      class="form-control"
      placeholder="Search..."
    />
    <div
      v-if="loading"
      class="spinner-border spinner-border-sm text-danger position-absolute top-0 end-0 mt-2 me-2"
    ></div>
    <div
      v-if="results.length"
      class="position-absolute end-0 bg-dark border rounded mt-2 shadow"
      style="width: 350px; max-height: 400px; overflow-y: auto; z-index: 2000"
    >
      <RouterLink
        v-for="item in results"
        :key="item.id"
        :to="'/details/' + item.media_type + '/' + item.id"
        @click="clearSearch"
        class="d-flex align-items-center text-white text-decoration-none p-2 border-bottom"
      >
        <img
          v-if="item.poster_path"
          :src="'https://image.tmdb.org/t/p/w200' + item.poster_path"
          style="width: 45px; height: 65px; object-fit: cover"
          class="rounded me-2"
          :alt="item.title || item.name"
        />
        {{ item.title || item.name }}
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { searchMedia } from "@/services/tmdb.js";

export default {
  data() {
    return {
      query: "",
      results: [],
      loading: false,
      error: "",
      searchTimer: null,
    };
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
    clearSearch() {
      this.query = "";
      this.results = [];
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
    goToSearch() {
      if (!this.query.trim()) return;

      this.$router.push({
        path: "/search",
        query: { q: this.query },
      });

     this.clearSearch()
    },
  },
};
</script>