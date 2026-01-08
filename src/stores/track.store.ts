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
    console.log("track"); // ? Debug
    reset();

    state.status = "loading";
    console.log(`isLoading: ${state.status === "loading"}`);

    const res = await trackPackageService(courier, awb);
    console.log(res);
    if (res.status === 200) {
      state.data = res.data!;
    } else {
      state.error = res.message;
    }

    // ? Debug
    console.log(state.data);
    console.log(state.error);

    state.status = "success";
    console.log(`isLoading: ${state.status === "loading"}`);
  };

  const reset = () => Object.assign(state, initialState());

  return { state, load };
});
