"use client";
import { Button, Card, Form, Input, Modal } from "antd";

import Meta from "antd/es/card/Meta";
import { useState } from "react";

export const CardList = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openCreatePostPopup = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <div className="flex items-center justify-end mb-5">
        <Button onClick={openCreatePostPopup} type="primary">
          Create Post
        </Button>
      </div>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Modal
        closable={false}
        width={300}
        title="Basic Modal"
        open={isOpen}
        onOk={() => console.log("create post")}
        onCancel={() => console.log("cancel post creation")}
      >
        <Form
          // labelCol={{ span: 8 }}
          onFinish={() => console.log("submit")}
          autoComplete="off"
        >
          <Form.Item label="title" name="title">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
