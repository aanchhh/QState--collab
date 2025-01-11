import React from "react";
import { BentoGrid, BentoGridItem } from "./BentoGrid";
import { ai, BentoAnimation, BentoAnimation2, collabWork, qstate } from "../assets";
import {icons_bento} from "../assets"; // Assuming images are imported from this folder
import { pair_up, bar_up, lightning_bolt, brain } from "../assets";
import {icons_2} from "../assets";

export default function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-6xl mx-auto p-6 rounded-3xl border border-n-3 backdrop-blur-xl bg-white/50 dark:bg-black/30">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl} // Pass the image URL to BentoGridItem
          className={`${i === 3 || i === 6 ? "md:col-span-2" : ""}`} // Adjust span if needed
        />
      ))}
    </BentoGrid>
  );
}

// Updated items array with image URLs
const items = [
  {
    title: "Boost your productivity",
    description: "Drive your business forward with continuously improving AI solutions that scale with your goals.",
    imageUrl: bar_up, // Replace with actual image paths
  },
  {
    title: "Seamless Synergy",
    description: "Achieve flawless integration across processes with interconnected AI agents working in perfect harmony.",
    imageUrl: lightning_bolt,
  },
  {
    title: "Intelligence That Grows With You",
    description: "Our AI evolves and adapts over time to meet your dynamic business needs.",
    imageUrl: brain,
  },
  {
    title: "Analytics That Drive Impact",
    description: "Unlock the story behind your data with advanced analytics and tailored insights.",
    imageUrl: BentoAnimation,
  },
  {
    title: "Effortless Integration, Total Security",
    description: "Seamlessly integrate AI into your existing systems without compromising on safety.",
    imageUrl: pair_up,
  },
  {
    title: "Enhanced Efficiency and Focus",
    description: "Automating tasks allows teams to concentrate on strategic initiatives, improving overall productivity.",
    imageUrl: collabWork,
  },
  {
    title: "Cost and Resource Optimization",
    description: "Reduces manual intervention, minimizes errors, and optimizes resource utilization for significant cost savings.",
    imageUrl: BentoAnimation2,
  },
];
