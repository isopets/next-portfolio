import Header from "./header";
import Footer from "./footer";

const Layout = chi => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
