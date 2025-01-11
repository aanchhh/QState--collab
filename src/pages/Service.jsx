import ButtonGradient from "../assets/svg/ButtonGradient";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Services from "../components/Services";
import { useEffect } from "react";

const Service = () => {
  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to top on mount
  }, []);
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Services />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  )
}

export default Service
