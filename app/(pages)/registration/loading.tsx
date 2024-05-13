import { Spin } from "antd";

const RegistrationPageLoader = () => {
  return (
    <div className="RegistrationPageLoader">
      <Spin spinning={true} fullscreen />
    </div>
  );
};

export default RegistrationPageLoader;
