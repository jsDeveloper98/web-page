import { useMemo, useState } from "react";

import { ICard } from "../cardList";

export const useMyProducts = (initialProducts: IProduct[]) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [products, setProducts] = useState<IProduct[]>(initialProducts);

  const afterProductCreation = (product: IProduct) => {
    setIsOpen(false);
    setProducts((prevState) => [product, ...prevState]);
  };

  const productCards = useMemo(
    (): ICard[] =>
      products.map(({ _id, description, title, image }) => ({
        description,
        _id,
        title,
        imgUrl: image,
      })),
    [products]
  );

  return { isOpen, afterProductCreation, productCards, setIsOpen };
};
