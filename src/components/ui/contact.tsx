import Image from "next/image";
import "../../../styles/contact.css";
import React, { ChangeEvent, useState } from "react";
const Contact = () => {
    // Define a generic type for the event target
type TargetElement = HTMLInputElement | HTMLTextAreaElement;

// Define a generic type for the event
type ChangeEventType<T extends TargetElement> = ChangeEvent<T>;
  const [formData, setFormData] = useState({
    studentName: "",
    studentEmail: "",
    studentPhone: "",
    studentQuery: ""
  });
// useState with initial state
const [formErrors, setFormErrors] = useState({
    studentName: "",
    studentEmail: "",
    studentPhone: "",
    studentQuery: ""
});
  const handleChange = <T extends TargetElement>(e: ChangeEventType<T>) => {
    const target = e.target as HTMLInputElement;
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
    setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
};

const validateForm = () =>{
  const errors = {
    studentName: "",
    studentEmail: "",
    studentPhone: "",
    studentQuery: ""
  };
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
 
const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
  if(validateForm()){
  
}
};
return (
        <>
        <div className="">
        <div className="">
          <div>
            {/* <div className="contactUsHeading">
                <h1 className="">Why head into the battlefield unprepared?</h1>
                <p className="w-4/5 mt-2">We work with ideas that inspire, engage and excite. Ideas that challenge convention and shape the trends. Through our awe-inspiring personal touch, we aim to make users fall in love with your brand.</p>
            </div> */}
            <div className="mt-14 flex">
              <div className="relative">
                <Image src = "/images/ge.jpg" alt="call" width={800} height={800} className="callMaskImage"/>
                <div className="bg-white text-black rounded px-4 py-3 font-bold firstQues" >Which program is right for me ?</div>
                <div className="bg-white text-black rounded px-4 py-3 font-bold secondQues">What all career oppotunities will I get after enrolling in a program ?</div>
                <div className="bg-white text-black rounded px-4 py-3 font-bold thirdQues">Why Tech Academy vs others ?</div>
              </div>
              <div className="contactUs pt-6">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="contactInput"
                    name="studentName"
                    value={formData?.studentName}
                    onChange={handleChange} 
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
                    type="text"
                    placeholder="Phone"
                    className="contactInput"
                    name="studentPhone"
                    value={formData?.studentPhone}
                    onChange={(e) => handleChange(e)} 
                  ></input>
                  <span style={{ color: formErrors?.studentPhone ? 'red' : 'inherit' }}>{formErrors?.studentPhone}</span>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Enter your query"
                    className="contactInput"
                    name="studentName"
                    value={formData?.studentQuery}
                    onChange={handleChange} 
                  ></input>
                  <span style={{ color: formErrors?.studentQuery ? 'red' : 'inherit' }}>{formErrors?.studentQuery}</span>
                </div>
              <div className="flex pe-2 ms-2">
              <button type="button" className="btmSubmit" onClick={handleSubmit}>
                {" "}
                SUBMIT APPLICATION
              </button>
            </div>
              </div>
              {/* <div className="yourQuery">
                <textarea className="contactTextBox" placeholder="Enter your Query" name="studentQuery"  onChange={(e) => handleChange(e)} ></textarea>
              </div> */}
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
