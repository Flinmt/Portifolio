import { Connect } from "../components/connect-button";
import { Locale } from "../components/locale-button";

export default function HomePage() {
  return (
    <main className="">
      <header className="flex justify-between mt-6">
        <Locale />
        <Connect />
      </header>
    </main>
  );
}
