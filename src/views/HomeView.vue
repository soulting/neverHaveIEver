<template>
  <button @click="func">{{ views }}</button>
  <Category
    v-if="showCategories"
    :views="views"
    @transitionCompleted="transitionCompleted"
  />
</template>

<script setup>
import Category from "@/components/Category";
import { ref } from "vue";

const views = ref(1);
const showCategories = ref(true);

const transitionCompleted = () => {
  showCategories.value = false;
};

const func = () => {
  showCategories.value = true;
  if (views.value === 1) {
    views.value = 2;
  } else views.value = 1;
};
</script>
