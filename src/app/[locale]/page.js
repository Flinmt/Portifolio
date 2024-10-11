import { Connect } from "../components/connect-button";
import { Locale } from "../components/locale-button";
import { Navbar } from "../components/navbar"

export default function HomePage() {
  return (
    <main className=" flex justify-center items-center">
      <div className=" w-11/12 max-md:w-full md:mt-14 md:p-10 p-6 md:rounded-xl md:bg-[#00000060]">
        <header className=" flex justify-between">
          <Locale />
          <Navbar />
          <Connect />
        </header>
        <div className=" md:mt-16 md:h-[22rem]"></div>
      </div>
    </main>
  );
}
