import React from "react";
import { Link } from "react-router-dom";
import vedioimg from "../../asstes/images/object-dection.mp4";

const HomeBanner = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:w-full lg:w-full md:px-24 lg:px-16 lg:py-6">
      <div className="relative z-[-10] mb-6 sm:mx-auto md:mb-10 md:w-full lg:w-full">
        <video
          className="object-cover w-full h-56 rounded shadow-lg md:h-64 lg:h-80 w-100"
          src={vedioimg}
          autoplay="{true}"
          loop
          muted
        />
        <Link
          to="/"
          aria-label="Play Video"
          className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
        ></Link>
      </div>
    </div>
  );
};

export default HomeBanner;
