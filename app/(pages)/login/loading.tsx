import { Spin } from "antd";

const LoginPageLoader = () => {
  return (
    <div className="LoginPageLoader">
      <Spin spinning={true} fullscreen />
    </div>
  );
};

export default LoginPageLoader;
