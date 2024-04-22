<script setup lang="ts">
const links = useState("links", () => [
  {
    label: "Dokümantasyon",
    icon: "solar:library-outline",
  },

  {
    label: "Kontrol Paneli",
    icon: "carbon:dashboard",
  },
  {
    label: "Fiyatlandırma",
    icon: "ion:pricetag-outline",
    href: "/pricing",
  },
]);

const socials = [
  {
    label: "Twitter",
    icon: "prime:twitter",
    href: "https://twitter.com/lisansly",
  },
  {
    label: "Instagram",
    icon: "bi:instagram",
    href: "https://instagram.com/lisansly",
  },
];

const isOpen = ref(false);
</script>

<template>
  <header class="p-3">
    <UContainer class="flex items-center">
      <img
        src="https://cdn.layn.app/logo.png"
        class="h-8 mr-auto sm:mr-5"
        alt="logo"
      />
      <UHorizontalNavigation :links="links" class="hidden sm:flex" />
      <UTooltip
        v-for="{ icon, label, href } in socials"
        :text="label"
        :key="label"
      >
        <UButton variant="link" color="gray" :to="href">
          <UIcon :name="icon" size="17" />
        </UButton>
      </UTooltip>
      <UButton
        variant="link"
        color="gray"
        @click="isOpen = true"
        class="flex sm:hidden"
      >
        <UIcon name="iconamoon:menu-burger-horizontal-light" size="25" />
      </UButton>
    </UContainer>
    <USlideover v-model="isOpen" :ui="{ background: 'dark:bg-[#040404]' }">
      <div class="p-4 grid gap-5">
        <UButton variant="link" color="gray" @click="isOpen = false">
          <UIcon name="material-symbols:close" size="25" />
        </UButton>
        <UDivider />
        <UVerticalNavigation :links="links" />
      </div>
    </USlideover>
  </header>
</template>
