export type TopicT = {
  id: number;
  label: string;
  topic: string;
};

export type onboardingTopicsT = {
  label: string;
  children: TopicT[];
};

export type onboardingTopicsListT = {
  status: boolean;
  code: number;
  statusCode: number;
  success: boolean;
  message: string;
  data: onboardingTopicsT[];
};

export type getUserTopicsResponseT = {
  code: number;
  message: string;
  data: number[];
};
