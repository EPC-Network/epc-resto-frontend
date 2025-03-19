export type EnvironmentConfig = {
  API_URL: string;
};

export const environment: EnvironmentConfig = {
  API_URL: import.meta.env.VITE_API_URL as string,
};
