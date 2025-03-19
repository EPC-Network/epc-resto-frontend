import React from 'react';
import { useDidMount } from '@better-hooks/lifecycle';

import { Page } from '@/components';
import { Route } from '@/config';

export const PageRoute: React.FC<Route> = ({ element }: Route) => {
  useDidMount(() => {
    window.scrollTo(0, 0);
  });

  return <Page showNavigation>{element}</Page>;
};
