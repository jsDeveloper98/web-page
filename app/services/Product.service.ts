import { BASE_URL } from "@/constants";
import { request } from "@/utils/request";

class ProductS {
  async create(values: FormData) {
    return request<ISuccessResponse<IProduct>>({
      url: `${BASE_URL}/api/products`,
      isFormData: true,
      requestInit: {
        body: values,
        method: "POST",
      },
    });
  }

  async delete(id: string) {
    return request<ISuccessResponse<{ _id: string }>>({
      url: `${BASE_URL}/api/products/${id}`,
      requestInit: { method: "DELETE" },
    });
  }
}

export const ProductService = new ProductS();
