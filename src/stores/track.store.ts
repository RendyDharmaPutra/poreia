import { defineStore } from "pinia";
import { reactive } from "vue";
import { trackPackageService } from "../service/trackPackage.service";
import { TrackPackage } from "../types/track-package.type";

type AsyncStatus = "idle" | "loading" | "success" | "error";

function initialState() {
  return {
    status: "idle" as AsyncStatus,
    error: null as string | null,
    data: null as TrackPackage | null,
  };
}

export const useTrackStore = defineStore("track", () => {
  const state = reactive(initialState());

  const load = async (courier: string, awb: string) => {
    reset();

    state.status = "loading";

    try {
      const res = await trackPackageService(courier, awb);
      if (res.status === 200) {
        state.data = res.data!;
        state.status = "success";
      } else {
        state.error = res.message;
        state.status = "error";
      }
    } catch (error) {
      console.error(`unexpected error: ${error}`);

      state.error = "Terjadi kesalahan tidak diketahui";
      state.status = "error";
    }
  };

  const reset = () => Object.assign(state, initialState());

  return { state, load };
});
