'use client';

import React from 'react';

import { Separator, SidebarTrigger } from '@/components/primitives';

export const SidebarTriggerButton: React.FC = () => {
  return (
    <>
      <SidebarTrigger className="-ml-1 w-4" />
      <Separator orientation="vertical" className="mr-2 h-4" />
    </>
  );
};
