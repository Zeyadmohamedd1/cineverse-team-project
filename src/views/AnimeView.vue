<template>
  <div class="container mt-5">
    <h1>Anime</h1>
    <p>عدد الانمي: {{ Anime.length }}</p>
    <ul class="row row-cols-2 row-cols-md-3 row-cols-lg-5 list-unstyled">
      <li class="col mb-4" v-for="item in Anime" :key="item.id">
        <MediaCardComponent :item="item" />
      </li>
    </ul>
  </div>
</template>
<script>
import { getPopularAnime } from "@/services/tmdb";
import MediaCardComponent from "@/components/MediaCardComponent.vue";

export default {
  components: {
    MediaCardComponent,
  },
  data() {
    return {
      Anime: [],
    };
  },
  async created() {
    const data = await getPopularAnime();
    this.Anime = data.results;
  },
};
</script>