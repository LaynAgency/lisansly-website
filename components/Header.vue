<script setup lang="ts">
const links = useState("links", () => [
  {
    label: "Anasayfa",
    icon: "bx:bx-home",
    to: "/",
  },
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
    to: "/pricing",
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
  <UContainer class="flex items-center p-3" as="header">
    <Logo />
    <UHorizontalNavigation :links="links" class="hidden md:flex" />
    <div class="ml-auto flex">
      <UTooltip
        v-for="{ icon, label, href } in socials"
        :text="label"
        :key="label"
      >
        <UButton variant="link" color="gray" :icon="icon" :to="href" />
      </UTooltip>
    </div>
    <UButton
      icon="iconamoon:menu-burger-horizontal-light"
      @click="isOpen = true"
      class="flex md:hidden"
      variant="link"
      size="xl"
      color="gray"
    />
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
</template>
