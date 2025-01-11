import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { gradient } from "../assets";
import { signupIll, emailIll, uploadIll, agentIll, networkIll } from "../assets";
import { BackgroundGradientAnimation } from "./ui/backgroundAnimation";

const timelineData = [
  {
    id: 1,
    title: "Your Journey Begins Here",
    description:
      "Start by registering with us and signing-up, where a quick and secure login process grants access to our cutting-edge email automation system.",
    illustration: signupIll,
  },
  {
    id: 2,
    title: "Empowering Us with Your Insights",
    description:
      "Upload your company leads in an Excel file, along with your company name and personal details. This forms the foundation of our tailored email solutions.",
    illustration: uploadIll,
  },
  {
    id: 3,
    title: "AI-Powered Understanding",
    description:
      "Our advanced AI analyzes your company’s profile, the nature of your leads, and the context of your provided details, ensuring a personalized touch.",
    illustration: agentIll,
  },
  {
    id: 4,
    title: "Emails That Speak Volumes",
    description:
      "Our system generates professional, engaging, and results-driven email prompts tailored to resonate with your audience and elevate your brand.",
    illustration: emailIll,
  },
  {
    id: 5,
    title: "Delivering Connections That Matter",
    description:
      "We send your curated emails directly to your leads, sparking meaningful engagement and driving your business forward.",
    illustration: networkIll,
  },
];

export default function VerticalTimeline() {
  const [visibleItems, setVisibleItems] = useState({});
  const timelineRef = useRef([]);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isVisible = entry.isIntersecting;
          const id = entry.target.dataset.id;

          setVisibleItems((prev) => ({
            ...prev,
            [id]: isVisible,
          }));
        });
      },
      { threshold: 0.5 }
    );

    timelineRef.current.forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${gradient})`,
          opacity: 0.4,
          zIndex: -1,
          transform: "rotate(-90deg)",
          width: "100%",
          height: "100%",
          filter: "blur(160px)",
        }}
      >
      </div>

      {/* Content */}
      <div className="relative w-full max-w-4xl mx-auto py-16 -translate-y-10">
        {/* Glowing Vertical Line */}
        <motion.div
          className="absolute left-1/2 translate-x-[11px] h-full w-1 rounded-lg"
          style={{
            background: "linear-gradient(blue, pink, teal)",
            boxShadow: "0px 0px 10px 5px rgba(139, 92, 246, 0.5)",
          }}
          animate={{
            height: "100%",
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        ></motion.div>

        {/* Timeline Items */}
        {timelineData.map((item, index) => {
          const isVisible = visibleItems[item.id];
          return (
            <motion.div
              key={item.id}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
              data-id={item.id}
              ref={(el) => (timelineRef.current[index] = el)}
              initial={{ opacity: 0, translateY: 100 }}
              animate={
                isVisible
                  ? { opacity: 1, translateY: 0 }
                  : { opacity: 0, translateY: 100 }
              }
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 150,
              }}
            >
              {/* Node */}
              <motion.div
                className="absolute left-1/2 w-7 h-7 rounded-full bg-white shadow-md"
                animate={
                  isVisible
                    ? { scale: [1, 1.4, 1] }
                    : {}
                }
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {/* Outer Wobble Circle */}
                <motion.div
                  className="absolute inset-0 w-12 h-12 rounded-full bg-white opacity-40 -translate-x-[11px]"
                  animate={
                    isVisible
                      ? { scale: [0, 1.2, 0] }
                      : { scale: 0 }
                  }
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    delay: 0.2,
                  }}
                ></motion.div>
              </motion.div>

              {/* Content Box */}
              <motion.div
                className={`relative border bg-n-10 backdrop:blur-lg border-n-3 shadow-xl shadow-fuchsia-200/10 hover:cursor-pointer left-3 rounded-lg p-6 w-[370px] h-auto ${
                  index % 2 === 0 ? "ml-8" : "mr-8"
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isVisible
                    ? { opacity: 1, y: 0, transition: { delay: 0.3 } }
                    : { opacity: 0, y: 50 }
                }
              >
                <div className="flex items-start">
                  {/* Illustration */}
                  <img
                    src={item.illustration}
                    alt={item.title}
                    className="w-20 h-20 object-contain"
                  />
                  <div className="ml-4">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-800 dark:text-n-1">
                      {item.title}
                    </h3>
                    {/* Horizontal Line */}
                    <hr className="my-2 border-gray-300 dark:border-gray-600" />
                    {/* Description */}
                    <p className="text-gray-600 dark:text-neutral-100">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
