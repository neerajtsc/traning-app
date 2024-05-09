"use client";
import React from "react";
import RootLayout from "../layout";
import "../../../styles/contact.css";
const contact = () => {
  return (
    <RootLayout>
      <div className="mt-32">
        <div className="w-11/12 m-auto ps-16 pe-16 pt-5">
          <div>
            <div className="contactUsHeading">
                <h1 className="">Why head into the battlefield unprepared?</h1>
                <p className="w-4/5 mt-2">We work with ideas that inspire, engage and excite. Ideas that challenge convention and shape the trends. Through our awe-inspiring personal touch, we aim to make users fall in love with your brand.</p>
            </div>
            <div className="mt-14 flex">
              <div className="contactUs p-4">
                <div>
                    <input type="text" placeholder="Name" className="contactInput"></input>
                </div>
                <div>
                    <input type="text" placeholder="Email" className="contactInput"></input>
                </div>
                <div>
                <input type="number" placeholder="Phone" className="contactInput"></input>
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
