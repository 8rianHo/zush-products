import Link from "next/link";

import { globalConstants } from "@/lib/constants";

const Header = () => {
  return (
    <header className="bg-slate-900">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <Link
          href={globalConstants.ROUTE_HOME}
          className="-m-1.5 p-1.5 text-4xl font-bold tracking-wide text-white"
        >
          ZUSH
        </Link>
      </nav>
    </header>
  );
};

export default Header;
