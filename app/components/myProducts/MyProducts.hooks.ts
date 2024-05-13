import { useCallback, useMemo, useState } from "react";
import { useShallow } from "zustand/react/shallow";

import { useModalStore } from "@/store/useModalStore";
import { ProductService } from "@/services/Product.service";

import { ICard } from "../cardList";

export const useMyProducts = (initialProducts: IProduct[]) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [products, setProducts] = useState<IProduct[]>(initialProducts);

  const { openModal, setLoading, closeModal } = useModalStore(
    useShallow(({ data, openModal, setLoading, closeModal }) => ({
      data,
      openModal,
      closeModal,
      setLoading,
    }))
  );

  const afterProductCreation = (product: IProduct) => {
    setIsOpen(false);
    setProducts((prevState) => [product, ...prevState]);
  };

  const afterProductRemoved = useCallback((id: string) => {
    setProducts((prevState) =>
      prevState.filter((product) => product._id !== id)
    );
  }, []);

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

  const openRemoveConfirmation = useCallback(
    (id: string) => {
      const candidateToRemove = productCards.find(
        (product) => product._id === id
      );

      if (candidateToRemove) {
        openModal({
          title: `Do you want to remove ${candidateToRemove.title} product?`,
          onConfirm: () => {
            setLoading(true);
            ProductService.delete(id)
              .then(() => afterProductRemoved(id))
              .finally(() => {
                setLoading(false);
                closeModal();
              });
          },
        });
      }
    },
    [afterProductRemoved, closeModal, openModal, productCards, setLoading]
  );

  const actions = useMemo(
    () => [
      {
        key: "remove",
        className: "delete-icon",
        onClick: (id: string) => openRemoveConfirmation(id),
      },
    ],
    [openRemoveConfirmation]
  );

  return {
    isOpen,
    actions,
    setIsOpen,
    productCards,
    afterProductRemoved,
    afterProductCreation,
  };
};
