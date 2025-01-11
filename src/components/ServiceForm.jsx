import { useNavigate } from "react-router-dom";
import ButtonGradient from "../assets/svg/ButtonGradient.jsx";
import { Label } from "./ui/label.jsx";
import { Input } from "./ui/input.jsx";
import { cn } from "../utils/cn.js";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import darkGradient from "../assets/dark-gradient.png";
const ServiceForm = () => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [frequency, setFrequency] = useState("");

  const handleFrequencyChange = (e) => {
    setFrequency(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const pdfUpload = document.getElementById("pdf-upload").files[0];
    const excelUpload = document.getElementById("excel-upload").files[0];

    if (!pdfUpload || !excelUpload || !frequency) {
      setMessage("All fields are required");
      setLoading(false);
      return;
    }
    const user_id = auth.user["_id"];
    const company_name = e.target["company-name"].value.trim();
    const agent_name = e.target["agent-name"].value.trim();
    const formData = new FormData();
    formData.append(pdfUpload.name, pdfUpload);
    formData.append(excelUpload.name, excelUpload);
    formData.append("frequency", frequency);
    formData.append("user_id", user_id);
    formData.append("company_name", company_name);
    formData.append("agent_name", agent_name);

    console.log("Form submitted");
    console.log("PDF File: ", pdfUpload);
    console.log("Excel File: ", excelUpload);
    console.log("Frequency: ", frequency);
    console.log("id: ", user_id);
    console.log("company_name: ", company_name);
    console.log("agent_name: ", agent_name);

    try {
      const response = await fetch(
        import.meta.env.VITE_QSTATE_DOMAIN + "/upload_files",
        {
          method: "POST",
          headers: {
            authorization: auth.token,
          },
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Files uploaded", data);
        setMessage("Form submitted successfully!");
      } else {
        console.log(response);
        if (response.msg == "Token Expired") {
          navigate("/sign_in");
        }
        console.log("Form submit failed");
        setMessage("Submission failed. Please check your files.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setMessage("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative max-w-2xl w-full mx-auto rounded-none md:rounded-2xl p-8 md:py-10 md:mb-36 md:px-12 shadow-input bg-cover bg-center  shadow-slate-500  "
      style={{ backgroundImage: `url(${darkGradient})` }}
    >
      <button
        className="absolute top-4 right-8 text-lg font-bold hover:text-gray-800 dark:text-neutral-300 dark:hover:text-neutral-500 focus:outline-none z-10"
        onClick={() => navigate("/home")} // Adjust the navigation as needed
        aria-label="Close"
      >
        X
      </button>
      <div className="absolute  inset-0 bg-black bg-opacity-40  "></div>
      <div className="relative z-10">
        <h2 className="font-extrabold text-3xl  text-center text-neutral-800  bg-gradient-to-b from-neutral-100 via-neutral-100 to-neutral-500  text-transparent bg-clip-text">
          Email Automation Agent
        </h2>
        <p className="text-neutral-600  text-sm text-center mt-2 dark:text-neutral-300">
          Upload the relevant documents
        </p>

        <form className="my-8 space-y-6 " onSubmit={handleSubmit}>
          <div className="grid grid-cols-2  gap-y-3 items-center">
            <Label htmlFor="company-name" className="text-left text-base">
              Company Name
            </Label>
            <Input
              id="company-name"
              placeholder="Company Name"
              type="text"
              required
            />

            <Label htmlFor="agent-name" className="text-left text-base">
              Agent Name
            </Label>
            <Input
              id="agent-name"
              placeholder="Agent Name"
              type="text"
              required
            />

            <Label htmlFor="pdf-upload" className="text-left text-base ">
              Upload Company Details (PDF)
            </Label>
            <Input type="file" id="pdf-upload" accept=".pdf" />

            <Label htmlFor="excel-upload" className="text-left text-base">
              Upload Lead Data (Excel)
            </Label>
            <Input type="file" id="excel-upload" accept=".xlsx,.xls,.csv" />

            <Label htmlFor="options" className="text-left text-base">
              Frequency
            </Label>
            <select
              id="options"
              value={frequency}
              onChange={handleFrequencyChange}
              className="flex h-10 w-full border-none  dark:border-zinc-500 bg-gray-400 dark:bg-zinc-500 text-black dark:text-neutral-300 shadow-input rounded-md px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
            >
              <option value="" disabled>
                Choose an option...
              </option>
              <option value="4">4 runs</option>
              <option value="3">3 runs</option>
              <option value="2">2 runs</option>
              <option value="1">1 run</option>
            </select>
          </div>

          <button
            className="bg-gradient-to-r relative group/btn from-black dark:from-zinc-700 dark:via-zinc-800 dark:to-zinc-700 block dark:bg-zinc-800 rounded-full justify-self-center w-full max-w-80  text-white hover:border-2 hover:border-neutral-300 h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

          {message && (
            <p className="text-red-500 mt-2 justify-center flex">{message}</p>
          )}

          {/* <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" /> */}

          <button
            className="bg-gradient-to-r relative group/btn from-black dark:from-zinc-700 dark:via-zinc-800 dark:to-zinc-700 block dark:bg-zinc-800 rounded-full justify-self-center w-full max-w-80 text-md  text-white hover:border-2 hover:border-neutral-300 h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="button"
            onClick={() => navigate("/execute")}
          >
            <span className="text-neutral-700 dark:text-white  justify-center">
              Go to Agent Initiation
            </span>
          </button>
        </form>
      </div>
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

const Service = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <br></br>
        <ServiceForm />
      </div>
      <ButtonGradient />
    </>
  );
};

export default Service;
