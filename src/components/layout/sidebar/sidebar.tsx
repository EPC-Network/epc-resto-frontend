'use client';

import * as React from 'react';
import { Link } from 'react-router-dom';

import { SidebarMain } from './sidebar-main/sidebar-main';

import {
  Sidebar as SidebarRoot,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/primitives';
import epcLogo from '@/assets/epc.png';

export const Sidebar: React.FC = () => {
  return (
    <SidebarRoot className="z-50">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild className="pl-1">
              <Link
                to="/"
                className="[&>svg]:size-auto [&>svg]:h-6 text-[#f9b10d] hover:text-[#f9b10d] dark:text-primary ml-1"
              >
                <img src={epcLogo} alt="EPC Network" className="max-w-[140px]" />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="overflow-hidden">
        <SidebarMain />
      </SidebarContent>
      <SidebarRail />
    </SidebarRoot>
  );
};
