<script setup lang="ts">
const colorMode = useColorMode();
colorMode.value = "dark";
useSeoMeta({
  title: "Lisansly",
});
useHead({
  bodyAttrs: {
    class: "bg-black",
  },
});
</script>

<template></template>
