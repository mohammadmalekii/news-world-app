import Link from "next/link";
import DarkModeButton from "./DarkModeButton";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";
export default function Header() {
  return (
    <header>
      <div className="flex flex-col gap-10 justify-between items-center w-full mx-auto md:flex-row p-10">
        <button className="hidden md:inline bg-slate-900 text-white w-fit px-4 py-2 rounded-full dark:bg-slate-800">
          Subscribe
        </button>
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-4xl text-center">
            The{" "}
            <span className="underline decoration-6 decoration-orange-400">
              World
            </span>{" "}
            News
          </h1>
        </Link>
        <div className="flex items-center justify-end space-x-2">
          <DarkModeButton />
        </div>
      </div>
      <NavLinks />
      <SearchBox />
    </header>
  );
}
