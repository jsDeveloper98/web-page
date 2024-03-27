import { Skeleton } from "antd";

const RegistrationPageLoader = () => {
  return (
    <div className="RegistrationPageLoader flex items-center justify-center h-full flex-col">
      <Skeleton title={false} loading={true} active={true} />
      <Skeleton title={false} loading={true} active={true} />
      <Skeleton title={false} loading={true} active={true} />
    </div>
  );
};

export default RegistrationPageLoader;
