import React from 'react';

import { Skeleton } from '@/components/primitives';

export const Loader: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-2 mt-4">
      <Skeleton className="w-full h-5" />
      <Skeleton className="w-1/2 h-5" />
      <Skeleton className="w-1/3 h-5" />
    </div>
  );
};
