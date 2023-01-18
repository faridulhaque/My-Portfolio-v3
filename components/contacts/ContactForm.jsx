import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xbjwbkbv");
  if (state.succeeded) {
    console.log(state);
  }
  return (
    <>
      {state.succeeded ? (
        <div className="h-full w-7/12 flex justify-center items-center">
          <p className="text-[#49AF41] text-4xl">Email Successfully Sent!</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="h-full w-7/12 flex flex-col items-center mt-10"
        >
          <div className="w-11/12 h-[80px] mt-5 grid grid-cols-2 gap-5">
            <div className="w-full flex flex-col items-start">
              <span className="mb-1 text-basic text-[16px]">Name</span>
              <input
                name="name"
                id="name"
                type="text"
                className="bg-[#ECECEC] h-[50px] w-full border-5 outline-primary"
              />
            </div>
            <div className="w-full flex flex-col items-start">
              <span className="mb-1 text-basic text-[16px]">Email</span>
              <input
                id="email"
                name="email"
                required
                type="email"
                className="bg-[#ECECEC] h-[50px] w-full border-5 outline-primary"
              />
            </div>
          </div>

          {/* for textarea */}
          <div className="w-11/12 h-[160px] mt-5 flex flex-col items-start">
            <span className="mb-1 text-basic text-[16px]">Message</span>
            <textarea
              id="message"
              className="w-full h-[120px] bg-[#ECECEC] resize-none border-5 outline-primary"
              name="message"
              required
              min="10"
              max="120"
            ></textarea>
          </div>
          <div className="w-11/12 mt-5 relative h-[60px]">
            <button
              className="bg-primary w-[100px] h-[40px] text-white rounded-sm shadow-md hover:shadow-xl hover:scale-105 absolute bottom-0 right-5 hover:transition-scale duration-700"
              type="submit"
              disabled={state?.submitting}
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default ContactForm;
