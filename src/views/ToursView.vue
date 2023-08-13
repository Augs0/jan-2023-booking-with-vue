<style></style>

<template>
  <main>
    <Tours />
  </main>
</template>

<script setup>
import LoadingItem from "../components/LoadingItem.vue";
import { defineAsyncComponent } from "vue";

const Tours = defineAsyncComponent({
  loader: () => import("../components/ToursItem.vue"),
  loadingComponent: LoadingItem,
  delay: 200,
});
</script>
