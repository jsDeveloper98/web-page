"use client";
import { Button, Form, Input } from "antd";

import { validateField } from "@/app/utils/validators";
import { IRegFormValues } from "@/app/components/registration/Registration.types";
import { AuthService } from "@/app/services/AuthService";

export const Registration = () => {
  const handleSubmit = (data: IRegFormValues) => {
    console.log("%c data ===>", "color: #90ee90", data);
    AuthService.register(data);
  };

  return (
    <div className="Registration h-screen flex items-center justify-center flex-col">
      <h1 className="mb-5">Registration</h1>
      <Form labelCol={{ span: 8 }} onFinish={handleSubmit} autoComplete="off">
        <Form.Item<IRegFormValues>
          label="Email"
          name="email"
          rules={validateField(["required", "email"])}
        >
          <Input />
        </Form.Item>

        <Form.Item<IRegFormValues>
          label="Password"
          name="password"
          rules={validateField(["required", "input"])}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
