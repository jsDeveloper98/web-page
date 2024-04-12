"use client";
import { Button } from "antd";

import { CardList, ICard } from "../cardList";
import { useMyProducts } from "./MyProducts.hooks";
import { CreateCardModal } from "./createProductModal";

interface IProps {
  products: IProduct[];
}

export const MyProducts = ({ products: initialProducts }: IProps) => {
  const { afterProductCreation, isOpen, productCards, setIsOpen } =
    useMyProducts(initialProducts);

  return (
    <div>
      <div className="flex items-center justify-end mb-5">
        <Button onClick={() => setIsOpen(true)} type="primary">
          Create Product
        </Button>
      </div>

      <CardList cards={productCards} />

      {isOpen && (
        <CreateCardModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onSuccess={afterProductCreation}
        />
      )}
    </div>
  );
};
