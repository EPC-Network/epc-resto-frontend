import React from 'react';

type OrderItemProps = {
  order: unknown;
};

export const OrderItem: React.FC<OrderItemProps> = () => {
  return (
    <div className="flex flex-col bg-gray-50 justify-between border rounded-md px-4 py-2">
      <div>
        <span className="text-xs text-muted-foreground line-clamp-1">Order #1</span>
        <div className="my-4">
          {/*{order.meals.map((meal) => (*/}
          {/*  <div className="flex items-center gap-2">*/}
          {/*    <div className="size-2 bg-primary rounded-full" />*/}
          {/*    <div className="w-full flex items-center gap-4 justify-between">*/}
          {/*      <p className="text-sm font-medium">{meal.name}</p>*/}
          {/*      <p className="text-sm text-muted-foreground">*/}
          {/*        {meal.quantity} x <strong>{formatPrice(meal.price)}</strong> USD*/}
          {/*      </p>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*))}*/}
        </div>
      </div>

      <div className="flex items-center gap-2 justify-between">
        <p className="text-muted-foreground text-sm">Status: done</p>
        <h3 className="font-medium">
          <span className="text-xs text-muted-foreground">Total:</span> X USD
        </h3>
      </div>
    </div>
  );
};
