<script setup lang="ts">
import tabs from "~/assets/tabs.json";
const activeTab = ref(0);
const lineCount = computed(() => tabs[activeTab.value].code.split("\n").length);
</script>

<template>
  <div class="mt-36 border-2 border-zinc-800 rounded-xl">
    <header
      class="border-b-2 border-b-zinc-800 p-5 flex items-center relative w-full"
    >
      <div class="flex gap-3">
        <div class="w-[.8rem] h-[.8rem] rounded-full bg-red-500" />
        <div class="w-[.8rem] h-[.8rem] rounded-full bg-orange-500" />
        <div class="w-[.8rem] h-[.8rem] rounded-full bg-green-500" />
      </div>
      <dıv
        class="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-5"
      >
        <div class="gap-3 hidden sm:flex">
          <UIcon name="iconoir:arrow-left" />
          <UIcon name="iconoir:arrow-right" />
        </div>
        <UInput
          class="justify-center hidden sm:flex"
          icon="icons8:search"
          placeholder="Ara..."
          :ui="{
            base: 'disabled:cursor-default  disabled:opacity-1',
          }"
          disabled
        />
      </dıv>
    </header>
    <div class="flex">
      <nav class="p-5 w-max border-r-2 border-r-zinc-800 flex flex-col gap-7">
        <UIcon name="codicon:files" size="20" />
        <UIcon name="icons8:search" size="20" />
        <UIcon name="codicon:debug-alt" size="20" />
        <UIcon name="codicon:extensions" size="20" />
        <UIcon name="fluent-mdl2:office-chat" size="20" />
        <UIcon name="solar:user-circle-outline" size="20" class="mt-auto" />
        <UIcon name="ion:settings-outline" size="20" />
      </nav>
      <div class="w-full overflow-x-auto">
        <header class="h-max border-b-2 w-full border-b-zinc-800 flex">
          <UButton
            :class="{
              'shadow-[0_2px_#3b82f6]': activeTab === i,
            }"
            class="rounded-none p-3 ring-0"
            icon="ic:baseline-close"
            v-for="(tab, i) in tabs"
            @click="activeTab = i"
            variant="ghost"
            :key="tab.tab"
            color="gray"
            trailing
          >
            {{ tab.tab }}
          </UButton>
        </header>
        <ClientOnly>
          <div class="flex relative">
            <UButton
              @click="copyToClipboard(tabs[activeTab].code)"
              class="absolute right-3.5 top-3.5"
              variant="link"
              color="gray"
            >
              <UIcon name="bx:copy" size="25" />
            </UButton>
            <div class="flex flex-col p-4 pr-0 font-mono opacity-30">
              <span v-for="i in lineCount">
                {{ i }}
              </span>
            </div>
            <div class="overflow-x-auto w-full">
              <highlightjs
                class="[&>code]:bg-[#040404] [&>code]:h-96"
                :code="tabs[activeTab].code"
                lang="typescript"
              />
            </div>
          </div>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>
