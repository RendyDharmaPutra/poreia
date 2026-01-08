import { defineStore } from "pinia";
import { ref } from "vue";
import { trackPackageService } from "../service/trackPackage.service";

export const useTrackStore = defineStore("track", () => {
  const loading = ref(false);
  const error = ref<string | null>(null);
  const data = ref<any>();

  const load = async (courier: string, awb: string) => {
    console.log("track"); // ? Debug

    loading.value = true;

    // ? Reset State
    data.value = undefined;
    error.value = null;

    const res = await trackPackageService(courier, awb);
    if (res.status === 200) {
      data.value = res.data;
    } else {
      error.value = res.message;
    }

    // ? Debug
    console.log(data.value);
    console.log(error.value);

    loading.value = false;
  };

  return { loading, error, data, load };
});
