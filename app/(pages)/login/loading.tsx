import { Skeleton } from "antd";

const LoginPageLoader = () => {
  return (
    <div className="LoginPageLoader flex items-center justify-center">
      <Skeleton loading={true} active={true} />
    </div>
  );
};

export default LoginPageLoader;
