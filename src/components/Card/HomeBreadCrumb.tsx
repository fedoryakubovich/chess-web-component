import React from "react";
import { HiHome } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

type HomeBreadCrumbProps = {
  isHover: boolean;
  link?: string;
};

const HomeBreadCrumb: React.FC<HomeBreadCrumbProps> = ({ isHover, link }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => link && navigate(link)}
      className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white cursor-pointer"
      tabIndex={isHover ? 1 : -1}
    >
      <HiHome aria-hidden="true" className="w-4 h-4 mr-2" />
      Home
    </button>
  );
};

export default HomeBreadCrumb;
