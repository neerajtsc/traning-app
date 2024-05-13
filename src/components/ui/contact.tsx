import "../../../styles/contact.css";
import React, { useState } from "react";
const contact = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    studentEmail: "",
    studentPhone: "",
    studentQuery: ""
  });
  const [formErrors, setFormErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
};

const validateForm = () =>{
  const errors = {};
  if (!formData?.studentName) {
      errors.studentName = "Student name is required";
  }if (!formData?.studentEmail) {
      errors.studentEmail= " Student email is required";
  }if (!formData?.studentPhone) {
      errors.studentPhone = " Subject phone number  is required";
    }

  setFormErrors(errors);
  return Object.keys(errors).length === 0;
  } 
 
const handleSubmit = async (e) => {
  if(validateForm()){
  
}
};
  return (
    <>
      <div className="mt-32">
        <div className="w-11/12 m-auto ps-16 pe-16 pt-5 flex">
          <div>
            <div className="contactUsHeading">
              <h1 className="">Why head into the battlefield unprepared?</h1>
              <p className="w-4/5 mt-2">
                We work with ideas that inspire, engage and excite. Ideas that
                challenge convention and shape the trends. Through our
                awe-inspiring personal touch, we aim to make users fall in love
                with your brand.
              </p>
            </div>
            <div className="mt-14 flex">
              <div className="contactUs p-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="contactInput"
                    name="studentName"
                    value={formData?.studentName}
                    onChange={(e) => handleChange(e)} 
                  ></input>
                  <span style={{ color: formErrors?.studentName ? 'red' : 'inherit' }}>{formErrors?.studentName}</span>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Email"
                    className="contactInput"
                    name="studentEmail"
                    value={formData?.studentEmail}
                    onChange={(e) => handleChange(e)} 
                  ></input>
                  <span style={{ color: formErrors?.studentEmail ? 'red' : 'inherit' }}>{formErrors?.studentEmail}</span>
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="Phone"
                    className="contactInput"
                    name="studentPhone"
                    value={formData?.studentPhone}
                    onChange={(e) => handleChange(e)} 
                  ></input>
                  <span style={{ color: formErrors?.studentPhone ? 'red' : 'inherit' }}>{formErrors?.studentPhone}</span>
                </div>
              </div>
              <div className="yourQuery p-4">
                <textarea className="contactTextBox" placeholder="Enter your Query" name="studentQuery"  onChange={(e) => handleChange(e)} ></textarea>
              </div>
            </div>
            <div className="flex justify-end pe-2">
              <button type="button" className="btmSubmit" onClick={handleSubmit}>
                {" "}
                SUBMIT APPLICATION
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
