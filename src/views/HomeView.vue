<template>
  <button @click="func">{{ views }}</button>
  <div v-if="views === 1" class="categories">
    <Category :views="views" />
  </div>
</template>

<script setup>
import Category from "@/components/Category";
import { ref } from "vue";

const views = ref(1);

const func = () => {
  if (views.value === 1) {
    views.value = 2;
  } else views.value = 1;
};
</script>
