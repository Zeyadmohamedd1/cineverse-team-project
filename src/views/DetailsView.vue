<template>
  <div class="container mt-5">
    <h1>{{ details?.title || details?.name }}</h1>
    <p>{{ details?.overview }}</p>
    <div v-if="!details" class="text-center py-5">
      <div class="spinner-border text-danger" role="status"></div>
      <p class="mt-2">Loading...</p>
    </div>

    <div v-else class="row align-items-center g-4">
      <div class="col-md-4 text-center">
        <img
          v-if="details?.poster_path"
          :src="'https://image.tmdb.org/t/p/w500' + details.poster_path"
          class="img-fluid rounded"
          style="max-width: 300px"
        />
      </div>

      <div class="col-md-8">
        <p class="text-warning">
          ⭐ {{ details?.vote_average?.toFixed(1) }} / 10
        </p>
        <p>Name date: {{ details?.release_date || details?.first_air_date }}</p>
        <div>
          <span
            v-for="genre in details?.genres"
            :key="genre.id"
            class="badge bg-danger me-2"
          >
            {{ genre.name }}
          </span>
        </div>
      </div>
    </div>
    
  </div>
  
</template>
<script>
import { getDetails } from "@/services/tmdb.js";

export default {
  data() {
    return {
      details: null,
    };
  },

  async created() {
    const type = this.$route.params.type;
    const id = this.$route.params.id;

    this.details = await getDetails(type, id);
    console.log(this.details);
  },
};
</script>