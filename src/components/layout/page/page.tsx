import React, { memo } from 'react';

import { Sidebar } from '../sidebar/sidebar';
import { Navbar } from '../navbar/navbar';

import { SidebarProvider, SidebarInset } from '@/components/primitives';

type NavigationProps = {
  children: React.ReactNode;
  showNavigation?: boolean;
};

export const Page = memo<NavigationProps>(({ children, showNavigation }) => {
  if (!showNavigation) {
    return <>{children}</>;
  }

  return (
    <SidebarProvider>
      <Sidebar />
      <SidebarInset className="min-w-0 scrollbar">
        <main className="w-full flex flex-1 flex-col gap-4">
          <Navbar showNavigation={showNavigation} />

          <div className="p-8 pt-0 md:pt-0 w-full flex flex-1 flex-col gap-4">{children}</div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
});
