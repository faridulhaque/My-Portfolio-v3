import React from "react";
import ContactForm from "../contacts/ContactForm";
import ContactInfo from "../contacts/ContactInfo";

const Contact = () => {
  return (
    <div
      id="contact"
      className="desktop:w-10/12 laptop:w-10/12 mobile:w-11/12 tablet:w-11/12 desktop:h-[500px] laptop:h-auto tablet:h-auto mobile:auto m-auto"
    >
      <h1 className="text-basic text-4xl text-center desktop:my-10 laptop:my-10 mobile:my-5 xs:my-5 tablet:my-5">
        Contact info
      </h1>
      <div className="desktop:w-3/4 laptop:w-full mobile:w-11/12 xs:w-11/12 tablet:w-full h-full bg-white shadow-md m-auto desktop:flex laptop:grid mobile:grid mobile:grid-cols-1 tablet:grid-cols-1 items-center justify-evenly mobile:px-5 mobile:py-3 xs:px-5 xs:py-3">
        <ContactInfo></ContactInfo>
        <div className="h-full w-[3px] bg-primary desktop:block laptop:block mobile:hidden tablet:hidden"></div>
        <ContactForm></ContactForm>
      </div>
    </div>
  );
};

export default Contact;
