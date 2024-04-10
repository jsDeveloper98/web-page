import { BASE_URL } from "@/constants";
import { request } from "@/utils/request";

class AuthS {
  async register(values: IAuthValues) {
    return request<ISuccessResponse<IUserData>>({
      url: `${BASE_URL}/api/auth/register`,
      requestInit: {
        body: values,
        method: "POST",
      },
    });
  }

  async login(values: IAuthValues) {
    return request<ISuccessResponse<IUserData>>({
      url: `${BASE_URL}/api/auth/login`,
      requestInit: {
        body: values,
        method: "POST",
      },
    });
  }

  async checkAuth() {
    return request<ISuccessResponse<IUserData | null>>({
      url: `${BASE_URL}/api/auth/check`,
    });
  }

  async logout() {
    return request<ISuccessResponse<null>>({
      url: `${BASE_URL}/api/auth/logout`,
    });
  }
}

export const AuthService = new AuthS();
