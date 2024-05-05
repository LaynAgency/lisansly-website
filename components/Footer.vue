<script setup lang="ts">
const links = useState<{ label: string; to: string }[]>("links");
</script>

<template>
  <footer class="mt-10 border-t-2 border-t-zinc-800 py-10">
    <UContainer
      class="grid sm:grid-cols-2 place-items-center sm:place-items-stretch gap-10"
    >
      <div>
        <div class="flex items-center justify-center sm:justify-start">
          <Logo />
          <span class="font-semibold text-xl">Lisansly</span>
        </div>
        <p class="text-sm mt-5">© 2024 Vesperias / Lisansly</p>
      </div>
      <div class="grid place-items-center sm:place-items-end">
        <h1 class="font-extrabold pt-0 sm:mr-2">Navigasyon</h1>
        <UButton
          v-for="link in links"
          :key="link.label"
          variant="link"
          :to="link.to"
          color="gray"
        >
          {{ link.label }}
        </UButton>
      </div>
    </UContainer>
  </footer>
</template>
