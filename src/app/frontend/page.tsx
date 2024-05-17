"use client";
import React, {useState } from "react";
import RootLayout from "../layout";
import "../../../styles/ourCourses.css";
import FrontEnd from "../../components/ui/courses/FrontEnd";

const frontend = () => {
  // const [formValues, setFormValues] = useState({
  //   studentName: "",
  //   studentEmail: "",
  //   studentPhone: "",
  // });
  return (
    <RootLayout>
    <div className="fixedWidth">
        <div className="">
        <div>
         <FrontEnd/>
        </div>
      </div>
    </div>
    </RootLayout>
  );
};

export default frontend;
