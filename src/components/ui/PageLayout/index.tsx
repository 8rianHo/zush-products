import { FC, Fragment, PropsWithChildren } from "react";

import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";

const PageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main className="mx-auto max-w-7xl p-3 sm:p-6 lg:p-8">{children}</main>
      <Footer />
    </Fragment>
  );
};

export default PageLayout;
