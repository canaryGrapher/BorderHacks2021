import { Input } from "antd";
import { LogoutOutlined } from "@ant-design/icons";

const { Search } = Input;

const Navbar = () => (
  <div className="shadow-lg w-full h-20 flex flex-col justify-center fixed bg-white z-50">
    <div className="px-10 flex flex-row justify-between">
      <div className="flex flex-row">
        <h3 className="font-bold text-2xl text-blue-500 mr-8">
          Employee Portal
        </h3>
        <Search placeholder="Search Employees" style={{ width: 400 }} />
      </div>
      <div className="flex flex-row border-2 rounded-xl p-2 bg-blue-500 text-white font-bold hover:bg-white hover:text-blue-500 cursor-pointer">
        <LogoutOutlined className="my-auto" />
        <p className="my-auto ml-1">Logout</p>
      </div>
    </div>
  </div>
);

export default Navbar;
