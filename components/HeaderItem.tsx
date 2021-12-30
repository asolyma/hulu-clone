import React from "react";
import { Ihero } from "../types/types";
const HeaderItem: React.FC<{ title: string; Icon: Ihero }> = ({
  title,
  Icon,
}) => {
  return (
    <div className="group flex flex-col items-center w-12 hover:text-white cursor-pointer">
      <Icon className=" h-8 mb-1 group-hover:animate-bounce" />
      <p className="tracking-widest opacity-0 group-hover:opacity-100">
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;
