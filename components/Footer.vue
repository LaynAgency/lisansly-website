<script setup lang="ts">
const links = useState<{ label: string; to: string }[]>("links");
</script>

<template>
  <footer class="mt-10 border-t-2 border-t-zinc-800 py-10">
    <UContainer
      class="grid sm:grid-cols-2 place-items-center sm:place-items-stretch gap-10"
    >
      <div>
        <div class="flex items-center justify-center sm:justify-start gap-3">
          <img src="https://cdn.layn.app/logo.png" class="h-10" alt="logo" />
          <span class="font-semibold text-xl">Lisansly</span>
        </div>
        <p class="text-sm mt-5">© 2024 Vesperias / Lisansly</p>
      </div>
      <div class="grid place-items-end">
        <h1 class="font-extrabold pt-0">Navigasyon</h1>
        <UButton
          class="pr-1 sm:pr-0 w-full justify-center sm:justify-start sm:w-max"
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
