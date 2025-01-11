import ButtonGradient from "../assets/svg/ButtonGradient.jsx";
import Footer from "../components/Footer.jsx";
import OnlyLogo from "../components/OnlyLogo.jsx";
import { Label } from "../components/ui/label.jsx";
import { Input } from "../components/ui/input.jsx";
import { cn } from "../utils/cn.js";
import { useNavigate } from "react-router-dom";

import darkGradient from "../assets/dark-gradient.png";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  const navigate = useNavigate();

  return (
    <div
      className="relative max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-8 md:py-10 md:mb-36 md:px-12 shadow-input bg-cover bg-center  shadow-slate-500 "
      style={{ backgroundImage: `url(${darkGradient})` }}
    >
      <button
        className="absolute top-4 right-8 text-lg font-bold hover:text-gray-800 dark:text-neutral-300 dark:hover:text-neutral-500 focus:outline-none z-20"
        onClick={() => navigate("/home")} // Adjust the navigation as needed
        aria-label="Close"
      >
        X
      </button>
      <div className="absolute  inset-0 bg-black bg-opacity-30  "></div>
      <h2 className="relative z-10 font-extrabold text-3xl  text-center text-neutral-800  bg-gradient-to-b from-neutral-100 via-neutral-100 to-neutral-500  text-transparent bg-clip-text">
        Contact Us
      </h2>
      <p className=" relative z-10 text-neutral-600  text-sm text-center mt-2 dark:text-neutral-300">
        Feel free to enquire
      </p>

      <form className="my-8 relative z-10 " onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">Name</Label>
            <Input id="firstname" placeholder="Yuvraj" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="username">Subject</Label>
          <Input id="username" placeholder="Subject" type="text" />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="Gradientdescent@ml.com" type="email" />
        </LabelInputContainer>

        {/* Textarea for the Message */}
        <LabelInputContainer className="mb-12">
          <Label htmlFor="message">Message</Label>
          <textarea
            id="message"
            placeholder="Enter your message here..."
            className="w-full h-32 flex  border-none bg-gray-400 dark:bg-zinc-500 text-black dark:text-gray-100 shadow-input rounded-lg px-3 py-2 text-sm  file:border-0 file:bg-transparent
        file:text-sm file:font-medium file:text-neutral-300 placeholder:text-neutral-300 dark:placeholder-text-neutral-600 
        focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
         disabled:cursor-not-allowed disabled:opacity-50
         dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
         group-hover/input:shadow-none transition duration-400"
          />
        </LabelInputContainer>
        <div className=" justify-center align-middle ">
          <button
            className="bg-gradient-to-r relative group/btn from-black dark:from-zinc-700 dark:via-zinc-800 dark:to-zinc-700 block dark:bg-zinc-800 rounded-full justify-self-center w-full max-w-80 mb-4 text-white hover:border-2 hover:border-neutral-300 h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Submit &rarr;
            <BottomGradient />
          </button>

          <button
            className="bg-gradient-to-r relative group/btn from-black dark:from-zinc-700 dark:via-zinc-800 dark:to-zinc-700 block dark:bg-zinc-800 rounded-full justify-self-center w-full max-w-80  text-white hover:border-2 hover:border-neutral-300 h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Request a Demo
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

const Contact = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <OnlyLogo />
        <br></br>
        <ContactForm />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default Contact;
