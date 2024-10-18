<template>
  <div class="">
    <section class="container py-8">
      <div class="flex-1 flex justify-end mb-8">
        <SearchBar @search="handleSearch"/>
      </div>
      <div class="grid grid-cols-12 gap-4">
        <Movie v-for="movie in filteredMovies" :key="movie" :movie="movie" class="col-span-3"/>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import movies from "@/data/movies.json"
import Movie from "@/components/Card/Movie.vue";
import {computed, ref} from "vue";
import SearchBar from "@/components/Layout/SearchBar.vue";

const movieList = ref([...movies]);

const search = ref('');
const current = ref(0);
const next = ref(16);

const displayedMovies = ref([]);

displayedMovies.value = movieList.value.slice(current.value, next.value);

const filteredMovies = computed(() => {
  if (!search.value.trim()) {
    return displayedMovies.value;
  }

  const lowerCaseQuery = search.value.toLowerCase();

  return displayedMovies.value.filter((movie) => {
    const titleMatch = movie.title.toLowerCase().includes(lowerCaseQuery);
    const genreMatch = movie.genres.some((genre) =>
        genre.toLowerCase().includes(lowerCaseQuery)
    );

    return titleMatch || genreMatch;
  });
});

const handleSearch = (value) => {
  search.value = value;
};

</script>