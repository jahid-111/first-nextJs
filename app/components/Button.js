"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Button = ({ children }) => {

  const router = useRouter();
  const handleClick = () => {
    router.push("/dashboard/analytics");
  };

  return (
    <div>
      <button onClick={handleClick} className="py-2 px-4 border text-gray-400">
        {children}
      </button>
    </div>
  );
};

export default Button;
