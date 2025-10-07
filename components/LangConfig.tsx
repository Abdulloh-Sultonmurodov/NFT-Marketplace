"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { getCookie } from "cookies-next";
import { MouseEvent, useEffect, useState } from "react";

const LangConfig = () => {
  const router = useRouter();
  const b = getCookie("NEXT_LOCALE");
  const langList = ["EN", "RU", "UZ"];
  const pathname = usePathname();
  const [lang, setLang] = useState("EN");

  function handleLangChange(e: MouseEvent<HTMLParagraphElement>) {
    setLang((e.target as HTMLParagraphElement).textContent);
    router.push(pathname, {
      locale: (e.target as HTMLParagraphElement).textContent,
    });
  }

  useEffect(() => {
    const b = getCookie("NEXT_LOCALE")?.toString().toUpperCase();
    if (b && langList.includes(b)) {
      setLang(b);
    }
  }, []);

  return (
    <div className="text-white hidden lg:block relative cursor-pointer duration-300 lang-wrapper">
      {lang}
      <div className="absolute lang-inner duration-300 flex flex-col bg-[#A259FF] right-[-10px] top-[20px] h-0 overflow-hidden rounded-md ">
        {langList
          .filter((item) => item !== lang)
          .map((item, index) => (
            <p
              key={index}
              onClick={handleLangChange}
              className="inline-block p-2 hover:bg-white hover:text-black duration-300"
            >
              {item}
            </p>
          ))}
      </div>
    </div>
  );
};

export default LangConfig;
