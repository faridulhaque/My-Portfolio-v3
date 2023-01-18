import React from "react";
import ContactForm from "../contacts/ContactForm";
import ContactInfo from "../contacts/ContactInfo";

const Contact = () => {
  return (
    <div id="contact" className="w-10/12 h-[500px] m-auto">
      <h1 className="text-basic text-4xl text-center my-10">Contact info</h1>
      <div className="w-3/4 h-full bg-white shadow-md m-auto flex items-center justify-evenly">
        <ContactInfo></ContactInfo>
        <div className="h-full w-[3px] bg-primary"></div>
        <ContactForm></ContactForm>
      </div>
    </div>
  );
};

export default Contact;
