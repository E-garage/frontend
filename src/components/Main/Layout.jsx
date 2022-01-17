import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div className="bg-gray-100 text-black h-full flex">
    <Navbar />
    <div className="w-full py-2 px-2 lg:px-8 flex flex-col justify-between min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  </div>
);

export default Layout;
