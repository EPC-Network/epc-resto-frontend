import { client } from '@/api/client.api.ts';

export const getMeals = client.createRequest()({
  endpoint: '/meals',
  method: 'GET',
});
