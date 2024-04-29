import { Skeleton } from "antd";

const MyProductsPageLoader = () => {
  return (
    <div className="MyProductsPageLoader">
      <Skeleton loading={true} active={true} />
      <Skeleton loading={true} active={true} />
      <Skeleton loading={true} active={true} />
      <Skeleton loading={true} active={true} />
      <Skeleton loading={true} active={true} />
      <Skeleton loading={true} active={true} />
      <Skeleton loading={true} active={true} />
      <Skeleton loading={true} active={true} />
      <Skeleton loading={true} active={true} />
    </div>
  );
};

export default MyProductsPageLoader;
