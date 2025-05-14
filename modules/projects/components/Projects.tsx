"use client";

import useSWR from "swr";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";



const Projects = () => {
  const t = useTranslations("ProjectsPage");

  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 p-4 bg-[#121212]">
      <div className="bg-[#1e1e1e] rounded-xl shadow-md overflow-hidden transform transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg">
        <img
          src="/images/projects/sepatu.png"
          alt="Slider Sepatu"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white">Slicing UI Slider Sepatu</h3>
          <p className="text-sm text-gray-300 mt-2">
            HTML, CSS (Tailwind), dan JavaScript.
          </p>
        </div>
      </div>

      <div className="bg-[#1e1e1e] rounded-xl shadow-md overflow-hidden transform transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg">
        <img
          src="/images/projects/projek1.png"
          alt="Website Toko Roti"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white">Website E-Commerce Toko Roti</h3>
          <p className="text-sm text-gray-300 mt-2">
            HTML, CSS (Tailwind), Javascript, dan PHP.
          </p>
        </div>
      </div>

      <div className="bg-[#1e1e1e] rounded-xl shadow-md overflow-hidden transform transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg">
        <img
          src="/images/projects/projek2.png"
          alt="Project Thumbnail"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white">Slicing UI Web Coffe</h3>
          <p className="text-sm text-gray-300 mt-2">
            HTML, CSS (Tailwind), dan JavaScript.
          </p>
        </div>
      </div>
      <div className="bg-[#1e1e1e] rounded-xl shadow-md overflow-hidden transform transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg">
        <img
          src="/images/projects/projek3.png"
          alt="Project Thumbnail"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white">Slicing UI Web Coffe</h3>
          <p className="text-sm text-gray-300 mt-2">
            HTML, CSS (Tailwind), dan JavaScript.
          </p>
        </div>
      </div>
      <div className="bg-[#1e1e1e] rounded-xl shadow-md overflow-hidden transform transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg">
        <img
          src="/images/projects/projek4.png"
          alt="Project Thumbnail"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white">Website Travel</h3>
          <p className="text-sm text-gray-300 mt-2">
            HTML, CSS (Tailwind), JavaScript.
          </p>
        </div>
      </div>
      <div className="bg-[#1e1e1e] rounded-xl shadow-md overflow-hidden transform transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg">
        <img
          src="/images/projects/projek5.png"
          alt="Project Thumbnail"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white">Website Perpustakaan</h3>
          <p className="text-sm text-gray-300 mt-2">
            HTML, CSS (Tailwind), React, JavaScript.
          </p>
        </div>
      </div>
      <div className="bg-[#1e1e1e] rounded-xl shadow-md overflow-hidden transform transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg">
        <img
          src="/images/projects/projek6.png"
          alt="Project Thumbnail"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white">Wesbite Database Ormawa</h3>
          <p className="text-sm text-gray-300 mt-2">
            HTML, CSS (Tailwind), JavaScript, API.
          </p>
        </div>
      </div>
      <div className="bg-[#1e1e1e] rounded-xl shadow-md overflow-hidden transform transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg">
        <img
          src="/images/projects/projek7.png"
          alt="Project Thumbnail"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white">Website Budaya Jogja</h3>
          <p className="text-sm text-gray-300 mt-2">
            HTML, CSS (Tailwind), JavaScript, AOS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
