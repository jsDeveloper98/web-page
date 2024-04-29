"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "antd";

import { ProductService } from "@/services/Product.service";

import { CardList } from "../cardList";
import { useMyProducts } from "./MyProducts.hooks";
import { CreateCardModal } from "./createProductModal";

interface IProps {
  products: IProduct[];
}

export const MyProducts = ({ products: initialProducts }: IProps) => {
  const {
    isOpen,
    setIsOpen,
    productCards,
    afterProductRemoved,
    afterProductCreation,
  } = useMyProducts(initialProducts);

  const removeProduct = useCallback(
    (id: string) =>
      ProductService.delete(id).then(() => afterProductRemoved(id)),
    [afterProductRemoved]
  );

  const actions = useMemo(
    () => [
      {
        key: "remove",
        className: "delete-icon",
        onClick: (id: string) => removeProduct(id),
      },
    ],
    [removeProduct]
  );

  return (
    <div className="MyProducts">
      <div className="flex items-center justify-end mb-5">
        <Button onClick={() => setIsOpen(true)} type="primary">
          Create Product
        </Button>
      </div>

      <CardList cards={productCards} actions={actions} />

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
