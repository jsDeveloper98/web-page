import { message } from "antd";
import { jwtVerify } from "jose";

export const handleError = (err: Error) => message.error(err.message);

export const verifyJWTToken = async (token?: string) => {
  if (!token) {
    return null;
  }

  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET as string)
    );
    return payload;
  } catch (err) {
    return null;
  }
};
