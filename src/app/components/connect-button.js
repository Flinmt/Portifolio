"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Envelop from "../assets/connect-button/envelope.svg";
import Linkedin from "../assets/connect-button/linkedin-logo.svg";
import Instagram from "../assets/connect-button/instagram-logo.svg";
import Twitter from "../assets/connect-button/twitter-logo.svg";
import Github from "../assets/connect-button/github-logo.svg";
import Download from "../assets/connect-button/download.svg";
import { useState, useRef } from "react";

export function Connect() {
  const t = useTranslations("ConnectButton");
  const [clipBoard, setClipBoard] = useState("flinmtdev@gmail.com");
  const emailRef = useRef(null);

  const handleEmailCopy = () => {
    const email = emailRef.current.textContent;
    navigator.clipboard.writeText(email);
    setClipBoard(t("copied"));
    emailRef.current.classList.add("copied");

    setTimeout(() => {
      setClipBoard("flinmtdev@gmail.com");
      emailRef.current.classList.remove("copied");
    }, 2000);
  };

  return (
    <div className="">
      <button
        className=" mr-5 text-lg flex text-[#7E678B] font-mono font-bold justify-center items-center"
        onClick={() => document.getElementById("contact").showModal()}
      >
        <span className=" mr-2">{t("connect")}</span>
      </button>

      <dialog id="contact" className="modal">
        <div className="modal-box bg-white">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <button
            onClick={handleEmailCopy}
            className=" bg-[#7E678B] mt-10 flex justify-center items-center h-20 shadow-lg rounded-lg w-full transform active:scale-x-75 active:scale-y-75 transition-transform flex"
          >
            <Image
              src={Envelop}
              alt="alt"
              width={30}
              height={0}
              className="mr-5"
            />
            <span
              ref={emailRef}
              className=" text-lg flex text-white font-mono font-bold"
            >
              {clipBoard}
            </span>
          </button>
          <div className="w-full flex justify-between mt-10">
            <div className=" flex">
              <Image
                src={Linkedin}
                alt="alt"
                width={30}
                height={0}
                className="mr-2"
              />
              <Image
                src={Instagram}
                alt="alt"
                width={30}
                height={0}
                className="mr-2"
              />
              <Image
                src={Twitter}
                alt="alt"
                width={30}
                height={0}
                className="mr-2"
              />
              <Image src={Github} alt="alt" width={30} height={0} />
            </div>
            <button className=" inline-flex items-center justify-center px-2e">
              <span className=" text-lg flex text-[#7E678B] font-mono font-bold mr-3">
                {t("download")}
              </span>
              <Image src={Download} alt="alt" width={30} height={0} className=" animate-bounce"/>
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
