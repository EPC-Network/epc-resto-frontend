import { client } from '@/api/client.api.ts';

export const createOrder = client.createRequest()({
  endpoint: '/orders',
  method: 'POST',
});

export const getOrders = client.createRequest()({
  endpoint: '/orders',
  method: 'GET',
});
