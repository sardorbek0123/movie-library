<template>
  <section class="container py-8">
    <router-link to="/" class="uppercase text-black hover:text-blue-400 transition-300">
      Back to home page
    </router-link>
    <div v-if="movie" class="grid grid-cols-12 gap-4 mt-8">
      <div class="col-span-2">
        <img :src="movie.thumbnail" :alt="movie.href">
        <div class="mt-4 flex justify-between" v-if="!isFavorite">
          <p>Add to favorites</p>
          <button @click="switchFav">
            <Heart/>
          </button>
        </div>
        <div v-else class="mt-4 flex justify-between">
          <p>Remove from favorites</p>
          <button @click="switchFav">
            <HeartRed/>
          </button>
        </div>
      </div>
      <div class="col-span-10">
        <p class="text-3xl font-bold">
          {{ movie.title }}
        </p>
        <p class="mt-2 text-xl">
          {{ movie.extract }}
        </p>
      </div>
    </div>
    <div v-else>
      <p>Loading movie details...</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import {ref, watchEffect, computed} from "vue";
import {useRoute} from "vue-router";
import {useStore} from "vuex";
import Heart from "@/components/Icons/Heart.vue";
import HeartRed from "@/components/Icons/HeartRed.vue";

const route = useRoute();
const store = useStore();

const movieId = parseInt(route.params.id);

const movie = computed(() => store.getters.getMovieById(movieId));

const isFavorite = computed(() => store.getters.isFavorite(movieId));

const switchFav = () => {
  if(!isFavorite.value) {
    store.dispatch("addFavoriteMovie", movieId);
  }
  else {
    store.dispatch("removeFavoriteMovie", movieId);
  }
}
</script>
