<template>
  <main>
    <BackBtn />
    <Guides />
  </main>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
import LoadingItem from "../components/LoadingItem.vue";
import BackBtn from "../components/BackBtn.vue";

const Guides = defineAsyncComponent({
  loader: () => import("../components/GuidesItem.vue"),
  loadingComponent: LoadingItem,
  delay: 200,
});
</script>
