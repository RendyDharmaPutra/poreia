<script setup lang="ts">
import { computed } from "vue";
import { useTrackStore } from "../stores/track.store";

const trackStore = useTrackStore();

const isIdle = computed(() => trackStore.state.status === "idle");
const hasError = computed(() => trackStore.state.status === "error");
const isReady = computed(() => trackStore.state.status === "success");
</script>

<template>
  <UContainer
    as="section"
    class="px-4 py-12 flex justify-center items-center max-w-4xl w-full min-h-[400px]"
  >
    <EmptyState v-if="isIdle" />
    <ErrorState v-else-if="hasError" />
    <TrackSection v-else-if="isReady" />
  </UContainer>
</template>
