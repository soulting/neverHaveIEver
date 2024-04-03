<template>
  <main>
    <Category
      v-if="showCategories"
      :views="views"
      @transitionCompleted="transitionCompleted"
    />
    <Question v-else />
    <button class="next-button" @click="func">DALEJ</button>
  </main>
</template>

<script setup>
import Category from "@/components/Category";
import Question from "@/components/Question.vue";
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

<style>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  color: white;
  background: linear-gradient(to top, #96fbc4 0%, #f9f586 100%);
}
</style>
