import { BASE_URL } from "@/constants";
import { request } from "@/utils/request";

class AuthS {
  async register(values: IAuthValues) {
    return request<ISuccessResponse<IAuthData>>({
      url: `${BASE_URL}/auth/register`,
      requestInit: {
        body: values,
        method: "POST",
      },
    });
  }

  async login(values: IAuthValues) {
    return request<ISuccessResponse<IAuthData>>({
      url: `${BASE_URL}/auth/login`,
      requestInit: {
        body: values,
        method: "POST",
      },
    });
  }
}

export const AuthService = new AuthS();
