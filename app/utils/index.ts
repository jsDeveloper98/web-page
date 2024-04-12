import { message } from "antd";

export const handleError = (err: Error) => message.error(err.message);

export const verifyAuth = (id: string | null) => {
  if (!id) {
    throw new Error("No authorization");
  }
  return id;
};
