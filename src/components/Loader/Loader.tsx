import React from 'react';

import { BiLoaderAlt } from 'react-icons/bi';

const Loader: React.FC = () => {
  return (
    <div role="status" className="absolute w-full h-full flex items-center justify-center">
      <BiLoaderAlt className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" />

      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loader;
