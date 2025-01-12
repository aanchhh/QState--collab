import { useState, useEffect } from "react";
import Header from "../components/Header";
import ButtonGradient from "../assets/svg/ButtonGradient";
import Benefits from "../components/Benefits";
import Collaboration from "../components/Collaboration";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LoadingLogo from "../components/LoadingLogo";

const App = () => {
  const [showGif, setShowGif] = useState(false);
  const [showStaticLogo, setShowStaticLogo] = useState(false);
  const [fadeInPage, setFadeInPage] = useState(false);

  useEffect(() => {
    const animationPlayed = localStorage.getItem("animationPlayed");

    if (!animationPlayed) {
      setShowGif(true); // Show GIF if animation hasn't played
      // Start timers to manage transitions
      const gifTimer = setTimeout(() => {
        setShowGif(false);
        setShowStaticLogo(true);
      }, 2600);

      const fadeTimer = setTimeout(() => {
        setShowStaticLogo(false);
        setFadeInPage(true);
        localStorage.setItem("animationPlayed", "true"); // Mark animation as played
      }, 2700);

      return () => {
        clearTimeout(gifTimer);
        clearTimeout(fadeTimer);
      };
    } else {
      // Skip animation and directly show the page content
      setFadeInPage(true);
    }
  }, []);

  return (
    <>
      {showGif && <LoadingLogo isGif />}
      {showStaticLogo && <LoadingLogo isGif={false} />}
      <div
        className={`${
          fadeInPage ? "animate-fadeInPage" : "hidden"
        } min-w-[350px]`}
      >
        <Header fadeInPage={fadeInPage} />
        <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
          <Hero />
          <Benefits />

          <Collaboration />
          <Footer />
        </div>
        <ButtonGradient />
      </div>
      {/* FOR TESTING THE RELOAD ON THE ANIMATION=>REMOVE DURING PRODUCTION */}
      <button
        onClick={() => {
          localStorage.removeItem("animationPlayed");
          window.location.reload();
        }}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-md"
      >
        Reset Animation
      </button>
    </>
  );
};

export default App;
