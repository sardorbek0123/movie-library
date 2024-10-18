<template>
  <div class="container">
    <section class="py-8">
      <div class="grid grid-cols-12 gap-4">
        <Movie v-for="movie in favorites" :key="movie" :movie="movie" class="col-span-3"/>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import Movie from "@/components/Card/Movie.vue";
import {useStore} from "vuex";
import {computed} from "vue";

const store = useStore()

const favorites = computed(() => store?.state?.favoriteMovies)
</script>