<script setup lang="ts">
useSeoMeta({
  title: "Fiyatlandırma",
});

const plans = [
  {
    title: "Ücretsiz",
    price: 0,
    features: ["5 Kullanıcı", "5 Proje", "500 Anahtar"],
    description: "Deneme sürümü",
  },
  {
    title: "Pro",
    price: 20,
    features: ["10 Kullanıcı", "10 Proje", "1000 Anahtar"],
    description: "En çok tercih edilen",
    mostPopular: true,
  },
  {
    title: "Enterprise",
    price: 50,
    features: ["Sınırsız Kullanıcı", "Sınırsız Proje", "Sınırsız Anahtar"],
    description: "Özel çözümler",
  },
];
</script>

<template>
  <UContainer class="mt-20 grid md:grid-cols-2 xl:grid-cols-3 gap-10">
    <div
      class="px-10 py-7 h-[35rem] border-2 rounded-2xl border-zinc-800 flex flex-col relative"
      :class="{
        'border-white shadow-[0_20px_60px_-15px_rgba(255,255,255,0.2)]':
          plan.mostPopular,
      }"
      v-for="plan in plans"
      :key="plan.title"
    >
      <UBadge
        label="En çok tercih edilen"
        v-if="plan.mostPopular"
        class="absolute left-1/2 -top-4 transform -translate-x-1/2 rounded-full px-4"
        color="gray"
        size="lg"
      />
      <h1 class="text-4xl font-extrabold">
        {{ plan.title }}
      </h1>
      <span class="text-xl font-semibold"> {{ plan.price }} ₺ </span>
      <p class="mt-3">
        {{ plan.description }}
      </p>
      <ul class="list-disc list-inside mt-5 mb-10">
        <li v-for="feature in plan.features" :key="feature">
          {{ feature }}
        </li>
      </ul>
      <UButton color="black" label="Devam Et" class="mt-auto" block size="xl" />
    </div>
  </UContainer>
</template>
