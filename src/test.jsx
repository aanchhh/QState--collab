"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./components/ui/aurora.jsx";

const AuroraBackgroundDemo = () => {
  return (
    ( <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4 ">
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          <h1 className="h1 mb-6">
              Streamline your Business Processes Using &nbsp;AI&nbsp; with {` `}
              <span className="inline-block relative">
                Qstate{" "}
              </span>
            </h1>
          </div>
          <div
            className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
              Unleash the Maximum Efficiency. Upgrade your productivity
              with Qstate's custom AI Agents.
            </p>
          </div>
          <button
            className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
            Debug now
          </button>
        </motion.div>
      </AuroraBackground>)
  );
}

export default AuroraBackgroundDemo