import React from "react";

import { Input, Button } from "antd";

const Login = () => {
  return (
    <div className="bg-gray-100 w-screen h-screen flex flex-col justify-center">
      <div className="w-1/4 mx-auto text-center border-2 p-10 bg-white">
        <p className="text-2xl mt-2">Login to the portal</p>
        <Input placeholder="Employee ID" className="mt-2" />
        <Input placeholder="Password" className="mt-2" />
        <Button type="primary px-10 mt-2">Sign In</Button>
      </div>
    </div>
  );
};

export default Login;
