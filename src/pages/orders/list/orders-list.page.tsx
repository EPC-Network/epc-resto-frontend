import React, { useState } from 'react';
import { PlusIcon } from 'lucide-react';

import { OrderItem } from './order-item/order-item';
import { CreateOrder } from '../create/create-order';

import { Button, Loader } from '@/components';

export const OrdersListPage: React.FC = () => {
  const [isCreateOpen, setCreateOpen] = useState<boolean>(false);

  const handleCreateOpen = () => {
    setCreateOpen(true);
  };

  const loading = false;

  return (
    <div>
      <header className="w-full flex justify-between py-4">
        <h1 className="text-2xl font-black">Orders</h1>

        <Button variant="secondary" className="border" size="sm" onClick={handleCreateOpen}>
          <PlusIcon />
          Create a new order
        </Button>
      </header>

      {loading && <Loader />}
      {!loading && (
        <main className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
          <OrderItem order={{ name: 'Order #1' }} />
        </main>
      )}

      <CreateOrder isOpen={isCreateOpen} onOpenChange={setCreateOpen} />
    </div>
  );
};
