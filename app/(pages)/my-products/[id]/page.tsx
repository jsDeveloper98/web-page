export const fetchCache = "force-no-store";

import { Image } from "antd";

import { BASE_URL } from "@/constants";
import serverRequest from "@/utils/serverRequest";

interface IProps {
  params: {
    id: string;
  };
}

// TODO: move this from page and make separated component
const MyProductDetails = async ({ params }: IProps) => {
  const product = await serverRequest<IProduct>(
    `${BASE_URL}/api/products/${params.id}`,
    { cache: "no-store" }
  );

  const [imgTimestamp, ...rest] = product.image.split("-");
  const imagePath = `${imgTimestamp}-full-${rest.join("-")}`;

  return (
    <div className="MyProductDetails">
      <Image
        width={1000}
        alt={product.title}
        src={`${BASE_URL}/${imagePath}`}
      />
    </div>
  );
};

export default MyProductDetails;
