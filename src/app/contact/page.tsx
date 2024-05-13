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
      <Contact/>
    </RootLayout>
  );
};

export default contact;
