import React from 'react';
import { UserIcon } from 'lucide-react';

import { SidebarTriggerButton } from './sidebar-trigger-button/sidebar-trigger-button';

import { Avatar, AvatarFallback } from '@/components';

export type NavbarProps = {
  showNavigation: boolean;
  className?: string;
};

export const Navbar: React.FC<NavbarProps> = ({ showNavigation }) => {
  return (
    <header className="sticky top-0 z-10 flex h-12 shrink-0 items-center bg-sidebar px-6 md:px-8 justify-between gap-2 pl-8 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b">
      <div className="flex items-center gap-2">{showNavigation && <SidebarTriggerButton />}</div>

      <Avatar className="h-8 w-8 rounded-lg">
        <AvatarFallback className="rounded-md border">
          <UserIcon size={16} className="text-muted-foreground" />
        </AvatarFallback>
      </Avatar>
    </header>
  );
};
