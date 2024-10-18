<template>
  <div class="">
    <input type="text" v-model="search"
           class="w-full outline-none border-2 border-black focus:border-blue-700 p-1.5 rounded-lg transition-300"
           placeholder="Search..."
           @input="emitSearchValue">
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";
import {defineEmits} from 'vue';

const emit = defineEmits(["search"]);
const search = ref('')

const emitSearchValue = () => {
  emit('search', search.value);
};

</script>