// import { ILoginFormValues } from "../components/login-form/LoginForm.types";
import { BASE_URL } from "@/app/constants";
import { request } from "../utils/request";
import { IRegFormValues } from "@/app/components/registration/Registration.types";

class AuthS {
  async register(values: IAuthValues) {
    return request<ISuccessResponse<IAuthData>>({
      url: `${BASE_URL}/auth/register`,
      options: {
        body: values,
        method: "POST",
      },
    });
  }

  async login(values: IAuthValues) {
    return request<ISuccessResponse<IAuthData>>({
      url: `${BASE_URL}/auth/login`,
      options: {
        body: values,
        method: "POST",
      },
    });
  }
}

export const AuthService = new AuthS();
