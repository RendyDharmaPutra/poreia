<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{ status: string }>();

const isDelivered = computed(() => props.status === "DELIVERED");
</script>

<template>
  <UCard>
    <template #header>
      <p>STATUS TERBARU</p>
    </template>

    <template #footer>
      <div class="flex flex-row items-center space-x-3 w-full">
        <div class="p-2 w-fit h-fit rounded-full bg-info/20">
          <UIcon
            :name="isDelivered ? 'i-lucide-check-circle' : 'i-lucide-clock'"
            class="size-6 text-info"
          />
        </div>

        <div class="w-full">
          <p class="font-bold text-base md:text-lg">
            {{ isDelivered ? "Paket Diterima" : "Paket Dikirim" }}
          </p>
        </div>
      </div>
    </template>
  </UCard>
</template>
