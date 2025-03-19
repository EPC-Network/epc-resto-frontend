import { client } from '@/api/client.api.ts';

export const getCategories = client.createRequest()({
  endpoint: '/categories',
  method: 'GET',
});
