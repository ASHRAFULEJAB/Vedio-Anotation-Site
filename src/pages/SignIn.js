import React from "react";
import { Link } from "react-router-dom";
import img from "../asstes/images/image1.jpg";
import img1 from "../asstes/images/vedioanotation1.png";
import Lottie from "lottie-react";
import signin from "../asstes/signin.json";
const SignIn = () => {
  return (
    <section class="bg-gray-900 dark:bg-white rounded-lg lg:flex">
      <div class="container flex items-center justify-center min-h-screen p-16 mx-auto ">
        <form
          style={{
            background: `url(${img})`,
          }}
          class="w-full max-w-md"
        >
          <div class="flex justify-center mx-auto mt-10">
            <img class="w-auto h-7 sm:h-8" src={img1} alt="" />
          </div>

          <div class="flex items-center justify-center mt-6">
            <Link
              to="/signin"
              class="w-1/3 pb-4  text-2xl font-bold text-center
               text-gray-700 capitalize border-b border-sky-800
                dark:border-sky-700  dark:text-white"
            >
              sign in
            </Link>

            <Link
              to="/signup"
              class="w-1/3 pb-4 text-2xl font-bold
               text-gray-800 capitalize border-b-2  dark:text-white"
            >
              sign up
            </Link>
          </div>

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
              Sign In
            </button>

            <p class="mt-8 text-xs font-light text-center text-gray-200 mb-10">
              {" "}
              Don't have an account?{" "}
              <Link
                to="/signup"
                class="font-medium text-gray-700 dark:text-gray-200 font-bold hover:underline"
              >
                Create One
              </Link>
            </p>
          </div>
        </form>
      </div>
      <div className="flex items-center mt- justify-center h-30 w-full ">
        <Lottie animationData={signin} loop={true}></Lottie>
      </div>
    </section>
  );
};

export default SignIn;
