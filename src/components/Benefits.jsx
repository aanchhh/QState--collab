//section after landing page
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import BentoGridDemo from "./BentoDemo";

const Benefits = () => {
  return (
    // <Section id="features">
    //   <div className="container relative mt-4 z-2">
    //     <Heading
    //       className="md:max-w-md lg:max-w-2xl"
    //       title="Work Smarter, Not Harder with QState"
    //     />

    //     <div className="flex flex-wrap gap-10 mb-10">
    //       {benefits.map((item) => (
    //         <div
    //           className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
    //           style={{
    //             backgroundImage: `url(${item.backgroundUrl})`,
    //           }}
    //           key={item.id}
    //         >
    //           <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
    //             <h5 className="h5 mb-5">{item.title}</h5>
    //             <p className="body-2 mb-6 text-n-3">{item.text}</p>
    //             <div className="flex items-center mt-auto">
    //               <img
    //                 src={item.iconUrl}
    //                 width={48}
    //                 height={48}
    //                 alt={item.title}
    //               />
    //               <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
    //                 Explore more
    //               </p>
    //               <Arrow />
    //             </div>
    //           </div>

    //           {item.light && <GradientLight />}

    //           <div
    //             className="absolute inset-0.5 bg-n-8"
    //             style={{ clipPath: "url(#benefits)" }}
    //           >
    //             <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
    //               {item.imageUrl && (
    //                 <img
    //                   src={item.imageUrl}
    //                   width={380}
    //                   height={362}
    //                   alt={item.title}
    //                   className="w-full h-full object-cover"
    //                 />
    //               )}
    //             </div>
    //           </div>

    //           <ClipPath />
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </Section>
    <Section id="features">
      <ClipPath />
      <h1 className="font-extrabold text-[48px] -translate-y-24 translate-x-15 bg-gradient-to-r from-n-2 to-n-5 bg-clip-text text-transparent leading-normal">
        Features & Benefits
      </h1>
      <GradientLight />
      <div className="animate-fade-in -translate-y-15">
        <BentoGridDemo />
      </div>
      <ClipPath />
    </Section>
  );
};

export default Benefits;
