"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export function Locale() {
  const t = useTranslations("LocaleButton");
  const locale = useLocale();
  const router = useRouter();

  function ChangeLocale() {
    if (locale == "pt") {
      router.push("/en");
    } else {
      router.push("/pt");
    }
  }

  return (
    <button
      onClick={ChangeLocale}
      className=" inline-flex items-center justify-center px-2 font-mono font-bold text-lg tracking-wide md:text-[#7E678B] md:bg-white text-white bg-[#7E678B] rounded-lg h-[35px] shadow-xl"
    >
      <h1>{t("locale")}</h1>
    </button>
  );
}
