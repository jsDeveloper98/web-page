export const fetchCache = "force-no-store";

import { BASE_URL } from "@/constants";
import serverRequest from "@/utils/serverRequest";
import { MyProducts } from "@/components/myProducts";

const MyProductsPage = async () => {
  const products = await serverRequest<IProduct[]>(`${BASE_URL}/api/products`, {
    cache: "no-store",
  });

  return (
    <div className="MyProductsPage ">
      <MyProducts products={products} />
    </div>
  );
};

export default MyProductsPage;
