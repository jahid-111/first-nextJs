"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const CustomLink = ({ path, children }) => {
  const pathName = usePathname();
  const active = pathName === path;

  // console.log(pathName)
  return (
    <div>
      <Link className={`${active ? "text-green-600" : ""}`} href={path}>
        {children}
      </Link>
    </div>
  );
};

export default CustomLink;
