import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <Component {...pageProps} />
      <a
        href="#learn"
        className="fixed p-0.5 sm:bottom-10 sm:right-10 sm:inline-flex items-center justify-center font-bold hidden sm:show overflow-hidden group rounded-[50px] mr-2"
      >
        <span className="w-full h-full bg-gradient-to-bl from-[#ff6633] to-[#3f007c] group-hover:from-[#3f007c]group-hover:to-[#ff6633] absolute"></span>
        <span className="relative px-6 py-3 transition-all ease-out bg-white rounded-[50px] group-hover:bg-opacity-0 duration-200">
          <p className="relative text-sm md:text-lg text-gray-700 group-hover:text-white">
            Free Consultation
          </p>
        </span>
      </a>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default MyApp;
