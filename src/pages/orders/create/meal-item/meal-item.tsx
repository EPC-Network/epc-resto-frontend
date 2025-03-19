import React from 'react';
import { MinusIcon, PlusIcon, TrashIcon, UtensilsCrossed } from 'lucide-react';

import { Button } from '@/components';

type MealItemProps = {
  meal: unknown;
};

export const MealItem: React.FC<MealItemProps> = () => {
  const isAddedToOrder = false;

  return (
    <div className="w-full flex bg-accent rounded-md border justify-between items-center gap-4 py-2 px-4">
      <div className="flex items-center gap-2">
        <UtensilsCrossed size={18} strokeWidth={1} />
        <div className="flex flex-col gap-0">
          <h1 className="text-secondary-foreground text-sm font-bold">Meal name #1</h1>
          <span className="text-xs text-muted-foreground">
            Price: <strong>14.00 USD</strong>
          </span>
        </div>
      </div>

      {!isAddedToOrder && (
        <div>
          <Button onClick={() => null} size="icon" variant="secondary" className="size-7 border">
            <PlusIcon />
          </Button>
        </div>
      )}

      {isAddedToOrder && (
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="icon" className="size-6 rounded-sm border" onClick={() => null}>
            <MinusIcon size={12} className="text-muted-foreground" />
          </Button>
          <p>1</p>
          <Button variant="secondary" size="icon" className="size-6 rounded-sm border" onClick={() => null}>
            <PlusIcon />
          </Button>

          <Button variant="destructive" size="icon" onClick={() => null} className="size-7">
            <TrashIcon />
          </Button>
        </div>
      )}
    </div>
  );
};
