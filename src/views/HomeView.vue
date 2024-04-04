<template>
  <main>
    <Category
      v-if="showCategories"
      :views="views"
      @transitionCompleted="transitionCompleted"
      @selectedCategory="selectedCategory"
    />
    <Question v-else :activeQuestion="activeQuestion" />
    <button v-if="views === 2" class="next-button" @click="func">DALEJ</button>
  </main>
</template>

<script setup>
import Category from "@/components/Category";
import Question from "@/components/Question.vue";
import { ref } from "vue";

const views = ref(1);
const showCategories = ref(true);
const activeQuestion = ref("");

const selectedCategory = (arg) => {
  views.value = 2;
  activeQuestion.value = arg;
};

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

<style>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
}
.next-button {
  position: absolute;
  bottom: 20px;
  height: 10vh;
  width: 50vw;
  border-radius: 15px;
  border: 0px;
  font-family: Verdana, Tahoma, sans-serif;
  font-size: 26px;
  font-weight: 700;
  color: white;
  background: linear-gradient(to top, #96fbc4 0%, #f9f586 100%);
}
</style>
