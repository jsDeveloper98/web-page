import { headers } from "next/headers";

import { BASE_URL } from "@/constants";
import { MyProducts } from "@/components/myProducts";

const MyProductsPage = async () => {
  const headersList = headers();
  const userId = headersList.get("userId");

  const res = await fetch(`${BASE_URL}/api/users/${userId}/products`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const products = (await res.json()).data as IProduct[];

  return (
    <div className="MyProductsPage ">
      <MyProducts products={products} />
    </div>
  );
};

export default MyProductsPage;
