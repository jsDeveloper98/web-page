import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Upload } from "antd";

import { validateField } from "@/utils/validators";

import { useCreateProductModal } from "./CreateProductModal.hooks";

const { TextArea } = Input;

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (data: IProduct) => void;
}

export const CreateCardModal = ({ onSuccess, isOpen, onClose }: IProps) => {
  const { beforeUpload, form, handleSubmit, normalizeFile, loading } =
    useCreateProductModal(onSuccess, onClose);

  return (
    <Modal
      open={isOpen}
      closable={false}
      title="Basic Modal"
      onOk={form.submit}
      onCancel={onClose}
      confirmLoading={loading}
    >
      <Form
        form={form}
        autoComplete="off"
        labelCol={{ span: 8 }}
        onFinish={handleSubmit}
      >
        <Form.Item<IProductValues>
          name="title"
          label="title"
          rules={validateField(["required", "input"])}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="image"
          label="Image"
          valuePropName="fileList"
          getValueFromEvent={normalizeFile}
          rules={validateField(["required"])}
        >
          <Upload maxCount={1} multiple={false} beforeUpload={beforeUpload}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item<IProductValues>
          name="description"
          label="description"
          rules={validateField(["required", "textarea"])}
        >
          <TextArea className="!h-64" />
        </Form.Item>
      </Form>
    </Modal>
  );
};
