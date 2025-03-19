import { Client } from '@hyper-fetch/core';

import { environment } from '@/config';

export type ServerErrorType = {
  error: string;
  message: string;
};

export const client = new Client<ServerErrorType>({ url: environment.API_URL }).setQueryParamsConfig({
  arrayFormat: 'comma',
  skipEmptyString: true,
});
