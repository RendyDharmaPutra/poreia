type TrackPackageResponse = {
  status: number;
  message: string;
  data?: any[];
};

export const trackPackageService = async (
  courier: string,
  awb: string
): Promise<TrackPackageResponse> => {
  const res = await fetch(
    `https://api.binderbyte.com/v1/track?api_key=${
      import.meta.env.VITE_API_KEY
    }&courier=${courier}&awb=${awb}`
  );

  return await res.json();
};
