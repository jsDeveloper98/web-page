import { Spin } from "antd";

const MyProductsPageLoader = () => {
  return (
    <div className="MyProductsPageLoader">
      <Spin spinning={true} fullscreen />
    </div>
  );
};

export default MyProductsPageLoader;
