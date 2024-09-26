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
      className=" ml-5 inline-flex items-center justify-center px-2 font-mono font-bold text-lg tracking-wide text-[#7E678B] bg-white rounded-lg h-[35px] shadow-xl"
    >
      <h1>{t("locale")}</h1>
    </button>
  );
}
