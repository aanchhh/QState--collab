import React from "react";
import cardBackground from "../assets/cardBackground.jpg";
// import cardBackground from "../assets/dark-gradient.png";

const Card = ({ image, headline, description, onReadMore }) => {
  return (
    <div
      className=" text-white rounded-2xl p-6 max-w-sm mx-auto  transform transition-all hover:scale-105 shadow-[0_1px_6px_0_rgba(255,255,255,0.6)] "
      style={{ backgroundImage: `url(${cardBackground})` }}
    >
      {/* Image Section */}
      <img
        src={image}
        alt="Blog Post"
        className="w-full h-48 object-cover rounded-lg mb-4"
      />

      {/* Headline */}
      <h2 className="mb-4 font-bold text-3xl text-pretty text-neutral-800 bg-gradient-to-b from-neutral-100 via-neutral-100 to-neutral-100 text-transparent bg-clip-text">
        {headline}
      </h2>
      {/* paragraph */}
      <p className="text-neutral-200 text-sm mb-5 mx-2 text-pretty">
        {description}
      </p>
      {/* Read More Button */}
      <button
        onClick={onReadMore}
        className="bg-gradient-to-r relative group/btn from-black dark:from-indigo-950 dark:via-indigo-800 dark:to-indigo-950 block dark:bg-zinc-800 rounded-full justify-self-center w-full max-w-80 mb-4 text-white hover:border-2 hover:border-neutral-300 h-10 font-medium shadow-[0_1px_6px_0_rgba(255,255,255,0.6)] hover:shadow-[0_2px_6px_0_rgba(255,255,255,0.8)]"
      >
        Read &rarr;
      </button>
    </div>
  );
};

export default Card;
