//section after landing page
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import BentoGridDemo from "./BentoDemo";

const Benefits = () => {
  return (
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
