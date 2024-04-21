<template>
  <div
    class="relative grid place-items-center text-center pt-20 gap-10 max-w-[35rem] m-auto"
  >
    <UIcon
      name="bi:hexagon"
      class="absolute top-0 left-0 w-full h-full -z-10 text-[#040404] opacity-30 drop-shadow-[0_0_50px_rgba(255,255,255,0.7)]"
    />
    <h1
      class="font-extrabold text-5xl sm:text-7xl tracking-wide sm:leading-[4.5rem]"
    >
      Uygulamanızı Lisanslamanın Kolay Yolu
    </h1>
    <p class="text-xl">
      Lisansly, uygulamanızı tercih edeceğiniz yöntem ile lisanslamak için
      geliştirilmiş bir SaaS çözümüdür.
    </p>
    <p class="font-semibold text-white">DESTEKLENEN SDK'LAR</p>
    <div
      class="flex justify-center items-center gap-5 [&>svg]:transition-colors [&>svg]:text-zinc-400"
    >
      <UIcon
        class="hover:text-[#512BD4]"
        name="simple-icons:dotnet"
        size="40"
      />
      <UIcon name="ri:java-fill" size="30" class="hover:text-[#f89820]" />
      <UIcon
        name="fluent:code-ts-16-regular"
        class="hover:text-[#3178c6]"
        size="40"
      />
      <UIcon name="fa6-brands:golang" size="45" class="hover:text-[#29BEB0]" />
    </div>
  </div>
</template>
