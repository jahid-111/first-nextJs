import React from "react";

const DashBoardLayout = ({ children }) => {
  return (
    <>
      <div className="flex p-4  gap-5">
        <li className=" list-none bg-gray-700">Analytics</li>
        <li className=" list-none bg-gray-700">Settings</li>
      </div>
      {children}
    </>
  );
};

export default DashBoardLayout;
