import { Link, useLocation } from 'react-router-dom';

import { mainItems } from './sidebar-main.constants';

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/primitives';

export const SidebarMain = () => {
  const { pathname } = useLocation();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {mainItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton asChild tooltip={item.name} className={isActive ? 'bg-muted transition' : ''}>
                <Link to={`${item.path}${item?.params || ''}`}>
                  {item?.icon}
                  <span>{item.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
};
