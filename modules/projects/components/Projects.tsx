"use client";

import useSWR from "swr";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";



const Projects = () => {
  const t = useTranslations("ProjectsPage");

  return (
  
    <section className="space-y-6 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="rounded-xl shadow p-4 border dark:border-[#646463] dark:bg-[#16191c] bg-white transform transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg ">
          <img src="/images/projects/sepatu.png" alt="Certificate 1" className="rounded" />
          <div className="mt-8 dark:text-white dark:bg-[#1a1919] w-full rounded-lg p-4">
            <h3 className="font-semibold ">Slicing UI Slider Sepatu</h3>
            <p className="text-sm text-gray-600 font-semibold my-1 "> HTML, CSS (Tailwind), dan JavaScript.</p>
          </div>
        </div>
        
        <div className="rounded-xl shadow p-4 border dark:border-[#646463] dark:bg-[#16191c] bg-white transform transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg ">
          <img src="/images/projects/projek1.png" alt="Certificate 1" className="rounded" />
          <div className="mt-8 dark:text-white dark:bg-[#191717] w-full rounded-lg p-4">
            <h3 className="font-semibold ">Website E-Commerce Toko Roti</h3>
            <p className="text-sm text-gray-600 font-semibold my-1">HTML, CSS (Tailwind), Javascript, dan PHP.</p>
          </div>
        </div>

        <div className="rounded-xl shadow p-4 border dark:border-[#646463] dark:bg-[#16191c] bg-white transform transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg ">
          <img src="/images/projects/projek2.png" alt="Certificate 1" className="rounded" />
          <div className="mt-8 dark:text-white dark:bg-[#191717] w-full rounded-lg p-4">
            <h3 className="font-semibold ">Slicing UI Web Coffe</h3>
            <p className="text-sm text-gray-600 font-semibold my-1">HTML, CSS (Tailwind), dan JavaScript.</p>
          </div>
        </div>

        <div className="rounded-xl shadow p-4 border dark:border-[#646463] dark:bg-[#16191c] bg-white transform transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg ">
          <img src="/images/projects/projek3.png" alt="Certificate 1" className="rounded" />
          <div className="mt-8 dark:text-white dark:bg-[#191717] w-full rounded-lg p-4">
            <h3 className="font-semibold ">Slicing UI Web Coffe</h3>
            <p className="text-sm text-gray-600 font-semibold my-1">HTML, CSS (Tailwind), dan JavaScript.</p>
          </div>
        </div>

        <div className="rounded-xl shadow p-4 border dark:border-[#646463] dark:bg-[#16191c] bg-white transform transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg ">
          <img src="/images/projects/projek4.png" alt="Certificate 1" className="rounded" />
          <div className="mt-8 dark:text-white dark:bg-[#191717] w-full rounded-lg p-4">
            <h3 className="font-semibold ">Website Travel</h3>
            <p className="text-sm text-gray-600 font-semibold my-1"> HTML, CSS (Tailwind), JavaScript.</p>
          </div>
        </div>

        <div className="rounded-xl shadow p-4 border dark:border-[#646463] dark:bg-[#16191c] bg-white transform transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg ">
          <img src="/images/projects/projek5.png" alt="Certificate 1" className="rounded" />
          <div className="mt-8 dark:text-white dark:bg-[#191717] w-full rounded-lg p-4">
            <h3 className="font-semibold ">Website Perpustakaan</h3>
            <p className="text-sm text-gray-600 font-semibold my-1">HTML, CSS (Tailwind), React, JavaScript.</p>
          </div>
        </div>

        <div className="rounded-xl shadow p-4 border dark:border-[#646463] dark:bg-[#16191c] bg-white transform transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg ">
          <img src="/images/projects/projek6.png" alt="Certificate 1" className="rounded" />
          <div className="mt-8 dark:text-white dark:bg-[#191717] w-full rounded-lg p-4">
            <h3 className="font-semibold ">Website Budaya Jogja</h3>
            <p className="text-sm text-gray-600 font-semibold my-1"> HTML, CSS (Tailwind), JavaScript, API.</p>
          </div>
        </div>

        <div className="rounded-xl shadow p-4 border dark:border-[#646463] dark:bg-[#16191c] bg-white transform transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg ">
          <img src="/images/projects/projek7.png" alt="Certificate 1" className="rounded" />
          <div className="mt-8 dark:text-white dark:bg-[#191717] w-full rounded-lg p-4">
            <h3 className="font-semibold ">Wesbite Database Ormawa</h3>
            <p className="text-sm text-gray-600 font-semibold my-1"> HTML, CSS (Tailwind), JavaScript, AOS.</p>
          </div>
        </div>

        <div className="rounded-xl shadow p-4 border dark:border-[#646463] dark:bg-[#16191c] bg-white transform transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg ">
          <img src="/images/projects/projek8.png" alt="Certificate 1" className="rounded" />
          <div className="mt-8 dark:text-white dark:bg-[#191717] w-full rounded-lg p-4">
            <h3 className="font-semibold ">Website Jelajah Jogja</h3>
            <p className="text-sm text-gray-600 font-semibold my-1"> HTML, CSS (Tailwind), JavaScript, AOS.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
