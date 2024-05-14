"use client";
import React, {useState } from "react";
import RootLayout from "../layout";
import "../../../styles/contact.css";
import Blog from "../../components/ui/blog"

const blog = () => {
  // const [formValues, setFormValues] = useState({
  //   studentName: "",
  //   studentEmail: "",
  //   studentPhone: "",
  // });
  return (
    <RootLayout>
      <Blog/>
    </RootLayout>
  );
};

export default blog;
