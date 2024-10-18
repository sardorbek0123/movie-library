<template>
  <header class="bg-blue-100 py-5 sticky">
    <nav class="container flex justify-center items-center">
      <ul class="flex justify-center gap-5">
        <li v-for="nav in navLinks" :key="nav.id">
          <router-link :to="nav.link" class="text-black text-xl underline hover:text-blue-600 transition-300">
            {{ nav.name }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script setup lang="ts">
import SearchBar from "@/components/Layout/SearchBar.vue";

const navLinks = [
  {
    id: 1,
    name: "Home",
    link: '/'
  },
  {
    id: 2,
    name: "Favorites",
    link: '/favorites'
  },
]
</script>
