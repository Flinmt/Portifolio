"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import ArrowRight from "../assets/connect-button/arrow-right.svg";
import Sent from "../assets/connect-button/sent.svg";
import Linkedin from "../assets/connect-button/linkedin.svg"
import Instagram from "../assets/connect-button/instagram.svg"
import Twitter from "../assets/connect-button/twitter.svg"
import Github from "../assets/connect-button/github.svg"



export function Connect() {
  const t = useTranslations("ConnectButton");

  return (
    <div className="">
      <button
        className=" mr-5 text-lg flex text-white font-mono font-bold justify-center items-center"
        onClick={() => document.getElementById("contact").showModal()}
      >
        <span className=" mr-2">{t("connect")}</span>
        <Image src={ArrowRight} alt="alt" width={22} height={0} />
      </button>

      <dialog id="contact" className="modal">
        <div className="modal-box bg-white">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <form className=" " action="" method="">
            <div className=" flex mt-6">
              <input
                type="text"
                placeholder={t("name")}
                className="input input-bordered w-full max-w-xs mr-3"
              />
              <input
                type="text"
                placeholder={t("subject")}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <textarea
              className="textarea textarea-bordered w-full mt-3"
              placeholder={t("message")}
            ></textarea>
            <div className="w-full flex justify-between mt-8">
              <div className=" flex">
                <Image src={Linkedin} alt="alt" width={35} height={0} className="mr-5" />
                <Image src={Instagram} alt="alt" width={35} height={0} className="mr-5"/>
                <Image src={Twitter} alt="alt" width={35} height={0} className="mr-5"/>
                <Image src={Github} alt="alt" width={35} height={0}/>
              </div>
              <button className=" inline-flex items-center justify-center px-2e">
                <Image src={Sent} alt="alt" width={35} height={0} />
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}
