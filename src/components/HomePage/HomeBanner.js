import React from "react";
import { Link } from "react-router-dom";
import vedioimg from "../../asstes/vedio/object-dection.mp4";


const HomeBanner = () => {
  return (
    <section class=" bg-gray-900 dark:bg-white">
      <div class="container px-6 py-10 mx-auto">
        <iframe
          class="min-w-full mt-3 h-64 md:h-[450px] rounded-xl overflow-hidden"
          width="100vw"
          height="315"
          src="https://www.youtube.com/embed/vbydG78Al8s"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        {/* <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2">
          <div class="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700">
            <div class="md:flex md:items-start md:-mx-4">
              <span class="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-gray-800 dark:bg-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </span>

              <div class="mt-4 md:mx-4 md:mt-0">
                <h1 class="text-xl font-medium text-gray-700 capitalize dark:text-gray-800">
                  BOUNDING BOX ANNOTATION
                </h1>

                <p class="mt-3 text-gray-500 dark:text-gray-600">
                  Marker Key.IO advanced video annotation tools and our
                  professional in-house annotation team ensure the best results
                  for your computer vision training data needs. Annotating
                  videos while tracking objects through multiple frames. Each
                  object on the video will be recognized and tracked even
                  through different cameras or separate video segments.
                </p>
              </div>
            </div>
          </div>

          <div class="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700">
            <div class="md:flex md:items-start md:-mx-4">
              <span class="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-gray-800 dark:bg-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </span>

              <div class="mt-4 md:mx-4 md:mt-0">
                <h1 class="text-xl font-medium text-gray-700 capitalize dark:text-gray-800">
                  ROTATED BOUNDING BOXES
                </h1>

                <p class="mt-3 text-gray-500 dark:text-gray-600">
                  Marker Key.IO advanced video annotation tools and our
                  professional in-house annotation team ensure the best results
                  for your computer vision training data needs. Annotating
                  videos while tracking objects through multiple frames. Each
                  object on the video will be recognized and tracked even
                  through different cameras or separate video segments
                </p>
              </div>
            </div>
          </div>

          <div class="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700">
            <div class="md:flex md:items-start md:-mx-4">
              <span class="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-gray-800 dark:bg-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                  />
                </svg>
              </span>

              <div class="mt-4 md:mx-4 md:mt-0">
                <h1 class="text-xl font-medium text-gray-700 capitalize dark:text-gray-800">
                  SKELETAL ANNOTATION
                </h1>

                <p class="mt-3 text-gray-500 dark:text-gray-600">
                  Marker Key.IO advanced video annotation tools and our
                  professional in-house annotation team ensure the best results
                  for your computer vision training data needs. Annotating
                  videos while tracking objects through multiple frames. Each
                  object on the video will be recognized and tracked even
                  through different cameras or separate video segments
                </p>
              </div>
            </div>
          </div>

          <div class="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700">
            <div class="md:flex md:items-start md:-mx-4">
              <span class="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-gray-800 dark:bg-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </span>

              <div class="mt-4 md:mx-4 md:mt-0">
                <h1 class="text-xl font-medium text-gray-700 capitalize dark:text-gray-800">
                  CUSTOM ANNOTATION
                </h1>

                <p class="mt-3 text-gray-500 dark:text-gray-600">
                  Marker Key.IO advanced video annotation tools and our
                  professional in-house annotation team ensure the best results
                  for your computer vision training data needs. Annotating
                  videos while tracking objects through multiple frames. Each
                  object on the video will be recognized and tracked even
                  through different cameras or separate video segments
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
    // <div className="flex">
    //   <div className="px-4 py-16 mx-auto sm:max-w-xl md:w-full lg:w-full md:px-24 lg:px-16 lg:py-6">
    //     <div className="relative z-[-10] mb-6 sm:mx-auto md:mb-10 md:w-full lg:w-full">
    //       <video
    //         className="object-cover w-full h-56 rounded shadow-lg md:h-64 lg:h-80 w-100"
    //         src={vedioimg}
    //         autoplay="{true}"
    //         loop
    //         muted
    //       />
    //       <Link
    //         to="/"
    //         aria-label="Play Video"
    //         className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
    //       ></Link>
    //     </div>
    //   </div>
    //   <div className="flex items-center mt- justify-center h-30 w-full ">
    //     <Lottie animationData={vedio} loop={true}></Lottie>
    //   </div>
    // </div>
  );
};

export default HomeBanner;
