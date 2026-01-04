<script setup lang="ts">
import { ref } from "vue";
import { LIST_COURIERS } from "../../../contants/list-couriers";

const awb = ref("");
const selectedCourier = ref("");

const onSubmit = () => {
  console.log(`AWB: ${awb.value}, Courier: ${selectedCourier.value}`);
};
</script>

<template>
  <section
    class="flex flex-col md:flex-row p-2 gap-2 max-w-3xl w-full rounded-xl bg-default"
  >
    <USelect
      size="xl"
      class="w-48"
      :items="LIST_COURIERS"
      v-model="selectedCourier"
    />
    <UInput size="xl" class="w-2/3" v-model="awb" />
    <UButton
      label="Lacak Sekarang"
      class="flex-1 px-8 h-12 text-lg text-inverted"
      @click="onSubmit"
    />
  </section>
</template>
