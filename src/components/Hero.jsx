import Section from "./Section";
import { BottomLine } from "./design/Hero";
import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora.jsx";
import { Cover } from "./ui/cover.jsx";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const Hero = () => {
  return (
    <Section
      className="pt-[10rem] -mt-[10.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
            <div>
              <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6  bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                <Cover>Streamline</Cover> your Business Processes Using
                &nbsp;AI&nbsp; with {` `}{" "}
                <span className="inline-block relative bg-gradient-to-r text-white bg-clip-text text-transparent">
                  Qstate{" "}
                </span>
              </h1>
            </div>
          </div>
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
              Unleash the Maximum Efficiency. Upgrade your productivity with
              Qstate&apos;s custom AI Agents.
            </p>
          </div>
          <a href="#features">
            <HoverBorderGradient className="flex items-center space-x-2">
              <span>Explore</span>
            </HoverBorderGradient>
          </a>
        </motion.div>
      </AuroraBackground>
      <BottomLine />
    </Section>
  );
};

export default Hero;
