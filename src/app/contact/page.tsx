"use client";
import React, {useState } from "react";
import RootLayout from "../layout";
import "../../../styles/contact.css";
import Contact from "../../components/ui/contact";

const contact = () => {
  // const [formValues, setFormValues] = useState({
  //   studentName: "",
  //   studentEmail: "",
  //   studentPhone: "",
  // });
  return (
    <RootLayout>
    <div className="mt-32">
        <div className="w-11/12 m-auto ps-16 pe-16 pt-5 flex">
          <div>
            <div className="contactUsHeading">
                <h1 className="">Why head into the battlefield unprepared?</h1>
                <p className="w-4/5 mt-2">We work with ideas that inspire, engage and excite. Ideas that challenge convention and shape the trends. Through our awe-inspiring personal touch, we aim to make users fall in love with your brand.</p>
            </div>
      <Contact/>
      </div>
      </div>
    </div>
    </RootLayout>
  );
};

export default contact;
