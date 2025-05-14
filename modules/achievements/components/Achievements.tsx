"use client";

import { useTranslations } from "next-intl";

const Achievements = () => {
  const t = useTranslations("AchievementsPage");

  return (
    <section className="space-y-6 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="rounded-xl shadow p-4 border dark:border-[#646463] dark:bg-[#16191c] bg-white transform transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg ">
          <img src="/images/sertifikat/sertif1.png" alt="Certificate 1" className="rounded" />
          <div className="mt-8 dark:text-white dark:bg-[#1a1919] w-full rounded-lg p-4">
            <h3 className="font-semibold ">Best Team FI-CHALLENGE</h3>
            <p className="text-sm text-gray-600 font-semibold my-1 ">FIPEX</p>
            <p className="text-xs text-gray-400 ">Issued on 9-11 Januari</p>
          </div>
        </div>
        
        <div className="rounded-xl shadow p-4 border dark:border-[#646463] dark:bg-[#16191c] bg-white transform transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg ">
          <img src="/images/sertifikat/sertif3.png" alt="Certificate 1" className="rounded" />
          <div className="mt-8 dark:text-white dark:bg-[#191717] w-full rounded-lg p-4">
            <h3 className="font-semibold ">Web Design Competition</h3>
            <p className="text-sm text-gray-600 font-semibold my-1">POLITEKNIK NEGERI BALI</p>
            <p className="text-xs text-gray-400 ">Issued on 21-22 September</p>
          </div>
        </div>
        <div className="rounded-xl shadow p-4 border dark:border-[#646463] dark:bg-[#16191c] bg-white transform transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg ">
          <img src="/images/sertifikat/sertif4.png" alt="Certificate 1" className="rounded" />
          <div className="mt-8 dark:text-white dark:bg-[#191717] w-full rounded-lg p-4">
            <h3 className="font-semibold ">Staff Humas Kongres Informatika 2022</h3>
            <p className="text-sm text-gray-600 font-semibold my-1">HMIF</p>
            <p className="text-xs text-gray-400 ">Issued on 01-05 Januari</p>
          </div>
        </div>
        <div className="rounded-xl shadow p-4 border dark:border-[#646463] dark:bg-[#16191c] bg-white transform transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg ">
          <img src="/images/sertifikat/sertif2.png" alt="Certificate 1" className="rounded" />
          <div className="mt-8 dark:text-white dark:bg-[#191717] w-full rounded-lg p-4">
            <h3 className="font-semibold ">Webinar Design Thinking</h3>
            <p className="text-sm text-gray-600 font-semibold my-1">POLITEKNIK NEGERI SURABAYA</p>
            <p className="text-xs text-gray-400 ">Issued on 25 Desember</p>
          </div>
        </div>
        <div className="rounded-xl shadow p-4 border dark:border-[#646463] dark:bg-[#16191c] bg-white transform transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg ">
          <img src="/images/ormawa/ketuaPanitia.png" alt="Certificate 1" className="rounded" />
          <div className="mt-8 dark:text-white dark:bg-[#191717] w-full rounded-lg p-4">
            <h3 className="font-semibold ">Informatic Competition</h3>
            <p className="text-sm text-gray-600 font-semibold my-1">HMIF</p>
            <p className="text-xs text-gray-400 ">Issued on 12-15 Oktober</p>
          </div>
        </div>
        <div className="rounded-xl shadow p-4 border dark:border-[#646463] dark:bg-[#16191c] bg-white transform transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg ">
          <img src="/images/sertifikat/sertif5.png" alt="Certificate 1" className="rounded" />
          <div className="mt-8 dark:text-white dark:bg-[#191717] w-full rounded-lg p-4">
            <h3 className="font-semibold ">KPUM INFORMATIKA</h3>
            <p className="text-sm text-gray-600 font-semibold my-1">HMIF</p>
            <p className="text-xs text-gray-400 ">Issued on 11-17 Januari</p>
          </div>
        </div>
        <div className="rounded-xl shadow p-4 border dark:border-[#646463] dark:bg-[#16191c] bg-white transform transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg ">
          <img src="/images/sertifikat/sertif6.png" alt="Certificate 1" className="rounded" />
          <div className="mt-8 dark:text-white dark:bg-[#191717] w-full rounded-lg p-4">
            <h3 className="font-semibold ">LEADERSHIP EDUCATION</h3>
            <p className="text-sm text-gray-600 font-semibold my-1">BEM FTI UAD</p>
            <p className="text-xs text-gray-400 ">Issued on 20 Oktober</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
