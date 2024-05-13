"use client";
import React, {useState } from "react";
import RootLayout from "../layout";
import "../../../styles/contact.css";
const contact = () => {
  const [formValues, setFormValues] = useState({
    studentName: "",
    studentEmail: "",
    studentPhone: "",
  });
  return (
    <RootLayout>
      <div className="mt-32">
        <div className="w-11/12 m-auto ps-16 pe-16 pt-5 flex">
          <div>
            <div className="contactUsHeading">
                <h1 className="">Why head into the battlefield unprepared?</h1>
                <p className="w-4/5 mt-2">We work with ideas that inspire, engage and excite. Ideas that challenge convention and shape the trends. Through our awe-inspiring personal touch, we aim to make users fall in love with your brand.</p>
            </div>
            <div className="mt-14 flex">
              <div className="contactUs p-4">
                <div>
                    <input type="text" placeholder="Name" value={formValues?.studentName} className="contactInput" name="studentName"></input>
                </div>
                <div>
                    <input type="text" placeholder="Email" value={formValues?.studentEmail} className="contactInput" name="studentEmail"></input>
                </div>
                <div>
                <input type="number" placeholder="Phone" value={formValues?.studentPhone} className="contactInput" name="studentPhone"></input>
                </div>
              </div>
              <div className="yourQuery p-4">
                  <textarea className="contactTextBox"></textarea>
              </div>
            </div>
            <div className="flex justify-end pe-2">
              <button type="button" className="btmSubmit"> SUBMIT APPLICATION</button>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default contact;
