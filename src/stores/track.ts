import { defineStore } from "pinia";
import { ref } from "vue";

export const useTrackStore = defineStore("track", () => {
  const loading = ref(false);
  const error = ref<string | null>(null);

  const load = async () => {
    loading.value = true;
    console.log("track");

    await new Promise((resolve) => setTimeout(resolve, 1000));

    loading.value = false;
  };

  return { loading, error, load };
});
