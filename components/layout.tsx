import Header from "./header";
import Footer from "./footer";
import React, { ReactNode } from "react";
import styles from "./Layout.module.css";

interface Props {
  children?: ReactNode;
  hasHeader?: boolean;
}

export default function Layout({ children, hasHeader = true }: Props) {
  return (
    <div className={styles.layoutContainer}>
      {hasHeader && <Header />}
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
