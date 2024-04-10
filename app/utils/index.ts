import { message } from "antd";

export const handleError = (err: Error) => message.error(err.message);
