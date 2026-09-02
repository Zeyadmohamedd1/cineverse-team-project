<template>
    <div class="container mt-5">
        <h1>Movies</h1>
        <p>عدد الأفلام: {{ movies.length }}</p>
        <ul class="row row-cols-2 row-cols-md-3 row-cols-lg-5 list-unstyled">
            <li class="col mb-4" v-for="movie in movies" :key="movie.id">
                <MediaCardComponent :item="movie" />
            </li>
        </ul>
    </div>
</template>
<script>
import { getPopularMovies } from "@/services/tmdb";
import MediaCardComponent from "@/components/MediaCardComponent.vue";

export default {
    components: {
        MediaCardComponent,
    },
    data() {
        return {
            movies: [],
        };
    },
    async created() {
        const data = await getPopularMovies();
        this.movies = data.results;
    },
};
</script>
