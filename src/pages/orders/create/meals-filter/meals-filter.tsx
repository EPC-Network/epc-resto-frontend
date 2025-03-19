import React from 'react';

import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from '@/components';

export const MealsFilter: React.FC = () => {
  const loading = false;

  return (
    <div className="flex items-center gap-2 justify-end">
      <Select disabled={loading}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Category #1">Category #1</SelectItem>
          <SelectItem value="Category #2">Category #2</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
