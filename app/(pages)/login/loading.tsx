import { Skeleton } from "antd";

const LoginPageLoader = () => {
  return (
    <div className="LoginPageLoader flex items-center justify-center h-full flex-col">
      <Skeleton title={false} loading={true} active={true} />
      <Skeleton title={false} loading={true} active={true} />
      <Skeleton title={false} loading={true} active={true} />
    </div>
  );
};

export default LoginPageLoader;
