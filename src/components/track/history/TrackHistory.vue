<script setup lang="ts">
import { useDateFormat } from "@vueuse/core";

const props = defineProps<{
  histories: {
    date: string;
    desc: string;
  }[];
}>();
</script>
>

<template>
  <section class="md:col-span-2 flex flex-col space-y-8">
    <div class="flex flex-row items-center space-x-2">
      <UIcon name="i-lucide-clock" class="size-6" />
      <p class="font-bold text-xl md:text-2xl">Riwayat Perjalanan</p>
    </div>

    <div>
      <UTimeline
        :items="props.histories"
        :default-value="0"
        color="primary"
        class="w-full max-w-full"
      >
        <template #title="{ item }">
          <span>{{ item.desc }}</span>
        </template>

        <template #date="{ item }">
          {{
            useDateFormat(item.date, "DD MMM YYYY HH:mm", {
              locales: "id-ID",
            })
          }}
        </template>
      </UTimeline>
    </div>
  </section>
</template>
