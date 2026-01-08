<script setup lang="ts">
import { useTrackStore } from "../../stores/track.store";

const trackData = useTrackStore().state.data;
</script>

<template>
  <UContainer
    as="section"
    class="px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl"
  >
    <TrackSummary :summary="trackData!.summary" />
    <TrackHistory :histories="trackData!.history" />
  </UContainer>
</template>
