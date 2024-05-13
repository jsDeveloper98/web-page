import { Modal as AntModal } from "antd";
import { useModalStore } from "@/store/useModalStore";
import { useShallow } from "zustand/react/shallow";

export const Modal = () => {
  const {
    loading,
    closeModal,
    data: { isOpen, title, onConfirm },
  } = useModalStore(
    useShallow(({ data, closeModal, loading }) => ({
      data,
      loading,
      closeModal,
    }))
  );

  return (
    <AntModal
      open={isOpen}
      closable={false}
      onOk={onConfirm}
      className="Modal"
      confirmLoading={loading}
      onCancel={closeModal}
    >
      <div>{title}</div>
    </AntModal>
  );
};
