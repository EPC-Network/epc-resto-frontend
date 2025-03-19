import React from 'react';

export type SidebarItem = {
  name: string;
  path: string;
  params?: string;
  icon?: React.ReactNode;
  isActive?: boolean;
  items?: {
    name: string;
    path: string;
  }[];
};
