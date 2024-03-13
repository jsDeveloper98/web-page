import { Skeleton } from "antd";

const RegistrationPageLoader = () => {
  return (
    <div className="RegistrationPageLoader flex items-center justify-center">
      <Skeleton loading={true} active={true} />
    </div>
  );
};

export default RegistrationPageLoader;
