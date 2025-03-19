import React from 'react';

export type DialogProps = {
  children: React.ReactNode;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
};
