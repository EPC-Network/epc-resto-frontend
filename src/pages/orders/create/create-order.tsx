import React from 'react';
import { Form, Formik } from 'formik';

import { MealItem } from './meal-item/meal-item';
import { MealsFilter } from './meals-filter/meals-filter';
import { TotalPrice } from './total-price/total-price';

import { Button, Dialog, Loader } from '@/components';
import { DialogFooter } from '@/components/primitives';

type CreateOrderProps = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

export const CreateOrder: React.FC<CreateOrderProps> = ({ isOpen, onOpenChange }) => {
  const handleSubmit = () => {
    /* order submit */
  };

  const orderInitialValues = {};
  const loading = false;

  return (
    <Dialog
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      title="Create a new order"
      description="Select meals you want to add to your order"
    >
      <Formik initialValues={orderInitialValues} onSubmit={handleSubmit}>
        <Form>
          <div className="px-4 pb-4">
            <MealsFilter />

            {loading && <Loader />}
            {!loading && (
              <section className="flex flex-col gap-2 mt-4">
                <MealItem meal={{ name: 'Meal name #1' }} />
              </section>
            )}
          </div>

          <DialogFooter className="w-full border-t p-4 flex justify-between sm:justify-between gap-2 items-center">
            <TotalPrice />
            <div className="flex items-center gap-2">
              <Button variant="secondary" type="button" onClick={() => onOpenChange(false)}>
                Close
              </Button>
              <Button type="submit">Create</Button>
            </div>
          </DialogFooter>
        </Form>
      </Formik>
    </Dialog>
  );
};
