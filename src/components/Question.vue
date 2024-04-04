<template>
  <div class="question-container">
    <h1>{{ activeQuestion }}</h1>
  </div>
</template>

<script setup>
const props = defineProps({
  activeQuestion: {
    type: String,
    required: true,
  },
});
</script>

<style>
.question-container {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
