import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div >
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
          <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
            <span className="inline-block mb-1 sm:mb-4">
              PIXEL PERFECT VIDEO AND
              <br className="hidden md:block" />
              IMAGE ANNOTATION SERVICES
            </span>
            <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
          </h2>
          <p className="text-gray-700 lg:text-sm lg:max-w-md">
            We are a leading annotation service provider thanks to our
            proprietary annotation platform and our professional in-house
            annotation team.
          </p>
        </div>
        <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
          <Link to="/services" aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  VIDEO ANNOTATION
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                  We specialize in annotating videos and creating consistent
                  high-quality data for your machine learning models. Our
                  platform supports complex tasks such as object tracking on
                  multiple videos and attribute hierarchy. We process videos of
                  any size by using bounding boxes, points, lines, polygons, and
                  multi-segment lines to markup video frames.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/services" aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  IMAGE ANNOTATION
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                  We create superior quality data that is backed by excellent
                  customer service. We work with you to find the best strategy
                  for your project. By combining advanced tools with in-house
                  professional annotators, we guarantee incredible results.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/services" aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 
              bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  DATA COLLECTION
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                  You no longer need to crawl the web, manage a crowd of
                  workers, or contact individual data vendors yourself. We
                  collect the data for you. If the data doesn't exist, we will
                  create it in our production studio.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/services" aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  DATA CREATION
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                  Creating image and video data based on your specifications.
                  Bespoke dataset creation empowers AI developers by allowing
                  them to specify and access image and video data that fits the
                  particular needs of their models.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="text-center">
          <Link
            to="/free-demo"
            aria-label=""
            className="inline-flex items-center justify-center  
          h-12 px-6 font-medium tracking-wide text-white transition 
duration-200 rounded shadow-md bg-sky-500 hover:bg-sky-600 focus:shadow-outline focus:outline-none"
          >
            Get In Touch
            <svg
              className="inline-block w-3 ml-2"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
