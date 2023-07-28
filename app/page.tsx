import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
export default function Home() {
  return (
    <div className="main text-white">
      <Navbar />
      <div className="flex">
        <div className=" md:w-60 py-1 sm:px-6 border-r-2 border-solid border-gray-800">
          <Menu />
        </div>
        <div className="w-full px-6 py-1">
          <Content />
        </div>
      </div>
      <Footer />
    </div>
  );
}
