<template>
  <div class="categories-container">
    <p>TRYBY</p>
    <transition name="left-to-right"></transition>
    <transition name="right-to-left"></transition>
    <div class="category category1">category 1</div>
    <div class="category category2">category 2</div>
    <div class="category category3">category 3</div>
    <div class="category category4">category 4</div>
  </div>
</template>

<script setup></script>

<style>
p {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 26px;
  color: white;
}
.categories-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 100%;
  width: 100%;
}

.category {
  width: 94%;
  height: 130px;
  background-color: rgb(2, 185, 254);
  border-radius: 15px;
}
</style>
