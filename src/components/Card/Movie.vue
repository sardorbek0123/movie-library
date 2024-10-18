<template>
  <div class="flex group transition-300 first-letter bg-blue-100 rounded-3xl p-1 flex-col">
    <div class="overflow-hidden rounded-3xl aspect-[5/6]">
      <img :src="movie?.thumbnail" :alt="movie?.href"
           class="object-cover group-hover:scale-110 transition-300 w-full h-fit">
    </div>
    <div class="p-5 flex justify-between items-end">
      <div>
        <p class="text-[#737273] text-sm leading-4">{{ movie?.year }}</p>
        <p v-for="genre in movie?.genres" class="inline mr-1 text-sm text-gray-700">
          {{genre}}
        </p>
        <p class="mt-2 text-dark text-lg font-semibold leading-[22px] transition-300 break-words line-clamp-1 group-hover:text-purple max-w-[180px]">
          {{movie?.title}}
        </p>
      </div>
      <router-link :to="`/movie/${movie.id}`" class="bg-white p-1 rounded-lg hover:text-blue-400 transition-300 border border-black hover:border-blue-400">
        View details
      </router-link>
    </div>
  </div>
</template>
<script setup lang="ts">
import Heart from "@/components/Icons/Heart.vue";
import {computed} from "vue";
import {useStore} from "vuex";

interface Props {
  movie: {
    id: number;
    title: string;
    year: number;
    genres: Array;
    href: string;
    extract: string;
    thumbnail: string;
    thumbnail_width: number;
    thumbnail_height: number;

  }
}

defineProps<Props>()

const store = useStore()


const switchFav = () => {

}
</script>