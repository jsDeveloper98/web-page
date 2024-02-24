"use client";

import { Button, Form, Input } from "antd";

import { validateField } from "@/app/utils/validators";
import { AuthService } from "@/app/services/AuthService";

interface IFieldType {
  email: string;
  password: string;
}

export const Login = () => {
  const handleSubmit = (data: IFieldType) => {
    AuthService.login(data);
    console.log({ data }); // You can handle form submission here
  };

  return (
    <div className="Registration h-screen flex items-center justify-center flex-col">
      <h1 className="mb-5">Login</h1>
      <Form labelCol={{ span: 8 }} onFinish={handleSubmit} autoComplete="off">
        <Form.Item<IFieldType>
          label="Email"
          name="email"
          rules={validateField(["required", "email"])}
        >
          <Input />
        </Form.Item>

        <Form.Item<IFieldType>
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
