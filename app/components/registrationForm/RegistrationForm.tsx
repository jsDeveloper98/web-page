"use client";
import { Button, Form, Input } from "antd";

import { validateField } from "@/utils/validators";
import { AuthService } from "@/services/Auth.service";

export const RegistrationForm = () => {
  const handleSubmit = (data: IAuthValues) => {
    AuthService.register(data);
  };

  return (
    <div className="RegistrationForm">
      <h1 className="mb-5 text-center">Registration</h1>
      <Form labelCol={{ span: 8 }} onFinish={handleSubmit} autoComplete="off">
        <Form.Item<IAuthValues>
          label="Email"
          name="email"
          rules={validateField(["required", "email"])}
        >
          <Input />
        </Form.Item>

        <Form.Item<IAuthValues>
          label="Password"
          name="password"
          rules={validateField(["required", "input"])}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};