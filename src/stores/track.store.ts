import { defineStore } from "pinia";
import { reactive } from "vue";
import { trackPackageService } from "../service/trackPackage.service";

type AsyncStatus = "idle" | "loading" | "success" | "error";

type TrackPackage = any[];

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

    const res = await trackPackageService(courier, awb);
    if (res.status === 200) {
      state.data = res.data!;
    } else {
      state.error = res.message;
    }

    state.status = "success";
  };

  const reset = () => Object.assign(state, initialState());

  return { state, load };
});
