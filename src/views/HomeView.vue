<script setup>
import {useCounterStore} from "@/stores/counter.js";
const counterStore = useCounterStore()
</script>

<template>
  <div class="about">
    <h1>count: {{ counterStore.count }}</h1>
    <h1>doubleCount: {{ counterStore.doubleCount }}</h1>
    <button @click="counterStore.increment">Increment</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
