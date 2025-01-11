import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
// import { Gradient } from "./design/Services";
import { gradient } from "../assets";

const timelineData = [
  {
    id: 1,
    title: "Step 1",
    description: "This is the description for step 1.",
    illustration: "/path/to/image1.png",
  },
  {
    id: 2,
    title: "Step 2",
    description: "This is the description for step 2.",
    illustration: "/path/to/image2.png",
  },
  {
    id: 3,
    title: "Step 3",
    description: "This is the description for step 3.",
    illustration: "/path/to/image3.png",
  },
];

export default function VerticalTimeline() {
  const [visibleItems, setVisibleItems] = useState({});
  const timelineRef = useRef([]);

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

  return (
    <div className="relative">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat "
      style={{
        backgroundImage: `url(${gradient})`,
        opacity: 0.4,
        zIndex: -1,
        transform: "rotate(-90deg)",
        width: "100%",
        height: "100%",
        filter: "blur(160px)",
      }}
    ></div>
    {/* Content */}
    <div className="relative w-full max-w-4xl mx-auto py-16">
      {/* Vertical Line */}
      <div className="absolute left-1/2 translate-x-[11px] h-full w-1 bg-gray-300"></div>
  
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
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isVisible
                ? { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 150 } }
                : { opacity: 0, scale: 0.8 }
            }
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
              className={`relative bg-white dark:bg-n-6 shadow-xl hover:shadow-fuchsia-200/10 hover:cursor-pointer left-3 rounded-lg p-6 w-[370px] h-[200px] ${
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
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {item.title}
                  </h3>
                  {/* Horizontal Line */}
                  <hr className="my-2 border-gray-300 dark:border-gray-600" />
                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300">
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
