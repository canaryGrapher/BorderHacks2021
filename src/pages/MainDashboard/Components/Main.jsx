import React from "react";
import { Collapse, Avatar, Button } from "antd";

const { Panel } = Collapse;

const Main = () => {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum pellentesque nisi, vel rhoncus velit tempus at. Morbi pretium quis sapien vulputate pharetra. Vivamus et lorem imperdiet, tincidunt dolor vel, semper libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla faucibus condimentum diam, non egestas risus suscipit et. Ut risus risus, condimentum eu magna quis, aliquet dapibus velit. Donec efficitur magna quam, sit amet hendrerit arcu posuere vel. Pellentesque id vehicula mi, sed laoreet justo. Nam justo est, pellentesque eget vulputate non, consequat non nibh. Nulla porttitor lectus elit, ut lacinia erat pretium nec. Pellentesque sit amet justo at diam sollicitudin lacinia at vel felis. Ut malesuada dignissim elit, a consectetur nisl ultricies eu. Donec accumsan velit non eros ultrices vulputate vitae nec est. Integer tempus lorem at massa sodales, nec congue elit egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean id magna dapibus, pellentesque nulla a, vulputate nisi.";
  return (
    <React.Fragment>
      <div className="p-20 text-black">
        <h1 className="text-3xl font-bold">Good Morning!</h1>
        <div className="pt-10 grid grid-cols-2 gap-4">
          <div className="bg-gray-200 px-4 py-2 rounded shadow-lg">
            <p className="text-blue-500 mb-2 text-2xl">Project Status</p>
            <Collapse defaultActiveKey={["1"]}>
              <Panel header="Project Seed" key="1">
                <p>{text}</p>

                <p className="pt-6 text-blue-500">
                  These people might be available to join the project:
                </p>
                <div className="">
                  <Avatar
                    size={30}
                    src="https://www.thispersondoesnotexist.com/image"
                    className="mr-2"
                  />
                  <Avatar
                    size={30}
                    src="https://www.thispersondoesnotexist.com/image"
                    className="mr-2"
                  />
                  <Avatar
                    size={30}
                    src="https://www.thispersondoesnotexist.com/image"
                    className="mr-2"
                  />
                  <Avatar
                    size={30}
                    src="https://www.thispersondoesnotexist.com/image"
                    className="mr-2"
                  />
                  <Avatar
                    size={30}
                    src="https://www.thispersondoesnotexist.com/image"
                    className="mr-2"
                  />
                </div>
              </Panel>
              <Panel header="Project Peaches" key="2">
                <p>{text}</p>
              </Panel>
              <Panel header="Github CI/CD automation" key="3">
                <p>{text}</p>
              </Panel>
            </Collapse>
          </div>
          <div className="bg-gray-200 px-4 py-2 rounded shadow-lg">
            <p className="text-blue-500 mb-2 text-2xl">Conflicts</p>
            <div className="grid grid-cols-3 gap-5">
              <img
                src="https://www.thispersondoesnotexist.com/image"
                alt="sample"
              />
              <img
                src="https://www.thispersondoesnotexist.com/image"
                alt="sample"
              />
              <div className="flex flex-col justify-center">
                <p className="">
                  <span className="font-bold">John Doe</span> and{" "}
                  <span className="font-bold">Jane Doe</span> have been assigned
                  the <span className="text-red-600">same task</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-200 px-4 py-2 rounded shadow-lg mt-10">
          <p className="text-blue-500 mb-2 text-2xl">Recommendations</p>
          <div className="flex flex-row">
            <img
              src="https://www.thispersondoesnotexist.com/image"
              alt="sample"
              className="h-20 w-20 rounded-full"
            />
            <div className="pl-6">
              <p className="text-2xl">Peter Thiel</p>
              <p>
                Best suited for the project:{" "}
                <span className="bg-black text-white px-2 py-1 rounded">
                  Project Peaches
                </span>
              </p>
              <p>
                Current status: <span className="text-blue-600">Free</span>
              </p>
              <Button type="primary px-10 mt-2">Appoint</Button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Main;
