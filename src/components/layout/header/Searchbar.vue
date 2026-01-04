<script setup lang="ts"></script>

<template>
  <section
    class="flex flex-col md:flex-row p-2 gap-2 max-w-3xl w-full rounded-xl bg-default"
  >
    <USelect size="xl" class="w-48" />
    <UInput size="xl" class="w-2/3" />
    <UButton
      label="Lacak Sekarang"
      class="flex-1 px-8 h-12 text-lg text-inverted"
    />
  </section>
</template>
