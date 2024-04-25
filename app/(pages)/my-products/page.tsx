import { cookies } from "next/headers";
import { BASE_URL } from "@/constants";
import { MyProducts } from "@/components/myProducts";

const MyProductsPage = async () => {
  const res = await fetch(`${BASE_URL}/api/my-products`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookies().toString(),
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
