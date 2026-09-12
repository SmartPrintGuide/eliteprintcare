"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

export default function AppShell({ children }) {
  const pathname = usePathname() || "";

  const isAdminRoute = pathname.startsWith("/admin");

  const hideHeader =
    pathname === "/smart-printer-setup" ||
    pathname.startsWith("/smart-printer-setup/");


  const findModelRoute = pathname === "/find-model" || pathname.startsWith("/find-model/");

  

  return (
    <>
      {!isAdminRoute && !hideHeader && !findModelRoute && <Header />}

      {!isAdminRoute && <ScrollToTop />}

      <main className="flex-grow">{children}</main>

      {!isAdminRoute  && !findModelRoute && <Footer />}
    </>
  );
}