//section after landing page
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import BentoGridDemo from "./BentoDemo";

const Benefits = () => {
  return (
    <Section id="features">
      <ClipPath />
      <h1 className=" px-20 pb-20 bg-gradient-to-r from-n-2 to-n-5 bg-clip-text text-transparent leading-normal text-4xl text-left sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
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
