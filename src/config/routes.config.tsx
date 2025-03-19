import { RouteObject } from 'react-router-dom';

import { OrdersListPage } from '@/pages';
import { ORDERS_PAGE } from '@/constants/routes.constants';
import { PageRoute } from '@/components/client';

export type Route = RouteObject & {
  name: string;
  path: string;
};

export const appRoutes: Route[] = [{ ...ORDERS_PAGE, element: <OrdersListPage /> }];

export const addRouteWrapper = (routes: Route[]): RouteObject[] => {
  return routes.map(({ element, ...params }) => ({
    ...params,
    element: <PageRoute {...params} element={element} />,
  }));
};

export const routes = addRouteWrapper(appRoutes);
