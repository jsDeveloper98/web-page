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

  async delete(id: string) {
    // TODO: HOVO change any to proper type
    return request<ISuccessResponse<any>>({
      url: `${BASE_URL}/api/users/${id}/products`,
      requestInit: { method: "DELETE" },
    });
  }
}

export const ProductService = new ProductS();
