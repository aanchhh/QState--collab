import { cn } from "../utils/cn";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({ className, title, description, imageUrl }) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group relative overflow-hidden hover:shadow-xl transition duration-300 shadow-input dark:shadow shadow-n-3 bg-gradient-to-b from-neutral-700/30 to-neutral-900/30 dark:border-n-2 border border-transparent",
        className
      )}
    >
      {/* Image/Header Section */}
      <div
        className="relative h-full w-auto bg-cover bg-center transition-all duration-300 group-hover:h-2/3"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        {/* Optional Image Overlay */}
        {/* <div className="absolute inset-0 group-hover:bg-opacity-50 transition duration-300"></div> */}
      </div>

      {/* Text Content */}
      <div
        className="absolute bottom-0 left-0 w-full h-auto bg-white dark:bg-n-6/40 px-4 py-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
      >
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 text-lg">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-sm dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
