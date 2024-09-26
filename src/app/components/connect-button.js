import { useTranslations } from "next-intl";
import Image from "next/image";
import ArrowRight from "../assets/connect-button/arrow-right.svg";

export function Connect() {
  const t = useTranslations("ConnectButton");

  return (
    <button className=" mr-5 text-lg flex text-white font-mono font-bold justify-center items-center">
      <span className=" mr-2">{t("connect")}</span>
      <Image src={ArrowRight} alt="alt" width={22} height={0} />
    </button>
  );
}
