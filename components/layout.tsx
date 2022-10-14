import Header from "./header";
import Footer from "./footer";

export default function Layout({ children, hasHeader = true }) {
  return (
    <>
      {hasHeader && <Header />}
      <main>{children}</main>
      <Footer />
    </>
  );
}
