<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{ awb: string; courier: string; service: string }>();

const details = computed(() => {
  return {
    "No. Resi": props.awb,
    Ekspedisi: props.courier,
    Layanan: props.service,
  };
});
</script>

<template>
  <div class="flex flex-col">
    <div
      v-for="(value, key) in details"
      :key="key"
      class="py-2 flex flex-row justify-between border-b border-accented/60"
    >
      <p class="font-normal text-base text-muted">{{ key }}</p>
      <p class="font-medium text-base">{{ value }}</p>
    </div>
  </div>
</template>
