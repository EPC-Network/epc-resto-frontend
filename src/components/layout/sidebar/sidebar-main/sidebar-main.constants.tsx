import { ListOrdered } from 'lucide-react';

import { SidebarItem } from '../sidebar.types';

import { ORDERS_PAGE } from '@/constants';

export const mainItems: SidebarItem[] = [
  {
    name: 'Orders',
    path: ORDERS_PAGE.path,
    icon: <ListOrdered />,
  },
];
