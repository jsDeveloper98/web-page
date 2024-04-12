import { BASE_URL } from "@/constants";
import { request } from "@/utils/request";

class ProductS {
  async create(values: any, id: string) {
    return request<ISuccessResponse<IProduct>>({
      url: `${BASE_URL}/api/users/${id}/products`,
      isFormData: true,
      requestInit: {
        body: values,
        method: "POST",
      },
    });
  }
}

export const ProductService = new ProductS();
