<template>
  <div class="categories-container">
    <transition name="right">
      <p v-if="views === 1 && mounted">TRYBY</p>
    </transition>
    <transition name="left" @after-leave="transitionCompleted">
      <div
        v-if="views === 1 && mounted"
        class="category category1"
        @click="goToQuestion('category1')"
      >
        Rozgrzewka
      </div>
    </transition>
    <transition name="right">
      <div
        v-if="views === 1 && mounted"
        class="category category2"
        @click="goToQuestion('category2')"
      >
        Śmieszne
      </div>
    </transition>
    <transition name="left">
      <div
        v-if="views === 1 && mounted"
        class="category category3"
        @click="goToQuestion('category3')"
      >
        Brudy
      </div>
    </transition>
    <transition name="right">
      <div
        v-if="views === 1 && mounted"
        class="category category4"
        @click="goToQuestion('category4')"
      >
        Erotyczne
      </div>
    </transition>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import getQuestion from "@/composables/getQuestion.js";
const props = defineProps({
  views: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["transitionCompleted"]);

const mounted = ref(false);

onMounted(() => {
  mounted.value = true;
});

const transitionCompleted = () => {
  emit("transitionCompleted");
};

const goToQuestion = (questionCategory) => {
  getQuestion(questionCategory);
};
</script>

<style>
p {
  font-family: Verdana, Tahoma, sans-serif;
  font-size: 26px;
  color: white;
}
.categories-container {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Verdana, Tahoma, sans-serif;
  font-size: 20px;
  font-weight: bold;
  gap: 20px;
  width: 100%;
}

.category {
  width: 94%;
  height: 130px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.category1 {
  background-image: linear-gradient(to right, #4e65ff, #92effd);
}

.category2 {
  background-image: linear-gradient(to left, red, yellow);
}

.category3 {
  background-image: linear-gradient(to right, #ff61d2, #fe9090);
}

.category4 {
  background-image: linear-gradient(to left, #11998e, #38ef7d);
}

.left-enter-active,
.left-leave-active,
.right-enter-active,
.right-leave-active {
  transition: all 0.5s ease;
}

.left-enter-from,
.left-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.right-enter-from,
.right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.right-leave-from,
.right-enter-to .left-leave-from,
.left-enter-to {
  transform: translateX(0%);
  opacity: 1;
}
</style>
