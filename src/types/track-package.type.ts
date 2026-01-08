export type TrackPackageSummary = {
  amount?: string;
  awb: string;
  courier: string;
  date: string;
  desc?: string;
  service: string;
  status: string;
  weight?: string;
};

export type TrackPackageHistory = {
  date: string;
  desc: string;
  location?: string;
};

export type TrackPackage = {
  summary: TrackPackageSummary;
  history: TrackPackageHistory[];
};
