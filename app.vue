<script setup lang="ts">
const colorMode = useColorMode();
colorMode.value = "dark";
useSeoMeta({
  title: "Lisansly",
});
useHead({
  bodyAttrs: {
    class: "bg-[#040404]",
  },
});
</script>

<template>
  <NotificationBar />
  <Header />
  <UContainer>
    <HeroHeader />
    <Install />
  </UContainer>
</template>
