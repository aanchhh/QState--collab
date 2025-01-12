import Section from "./Section";
import VerticalTimeline from "./VerticalTimeline";
import ClipPath from "../assets/svg/ClipPath";

const Collaboration = () => {
  return (
    <Section crosses>
      <h1 className="font-extrabold text-[48px] -translate-y-24 translate-x-15 bg-gradient-to-r from-n-2 to-n-5 bg-clip-text text-transparent leading-normal">
        How it works?
      </h1>
      <VerticalTimeline />
      <ClipPath />
    </Section>
  );
};
export default Collaboration;
