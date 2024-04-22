<script setup lang="ts">
const items = [
  {
    label: "npm i lisansly",
    icon: "simple-icons:npm",
  },
  {
    label: "yarn add lisansly",
    icon: "simple-icons:yarn",
  },
  {
    label: "pnpm i lisansly",
    icon: "simple-icons:pnpm",
  },
];
</script>

<template>
  <div class="grid place-items-center mt-36">
    <UTabs :items="items" class="w-72">
      <template #default="{ item }">
        <UIcon :name="item.icon" size="20" />
      </template>
      <template #item="{ item }">
        <div
          class="text-nowrap mt-7 py-3 px-5 flex items-center font-mono rounded-full border-4 bg-black border-zinc-800 drop-shadow-[0_0_20px_rgba(255,255,255,.2)]"
        >
          <UIcon name="ph:terminal" size="20" class="mr-3" />
          {{ item.label }}
          <UButton
            @click="copyToClipboard(item.label)"
            class="ml-auto"
            variant="link"
            color="gray"
          >
            <UIcon name="bx:copy" size="20" />
          </UButton>
        </div>
      </template>
    </UTabs>
  </div>
</template>
