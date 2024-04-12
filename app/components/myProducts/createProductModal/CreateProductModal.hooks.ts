import { useState } from "react";
import { Form, message } from "antd";
import { RcFile } from "antd/es/upload";

import { useStore } from "@/store/useStore";
import { handleError, verifyAuth } from "@/utils";
import { ProductService } from "@/services/Product.service";

export const useCreateProductModal = (
  onSuccess: (data: IProduct) => void,
  onClose: () => void
) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);
  const { userId } = useStore((store) => store.userData);

  const handleSubmit = (values: IProductValues) => {
    const formData = new FormData();
    const { title, description, image } = values;

    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image[0].originFileObj);

    setLoading(true);
    ProductService.create(formData, verifyAuth(userId))
      .then((data) => {
        onSuccess(data.data);
      })
      .catch(handleError)
      .finally(() => {
        setLoading(false);
        onClose();
      });
  };

  const normalizeFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const beforeUpload = (file: RcFile) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    if (file.type === "image/jpeg" || file.type === "image/png") {
      return true;
    }

    message.error("Supported image extensions are jpeg or png");
    form.setFieldValue("image", null);
    return false;
  };

  return {
    form,
    loading,
    handleSubmit,
    beforeUpload,
    normalizeFile,
  };
};
