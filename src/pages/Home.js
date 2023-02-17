import React from "react";
import { Link } from "react-router-dom";
import vedioimg from "../asstes/images/object-dection.mp4";

const Home = () => {
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
      {/* <div className="mb-16 md:mb-0 md:max-w-xl sm:mx-auto md:text-center">
        <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          The quick, brown fox jumps over a very sad and{" "}
          <span className="inline-block text-deep-purple-accent-400">
            lazy dog
          </span>
        </h2>
        <p className="mb-5 text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
        </p>
        <div className="flex items-center md:justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Get started
          </Link>
          <Link
            to="/"
            aria-label=""
            className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
          >
            Learn more
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
