import React from 'react';

import { DialogProps } from './dialog.types';

import {
  Dialog as DialogRoot,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/primitives';

export const Dialog: React.FC<DialogProps> = ({ children, isOpen, onOpenChange, title, description, icon }) => {
  const showHeader = Boolean(title || description);

  return (
    <DialogRoot open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 lg:min-w-[700px]">
        {showHeader && (
          <DialogHeader className="gap-3 py-4 px-4 border-b border-border">
            <section className="flex flex-row items-center gap-4">
              {icon}
              <div className="flex flex-col gap-y-0">
                {title && <DialogTitle className="text-md font-medium">{title}</DialogTitle>}
                {description && (
                  <DialogDescription className="text-sm text-muted-foreground">{description}</DialogDescription>
                )}
              </div>
            </section>
          </DialogHeader>
        )}

        <div className="pt-0">{children}</div>
      </DialogContent>
    </DialogRoot>
  );
};
