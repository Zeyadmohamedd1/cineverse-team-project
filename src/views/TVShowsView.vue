<template>
  <div class="container mt-5">
    <h1>TV Shows</h1>
    <p>عدد المسلسلات: {{ shows.length }}</p>
    <ul class="row row-cols-2 row-cols-md-3 row-cols-lg-5 list-unstyled">
      <li class="col mb-4" v-for="show in shows" :key="show.id">
        <MediaCardComponent :item="show" />
      </li>
    </ul>
  </div>
</template>

<script>
import { getPopularTV } from '@/services/tmdb';
import MediaCardComponent from '@/components/MediaCardComponent.vue';
export default {
    components:{
        MediaCardComponent
    },
    data(){
        return{
            shows: []
        }
    },
    async created(){
        const data=await getPopularTV()
        this.shows=data.results
    }
}
</script>