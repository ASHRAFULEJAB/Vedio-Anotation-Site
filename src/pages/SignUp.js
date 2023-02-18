import React from "react";
import { Link } from "react-router-dom";
import img from "../asstes/images/image1.jpg";
import img1 from "../asstes/images/vedioanotation1.png";
import Lottie from "lottie-react";
import signup from "../asstes/signup.json";

const SignUp = () => {
  return (
    <div>
      <section class="bg-gray-900 dark:bg-white lg:flex">
        <div class="container flex items-center justify-center min-h-screen px-6 mx-auto">
          <form
            style={{
              background: `url(${img})`,
            }}
            class="w-full max-w-md"
          >
            <div class="flex justify-center mx-auto mt-3">
              <img class="w-auto h-7 sm:h-8" src={img1} alt="" />
            </div>

            <div class="flex items-center justify-center mt-6">
              <Link
                to="/signin"
                class=" w-1/3 pb-4 text-2xl font-bold
               text-gray-800 capitalize border-b-2  dark:text-white"
              >
                sign in
              </Link>

              <Link
                to="/signup"
                class="w-1/3 pb-4  text-2xl font-bold text-center
                 text-gray-700 capitalize border-b border-blue-500
                  dark:border-sky-700  dark:text-white"
              >
                sign up
              </Link>
            </div>

            <div class="relative flex items-center mt-8 mx-6">
              <span class="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>

              <input
                type="text"
                class="block w-full py-3
                 text-gray-700 bg-white border rounded-lg px-11
                  dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600
                   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 
                   focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Username"
              />
            </div>

            <label
              for="dropzone-file"
              class="flex items-center  px-3 py-3  mt-6 text-center mx-6 
            bg-white border-2 border-dashed rounded-lg cursor-pointer 
            dark:border-gray-600 dark:bg-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>

              <h2 class="mx-3 text-gray-400">Profile Photo</h2>

              <input id="dropzone-file" type="file" class="hidden" />
            </label>

            <div class="relative flex items-center mt-6 mx-6">
              <span class="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>

              <input
                type="email"
                class="block w-full py-3 text-gray-700 
                bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300
                 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300
                  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Email address"
              />
            </div>

            <div class="relative flex items-center mt-4 mx-6">
              <span class="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>

              <input
                type="password"
                class="block w-full px-10 py-3 
                text-gray-700 bg-white border rounded-lg dark:bg-gray-900
                 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400
                  dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none
                   focus:ring focus:ring-opacity-40"
                placeholder="Password"
              />
            </div>

            <div class="relative flex items-center mt-4 mx-6">
              <span class="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>

              <input
                type="password"
                class="block w-full px-10 py-3 text-gray-700
                 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300
                  dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300
                   focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Confirm Password"
              />
            </div>

            <div class="mt-6 mx-6">
              <button
                class="w-full px-6 py-3 text-sm font-medium tracking-wide
             text-white capitalize transition-colors duration-300 transform 
             bg-sky-500 rounded-lg hover:bg-sky-600 focus:outline-none focus:ring
              focus:ring-blue-300 focus:ring-opacity-50"
              >
                Sign Up
              </button>

              <p class="mt-3 text-xs font-light text-center text-gray-200 mb-3">
                {" "}
                Already have an account?{" "}
                <Link
                  to="/signin"
                  class="font-medium text-gray-700 dark:text-gray-200 font-bold hover:underline"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
        <div className="flex items-center mt- justify-center h-26 w-full ">
          <Lottie animationData={signup} loop={true}></Lottie>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
