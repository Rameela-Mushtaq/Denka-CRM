import React from "react";
import { FaChevronDown } from "react-icons/fa6";

const CustomizedSelector = ({text}) => {
  return (
    <div className="relative xl:w-[25%] xl:flex hidden">
        <select
          name=""
          className="appearance-none p-3 md:text-base text-sm text-other border border-border w-full rounded-lg outline-none "
        >
          <option value="all">{text}</option>
        </select>
        <FaChevronDown
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-other pointer-events-none md:w-5 md:h-5 w-4 h-4"
        />
      </div>
  );
};

export default CustomizedSelector;
