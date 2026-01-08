<script setup lang="ts">
import { computed, ref } from "vue";
import { LIST_COURIERS } from "../../../constants/list-couriers";
import { useTrackStore } from "../../../stores/track.store";

const trackStore = useTrackStore();
const isLoading = computed(() => trackStore.state.status === "loading");

const awb = ref("");
const selectedCourier = ref("");
const formError = ref<string | null>(null);

const onSubmit = async () => {
  if (!awb.value || !selectedCourier.value) {
    formError.value = "Harap masukkan nomor resi dan ekspedisi.";
    return;
  }

  formError.value = null;
  await trackStore.load(selectedCourier.value, awb.value.trim());
};
</script>

<template>
  <section
    class="flex flex-col md:flex-row p-2 gap-2 max-w-3xl w-full rounded-xl bg-default"
  >
    <USelect
      v-model="selectedCourier"
      :items="LIST_COURIERS"
      :disabled="isLoading"
      size="xl"
      placeholder="Pilih Ekspedisi"
    />
    <UInput v-model="awb" :disabled="isLoading" size="xl" class="w-full" />
    <UButton
      :loading="trackStore.state.status === 'loading'"
      :disabled="isLoading"
      label="Lacak Sekarang"
      size="xl"
      class="flex-1 px-8 text-lg text-inverted"
      @click="onSubmit"
    />
  </section>
  <p v-if="formError" class="-mt-4 text-sm text-error">*{{ formError }}</p>
</template>
