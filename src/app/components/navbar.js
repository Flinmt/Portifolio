"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export function Navbar() {
  const t = useTranslations("LocaleButton");

  return (
    <ol className=" flex items-center max-md:hidden">
      <li className=" drop-shadow-md text-white mr-24 cursor-pointer font-mono">
        Home
      </li>
      <li className=" drop-shadow-md text-white mr-24 cursor-pointer font-mono">
        About
      </li>
      <li className=" drop-shadow-md text-white cursor-pointer font-mono">
        Projects
      </li>
    </ol>
  );
}
