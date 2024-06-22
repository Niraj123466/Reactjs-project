import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React Development Empowered by Passionate Developers
            </h2>
            <p className="mt-6 text-gray-600">
              React development thrives on the passion and dedication of
              developers worldwide. It is a JavaScript library created and
              maintained by Facebook and the open-source community. React allows
              developers to build powerful and interactive user interfaces
              efficiently.
            </p>
            <p className="mt-4 text-gray-600">
              React.js, developed by Facebook, revolutionizes web development
              with its component-based architecture and virtual DOM for
              optimized performance. It's highly sought after in the job market,
              with a strong demand for React developers due to its popularity
              and versatility in building interactive user interfaces. Salaries
              for React developers are competitive, reflecting the high demand
              and specialized skill set required. The ecosystem around React is
              vibrant, with a wealth of tools and libraries that enhance its
              capabilities, making it a preferred choice for scalable and modern
              web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
