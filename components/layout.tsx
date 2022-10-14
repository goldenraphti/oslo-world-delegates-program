import Header from "./header";
import Footer from "./footer";
import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  hasHeader?: boolean;
}

export default function Layout({ children, hasHeader = true }: Props) {
  return (
    <>
      {hasHeader && <Header />}
      <main>{children}</main>
      <Footer />
    </>
  );
}
