import Footer from "./Footer";
import Header from "./Header";

export const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
