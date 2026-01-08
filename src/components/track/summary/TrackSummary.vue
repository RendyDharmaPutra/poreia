<script setup lang="ts">
import { TrackPackageSummary } from "../../../types/track-package.type";

const props = defineProps<{
  summary: TrackPackageSummary;
}>();

const summary = props.summary;
</script>

<template>
  <section class="md:col-span-1 flex flex-col space-y-6 w-full max-w-full">
    <TrackStatus :status="summary.status" />
    <TrackDetails
      :awb="summary.awb"
      :courier="summary.courier"
      :service="summary.service"
    />
  </section>
</template>
